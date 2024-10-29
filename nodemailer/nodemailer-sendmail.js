const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "pritam.padhy29@gmail.com",
        pass: "hfno kcsd puzh brxd"
    }
});

let mailOptions ={
    from: 'pritam.padhy29@gmail.com',
    to: ['pritam.padhy@yahoo.com'],
    subject: "sending mail from NodeJs",
    html:`
        <h1>This is a Test mail</h1>
        <pre>
            Hiii
            Helllooo
            Good Morning
        </pre>

    `
}

transporter.sendMail(mailOptions,(err, info)=>{
    if (err){
        console.log(err);
    }else{
        console.log('Email sent successfully');
    }
});
