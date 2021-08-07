#! /usr/bin/env node

// This script is run for:
// $ npx @garyblackwood/next-starter my-app

"use strict";

const appName = process.argv[2] || "next-starter";
const { spawnSync } = require("child_process");
const rimraf = require("rimraf");

const appDir = `${process.cwd()}/${appName}`;
const url = "git@github.com:Garee/next-starter";
spawnSync("git", ["clone", url, appName]);

rimraf(`${appDir}/package`, {}, (err) => err && console.error(err));
rimraf(`${appDir}/.git`, {}, (err) => err && console.error(err));

console.log("Ready, set, go!");
console.log(`$ cd ${appName}`);
console.log("$ npm install");
console.log("$ npm run dev");
