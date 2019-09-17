import {NextFunction, Request, Response} from "express";
import {storage} from '../index'

export class MessageController {
    async show(request: Request, response: Response, next: NextFunction) {
        let messageId = request.params.messageId
        for(let message of storage.messages){
            if(message.id === parseInt(messageId)){
                response.json(message)
                return
            }
        }
        response.send("Message not found")
    }

    async list(request: Request, response: Response, next: NextFunction) {
        let result = []
        let userId = request.query.userId

        if(!userId){
            result = storage.messages
        } else {
            for(let message of storage.messages){
                if(message.user_id === parseInt(userId) ){
                    result.push(message)
                }
            }
        }

        response.json(result)
    }

    async create(request: Request, response: Response, next: NextFunction){
        let messageData = request.body
        storage.messages.push({
            id: storage.messages.length + 1,
            text: messageData.text,
            user_id: messageData.user_id,
            datetime: messageData.datetime
        })
        response.send("Successfully created message")
    }
}