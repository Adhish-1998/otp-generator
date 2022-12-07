var sid = "ACf0db510e5f4f817a2c6668e07ba24506";
var auth_token = "e6d2a70e5d3ae64f2878b0d39e3a2e7d";
let otp = "123456"
var twilio = require("twilio")(sid, auth_token);

// twilio.messages
//   .create({
//     from: "+13515298228",
//     to: "+918514075565",
//     body: `this is testing otp is ${otp}`,
//   })
//   .then(function(res) {console.log("message has sent!")})
//   .catch(function(err)  {
//     console.log(err);
//   });

twilio.messages
  .create({
    from: "+13515298228",
    to: req.body.number,
    body: `this is testing otp is ${otp}`,
  })
  .then(function (res) { console.log("message has sent!") })