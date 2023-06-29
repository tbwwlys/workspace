import { LoginEntity } from "../model/login";
 
export const isValidLogin = (login: LoginEntity): Promise<boolean> => 
    new Promise ((resolve) => {
        setTimeout(() => {
            resolve(login.login === "admin" && login.password === "test")
        }, 1000)
    })