const Err = require('egads');


Err.noHex = Err.extend('No Hex with that id', 404, 'Non-Exsistant Hex');

Err.Hex = Err.extend('Invalid action for target hex', 404, 'Invalid Hex');

Err.Hex.notYours = Err.Hex.extend('Target hex is owned by another player');


module.exports = Err;