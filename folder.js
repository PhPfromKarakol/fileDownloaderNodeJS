var getfiles = function (folder) {
    const fs = require('fs');

    var fileFolder = [];

    fs.readdirSync(folder).forEach(
        (file) => {
            // console.log(file);
            fileFolder.push(file);
        }
    );
    return fileFolder;
}


module.exports.getfiles = getfiles;


