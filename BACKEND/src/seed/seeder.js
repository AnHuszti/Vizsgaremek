const fsp = require('fs').promises;
const { join } = require('path');
const GroupModel = require('../model/group.model');

( async () => {
    const groupJson = await fsp.readFile(
        join(__dirname, 'groups.json'),
        'utf8',
    );
    const groups = JSON.parse(groupJson);
    //console.log(groups);
    return await GroupModel.insertMany(groups);
})();