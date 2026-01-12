-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "client" TEXT;

-- AlterTable
ALTER TABLE "TimesheetEntry" ADD COLUMN     "activity" TEXT,
ADD COLUMN     "location" TEXT;
