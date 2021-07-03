import { useState } from "react";

import './App.css';
import Card from "./components/Card";
import Post from './components/Post';
import SideBar from './components/SideBar';

function App() {

  const [post] = useState({
    title: 'Título Maneiro',
    content: 'Lorem Ipsum dolor sit amet'
  })

  return (
    <div className="App">
      <header className="App-header">
        <Card title={"a"}>
          <Post post={post} totalComments={12}/>
        </Card>
      </header>
    </div>
  );
}

export default App;
