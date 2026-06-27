-- CreateTable
CREATE TABLE "document_uploads" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "docpath" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "document_uploads_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "document_uploads_userId_idx" ON "document_uploads"("userId");

-- CreateIndex
CREATE INDEX "document_uploads_docpath_idx" ON "document_uploads"("docpath");
