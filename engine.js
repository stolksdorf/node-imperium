const _ = require('lodash');
const Err = require('./errors.js');

module.exports = {

	execute : (state, action) => {
		//TODO: check for player exsistance here
		//TODO: check for hex existance here
		//TODO: check for action type existance here

	},

	actions : {
		//init??, plan??, expand, move, attack

		expand : (state, playerId, hexId) => {
			const res = _.cloneDeep(state);

			if(!res.ships[hexId] || res.ships[hexId].player !== playerId){
				throw Err.Hex.notYours();
			}

			//TODO: Check for space

			res.ships[hexId].count = res.ships[hexId].count + 1;
			return res;
		}
	},

	valid : {
		expand : (state, playerId) => {
			return _.reduce(state.ships, (r, info, hexId) => {
				if(info.player == playerId && true /* not space */){
					r.push(hexId)
				}
				return r;
			}, [])
		}
	}



}