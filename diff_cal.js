const _ = require('lodash');
module.exports.isDecreasing = function (bal) {
    var count = _.size(bal);
    if (count === 1) return true;
    if (count === 2) return bal[count - 1] >= bal[count - 2];
    let diff = bal[count - 1] - bal[count - 2];
    //console.log("Diff : " + diff);
    if (diff < 0) {
        return false;
    }
    for (var i = count - 2; i > 0; i--) {
        if (bal[i] - bal[i - 1] != diff) {
            return false;
        }
    }

    return true;
}