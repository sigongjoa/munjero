import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filesDirectory = path.join(__dirname, '../public/files');
const dataFilePath = path.join(__dirname, '../data/quizzes.ts');

const getFileSize = (filePath) => {
  try {
    const stats = fs.statSync(filePath);
    const fileSizeInBytes = stats.size;
    if (fileSizeInBytes === 0) return '0 KB';
    const fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
    if (fileSizeInMegabytes < 0.1) {
        const fileSizeInKilobytes = fileSizeInBytes / 1024;
        return `${fileSizeInKilobytes.toFixed(1)} KB`;
    }
    return `${fileSizeInMegabytes.toFixed(1)} MB`;
  } catch (err) {
    console.error(`Error getting file size for ${filePath}:`, err);
    return 'N/A';
  }
};

// Ensure the target directory exists
if (!fs.existsSync(filesDirectory)) {
    console.log(`Directory not found: ${filesDirectory}. Creating it.`);
    fs.mkdirSync(filesDirectory, { recursive: true });
}

fs.readdir(filesDirectory, (err, files) => {
  if (err) {
    return console.error('Unable to scan directory: ' + err);
  }

  const orderFilePath = path.join(filesDirectory, 'quiz-order.json');
  let orderedFiles = [];
  try {
    orderedFiles = JSON.parse(fs.readFileSync(orderFilePath, 'utf8'));
  } catch (err) {
    console.error('Could not read or parse quiz-order.json:', err);
    // Fallback to reading all json files if order file is missing or invalid
    orderedFiles = files.filter(file => file.endsWith('.json')).map(file => path.basename(file, '.json'));
  }

  const quizzes = orderedFiles.map((orderedFile, index) => {
    const baseName = path.basename(orderedFile, path.extname(orderedFile));
    const jsonFile = `${baseName}.json`;
    const jsonFilePath = path.join(filesDirectory, jsonFile);

    try {
      const metadata = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));
      const dataFile = files.find(f => f.startsWith(baseName) && f !== jsonFile);

      if (dataFile) {
        const dataFilePathFull = path.join(filesDirectory, dataFile);
        const stats = fs.statSync(dataFilePathFull);

        return {
          id: index + 1,
          title: metadata.title || baseName,
          examType: metadata.examType || '기타',
          subject: metadata.subject || '기타',
          size: getFileSize(dataFilePathFull),
          date: new Date(stats.mtime).toISOString().split('T')[0],
          fileUrl: `/files/${encodeURIComponent(dataFile)}`,
          shortsLink: metadata.shortsLink || undefined,
          tags: metadata.tags || [],
          difficulty: metadata.difficulty || undefined // difficulty 속성 추가
        };
      } else {
        console.warn(`No corresponding data file found for ${jsonFile}`);
        return null;
      }
    } catch (parseError) {
      console.error(`Error processing file ${jsonFile}:`, parseError);
      return null;
    }
  }).filter(Boolean); // Filter out nulls from missing files

  const fileContent = `
export interface Quiz {
  id: number;
  title: string;
  examType: string;
  subject: string;
  size?: string;
  date: string;
  fileUrl?: string;
  shortsLink?: string;
  tags?: string[];
  difficulty?: string; // Quiz 인터페이스에 difficulty 속성 추가
}

export const quizzes: Quiz[] = ${JSON.stringify(quizzes, null, 2)};
`;

  fs.writeFileSync(dataFilePath, fileContent.trim());
  console.log('Successfully generated quizzes.ts from JSON metadata.');
});
