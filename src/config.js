import path from "path";
import { fileURLToPath } from "url";

// Utworzenie __dirname dla środowiska ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const paths = {
  url: "https://cdn.oxido.pl/hr/Zadanie%20dla%20JJunior%20AI%20Developera%20-%20tresc%20artykulu.txt",
  promptPath: path.join(__dirname, "..", "data", "prompt.txt"),
  articlePath: path.join(__dirname, "..", "data", "article.txt"),
  templatePath: path.join(__dirname, "..", "templates", "szablon.html"),
  resultArticlePath: path.join(__dirname, "..", "result", "artykul.html"),
  mainResultPath: path.join(__dirname, "..", "result", "podglad.html"),
};
