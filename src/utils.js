import fs from "fs/promises";

// Odczyt pliku lokalnie
export async function readTextFile(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return data;
  } catch (error) {
    console.error(`Błąd podczas odczytu pliku ${filePath}:`, error);
    throw error;
  }
}

// Zapisanie pliku lokalnie
export async function writeTextFile(filePath, content) {
  try {
    await fs.writeFile(filePath, content, "utf8");
  } catch (error) {
    console.error(`Błąd podczas zapisu pliku ${filePath}:`, error);
    throw error;
  }
}

// Odczyt pliku z url
export async function fetchTextFromUrl(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Błąd podczas pobierania danych z URL: ${response.statusText}`
      );
    }
    const textContent = await response.text();
    return textContent;
  } catch (error) {
    console.error("Wystąpił błąd podczas pobierania treści:", error);
    throw error;
  }
}

export async function loadContentFromUrlOrFile(url, fallbackFilePath) {
  try {
    return await fetchTextFromUrl(url);
  } catch (error) {
    console.error("Błąd podczas pobierania treści z URL:", error);
    return await readTextFile(fallbackFilePath);
  }
}
