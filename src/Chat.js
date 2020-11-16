import React from 'react';
import './Chat.css';

//material ui
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';


function Chat() {
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
            
        </div>
    </div>
  )
}

export default Chat;