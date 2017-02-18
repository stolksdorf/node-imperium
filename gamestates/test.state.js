const _ = require('lodash');


module.exports = {
	players : _.keyBy([
		{
			id : 'p1',
			name : 'Xavier',
			color : 'red'
		},
		{
			id : 'p2',
			name : 'Yotto',
			color : 'blue'
		},
	], 'id'),
	hexes : _.keyBy([
		{
			id : 'A0',
			coord : {x:0,z:0,  y:0},
		},
		{
			id : 'B0',
			coord : {x:1,z:0,  y:-1},
		},
		{
			id : 'C0',
			coord : {x:2,z:-1, y:-1},
		},
		{
			id : 'A1',
			coord : {x:0,z:1,  y:-1},
		},
		{
			id : 'B2',
			coord : {x:1,z:2,  y:-3},
		},
		{
			id : 'B4',
			coord : {x:4,z:2,  y:-6},
		},
		{
			id : 'B3',
			coord : {x:3,z:2,  y:-5},
		}
	],'id'),

	ships : {
		A0 : {
			player : 'p1',
			count : 3
		},
		A1 : {
			player : 'p1',
			count : 2
		},
		B2 : {
			player : 'p2',
			count : 1
		}
	},
}