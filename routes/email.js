const routerEmail = require('express').Router();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'latrocquerie@gmail.com',
    pass: 'WCS-Trocquerie-21',
  },
});

const mailOptions = {
  from: 'La Trocquerie <latrocquerie@gmail.com>', // de qui?
  to: 'latrocquerie@gmail.com', // pour qui?
  subject: 'Votre demande a été transmise', // sujet
  html: `
  <h1 style="color:#9a1d1f;">La Trocquerie</h1>
  <h2 style="color:black;">Bonjour,</h2>
  <p style="color:black;">Votre message a bien été pris en compte.</p>
  <img src="https://i.imgur.com/NpBR5Nm.jpg" alt="Logo La Trocquerie" height="150" width="auto" />
  `, // message
};

routerEmail.get('/', (req, res) => {
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else { console.log(info); }
  });
});

module.exports = routerEmail;