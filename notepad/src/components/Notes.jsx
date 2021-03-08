import React, {useEffect, useState} from 'react';

const Notes = () => {
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

    return <div className='container'>
            <h1>These are your notes:</h1>
            {notes.map(note => 
            <div>
                <h2>{note.title}</h2>
                <p>{note.content}</p> 
                <p>{note.author}</p>
            </div>                
            )}
        </div>          
      
}
 
export default Notes;