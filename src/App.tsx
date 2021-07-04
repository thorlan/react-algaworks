import { useState } from "react";
import './App.css';
import Card from "./components/Card";
import Form from "./components/Form";
import Post from './components/Post';


function App() {

  const [post] = useState({
    title: 'Título Maneiro',
    content: 'Lorem Ipsum dolor sit amet'
  })

  return (
    <div className="App">
      <header className="App-header">
       
       {/*  <Card title={"a"}>
          <Post post={post} totalComments={12}/>
        </Card> */}

        <Form/>
        
      </header>
    </div>
  );
}

export default App;
