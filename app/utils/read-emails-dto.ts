import fs from "fs";
import path from "path";

export async function readEmailsDTO<T>(): Promise<T> {
  try {
    const filePath = path.join(process.cwd(), "app", "data", "emails.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(fileContent);

    return data;
  } catch (error) {
    console.error(
      "Error fetching or validating JSON file:",
      (error as any).message
    );
    throw error;
  }
}
