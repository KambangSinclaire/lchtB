import io from "socket.io"

export class PrivateChats {

    constructor() {

    }
    public devCommunity(server: any) {
        const nameSpace = io(server);
        const devCommunity = nameSpace.of("/devCommunity");
        devCommunity.on('connection', (socket) => {
            socket.on('join', (data) => {
                socket.join(data.room, () => {
                    console.log(data.user + ' just joined our dev ' + data.room + ' group');
                    socket.broadcast.to(data.room).emit('connected', { user: data.user });
                })
            });
        });
    }
}