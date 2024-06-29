import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import TestimonialSubmission from '@/data/testimonialSubmissions.json';

// Function to get the next ID
function getNextId(data) {
    if (!Array.isArray(data)) return 1; // If data is not an array, return 1 as the first ID
    const ids = data.map(item => item.id);
    const maxId = Math.max(...ids, 0);  // Find the maximum ID, default to 0 if no IDs are present
    return maxId + 1;
}

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams

    if (searchParams.has('id')) {
        const id = searchParams.get('id') || 0;
        const filePath = path.join(process.cwd(), 'data', 'testimonialSubmissions.json');

        console.log('ID:', id);

        fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading the file:', err);
          return;
        }
      
        // Step 2: Parse the JSON data
        let jsonData;
        try {
          jsonData = JSON.parse(data);
        } catch (parseErr) {
          console.error('Error parsing JSON data:', parseErr);
          return;
        }

        // Step 3: Delete the value
        const keyToDelete = id;  // Replace with the key you want to delete
        const parsedData = jsonData.filter(item => +item.id !== +keyToDelete);
      
        // Step 4: Write the updated JSON back to the file
        fs.writeFile(filePath, JSON.stringify(parsedData, null, 2), 'utf8', (writeErr) => {
          if (writeErr) {
            console.error('Error writing the file:', writeErr);
            return;
          }
        });
      });
        
      return NextResponse.json({ message: 'Submission deleted successfully' });
    }

    return NextResponse.json({ data: TestimonialSubmission });
}

export async function POST(request) {
    const inputData = await request.json();
    const filePath = path.join(process.cwd(), 'data', 'testimonialSubmissions.json');

    let submissions: any = [];
    fs.readFile(filePath, 'utf8', (err, data) => {
        try {
            submissions = JSON.parse(data);
            // const newData = JSON.stringify(submissions, null, 2);
            const nextId = getNextId(submissions);

            // Step 4: Update the JSON data
            const newItem = { id: nextId, ...inputData };  // Replace with the actual item to add
            submissions.push(newItem);

            fs.writeFile(filePath, JSON.stringify(submissions, null, 2), 'utf8', (writeErr) => {
                if (writeErr) {
                console.error('Error writing the file:', writeErr);
                return;
                }
            });
        } catch (error) {
            console.error('Error updating  this file:', error);
        }
    });

    return NextResponse.json({ success: true });
}
