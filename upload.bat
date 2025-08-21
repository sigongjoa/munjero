
@echo off

echo Running the quiz upload script...
node scripts/add-new-quizzes.cjs

REM Check if the commit message file was created by the script
if not exist commit_message.txt (
    echo No new quizzes were found to commit.
    pause
    goto :eof
)

echo Staging, committing, and pushing changes...
git add .
git commit -F commit_message.txt
if %errorlevel% neq 0 (
    echo Git commit failed. Please check the output above.
    REM Clean up the temporary commit message file even if commit fails
    del commit_message.txt
    pause
    goto :eof
)

git push
if %errorlevel% neq 0 (
    echo Git push failed. Please check the output above.
    REM Clean up the temporary commit message file even if push fails
    del commit_message.txt
    pause
    goto :eof
)


REM Clean up the temporary commit message file
del commit_message.txt

echo.
echo ===================================================================
echo Process complete!
echo You can find the links for the new quizzes in 'upload/new_quiz_links.txt'.
echo ===================================================================

pause
:eof
