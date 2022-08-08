const mongoose = require('mongoose');

const TableSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  title: {
    type: String,
  },
  price: {
    type: String,
  },
});

const Table = mongoose.model('Table', TableSchema);
module.exports = Table;
