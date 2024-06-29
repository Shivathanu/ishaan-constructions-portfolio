'use server'

import { sql } from "@vercel/postgres";

export async function getTestimonials() {
    const { rows } = await sql`SELECT * from feedback;`;

    return rows
}