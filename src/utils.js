import fs from "fs/promises";

// Odczyt pliku lokalnie
export async function readTextFile(filePath) {
  try {
    console.log(`Rozpoczynam odczyt pliku: ${filePath}`);
    const data = await fs.readFile(filePath, "utf8");
    console.log(`Pomyślnie odczytano plik: ${filePath}`);
    return data;
  } catch (error) {
    console.error(`Błąd podczas odczytu pliku ${filePath}:`, error.message);
    throw new Error(
      `Nie udało się odczytać pliku ${filePath}. Szczegóły: ${error.message}`
    );
  }
}

// Zapisanie pliku lokalnie
export async function writeTextFile(filePath, content) {
  try {
    console.log(`Rozpoczynam zapis do pliku: ${filePath}`);
    await fs.writeFile(filePath, content, "utf8");
    console.log(`Pomyślnie zapisano plik: ${filePath}`);
  } catch (error) {
    console.error(`Błąd podczas zapisu pliku ${filePath}:`, error.message);
    throw new Error(
      `Nie udało się zapisać pliku ${filePath}. Szczegóły: ${error.message}`
    );
  }
}

// Odczyt pliku z URL
export async function fetchTextFromUrl(url) {
  try {
    console.log(`Rozpoczynam pobieranie danych z URL: ${url}`);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Błąd podczas pobierania danych z URL: ${response.status} - ${response.statusText}`
      );
    }
    const textContent = await response.text();
    console.log(`Pomyślnie pobrano treść z URL: ${url}`);
    return textContent;
  } catch (error) {
    console.error(
      `Wystąpił błąd podczas pobierania treści z URL: ${url}`,
      error.message
    );
    throw new Error(
      `Nie udało się pobrać danych z URL: ${url}. Szczegóły: ${error.message}`
    );
  }
}

// Ładowanie treści z URL lub pliku jako rozwiązanie zapasowe
export async function loadContentFromUrlOrFile(url, fallbackFilePath) {
  try {
    console.log(`Próba pobrania treści z URL: ${url}`);
    return await fetchTextFromUrl(url);
  } catch (error) {
    console.warn(
      `Nie udało się pobrać danych z URL. Próba odczytu z pliku: ${fallbackFilePath}`
    );
    try {
      return await readTextFile(fallbackFilePath);
    } catch (fileError) {
      console.error(
        `Błąd podczas odczytu pliku zapasowego ${fallbackFilePath}:`,
        fileError.message
      );
      throw new Error(
        `Nie udało się odczytać ani z URL: ${url}, ani z pliku: ${fallbackFilePath}. Szczegóły: ${fileError.message}`
      );
    }
  }
}

// Funkcja do kolorowania tekstu na zielono
export function logGreenMessage(message) {
  console.log("\x1b[32m%s\x1b[0m", message);
}