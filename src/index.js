const express = require('express');
const bodyparser = require('body-parser');
const {PORT} = require('./config/serverConfig');

//const { sendBasicEmail } = require('./services/email-service');
const jobs = require('./utils/jobs');
const TicketController=require('./controller/ticket-controller');


const setupAndServer = ()=>{
        const app = express();
        app.use(bodyparser.json());
        app.use(bodyparser.urlencoded({extended:true}));

        app.post('/api/v1/tickets', TicketController.create);

        app.listen(PORT,()=>{
                console.log(`Server started at PORT : ${PORT}`);
                jobs();
                //sendBasicEmail(
                //        'mohitankit710@gmail.com',
                //        'savitasingh6259@gmail.com',
                //        'This is a testing email',
                //        'Hey , how are you ,I hope you like the support'
                //);
        });
}

setupAndServer();