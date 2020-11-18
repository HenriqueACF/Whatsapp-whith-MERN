import React, { useEffect, useState } from 'react';
import './App.css';
import Pusher from 'pusher-js';
import axios from './axios';

//Components
import SideBar from './Sidebar';
import Chat from './Chat';


function App() {

  const [ messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync')
      .then(response => {
        setMessages(response.data)
      })
  }, [])

  useEffect(()=>{
    const pusher = new Pusher('a582f519bac68a7650ad', {
      cluster: 'us2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage)=> {
      setMessages(...messages, newMessage)
    });

    return() => {
      channel.unbind_all();
      channel.unsubscribe();
    };

  }, [messages])

  console.log(messages);

  return (
    <div className="App">
      <div className="app__body">
        {/* SideBar */}
        <SideBar />

          {/* ChatComponent */}
          <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
