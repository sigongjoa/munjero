

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const UPLOADS_DIR = path.join(ROOT_DIR, 'upload');
const PUBLIC_FILES_DIR = path.join(ROOT_DIR, 'public', 'files');
const QUIZ_ORDER_PATH = path.join(PUBLIC_FILES_DIR, 'quiz-order.json');
const COMMIT_MESSAGE_PATH = path.join(ROOT_DIR, 'commit_message.txt');
const LINKS_OUTPUT_PATH = path.join(UPLOADS_DIR, 'new_quiz_links.txt');

function parseFilename(filename) {
    // Handles cases like "도황.json" which might not have subject/difficulty
    const basename = path.basename(filename, path.extname(filename));
    const parts = basename.split('_');
    if (parts.length >= 3) {
        const subject = parts[0];
        const difficulty = parts[parts.length - 1];
        const title = parts.slice(1, -1).join('_');
        return { subject, title, difficulty };
    } else {
        // Fallback for simple names
        return { subject: '기타', title: basename, difficulty: '보통' };
    }
}

function main() {
    if (!fs.existsSync(UPLOADS_DIR)) {
        console.log("'upload' directory not found. Nothing to do.");
        return;
    }

    const files = fs.readdirSync(UPLOADS_DIR);
    const jsonFiles = files.filter(file => file.endsWith('.json'));

    if (jsonFiles.length === 0) {
        console.log("No new quizzes to add.");
        return;
    }

    let quizOrderData;
    try {
        quizOrderData = JSON.parse(fs.readFileSync(QUIZ_ORDER_PATH, 'utf-8'));
    } catch (error) {
        console.error("Error reading or parsing quiz-order.json:", error);
        return;
    }

    let commitMessageBody = '';
    let linksOutput = '';
    let filesProcessed = 0;
    let currentId = quizOrderData.length; // Corrected: Get length of the array itself

    for (const jsonFile of jsonFiles) {
        const pdfFile = jsonFile.replace('.json', '.pdf');
        if (!files.includes(pdfFile)) {
            console.warn(`[Warning] Missing corresponding PDF for ${jsonFile}. Skipping.`);
            continue;
        }

        const fileInfo = parseFilename(jsonFile);
        if (!fileInfo) continue;

        // Corrected: Push the filename string, not an object
        quizOrderData.push(jsonFile);

        const solveUrl = `https://munjero.xyz/#/solve/${currentId}`;
        const quizUrl = `https://munjero.xyz/#/quiz/${currentId}`;

        commitMessageBody += `- [${fileInfo.subject}] ${fileInfo.title} (${fileInfo.difficulty})\n`;
        linksOutput += `[${fileInfo.subject}] ${fileInfo.title} (${fileInfo.difficulty})\n`;
        linksOutput += `문제 풀어보기: ${solveUrl}\n`;
        linksOutput += `문제 다운로드: ${quizUrl}\n\n`;

        fs.renameSync(path.join(UPLOADS_DIR, jsonFile), path.join(PUBLIC_FILES_DIR, jsonFile));
        fs.renameSync(path.join(UPLOADS_DIR, pdfFile), path.join(PUBLIC_FILES_DIR, pdfFile));
        
        console.log(`Processed and moved: ${jsonFile} and ${pdfFile}`);
        filesProcessed++;
        currentId++;
    }

    if (filesProcessed > 0) {
        fs.writeFileSync(QUIZ_ORDER_PATH, JSON.stringify(quizOrderData, null, 2), 'utf-8');
        console.log("Successfully updated quiz-order.json.");

        const fullCommitMessage = `feat: Add new quizzes\n\n${commitMessageBody}`;
        fs.writeFileSync(COMMIT_MESSAGE_PATH, fullCommitMessage, 'utf-8');
        console.log(`Successfully created commit message file at ${COMMIT_MESSAGE_PATH}.`);

        fs.writeFileSync(LINKS_OUTPUT_PATH, linksOutput, 'utf-8');
        console.log(`Successfully created links file at ${LINKS_OUTPUT_PATH}.`);
    } else {
        console.log("No valid quiz pairs were processed.");
    }
}

main();
