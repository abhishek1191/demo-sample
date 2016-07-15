var DIFactory = require('dependency-injection/DIFactory');
var factory = new DIFactory('./config/diconfig');
var di = factory.create();

exports.getInstance = function (className) {
    return di.create(className);
}

exports.singletonInstance = function (className) {
    return di.get(className);
}