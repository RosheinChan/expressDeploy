import {NextFunction, Request, Response} from "express";
import {storage} from '../index'

export class UserController {
    async list(request: Request, response: Response, next: NextFunction) {
        let result = []
        for(let user of storage.users){
            if(user.country === request.query.country){
                result.push(user)
            }
        }
        if(!request.query.country){
            result = storage.users
        }

        response.json(result)
    }

    async show(request: Request, response: Response, next: NextFunction) {
        let userId = request.params.userId
        for(let user of storage.users){
            if(user.id === parseInt(userId)){
                response.json(user)
                return
            }
        }
        response.send("User not found")
    }

    async create(request: Request, response: Response, next: NextFunction){
        let user = {
            "id": storage.users.length + 1,
            "avatar": request.body.avatar,
            "username": request.body.username,
            "country": request.body.country,
            "images": []
        }
        storage.users.push(user)


        response.json(user)
    }

    async addImage(request: Request, response: Response, next: NextFunction){
        let imageUrl = request.body.image_url
        let userId = request.params.userId

        for(let user of storage.users){
            if(user.id === parseInt(userId)){
                user.images.push(imageUrl)
                response.send("Image added to user of user id " + userId )
                break
            }
        }
        
        response.send("User not found")
    }
}