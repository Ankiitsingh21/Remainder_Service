const sender = require('../config/emailConfig');

const sendBasicEmail = async (mailFrom, mailTo , mailsubject, mailBody) => {
        try {
                const response = await sender.sendMail({
                        from:mailFrom,
                        to:mailTo,
                        subject:mailsubject,
                        text:mailBody
                });
                console.log(response);  
        } 
        catch (error) {
                console.log(error);
        }
}

module.exports={
        sendBasicEmail
}