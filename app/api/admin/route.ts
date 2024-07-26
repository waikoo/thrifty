import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'data', 'writableAsAdmin.json');
  const rawData = fs.readFileSync(filePath);
  const data = JSON.parse(rawData.toString());

  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}
