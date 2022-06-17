module.exports = (model) => {
    return {
        findAll: () => model.find({}),
        findOne: (id) => model.findById(id),
        updateOne: async (id, body) => {
            const newEntity = new model(body);
            const error = newEntity.validateSync();
            if (!error) {
                await newEntity.save()
                const updatedEntity = await model.findById(id)
                return updatedEntity
            }
            throw new Error(error)
        },
        deleteOne: (id) => model.findByIdAndRemove(id)
    }
}

