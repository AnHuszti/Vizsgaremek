const fsp = require('fs').promises;
const { join } = require('path');
const KindergartenModel = require('../model/kindergarten.model');

( async () => {
    const kindergartenJson = await fsp.readFile(
        join(__dirname, 'kindergarten.json'),
        'utf8',
    );
    const kindergartens = JSON.parse(kindergartenJson);
    console.log(kindergartens);
    return await KindergartenModel.insertMany(kindergartens);
})();