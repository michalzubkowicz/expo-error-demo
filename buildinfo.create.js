const fs = require('fs');
const revision = require('child_process')
    .execSync('git rev-parse HEAD')
    .toString().trim();

fs.writeFile("./buildinfo.json", '{\n' +
    '    "TIMESTAMP": ' + new Date().getTime() + ',\n' +
    '    "REVISION": "' + revision + '"\n' +
    '}', function(err) {
    if(err) {
        return console.log(err);
    }
});
