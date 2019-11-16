import io from "socket.io";

export class GroupChats {


    constructor() {
        //
    }


    public studentCommunity(server: any) {
        const nameSpace = io(server);
        const studentCommunity = nameSpace.of("/studentCommunity");
        studentCommunity.on('connection', (socket) => {
            socket.on('join', (data) => {
                socket.join(data.room, () => {
                    console.log(data.user + ' just joined our student ' + data.room + ' group');
                    socket.broadcast.to(data.room).emit('connected', { user: data.user });
                })
            });
        });
    }

}
