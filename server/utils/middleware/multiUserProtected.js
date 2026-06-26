const { SystemSettings } = require("../../models/systemSettings");
const { userFromSession } = require("../http");
const ROLES = {
  all: "<all>",
  admin: "admin",
  manager: "manager",
  default: "default",
};
const DEFAULT_ROLES = [ROLES.admin, ROLES.manager];

async function isSingleUserMode(_request, response, next) {
  const multiUserMode = await SystemSettings.isMultiUserMode();
  if (multiUserMode) return response.sendStatus(401).end();
  next();
  return;
}

function strictMultiUserRoleValid(allowedRoles = DEFAULT_ROLES) {
  return async (request, response, next) => {
    if (allowedRoles.includes(ROLES.all)) {
      next();
      return;
    }

    const multiUserMode =
      response.locals?.multiUserMode ??
      (await SystemSettings.isMultiUserMode());
    if (!multiUserMode) return response.sendStatus(401).end();

    const user =
      response.locals?.user ?? (await userFromSession(request, response));
    if (allowedRoles.includes(user?.role)) {
      next();
      return;
    }
    return response.sendStatus(401).end();
  };
}

function flexUserRoleValid(allowedRoles = DEFAULT_ROLES) {
  return async (request, response, next) => {
    if (allowedRoles.includes(ROLES.all)) {
      next();
      return;
    }

    const multiUserMode =
      response.locals?.multiUserMode ??
      (await SystemSettings.isMultiUserMode());
    if (!multiUserMode) {
      next();
      return;
    }

    const user =
      response.locals?.user ?? (await userFromSession(request, response));
    if (allowedRoles.includes(user?.role)) {
      next();
      return;
    }
    return response.sendStatus(401).end();
  };
}

async function isMultiUserSetup(_request, response, next) {
  const multiUserMode = await SystemSettings.isMultiUserMode();
  if (!multiUserMode) {
    response.status(403).json({
      error: "Invalid request",
    });
    return;
  }

  next();
  return;
}

/**
 * Verifica que el usuario tiene permiso para subir documentos.
 * En modo single-user siempre se permite.
 * En modo multi-user solo si canUploadDocuments es true o es admin/manager.
 */
async function canUploadDocuments(request, response, next) {
  const multiUserMode =
    response.locals?.multiUserMode ??
    (await SystemSettings.isMultiUserMode());

  if (!multiUserMode) {
    next();
    return;
  }

  const user =
    response.locals?.user ?? (await userFromSession(request, response));

  if (!user) return response.sendStatus(401).end();

  // Admin y manager siempre pueden subir
  if (user.role === ROLES.admin || user.role === ROLES.manager) {
    next();
    return;
  }

  // Usuarios default solo si tienen el permiso activado
  if (user.canUploadDocuments === true) {
    next();
    return;
  }

  return response.status(403).json({
    error: "No tienes permiso para subir documentos.",
  });
}

module.exports = {
  ROLES,
  isSingleUserMode,
  strictMultiUserRoleValid,
  flexUserRoleValid,
  isMultiUserSetup,
  canUploadDocuments,
};