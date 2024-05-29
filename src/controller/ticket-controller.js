const { response } = require('express');
const TicketService = require('../services/email-service');

const create =async(req,res)=>{
        try {
                const response = await TicketService.create(req.body);
                return res.status(201).json({
                        success:true,
                        data:response,
                        err:{},
                        message:'Successfully registered an email remainder'
                });
        } catch (error) {
                //console.log(error);
                return res.status(500).json({
                        success:false,
                        data:response,
                        err:error,
                        message:'unable to register an email remainder'
                });
        }
}

module.exports={
        create
}