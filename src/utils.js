import fs from "fs/promises";

// Odczyt pliku
export async function readTextFile(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return data;
  } catch (error) {
    console.error(`Błąd podczas odczytu pliku ${filePath}:`, error);
    throw error;
  }
}

// Zapisanie pliku
export async function writeTextFile(filePath, content) {
  try {
    await fs.writeFile(filePath, content, "utf8");
  } catch (error) {
    console.error(`Błąd podczas zapisu pliku ${filePath}:`, error);
    throw error;
  }
}
