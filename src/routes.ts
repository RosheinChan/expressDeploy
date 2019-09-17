import {TestController} from "./controller/TestController";
import { UserController } from "./controller/UserController";
import { MessageController } from "./controller/MessageController";

export const Routes = [
    {
        method: "get",
        route: "/hello",
        controller: TestController,
        action: "hello"
    },
    {
        method: "get",
        route: "/users",
        controller: UserController,
        action: "list"
    },
    {
        method: "get",
        route: "/users/:userId",
        controller: UserController,
        action: "show"
    },
    {
        method: "get",
        route: "/api/messages/:messageId",
        controller: MessageController,
        action: "show"
    },
    {
        method: "get",
        route: "/api/messages",
        controller: MessageController,
        action: "list"
    },
    {
        method: "get",
        route: "/api/greet/:username",
        controller: TestController,
        action: "greet"
    },
    {
        method: "post",
        route: "/api/signup",
        controller: UserController,
        action: "create"
    },
    {
        method: "post",
        route: "/api/messages",
        controller: MessageController,
        action: "create"
    },
    {
        method: "post",
        route: "/api/users/:userId/images",
        controller: UserController,
        action: "addImage"
    },
];