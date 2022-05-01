const openTerminalProgram = require('./openTerminalProgram');

const openVifm = openTerminalProgram('VIFM', 'vifm', ['.', '.']);

module.exports = openVifm;
