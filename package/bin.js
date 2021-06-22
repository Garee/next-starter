#! /usr/bin/env node

"use strict";

const appName = process.argv[2] || "next-starter";
const { spawnSync } = require("child_process");
const url = "git@github.com:Garee/next-starter";

spawnSync("git", ["clone", url, `${process.cwd()}/${appName}`]);
spawnSync("npm", ["install", "--prefix", `${process.cwd()}/${appName}`]);

console.log("Ready to go!");
console.log(`$ cd ${appName}`);
console.log("$ npm run dev");
