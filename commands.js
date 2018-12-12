const fs = require("fs");

function done(output) {
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
}

function evaluateCmd(userInput) {

    const userInputArray = userInput.split(" ");
    const command = userInputArray[0];

    switch (command) {
        case "echo":
        commandLibrary.echo(userInputArray.slice(1).join(" "));
        break;
        case "cat":
        commandLibrary.cat(userInputArray.slice(1));
        case "head":
        commandLibrary.head(userInputArray.slice(1));
    }
}

const commandLibrary = {

    "echo": function(userInput) {
        done(userInput);
    },

    "cat": function(fullPath) {
        const fileName = fullPath[0];
        fs.readFile(fileName, (err, data) => {
            if(err) throw err;
            done(data);
        });
    },

    "head": function(fullPath) {
        const headFile = fullPath[0].split('\n').slice(0, 2).join(" ");
        fs.readFile(headFile, (err, data) => {
            if(err) throw err;
            done(data);
        });
    }
};

module.exports.commandLibrary = commandLibrary;
module.exports.evaluateCmd = evaluateCmd;