import { NextRequest, NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

interface CsvRecord {
  image_name: string;
  prediction: string;
}

export async function GET(request: NextRequest) {
  try {
    // Read the predictions CSV file
    const csvPath = path.join(process.cwd(), 'public', 'test', 'preds.csv');
    const csvContent = fs.readFileSync(csvPath, 'utf-8');
    const records = parse(csvContent, {
      columns: true,
      skip_empty_lines: true
    }) as CsvRecord[];

    // Create a map of image names to predictions
    const predictionMap = new Map(records.map(record => [record.image_name, record.prediction]));

    // Randomly choose between FAKE and REAL
    const isReal = Math.random() < 0.5;
    const folder = isReal ? 'REAL' : 'FAKE';
    const trueClass = isReal ? '1' : '0';

    // Get all images from the chosen folder
    const folderPath = path.join(process.cwd(), 'public', 'test', folder);
    const images = fs.readdirSync(folderPath).filter(file => file.endsWith('.jpg'));

    // Randomly select an image
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const imageName = randomImage;

    // Get the prediction from the CSV
    const predictedClass = predictionMap.get(imageName) || '0';

    return NextResponse.json({
      imageName,
      trueClass,
      predictedClass
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to get image' }, { status: 500 });
  }
}