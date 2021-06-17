import React, { useState } from 'react'
import './Chat.css'
import { Avatar, IconButton } from "@material-ui/core" 
import { useEffect } from 'react';
import  MoreVertIcon  from "@material-ui/icons/MoreVert";
import MicIcon from "@material-ui/icons/Mic"
import { AttachFile, InsertEmoticon, SearchOutlined } from "@material-ui/icons";



function Chat() {

    const [ input, setInput ] = useState("");
    const [ seed, setSeed ] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [] );

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
                    <h3>Room Name</h3>
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
                <p className="chat__message chat__receiver">
                    <span className="chat__name">Thomas Philip</span>
                    Hey GUys
                    <span className="chat__timestamp">
                        10:89 PM
                    </span>
                    </p>
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
