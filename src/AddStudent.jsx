import { useState } from 'react';
import { useStudentsDispatch } from './StudentContext';

export default function AddStudent() {
  const [name, setName] = useState('');  
  const [marks, setMarks] = useState(''); 
  const dispatch = useStudentsDispatch();

  return (
    <>
      <input
        placeholder="Enter student name"
        value={name}
        className='input'
        onChange={e => setName(e.target.value)} 
      />
      <input
        type="number"
        placeholder="Enter marks"
        value={marks}
        className='input'
        onChange={e => setMarks(e.target.value)} 
      />
      <button
        onClick={() => {
          if (name && marks) {
            dispatch({
              type: 'added',
              id: nextId++,
              name: name,
              marks: parseInt(marks, 10), 
            });
            setName(''); 
            setMarks('');
          }
        }}
      >
        Add Student
      </button>
    </>
  );
}

let nextId = 4; 
