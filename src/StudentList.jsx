import { useState } from 'react';
import { useStudents, useStudentsDispatch } from './StudentContext';


export default function StudentList() {
  const students = useStudents(); 
  return (
    <ul>
      {students.map(student => (
        <li key={student.id}>
          <StudentItem student={student} />
        </li>
      ))}
    </ul>
  );
}

function StudentItem({ student }) {
  const [isEditing, setIsEditing] = useState(false); 
  const [name, setName] = useState(student.name);
  const [marks, setMarks] = useState(student.marks); 
  const dispatch = useStudentsDispatch(); 

  
  let studentContent;

  if (isEditing) {
    studentContent = (
      <>
        <input
          value={name}
          onChange={e => setName(e.target.value)} 
        />
        <input
          type="number"
          value={marks}
          onChange={e => setMarks(parseInt(e.target.value, 10))} 
        />
        <button
          onClick={() => {
            dispatch({
              type: 'changed',
              student: {
                ...student,
                name,
                marks,
              },
            });
            setIsEditing(false); 
          }}
        >
          Save
        </button>
      </>
    );
  } else {
    studentContent = (
      <>
        {student.name} - {student.marks}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <div>
      {studentContent}
      <button onClick={() => {
        dispatch({
          type: 'deleted',
          id: student.id,
        });
      }}>
        Delete
      </button>
    </div>
  );
}
