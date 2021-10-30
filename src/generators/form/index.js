
const createPrompts = require('../shared/createFormPrompts');
const createActions = require('../shared/createFormActions');

module.exports = {
    description : "Add Form",
    prompts: createPrompts(),
    actions : [
        ...createActions(false),
        {
            type:"prettify",
            path : "/form/"
        }
   ]
}