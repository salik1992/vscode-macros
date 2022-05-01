const vscode = require('vscode');

const openTerminalProgram = (terminalName, path, args = []) => () => {
    const { terminals } = vscode.window;
    const terminal = terminals.find(({ name }) => name === terminalName);
    if (terminal) {
        terminal.dispose();
    }
    vscode.window.createTerminal(terminalName, path, args);
};

module.exports = openTerminalProgram;
