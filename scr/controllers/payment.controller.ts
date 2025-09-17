import { Payment } from "../entities/Payment.js";
import { PaymentRepository } from "../shared/db/repository/payment.repository.js";
import { handlerError } from "../utils/error.handler.js";
import { Request, Response } from "express";

export class PaymentController  {
  constructor(){}

  // CREATE
  createPayment = (req: Request, res: Response) => {
    try{

    } catch(e){
      handlerError(res, 'payment not created')
    }
  }


  // READ
  getPayments = (req: Request, res: Response) => {
    try{

    } catch(e){
      handlerError(res, 'payment not created')
    }
  }
  
  getPaymentByID = (req: Request, res: Response) => {
    try{

    } catch(e){
      handlerError(res, 'payment not created')
    }
  }
  // UPDATE
  updatePayment = (req: Request, res: Response) => {
    try{

    } catch(e){
      handlerError(res, 'payment not created')
    }
  }

  // DELETE
  removePayment = (req: Request, res: Response) => {
    try{

    } catch(e){
      handlerError(res, 'payment not deleted')
    }
  }

}