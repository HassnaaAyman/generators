/**
 *
 *
 * Page Generator
 *
 *
 */

/* eslint strict: ["off"] */

const createPrompts = require("../shared/createQueryPrompts");
const createActions = require("../shared/createQueryActions");

module.exports = {
  description: "Add New Query",
  prompts: createPrompts(),
  actions: () => {
    return [
      ...createActions(false),
      {
        type: "prettify",
        path: "/queries/",
      },
    ];
  },
};
