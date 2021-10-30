
const createPrompts = require('../shared/createGqlPrompt');
const createActions = require('../shared/createGqlActions');

module.exports = {
    description : "Add gql",
    prompts: createPrompts(),
    actions : [
        ...createActions(false),
        {
            type:"prettify",
            path : "/gql/"
        }
   ]
}