import React, { useState } from 'react'
import './Chat.css'
import { Avatar, IconButton } from "@material-ui/core" 
import { useEffect } from 'react';
import  MoreVertIcon  from "@material-ui/icons/MoreVert";
import MicIcon from "@material-ui/icons/Mic"
import { AttachFile, InsertEmoticon, SearchOutlined } from "@material-ui/icons";
import { useParams } from 'react-router-dom';
import db from './firebase';



function Chat() {

    const [ input, setInput ] = useState("");
    const [ seed, setSeed ] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId)
            .onSnapshot(snapshot => (
                setRoomName(snapshot.data().name)
            ))

            db.collection('rooms').doc(roomId).collection("messages").orderBy("timestamp","asc").onSnapshot(snapshot => {
                setMessages(snapshot.docs.map(doc => doc.data()))
            });
        }
    }, [roomId]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId] );

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("Typed>>>"+input);



        setInput("");
    }

    return (
        <div className="chat">

            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen at 10:10PM</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                     </IconButton>
                     <IconButton>
                        <AttachFile />
                     </IconButton>
                     <IconButton>
                        <MoreVertIcon />
                     </IconButton>
                </div>

            </div>

            <div className="chat__body">
                {messages.map(message => (
                    <p className="chat__message chat__receiver">
                    <span className="chat__name">{message.name}</span>
                    {message.message}
                    <span className="chat__timestamp">
                        {new Date(message.timestamp?.toDate()).toUTCString()}
                    </span>
                    </p>
                ))}
                
            </div>

            <div className="chat__footer">
                <InsertEmoticon />
                    <form action="">
                        <input value={input} onChange={(e) => 
                            setInput(e.target.value)
                        } placeholder="Type a message" type="text" />
                        <button onClick={sendMessage} type="submit">Send a message</button>
                    </form>
                <MicIcon />
            </div>
            
        </div>

    )
}
 
export default Chat
