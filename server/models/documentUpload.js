const prisma = require("../utils/prisma");

const DocumentUpload = {
  /**
   * Record that a user uploaded or scraped a document.
   * @param {number} userId
   * @param {string} docpath - e.g. "custom-documents/file-uuid.json"
   */
  create: async function (userId, docpath) {
    if (!userId || !docpath) return null;
    try {
      return await prisma.document_uploads.create({
        data: { userId: Number(userId), docpath },
      });
    } catch (e) {
      console.error("[DocumentUpload.create]", e.message);
      return null;
    }
  },

  /**
   * Get all docpaths uploaded by a user.
   * @param {number} userId
   * @returns {Promise<string[]>}
   */
  forUser: async function (userId) {
    if (!userId) return [];
    try {
      const rows = await prisma.document_uploads.findMany({
        where: { userId: Number(userId) },
        select: { docpath: true },
      });
      return rows.map((r) => r.docpath);
    } catch (e) {
      console.error("[DocumentUpload.forUser]", e.message);
      return [];
    }
  },

  /**
   * Remove upload record when a document is deleted from the system.
   * @param {string} docpath
   */
  deleteByDocpath: async function (docpath) {
    if (!docpath) return;
    try {
      await prisma.document_uploads.deleteMany({ where: { docpath } });
    } catch (e) {
      console.error("[DocumentUpload.deleteByDocpath]", e.message);
    }
  },
};

module.exports = { DocumentUpload };
