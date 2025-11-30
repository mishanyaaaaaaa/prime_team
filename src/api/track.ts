import axios from 'axios';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data/tracking.json');

export const trackVisit = async (data: {
  source: string;
  campaign?: string;
  userId?: string;
  path: string;
  timestamp: string;
}) => {
  try {
    // Читаем существующие данные
    let existingData = [];
    if (fs.existsSync(DATA_FILE)) {
      existingData = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    }

    // Добавляем новую запись
    existingData.push(data);

    // Сохраняем обратно
    fs.writeFileSync(DATA_FILE, JSON.stringify(existingData, null, 2));

    return { success: true };
  } catch (error) {
    console.error('Error tracking visit:', error);
    return { success: false, error };
  }
};