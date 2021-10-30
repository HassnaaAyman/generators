const createPrompts = (defaultInputName ="inputName") => [
      {
        type: "confirm",
        name: "form",
        message: "Do You wanna use form in your component?",
        default: true,
      },
      {
        type: "input",
        name: "inputName",
        message: "what should it be called?",
        default: defaultInputName,
      }
  ];
  
  module.exports = createPrompts;