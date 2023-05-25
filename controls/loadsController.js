const loadList = require('../models/loadList')

module.exports = {
    getIndex : async (req, res) => {
        try {
            const loads = await loadList.find()
            res.render('loads.ejs', {loadsList: loads})
        } catch (err) {
            return res.status(500).send(err)
        }
    },
    createItem : async (req, res) => {
        console.log(req.body)
        const newLoad = new loadList(
            {
                carModel: req.body.carModel,
                year: req.body.year,
                from: req.body.from,
                to: req.body.to,
                pickUpDate: req.body.pickUpDate,
                dropOffDate: req.body.dropOffDate,
            }
        )
        try {
            await newLoad.save()
            console.log(newLoad)
            res.redirect('/')
        } catch (err) {
            return res.status(500).send(err)
        }
    },
    removeItem: async (req, res) => {
        // const id = req.params.id
        console.log(req.body.loadIdFromJSFile)
        try{
            const result = await loadList.findByIdAndDelete(req.body.loadIdFromJSFile)
            console.log(result)
            res.json('Deleted It')
        } catch(err){
            if (err) return res.status(500).send(err)
        }
    },
}