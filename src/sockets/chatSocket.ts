import { Server, Socket } from "socket.io";

export const initsocket = (io: Server) => {
    io.on("connection", (socket: Socket) => {
        console.log("New user connected", socket.id);

        socket.on("Join Room", (room) => {
            socket.join(room);
            console.log(`${socket.id} joined room ${room}`)
        })

        socket.on("Send Message", ({room, message, sender}) => {
            io.to(room).emit("receiveMessage", {message, sender})
        })

        socket.on("disconnect", () => {
            console.log("User disconnected:", socket.id)
        })
    })
}