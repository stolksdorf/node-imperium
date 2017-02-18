const _ = require('lodash');
const chalk = require('chalk');


const getHex = (state, hexId)=>{
	const hex = state.hexes[hexId];
	let info = {
		pos : {
			c : 6 * hex.coord.x,
			r : 4 * (hex.coord.z + hex.coord.x/2)
		}
	};
	if(state.ships[hexId]){
		info.ships = state.ships[hexId].count;
		info.player = state.players[state.ships[hexId].player];
	}

	return _.extend({}, hex, info);
}


module.exports = (state, opts) => {
	let buf = [];

	const paint = (x,y, str, color='white') =>{
		if(!buf[y]) buf[y] = [];
		if(!_.isString(str)) str = str.toString();
		_.each(str, (char,idx)=>{
			buf[y][x+idx] = chalk[color](`${char}`);
		});
	};

	const drawHex = (hexId, color='grey') => {
		const hex = getHex(state, hexId);
		const outline = ()=>{
			const parts = [
				[2, 0, '_'], [3, 0, '_'], [4, 0, '_'], [5, 0, '_'],
				[2, 4, '_'], [3, 4, '_'], [4, 4, '_'], [5, 4, '_'],
				[1, 1, '/'], [0, 2, '/'], [7, 3, '/'], [6, 4, '/'],
				[6, 1, '\\'], [7, 2, '\\'], [0, 3, '\\'], [1, 4, '\\']];
			_.each(parts, (part)=>{
				paint(part[0]+hex.pos.c, part[1]+hex.pos.r, part[2], color);
			})
		}
		const id = ()=>{
			paint(hex.pos.c+3, hex.pos.r+1, hex.id);
		}
		const ships = ()=>{
			if(hex.ships){
				paint(hex.pos.c+3, hex.pos.r+3, _.padStart(hex.ships, 2, '0'), `bg${_.capitalize(hex.player.color)}`);
			}
		}

		const coords = ()=>{
			paint(hex.pos.c+2, hex.pos.r+4, hex.coord.x);
			paint(hex.pos.c+4, hex.pos.r+4, hex.coord.z);
		}

		outline();
		id();
		ships();

		//coords();
	}



	_.each(state.hexes, (hex, hexId)=>{drawHex(hexId)});

	drawHex('B2', 'blue');



	//Draw the Buffer
	console.log(_.map(buf, (line)=>{
		return _.map(line, (char)=>{ return char || ' '; }).join('');
	}).join('\n'));
	console.log('\n\n');
};