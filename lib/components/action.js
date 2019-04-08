'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var update = function update(data) {
    return {
        type: 'UPDATE',
        data: data
    };
};
exports.default = update;