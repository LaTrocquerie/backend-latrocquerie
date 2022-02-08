const routerEmail = require('express').Router();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'stmp.gmail.com',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

routerEmail.post('/send', (req, res, next) => {
  const email = req.body.email
  const subject = req.body.subject
  const name = req.body.name
  const message = req.body.message

  const mail = {
    from: `latrocquerie@gmail.com`,
    to: `latrocquerie@gmail.com`,
    subject: `WEBSITE: ${subject}`,
    text: `${email} ${name} ${message}`,
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})

module.exports = routerEmail;
