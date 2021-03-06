import React, { useState } from 'react';
import './Chat.css';

//axios
import axios from './axios';

//material ui
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function Chat({ messages }) {

    const [input, setInput ] = useState('')

    const sendMessage = async (e) => {
        e.preventDefault();
        // if no input and hit 'Enter' then do nothing
        if(input === ''){
            return;
        } else {
            await axios.post('/messages/new',{
                message: input,
                name: 'Demo App',
                timestamp: 'Just Now',
                received: true,
            });
        }
        //clear input folder
        setInput('');
    };

  return( 
    <div className="chat">
        <div className="chat__header">
            <Avatar />

            <div className="chat__headerInfo">
                <h3>Room Name</h3>
                <p>Last seen at...</p>
            </div>

            <div className="chat__headerRight">
                <IconButton>
                    <SearchOutlined />
                </IconButton>

                <IconButton>
                    <AttachFile />
                </IconButton>

                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>
        </div>

        <div className="chat__body">
            {messages?.map((message) =>(
                
            <p className={`chat_message 
                    ${message.received  
                    && 'chat__reciver'}
                `}
            >
                    <span className="chat__name"> {message.name} </span>
                        {message.message}
                    <span className="chat__timestamp">
                        {message.timestamp}
                    </span>
                </p>

            ))}
 
        </div>


        <div className="chat__footer">
            <InsertEmoticonIcon />
            <form>
                <input 
                    value={input}
                    onChange={e =>setInput(e.target.value)} 
                    type="text" placeholder="Type a message" 
                />
                <button onClick={sendMessage} type="submit">Send a message</button>
            </form>
            <MicIcon />
        </div>

    </div>
  )
}

export default Chat;