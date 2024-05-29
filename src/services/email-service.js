const sender = require('../config/emailConfig');
const TicketRepository = require('../repository/ticket-repository');

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

const fetchPendingEmails = async(timestamp)=>{
        try {
                const repo = new TicketRepository();
                const response = await repo.get({status:"PENDING"});
                return response;
        } catch (error) {
                console.log(error);
        }
} 

const create= async(data)=>{
        try {
                const repo = new TicketRepository();
                const response = await repo.create(data);
                return response;
        } catch (error) {
                console.log(error);
        }
}

const updateTicket =async(ticketId, data)=>{
        try {
                const repo = new TicketRepository();
                const response = await repo.update(ticketId,data);
                return response;
        } catch (error) {
                console.log(error);
        }
}

module.exports={
        sendBasicEmail,
        fetchPendingEmails,
        create,
        updateTicket
}