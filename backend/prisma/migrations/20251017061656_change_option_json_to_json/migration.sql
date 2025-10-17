/*
  Warnings:

  - Made the column `options` on table `Questions` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Questions" ALTER COLUMN "options" SET NOT NULL;
