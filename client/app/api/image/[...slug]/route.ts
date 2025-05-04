import { NextRequest, NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';
import { lookup } from 'mime-types'; // Used to determine content type

export async function GET(
    request: NextRequest,
    context: { params: { slug: string[] } }
) {
    try {
        const params = context.params;
        // The slug should be [FOLDER, FILENAME], e.g., ['REAL', 'image1.jpg']
        const folder = params.slug[0];
        const imageName = params.slug[1];

        console.log(`Fetching image: ${folder}/${imageName}`);

        if (!folder || !imageName || (folder !== 'REAL' && folder !== 'FAKE')) {
            return NextResponse.json({ error: 'Invalid image path' }, { status: 400 });
        }

        const imagePath = path.join(process.cwd(), 'public', 'test', folder, imageName);

        // Check if file exists
        if (!fs.existsSync(imagePath)) {
            console.error(`Image not found at path: ${imagePath}`);
            return NextResponse.json({ error: 'Image not found' }, { status: 404 });
        }

        // Read the image file
        const imageBuffer = fs.readFileSync(imagePath);

        // Determine content type
        const mimeType = lookup(imagePath) || 'application/octet-stream';

        // Return the image with correct headers
        return new NextResponse(imageBuffer, {
            status: 200,
            headers: {
                'Content-Type': mimeType,
                'Content-Length': imageBuffer.length.toString(),
                // Optional: Add caching headers if desired
                // 'Cache-Control': 'public, max-age=31536000, immutable'
            },
        });

    } catch (error) {
        console.error('Error serving image:', error);
        return NextResponse.json({ error: 'Failed to serve image' }, { status: 500 });
    }
} 