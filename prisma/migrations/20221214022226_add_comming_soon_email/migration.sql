/*
  Warnings:

  - You are about to drop the column `badges_id` on the `PersonBadge` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "PersonBadge" DROP CONSTRAINT "PersonBadge_badges_id_fkey";

-- AlterTable
ALTER TABLE "PersonBadge" DROP COLUMN "badges_id",
ADD COLUMN     "badge_id" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "person_id" SET DEFAULT 0;

-- CreateTable
CREATE TABLE "CommingSoonEmail" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CommingSoonEmail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CommingSoonEmail_email_key" ON "CommingSoonEmail"("email");

-- AddForeignKey
ALTER TABLE "PersonBadge" ADD CONSTRAINT "PersonBadge_badge_id_fkey" FOREIGN KEY ("badge_id") REFERENCES "Badge"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
