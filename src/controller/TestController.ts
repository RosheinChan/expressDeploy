import {NextFunction, Request, Response} from "express";
import { storage } from "..";

export class TestController {
    async hello(request: Request, response: Response, next: NextFunction) {
        response.send("Hello World!")
    }

    async greet(request: Request, response: Response, next: NextFunction){
        let greeting = request.query.greeting
        let username = request.params.username

        response.send(greeting +  ", "+ username)
    }
}