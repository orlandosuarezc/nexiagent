const { EmbedChats } = require("../models/embedChats");
const { EmbedConfig } = require("../models/embedConfig");
const { EventLogs } = require("../models/eventLogs");
const { reqBody, userFromSession } = require("../utils/http");
const { WorkspaceUser } = require("../models/workspaceUsers");
const { validEmbedConfigId } = require("../utils/middleware/embedMiddleware");
const {
  flexUserRoleValid,
  ROLES,
} = require("../utils/middleware/multiUserProtected");
const { validatedRequest } = require("../utils/middleware/validatedRequest");
const {
  chatHistoryViewable,
} = require("../utils/middleware/chatHistoryViewable");

function embedManagementEndpoints(app) {
  if (!app) return;

  app.get(
    "/embeds",
    [validatedRequest, flexUserRoleValid([ROLES.admin])],
    async (_, response) => {
      try {
        const embeds = await EmbedConfig.whereWithWorkspace({}, null, {
          createdAt: "desc",
        });
        response.status(200).json({ embeds });
      } catch (e) {
        console.error(e);
        response.sendStatus(500).end();
      }
    }
  );

  app.post(
    "/embeds/new",
    [validatedRequest, flexUserRoleValid([ROLES.admin])],
    async (request, response) => {
      try {
        const user = await userFromSession(request, response);
        const data = reqBody(request);
        const { embed, message: error } = await EmbedConfig.new(data, user?.id);
        await EventLogs.logEvent(
          "embed_created",
          { embedId: embed.id },
          user?.id
        );
        response.status(200).json({ embed, error });
      } catch (e) {
        console.error(e);
        response.sendStatus(500).end();
      }
    }
  );

  app.post(
    "/embed/update/:embedId",
    [validatedRequest, flexUserRoleValid([ROLES.admin]), validEmbedConfigId],
    async (request, response) => {
      try {
        const user = await userFromSession(request, response);
        const { embedId } = request.params;
        const updates = reqBody(request);
        const { success, error } = await EmbedConfig.update(embedId, updates);
        await EventLogs.logEvent("embed_updated", { embedId }, user?.id);
        response.status(200).json({ success, error });
      } catch (e) {
        console.error(e);
        response.sendStatus(500).end();
      }
    }
  );

  app.delete(
    "/embed/:embedId",
    [validatedRequest, flexUserRoleValid([ROLES.admin]), validEmbedConfigId],
    async (request, response) => {
      try {
        const { embedId } = request.params;
        await EmbedConfig.delete({ id: Number(embedId) });
        await EventLogs.logEvent(
          "embed_deleted",
          { embedId },
          response?.locals?.user?.id
        );
        response.status(200).json({ success: true, error: null });
      } catch (e) {
        console.error(e);
        response.sendStatus(500).end();
      }
    }
  );

  app.post(
    "/embed/chats",
    [chatHistoryViewable, validatedRequest, flexUserRoleValid([ROLES.all])],
    async (request, response) => {
      try {
        const { offset = 0, limit = 20 } = reqBody(request);
        const sessionUser = await userFromSession(request, response);
        const isDefaultUser = sessionUser?.role === ROLES.default;

        let clause = {};
        if (isDefaultUser) {
          const wsRows = await WorkspaceUser.where({ user_id: sessionUser.id });
          const workspaceIds = wsRows.map((r) => r.workspace_id);
          clause = { embed_config: { workspace_id: { in: workspaceIds } } };
        }

        const embedChats = await EmbedChats.whereWithEmbedAndWorkspace(
          clause,
          limit,
          { id: "desc" },
          offset * limit
        );
        const totalChats = await EmbedChats.count(clause);
        const hasPages = totalChats > (offset + 1) * limit;
        response.status(200).json({ chats: embedChats, hasPages, totalChats });
      } catch (e) {
        console.error(e);
        response.sendStatus(500).end();
      }
    }
  );

  app.delete(
    "/embed/chats/:chatId",
    [validatedRequest, flexUserRoleValid([ROLES.all])],
    async (request, response) => {
      try {
        const { chatId } = request.params;
        const sessionUser = await userFromSession(request, response);
        const isDefaultUser = sessionUser?.role === ROLES.default;

        if (isDefaultUser) {
          const chat = await EmbedChats.get({ id: Number(chatId) });
          if (!chat)
            return response
              .status(404)
              .json({ success: false, error: "Chat not found." });
          const embedConfig = await EmbedConfig.get({ id: chat.embed_id });
          if (!embedConfig)
            return response
              .status(404)
              .json({ success: false, error: "Embed config not found." });
          const membership = await WorkspaceUser.get({
            user_id: sessionUser.id,
            workspace_id: embedConfig.workspace_id,
          });
          if (!membership)
            return response
              .status(403)
              .json({ success: false, error: "Not permitted." });
        }

        await EmbedChats.delete({ id: Number(chatId) });
        response.status(200).json({ success: true, error: null });
      } catch (e) {
        console.error(e);
        response.sendStatus(500).end();
      }
    }
  );
}

module.exports = { embedManagementEndpoints };
