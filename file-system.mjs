import fs from "fs/promises";
import path from "path";

const buffer = await fs.readFile("file-system.mjs");
console.info(buffer.toString());
await fs.writeFile("temp.txt","Hello NodeJs");