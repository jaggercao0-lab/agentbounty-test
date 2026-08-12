import {
  mkdir,
  copyFile,
} from "node:fs/promises";

await mkdir("dist", {
  recursive: true,
});

await copyFile(
  "src/add.js",
  "dist/add.js"
);

console.log(
  "Build completed."
);
