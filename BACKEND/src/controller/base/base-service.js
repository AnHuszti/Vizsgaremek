module.exports = (model) => {
    return {
        findAll: () => model.find({}),
    }
}

/* module.exports = (model) => {
    return {
        findOne: (id) => model.findById(id)
    }
} ??? */