import express from 'express'
import cors from 'cors'
import http from 'http'

let latestMsgId = 3

const users = [
    {
        userId: 'youssef',
        username: 'Youssef Attai',
        rooms: ['potato', 'asgard']
    },
    {
        userId: 'omar',
        username: 'Omar Taai',
        rooms: ['potato']
    },
    {
        userId: 'ashraf',
        username: 'AboAshraf',
        rooms: ['asgard']
    }
]

const rooms = [
    {
        roomId: 'potato',
        roomName: 'ThePotatoes',
        messages: [
            {
                messageId: 'msg1',
                sender: 'youssef',
                content: 'lol'
            },
            {
                messageId: 'msg2',
                sender: 'omar',
                content: 'damn'
            }
        ]
    },
    {
        roomId: 'asgard',
        roomName: 'Asgardians of the GALAxi',
        messages: [
            {
                messageId: 'msg3',
                sender: 'ashraf',
                content: 'ya sater'
            }
        ]
    },
]

const app = express();

app.use(cors())
app.use(express.json())

const server = http.createServer(app);
server.listen(3000, () => {
    console.log(`server running on http://localhost:${3000}`);
});

