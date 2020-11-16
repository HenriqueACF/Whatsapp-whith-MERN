import React from 'react';
import './App.css';

//Components
import SideBar from './Sidebar';
import Chat from './Chat';

function App() {
  return (
    <div className="App">

      {/* SideBar */}
      <SideBar />

      {/* ChatComponent */}
      <Chat />
    </div>
  );
}

export default App;
