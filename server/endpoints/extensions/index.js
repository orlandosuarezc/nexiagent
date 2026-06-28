const { Telemetry } = require("../../models/telemetry");
const { CollectorApi } = require("../../utils/collectorApi");
const {
  flexUserRoleValid,
  ROLES,
  canUploadDocuments,
} = require("../../utils/middleware/multiUserProtected");
const { validatedRequest } = require("../../utils/middleware/validatedRequest");
const {
  isSupportedRepoProvider,
} = require("../../utils/middleware/isSupportedRepoProviders");
const { DocumentUpload } = require("../../models/documentUpload");

function extensionEndpoints(app) {
  if (!app) return;

  app.post(
    "/ext/:repo_platform/branches",
    [
      validatedRequest,
      flexUserRoleValid([ROLES.admin, ROLES.manager]),
      isSupportedRepoProvider,
    ],
    async (request, response) => {
      try {
        const { repo_platform } = request.params;
        const responseFromProcessor =
          await new CollectorApi().forwardExtensionRequest({
            endpoint: `/ext/${repo_platform}-repo/branches`,
            method: "POST",
            body: request.body,
          });
        response.status(200).json(responseFromProcessor);
      } catch (e) {
        console.error(e);
        response.sendStatus(500).end();
      }
    }
  );

  app.post(
    "/ext/:repo_platform/repo",
    [
      validatedRequest,
      flexUserRoleValid([ROLES.admin, ROLES.manager]),
      isSupportedRepoProvider,
    ],
    async (request, response) => {
      try {
        const { repo_platform } = request.params;
        const responseFromProcessor =
          await new CollectorApi().forwardExtensionRequest({
            endpoint: `/ext/${repo_platform}-repo`,
            method: "POST",
            body: request.body,
          });
        await Telemetry.sendTelemetry("extension_invoked", {
          type: `${repo_platform}_repo`,
        });
        response.status(200).json(responseFromProcessor);
      } catch (e) {
        console.error(e);
        response.sendStatus(500).end();
      }
    }
  );

  app.post(
    "/ext/youtube/transcript",
    [validatedRequest, flexUserRoleValid([ROLES.admin, ROLES.manager])],
    async (request, response) => {
      try {
        const responseFromProcessor =
          await new CollectorApi().forwardExtensionRequest({
            endpoint: "/ext/youtube-transcript",
            method: "POST",
            body: request.body,
          });
        await Telemetry.sendTelemetry("extension_invoked", {
          type: "youtube_transcript",
        });
        response.status(200).json(responseFromProcessor);
      } catch (e) {
        console.error(e);
        response.sendStatus(500).end();
      }
    }
  );

  app.post(
    "/ext/confluence",
    [validatedRequest, flexUserRoleValid([ROLES.admin, ROLES.manager])],
    async (request, response) => {
      try {
        const responseFromProcessor =
          await new CollectorApi().forwardExtensionRequest({
            endpoint: "/ext/confluence",
            method: "POST",
            body: request.body,
          });
        await Telemetry.sendTelemetry("extension_invoked", {
          type: "confluence",
        });
        response.status(200).json(responseFromProcessor);
      } catch (e) {
        console.error(e);
        response.sendStatus(500).end();
      }
    }
  );
  app.post(
    "/ext/website-depth",
    [validatedRequest, canUploadDocuments],
    async (request, response) => {
      try {
        const responseFromProcessor =
          await new CollectorApi().forwardExtensionRequest({
            endpoint: "/ext/website-depth",
            method: "POST",
            body: request.body,
          });
        await Telemetry.sendTelemetry("extension_invoked", {
          type: "website_depth",
        });
        // Track document ownership for default-role users.
        // website-depth collector returns { success, data: [...] } where each
        // item has a .location field (docpath).
        const userId = response.locals?.user?.id;
        const scrapedDocs = responseFromProcessor?.data ?? responseFromProcessor?.documents ?? [];
        console.log(`[website-depth] userId=${userId} responseKeys=${Object.keys(responseFromProcessor ?? {}).join(",")} scrapedDocs.length=${scrapedDocs.length} locations=${JSON.stringify(scrapedDocs.map(d => d?.location))}`);
        if (userId && scrapedDocs.length > 0) {
          for (const doc of scrapedDocs) {
            if (doc?.location)
              await DocumentUpload.create(userId, doc.location);
          }
        }
        response.status(200).json(responseFromProcessor);
      } catch (e) {
        console.error(e);
        response.sendStatus(500).end();
      }
    }
  );
  app.post(
    "/ext/drupalwiki",
    [validatedRequest, flexUserRoleValid([ROLES.admin, ROLES.manager])],
    async (request, response) => {
      try {
        const responseFromProcessor =
          await new CollectorApi().forwardExtensionRequest({
            endpoint: "/ext/drupalwiki",
            method: "POST",
            body: request.body,
          });
        await Telemetry.sendTelemetry("extension_invoked", {
          type: "drupalwiki",
        });
        response.status(200).json(responseFromProcessor);
      } catch (e) {
        console.error(e);
        response.sendStatus(500).end();
      }
    }
  );

  app.post(
    "/ext/obsidian/vault",
    [validatedRequest, flexUserRoleValid([ROLES.admin, ROLES.manager])],
    async (request, response) => {
      try {
        const responseFromProcessor =
          await new CollectorApi().forwardExtensionRequest({
            endpoint: "/ext/obsidian/vault",
            method: "POST",
            body: request.body,
          });
        await Telemetry.sendTelemetry("extension_invoked", {
          type: "obsidian_vault",
        });
        response.status(200).json(responseFromProcessor);
      } catch (e) {
        console.error(e);
        response.sendStatus(500).end();
      }
    }
  );

  app.post(
    "/ext/paperless-ngx",
    [validatedRequest, flexUserRoleValid([ROLES.admin, ROLES.manager])],
    async (request, response) => {
      try {
        const responseFromProcessor =
          await new CollectorApi().forwardExtensionRequest({
            endpoint: "/ext/paperless-ngx",
            method: "POST",
            body: request.body,
          });
        await Telemetry.sendTelemetry("extension_invoked", {
          type: "paperless_ngx",
        });
        response.status(200).json(responseFromProcessor);
      } catch (e) {
        console.error(e);
        response.sendStatus(500).end();
      }
    }
  );
}

module.exports = { extensionEndpoints };
