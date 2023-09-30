const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  senderWalletId: { type: mongoose.Schema.Types.ObjectId, ref: 'Wallet', required: true },
  receiverWalletId: { type: mongoose.Schema.Types.ObjectId, ref: 'Wallet', required: true },
  amount: { type: Number, required: true },
});

module.exports = mongoose.model('Transaction', transactionSchema);