const express = require('express');
const bodyparser = require('body-parser');
const {PORT} = require('./config/serverConfig');

const { sendBasicEmail } = require('./services/email-service');

const setupAndServer = ()=>{
        const app = express();
        app.use(bodyparser.json());
        app.use(bodyparser.urlencoded({extended:true}));

        app.listen(PORT,()=>{
                console.log(`Server started at PORT : ${PORT}`);

                //sendBasicEmail(
                //        'mohitankit710@gmail.com',
                //        'ankiitsingh21@gmail.com',
                //        'This is a testing email',
                //        'Hey , how are you ,I hope you like the support'
                //);
        });
}

setupAndServer();