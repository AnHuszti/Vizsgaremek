const fsp = require('fs').promises;
const { join } = require('path');
const SpecialClassModel = require('../model/specialclass.model');

( async () => {
    const specialclassJson = await fsp.readFile(
        join(__dirname, 'specialclass.json'),
        'utf8',
    );
    const specialclasses = JSON.parse(specialclassJson);
    return await SpecialClassModel.insertMany(specialclasses);
})();