import { paths } from "./src/config.js";
import {
  readTextFile,
  writeTextFile,
  loadContentFromUrlOrFile,
  logGreenMessage,
} from "./src/utils.js";
import { getResponseOpenAI } from "./src/api.js";
import { generateHTMLFile } from "./src/generateHTML.js";

async function main() {
  let promptContent;
  let articleContent;

  // Wczytywanie pliku z promptem
  logGreenMessage("Start processing your data...");
  try {
    promptContent = await readTextFile(paths.promptPath);
  } catch (error) {
    console.error("Nie udało się odczytać pliku z promptem:", error);
    return; // Jeśli prompt nie został odczytany, nie ma sensu kontynuować
  }

  // Wczytywanie pliku z artykuł
  try {
    articleContent = await loadContentFromUrlOrFile(
      paths.url,
      paths.articlePath
    );
  } catch (error) {
    console.warn(
      "Nie udało się załadować treści artykułu, kontynuowanie z samym promptem.",
      error
    );
    articleContent = ""; // W tym przypadku kontynuujemy z pustym artykułem
  }

  try {
    logGreenMessage("Wysyłanie żądania do OpenAI...");
    console.time("Czas oczekiwania na odpowiedź OpenAI");
    const responseApi = await getResponseOpenAI(promptContent, articleContent);
    console.timeEnd("Czas oczekiwania na odpowiedź OpenAI");

    if (!responseApi) {
      console.error("Nie udało się uzyskać odpowiedzi z OpenAI.");
      return;
    }

    try {
      await writeTextFile(paths.resultArticlePath, responseApi);
    } catch (error) {
      console.error("Nie udało się zapisać pliku artykułu HTML:", error);
      return;
    }

    try {
      console.log("Generowanie podglad.html ...");
      await generateHTMLFile(
        responseApi,
        paths.templatePath,
        paths.mainResultPath
      );
      logGreenMessage("Proces generowania zakończony pomyślnie.");
    } catch (error) {
      console.error("Nie udało się wygenerować podglądu HTML:", error);
    }
  } catch (error) {
    console.error("Wystąpił błąd podczas komunikacji z OpenAI:", error);
  }
}

main();
