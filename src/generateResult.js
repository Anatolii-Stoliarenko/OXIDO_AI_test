import { readTextFile, writeTextFile } from "./utils.js";

async function generateHTMLFile(generatedContent, templatePath, outputPath) {
  try {
    const templateContent = await readTextFile(templatePath);
    const outputContent = templateContent.replace(
      '<div id="content-container"></div>',
      `<div id="content-container">${generatedContent}</div>`
    );

    await writeTextFile(outputPath, outputContent);
  } catch (error) {
    console.error("Błąd podczas generowania pliku HTML:", error);
    throw error;
  }
}

export { generateHTMLFile };
