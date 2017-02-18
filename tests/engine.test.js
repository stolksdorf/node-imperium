const _ = require('lodash');
const test = require('ava');
const Err = require('../errors.js');


const render = require('../render.js');

const Engine = require('../engine.js');
const TestState = require('../gamestates/test.state.js');


/*-- Expand --*/


test('Expand should place 1 ship', (t)=>{
	const res = Engine.actions.expand(TestState, 'p1', 'A1');
	t.is(res.ships.A1.count, TestState.ships.A1.count + 1);
});

test('Expand should fail on enemy hex', (t)=>{
	t.throws(()=>{Engine.actions.expand(TestState, 'p2', 'A1')}, Err.Hex.notYours);
});

test('Expand should fail on empty hex', (t)=>{
	t.throws(()=>{Engine.actions.expand(TestState, 'p1', 'B0')}, Err.Hex.notYours);
});


test.skip('Expand should fail in space', (t)=>{

});

test.skip('Expand should fail in opponents hexes', (t)=>{

});