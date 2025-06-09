// Arrow function

const greet = function (name) {
  return `Hi ${name}`;
}
// Arrow function explicit return
const greetExplicit = (name) => {
  return `Hi ${name}`;
}
// Arrow function implicit return
const greetArrow = name => `Hi ${name}`;

// Lexical binding
const fictionalCharacter = {
  name: 'Luke Skywalker',
  messageWithTraditionalFucntion: function (message) {
    console.log(`${this.name} say: ${message}`);
  },

  messageWithArrowFunction: (message) => console.log(`${this.name} say: ${message}`)
}

fictionalCharacter.messageWithTraditionalFucntion('Helloooo bitch!')
fictionalCharacter.messageWithArrowFunction('Be carefull!')