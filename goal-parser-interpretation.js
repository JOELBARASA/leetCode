/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
    console.log(command);
    if (typeof command !== 'string' || command.length === 0) {
        return "\nInvalid entry. Only valid Strings are allowed!\n";
    }
    else {
        console.log(command.split('()').join('o').split('(al)').join('al'));
        return command.split('()').join('o').split('(al)').join('al');
    }
};
