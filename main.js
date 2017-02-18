const render = require('./render.js');
const Engine = require('./engine.js');

let Game = require('./gamestates/test.state.js');





render(Game, {});


console.log(Engine.valid.expand(Game, 'p2'))