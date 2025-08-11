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

console.log('Starting generate-quizzes.js...');
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
    console.log(`Processing quiz: ${baseName}`);

    try {
      const metadata = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));
      const dataFile = files.find(f => f.startsWith(baseName) && f.endsWith('.pdf'));
      const dataFilePathFull = dataFile ? path.join(filesDirectory, dataFile) : null;
      const stats = dataFilePathFull ? fs.statSync(dataFilePathFull) : null;

      return {
        id: index + 1,
        title: metadata.title || baseName,
        examType: metadata.sourceType === 'AI_GENERATED' ? 'AI 생성' : (metadata.examType || '기타'),
        subject: metadata.subject?.main || metadata.subject || '기타',
        size: dataFilePathFull ? getFileSize(dataFilePathFull) : 'N/A',
        date: stats ? new Date(stats.mtime).toISOString().split('T')[0] : new Date(metadata.createdAt).toISOString().split('T')[0],
        fileUrl: dataFile ? `/files/${encodeURIComponent(dataFile)}` : undefined,
        jsonUrl: `/files/${encodeURIComponent(jsonFile)}`,
        shortsLink: metadata.shortsLink || 'https://www.youtube.com/shorts/example', // Placeholder for demonstration
        tags: metadata.tags || [],
        difficulty: metadata.difficulty || undefined
      };
    } catch (parseError) {
      console.error(`Error processing file ${jsonFile}:`, parseError);
      // If JSON parsing fails, but a PDF exists, still create a quiz entry
      const dataFile = files.find(f => f.startsWith(baseName) && f.endsWith('.pdf'));
      if (dataFile) {
          const dataFilePathFull = path.join(filesDirectory, dataFile);
          const stats = fs.statSync(dataFilePathFull); // This might throw if file doesn't exist, but we just found it
          return {
              id: index + 1,
              title: baseName, // Use baseName as title if metadata is unreadable
              examType: '기타', // Default
              subject: '기타', // Default
              size: getFileSize(dataFilePathFull),
              date: new Date(stats.mtime).toISOString().split('T')[0],
              fileUrl: `/files/${encodeURIComponent(dataFile)}`,
              jsonUrl: `/files/${encodeURIComponent(baseName + '.json')}`, // Derive jsonUrl from PDF base name
              shortsLink: undefined,
              tags: [],
              difficulty: undefined
          };
      }
      return null; // If no PDF either, then truly skip
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
  jsonUrl?: string;
  shortsLink?: string;
  tags?: string[];
  difficulty?: string; // Quiz 인터페이스에 difficulty 속성 추가
}

export const quizzes: Quiz[] = ${JSON.stringify(quizzes, null, 2)};
`;

  fs.writeFileSync(dataFilePath, fileContent.trim());
  console.log('Successfully generated quizzes.ts from JSON metadata.');
});