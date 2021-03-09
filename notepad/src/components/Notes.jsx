import React, { useEffect, useState, useParams } from 'react';

const Notes = () => { 
    // const { id } = useParams();//grab the id for the blog id   
    const [notes, setNotes] = useState([{
        title: '',
        content: '',
        author: ''
    }]);

    useEffect(() => {
        fetch('/notes')
        .then(res => {
            if(res.ok) {
                return res.json();
            }
        })
        .then(jsonRes => setNotes(jsonRes));
    });

    // const handleClick = () => {
    //     fetch('/notes' + notes.id, {
    //         method: 'DELETE'
    //     })
    //     .then(() => {
    //         console.log('the notepad has been deleted');
    //     });
    // };

    return  <div className='container'>
                <h1>These are your notes:</h1>
                {notes && notes.map(note => 
                <div>
                    <h2>{note.title}</h2>
                    <p>{note.content}</p> 
                    <p>Written by {note.author}</p>
                    {/* <button onClick={handleClick}>DELETE</button>*/}
                    <button>This button is temporary but will be delete</button>
                </div>                
                )}
            </div>             
      
}
 
export default Notes;