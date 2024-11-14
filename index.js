import { getResponseOpenAI } from "./src/api.js";
import {
  readTextFile,
  writeTextFile,
  loadContentFromUrlOrFile,
} from "./src/utils.js";
import { generateHTMLFile } from "./src/generateResult.js";
import { paths } from "./src/config.js";

async function main() {
  try {
    console.log("Odczyt plików...");
    const promptContent = await readTextFile(paths.promptPath);
    const articleContent = await loadContentFromUrlOrFile(
      paths.url,
      paths.articlePath
    );

    console.log("Wysyłanie żądania do OpenAI...");
    const responseApi = await getResponseOpenAI(promptContent, articleContent);

    if (responseApi) {
      console.log("zapisywanie artykul.html ...");
      await writeTextFile(paths.resultArticlePath, responseApi);

      console.log("Generowania podglad.html ...");
      await generateHTMLFile(
        responseApi,
        paths.templatePath,
        paths.mainResultPath
      );

      console.log("Proces generowania zakończony pomyślnie.");
    }
  } catch (error) {
    console.error("Wystąpił błąd w głównym procesie:", error);
  }
}

main();
