import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams

    if (searchParams.has('id')) {
      const id = searchParams.get('id') || 0;
      await sql`DELETE FROM feedback WHERE id = ${id};`;
      
      return NextResponse.json({ message: 'Submission deleted successfully' });
    }

    const { rows } = await sql`SELECT * from feedback;`;
    
    return NextResponse.json({ data: rows });
}

export async function POST(request) {
    const inputData = await request.json();
    try {
        await sql`INSERT INTO feedback (name, quote, rating) VALUES (${inputData.name}, ${inputData.quote}, ${inputData.rating});`;
    } catch (error) {
        console.error('Error reading file:', error);
    }

    return NextResponse.json({ success: true });
}
