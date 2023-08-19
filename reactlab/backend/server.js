const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors'); // Import the cors middleware

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors()); // Use the cors middleware

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'server.side.portfolio@gmail.com',
        pass: 'iamserver123',
    },
});

app.post('/api/submit-form', async (req, res) => {
    try {
        const formData = req.body;

        // Create email content
        const emailContent = `
      Name: ${formData.firstName}
      Email: ${formData.email}
      Type: ${formData.type}
      Comment: ${formData.comment}
    `;

        // Send email
        await transporter.sendMail({
            from: 'server.side.portfolio@gmail.com',
            to: 'max.loshak.i@gmail.com', // Change this to your desired email address
            subject: 'New Contact Form Submission',
            text: emailContent,
        });

        res.json({ success: true, message: "Form submitted successfully." });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, message: "An error occurred while submitting the form." });
    }
});

