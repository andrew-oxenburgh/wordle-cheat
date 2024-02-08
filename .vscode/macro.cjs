const vscode = require('vscode');

/**
 * Macro configuration settings
 * { [name: string]: {              ... Name of the macro
 *    no: number,                   ... Order of the macro
 *    func: ()=> string | undefined ... Name of the body of the macro function
 *  }
 * }
 */
module.exports.macroCommands = {
    FooMacro: {
        no: 2,
        func: fooFunc
    },
    BarMacro: {
        no: 1,
        func: barFunc
    }
};

/**
 * FooMacro
 */
function fooFunc() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        // Return an error message if necessary.
        vscode.window.showErrorMessage('Editor is not opening!');
        return 'Editor is not opening.';
    }
    const document = editor.document;
    const selection = editor.selection;

    vscode.window.showInputBox({
        title: "foo func",
        value: document.getText()
    });
}

/**
 * BarMacro(asynchronous)
 */
async function barFunc() {
    await vscode.window.showInformationMessage('Hello VSCode Macros!');
}
