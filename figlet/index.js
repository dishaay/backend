//requiring my package and then using it.

const figlet = require('figlet');

figlet("SRI SRI NITAI SACISUTA", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
