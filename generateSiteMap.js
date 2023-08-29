const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
const { exec } = require("child_process");
const fs = require("fs").promises;
const path = require("path");

const tempDir = path.join(__dirname, "temp");
const fileName = "urls";
const filePathOriginal = path.join("./src/const", `${fileName}.ts`);

async function main() {
  // Create temp folder if it doesn't exist
  try {
    await fs.mkdir(tempDir);
  } catch (error) {
    if (error.code !== "EEXIST") {
      console.error("Error creating temp folder:", error);
      process.exit(1);
    }
  }

  // Step 1: Compile the TypeScript file to a temporary folder
  console.log("Starting compile: ", filePathOriginal);
  try {
    await new Promise((resolve, reject) => {
      exec(
        `tsc ${filePathOriginal} --outDir "${tempDir}"`,
        (error, stdout, stderr) => {
          if (error) {
            reject(
              new Error(
                `Error during TypeScript compilation: ${stderr} - ${error} - ${stdout}`
              )
            );
          } else {
            resolve(stdout);
          }
        }
      );
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

  // Step 2: Read the compiled JavaScript file to get the value of sitemapUrls
  const compiledFilePath = path.join(tempDir, `${fileName}.js`);
  console.log("Starting require: ", compiledFilePath);
  let sitemapUrls;
  try {
    delete require.cache[require.resolve(compiledFilePath)];
    const compiledFile = require(compiledFilePath);
    sitemapUrls = compiledFile.sitemapUrls;
    console.log("Sitemap Specs:", sitemapUrls);
  } catch (error) {
    console.error("Error during reading compiled file:", error);
    process.exit(1);
  }

  // Step 3: Delete the temporary folder
  try {
    await fs.rm(tempDir, { recursive: true });
    console.log("Temporary folder deleted.");
  } catch (error) {
    console.error("Error during deleting temp folder:", error);
    process.exit(1);
  }

  const stream = new SitemapStream({ hostname: process.env.PUBLIC_URL });
  // Return a promise that resolves with your XML string
  const data = await streamToPromise(Readable.from(sitemapUrls).pipe(stream));
  await fs.writeFile("./public/sitemap.xml", data.toString());
  console.log("Sitemap created.");
}

main().catch((error) => {
  console.error("An unexpected error occurred:", error);
  process.exit(1);
});
