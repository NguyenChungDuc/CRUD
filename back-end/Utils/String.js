const bcrypt = require('bcrypt');
module.exports.hashPhone = async (phone) => await bcrypt.hash(phone, 10);

module.exports.comparePhone = async (phone, hashedPhone) =>
  await bcrypt.compare(phone, hashedPhone);
