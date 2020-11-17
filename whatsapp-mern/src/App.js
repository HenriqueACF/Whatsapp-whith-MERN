import React from 'react';
import './App.css';

//Components
import SideBar from './Sidebar';
import Chat from './Chat';

function App() {
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
