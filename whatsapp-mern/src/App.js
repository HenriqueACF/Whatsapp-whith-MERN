import React, { useEffect } from 'react';
import './App.css';
import Pusher from 'pusher-js';

//Components
import SideBar from './Sidebar';
import Chat from './Chat';



function App() {

  useEffect(()=>{
    const pusher = new Pusher('a582f519bac68a7650ad', {
      cluster: 'us2'
    });

    const channel = pusher.subscribe('my-channel');
    channel.bind('inserted', (data)=> {
      alert(JSON.stringify(data));
    });
  }, [])

  return (
    <div className="App">
      <div className="app__body">
        {/* SideBar */}
        <SideBar />

          {/* ChatComponent */}
          <Chat />
      </div>
    </div>
  );
}

export default App;
