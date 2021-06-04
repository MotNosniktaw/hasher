#!/usr/bin/env node

const bcrypt = require("bcrypt");
const yargs = require("yargs");

const args = yargs
  .option("value", {
    alias: "v",
    type: "string",
  })
  .option("saltRounds", {
    alias: "r",
    description: "Number of rounds of salt to apply",
  }).argv;
console.log(bcrypt.hashSync(args.value, args.saltRounds ?? 10));
