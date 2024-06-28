import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
    const data = await request.json();
    const filePath = path.join(process.cwd(), 'data', 'testimonialSubmissions.json');

    let submissions: any = [];

    try {
        const fileData = fs.readFileSync(filePath, 'utf8');
        submissions = JSON.parse(fileData);
    } catch (error) {
        console.error('Error reading this file:', error);
    }

    submissions.push(data);

    try {
        const newData = JSON.stringify(submissions, null, 2);

        fs.writeFileSync(filePath, newData, 'utf8');
    } catch (error) {
        console.error('Error writing this file:', error);
    }

    return NextResponse.json({ success: true });
}
