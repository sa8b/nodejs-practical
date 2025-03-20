import fs from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

async function read() {
  const filePath = path.join(process.cwd(), "./README.md");

//   fs.readFile(filePath, { encoding: "utf8" }, (err, data) => {
//     if (err) throw new Error(err);
//     else console.log(data);
//   });

  try {
    const content = await readFile(filePath, { encoding: "utf8" });

    console.log(content);    
  } catch (e) {
    console.log(e);
  }
}

await read();
