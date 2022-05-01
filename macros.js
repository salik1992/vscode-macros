const openLazygit = require('./lazygit');
const openVifm = require('./vifm');

module.exports.macroCommands = {
    openLazygit: {
        no: 1,
        func: openLazygit,
    },
    openVifm: {
        no: 2,
        func: openVifm,
    },
};
