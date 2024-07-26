'use server'

import path from "path";
import fs from "fs";
import { AdminData } from "@/types/admin";

export const addItemToName = async (name: string, value: string) => {
  const filePath = path.join(process.cwd(), 'data', 'writableAsAdmin.json');
  let data = fs.readFileSync(filePath, 'utf8');

  let items = JSON.parse(data);

  const targetObject = (items as AdminData[]).find(item => item.name === name);

  if (targetObject && Array.isArray(targetObject.content)) {
    targetObject.content.push(value);
    targetObject.content.sort();
  }

  fs.writeFileSync(filePath, JSON.stringify(items));

  return new Response(null, { status: 204 });
}
