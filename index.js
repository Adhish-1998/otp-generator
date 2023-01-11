var sid = "Enter Sid";
var auth_token = "Enter Token";
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
