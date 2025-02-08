import { Request, Response } from "express"


export const getChats = async (req: Request, res: Response) => {
    try {
        console.log("chats here")
        res.json({ message: "chat here" })
    } catch (error) {
        console.log("error", error)
    }
}