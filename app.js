'use strict';
module.exports = function (string, seperator) {
    var parts = string.split(seperator);
    return [parts[0], parts.splice(1).join(seperator)];
};

