#!/usr/bin/env node

const bcrypt = require("bcrypt");
const yargs = require("yargs");

const args = yargs.option("value", {
  alias: "v",
  type: "string",
}).argv;
console.log(bcrypt.hashSync(args.value, 10));
