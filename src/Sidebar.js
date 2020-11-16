import React from 'react';
import './Sidebar.css';

//icons 
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton} from '@material-ui/core';

function Sidebar() {
  return(
      <div className="sidebar">
          <div className="sidebar__header">
              <Avatar  src="https://avatars2.githubusercontent.com/u/45006908?s=460&u=886c48b82f23b3ff23ede6b03b729a9ad97e803e&v=4"/>
              <div className="sidebar__headerRight">
                  <IconButton>
                    <DonutLargeIcon />
                  </IconButton>

                  <IconButton>
                    <ChatIcon />
                  </IconButton>

                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
              </div>
          </div>
      </div>
  );
}

export default Sidebar;