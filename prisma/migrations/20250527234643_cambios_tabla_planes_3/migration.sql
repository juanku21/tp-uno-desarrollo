-- AddForeignKey
ALTER TABLE "orientaciones" ADD CONSTRAINT "orientaciones_plan_fkey" FOREIGN KEY ("plan") REFERENCES "planes"("plan") ON DELETE RESTRICT ON UPDATE CASCADE;
