import nodemailer from "nodemailer";
import dotenv from "dotenv";
import expressAsyncHandler from "express-async-handler";

dotenv.config()

const sendEmail = expressAsyncHandler( async(req, res) => {

    const {name, email, number} = req.body;
    console.log(name, email, number)

    if(!name || !email || !number){
        return res.status(401).json({error: "All fields are required"})
    }

    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth:{
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PASS
        },
    });

    const mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: process.env.SMTP_RECEIVER_EMAIL,
        subject: `contact query from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nNumber: ${number}`,
    };

    await transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(`error in nodemailer email sending`, error)
        }else{
            console.log('Email sent successfully', info.response)
            return res.status(200).json({message: "Email sent successfully"})
        }
    })
});

export default sendEmail;