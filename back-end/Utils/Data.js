const { Users } = require('../Models/Users');

module.exports.sendData = async () => {
  const user = await Users.findOne();
  if (!user) {
    await Users.create([
      {
        name: ' Chung Duc',
        email: 'Chungduc@gmail.com',
        age: 21,
        address: 'Da Nang',
      },
      {
        name: ' Nguyen Thi Phuc',
        email: 'Phucnguyen@gmail.com',
        age: 59,
        address: 'Ha Tinh',
      },
    ]);
  }
};
