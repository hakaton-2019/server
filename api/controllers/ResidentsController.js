/**
 * ResidentsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


const users = [
    'Vanya',
    'Petya',
    'Sereja',
];

const obj = {
  name: 'Name',
  pass: '123',
  toJSON() {
    const {pass, ...data} = this;
    return data;
  },
}

module.exports = {
  

  /**
   * `ItemController.create()`
   */
  create: async function (req, res) {
    const data = JSON.parse(req.params.params);

    return res.ok();
  },

  getAll: async function (req, res) {
    const list = await Residents.find();

    return res.json(list);
  },

  getById: async function (req, res) {
    const list = await Residents.find({ id: req.params.id });

    return res.json(list);
  },

  del: async function (req, res) {
    return res.send('deleted!');
  },

  update: async function (req, res) {
    return res.send('updated!');
  },

};

