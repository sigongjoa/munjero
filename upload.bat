
@echo off

echo Running the quiz upload script inside WSL...

REM Run the node script inside WSL
wsl node scripts/add-new-quizzes.cjs

REM Check if the commit message file was created.
REM This check runs on Windows, but accesses the same file system.
if not exist commit_message.txt (
    echo No new quizzes were found to commit.
    pause
    goto :eof
)

echo Staging, committing, and pushing changes inside WSL...
wsl git add .
wsl git commit -F commit_message.txt
if %errorlevel% neq 0 (
    echo Git commit failed inside WSL.
    REM Clean up using WSL's rm command
    wsl rm commit_message.txt
    pause
    goto :eof
)

wsl git push
if %errorlevel% neq 0 (
    echo Git push failed inside WSL. Check your WSL SSH key settings.
    REM Clean up using WSL's rm command
    wsl rm commit_message.txt
    pause
    goto :eof
)

echo.
echo ===================================================================
echo Push successful. Monitoring GitHub Action status...
echo ===================================================================

wsl bash scripts/watch-latest-run.sh deploy.yml

if %errorlevel% neq 0 (
    echo.
    echo !!! GitHub Action failed or could not be monitored. !!!
    echo Check the Actions tab in your GitHub repository for details.
) else (
    echo.
    echo +++ GitHub Action completed successfully. +++
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
