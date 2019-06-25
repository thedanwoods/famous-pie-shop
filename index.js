const potatoPie = require('potato-pie');

const famousPieShop = () => {
  const pie = `
  Welcome to the pie shop! Here is your pie.
  ------------------------------------------

  ${potatoPie()}

  Thank you for your custom. Bye!`;

  console.log(pie);
};

module.exports = famousPieShop;

