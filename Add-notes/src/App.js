
import { useState } from 'react';
import './App.css';
import CreateArea from './components/CreateArea';
import Footer from './components/keeper_part1/Footer';
import Header from './components/keeper_part1/Header';
import Note from './components/keeper_part1/Note';






function App() {

 const [notes,setNotes]=useState([]);
  

  function addNote(note)
  {
   setNotes(prevNotes =>{
     return [...prevNotes,note]
   })
  }


  function deleteNote(id)
  {
    setNotes(prevNotes =>
      {
        return prevNotes.filter((noteItem,index) =>
        {
          return index !==id;
        })
      })
  }

  
  
  return (
    <div>
    <Header ></Header>

   <CreateArea onAdd={addNote} />
   
   
  {notes.map( (noteItem,index) =>{
    return <Note
    key={index}
    id={index}
     title={noteItem.title}
    content={noteItem.content}
    onDelete={deleteNote} />
  })}

    
    <Footer></Footer>
 
    
    
    </div>
  );
}

export default App;
