//API code from Growth Team: This code is to be implemented where a diiferent team would like to use
//our API to send out emails
// file name: mailerAPI.js
function sendMail(emailAddress, emailSubject, emailHtml) {
    const data = {
        mail: {
            to: [
                emailAddress
            ],
            cc: "",
            bcc: "",
            subject: emailSubject,
            html: emailHtml,
        },
        isScheduled: "off",
        timeToSend: "",
    }

// API DOMAIN NEEDS TO BE CHANGED TO RENDER DOMAIN WHEN USED BY THE IAM GROUP
    const axios = require('axios').default;
    axios.post('https://mail-service-69zm.onrender.com/api/mail/sendMail', data)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });


}

module.exports = {
    sendMail,
};
//end of file: mailerAPI.js


//EXAMPLE CALL TO SENDMAIL FROM SOMEWHERE ELSE: *****************************

////FUNCTION DATA INPUTS:
////emailAddress : string
////emailSubject : string
////emailHtml : string

//const mailer = require("./IAM/mailerAPI.js") //or the rellevant path
const emailAddress = "sufkarmon2@gmail.com";
const emailSubject = "Welcome!";
// const emailHtmlPATH = {path: 'https://mail-service-69zm.onrender.com/api/mail/welcomeHTML'};
const ejs = require('ejs');
const emailHtml = ejs.renderFile(process.cwd() + '/IAM/welcome.html');
//const emailHtmlPATH = {path: htmlPATH};
// const emailHtmlPATH = "this mail is from render using mailer API";
// ***************************************************************************

//sendMail(emailAddress, emailSubject, emailHtml);


