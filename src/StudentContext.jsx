import React, { createContext, useContext, useReducer } from 'react';

const initialStudents = [
  { id: 1, name: 'Tessa', marks: 23 },
  { id: 2, name: 'Aarsh', marks: 24 },
  { id: 3, name: 'v', marks: 4 },
];

const StudentsContext = createContext(null);
const StudentsDispatchContext = createContext(null);

export function StudentsProvider({ children }) {
  const [students, dispatch] = useReducer(studentsReducer, initialStudents);

  return (
    <StudentsContext.Provider value={students}>
      <StudentsDispatchContext.Provider value={dispatch}>
        {children}
      </StudentsDispatchContext.Provider>
    </StudentsContext.Provider>
  );
}

export function useStudents() {
  return useContext(StudentsContext);
}

export function useStudentsDispatch() {
  return useContext(StudentsDispatchContext);
}

function studentsReducer(students, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...students,
        {
          id: action.id,
          name: action.name,
          marks: action.marks,
        },
      ];
    }
    case 'changed': {
      return students.map(student => 
        student.id === action.student.id ? action.student : student
      );
    }
    case 'deleted': {
      return students.filter(student => student.id !== action.id);
    }
    default: {
      throw new Error('Unknown action: ' + action.type);
    }
  }
}
