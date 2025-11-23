import { readFileSync } from "fs";
import { execa } from "execa";

const msgFile = process.argv[2];
const msg = readFileSync(msgFile, "utf8").trim();

execa("npx", ["commitlint", "--color"], {
  input: msg,
  stdio: "inherit"
});
