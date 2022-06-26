module.exports = (model, populateList = []) => {
    return {
        findAll: () => model.find({}).populate(...populateList),
        findOne: (id) => model.findById(id).populate(...populateList),
        updateOne: async (id, body) => {
            const newEntity = new model(body);
            const error = newEntity.validateSync();
            if (!error) {
                console.log(newEntity)
                return model.findByIdAndUpdate(id, body, {new: true})
            }
            console.log(error);
            throw new Error(error)
        },
        createOne: async (body) => {
            console.log(`router: ${body}`);
            const newEntity = new model(body);
            const error = newEntity.validateSync();
            if (!error) {
                console.log(newEntity);
                const saved = await newEntity.save()
                return model.findById(saved._id)
            }
            throw new Error(error)
        },
        deleteOne: (id) => model.findByIdAndRemove(id)
    }
}

