import { getResponseOpenAI } from "./src/api.js";
import { readTextFile, writeTextFile } from "./src/utils.js";
import { generateHTMLFile } from "./src/generateResult.js";
import path from "path";
import { fileURLToPath } from "url";

// Utworzenie __dirname dla środowiska ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  try {
    console.log("Odczyt plików...");
    const promptPath = path.join(__dirname, "data", "prompt.txt");
    const articlePath = path.join(__dirname, "data", "article.txt");
    const templatePath = path.join(__dirname, "templates", "szablon.html");
    const outputArticlePath = path.join(__dirname, "result", "artykul.html");
    const outputPreviewPath = path.join(__dirname, "result", "podglad.html");

    const promptContent = await readTextFile(promptPath);
    const articleContent = await readTextFile(articlePath);

    console.log("Wysyłanie żądania do OpenAI...");
    const responseApi = await getResponseOpenAI(promptContent, articleContent);

    if (responseApi) {
      console.log("zapisywanie artykul.html ...");
      await writeTextFile(outputArticlePath, responseApi);

      console.log("Generowania podglad.html ...");
      await generateHTMLFile(responseApi, templatePath, outputPreviewPath);

      console.log("Proces generowania zakończony pomyślnie.");
    }
  } catch (error) {
    console.error("Wystąpił błąd w głównym procesie:", error);
  }
}

main();
