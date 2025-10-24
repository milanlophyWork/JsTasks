"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Task 6 : enum directions
var directions;
(function (directions) {
    directions[directions["Up"] = 0] = "Up";
    directions[directions["Down"] = 1] = "Down";
    directions[directions["Left"] = 2] = "Left";
    directions[directions["Right"] = 3] = "Right";
})(directions || (directions = {}));
function movement(direction) {
    return `You moved ${directions[direction]}`; // accessing value of directions enum , at specified direction
}
console.log(movement(directions.Up));
//# sourceMappingURL=script.js.map