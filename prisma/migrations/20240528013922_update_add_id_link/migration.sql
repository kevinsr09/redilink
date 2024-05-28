/*
  Warnings:

  - Added the required column `id` to the `Link` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Link" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "original" TEXT NOT NULL,
    "short" TEXT NOT NULL,
    "userEmail" TEXT,
    CONSTRAINT "Link_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User" ("email") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Link" ("original", "short", "userEmail") SELECT "original", "short", "userEmail" FROM "Link";
DROP TABLE "Link";
ALTER TABLE "new_Link" RENAME TO "Link";
CREATE UNIQUE INDEX "Link_short_key" ON "Link"("short");
PRAGMA foreign_key_check("Link");
PRAGMA foreign_keys=ON;
