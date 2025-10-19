-- AddForeignKey
ALTER TABLE "UserAnswers" ADD CONSTRAINT "UserAnswers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAnswers" ADD CONSTRAINT "UserAnswers_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
