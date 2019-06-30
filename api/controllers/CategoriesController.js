/**
 * CategoriesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    create: async function (req, res) {
        const data = JSON.parse(req.params.params);

        return res.ok();
    },

    getAll: async function (req, res) {
        const list = await Categories.find();

        return res.json(list);
    },

    getById: async function (req, res) {
        const list = await Categories.find({ id: req.params.id });

        return res.json(list);
    },

    del: async function (req, res) {
        return res.send('deleted!');
    },

    update: async function (req, res) {
        return res.send('updated!');
    },

};

