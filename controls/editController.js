const loadList = require('../models/loadList')

module.exports = {
    getEdit : async (req, res) => {
        try {
            const id = req.params.id
            const loads = await loadList.find()
            console.log(loads, id)
            res.render('edit.ejs', {loadsList: loads, idItem: id})
        } catch (err) {
            return res.status(500).send(err)
        }
    },
}