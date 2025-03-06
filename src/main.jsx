import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { StudentsProvider } from './StudentContext';
import StudentList from './StudentList';
import AppLayout from './App.jsx'
import Trial from './trial.jsx'
import Ref from './useRef.jsx'
import AddStudent from './AddStudent.jsx';
// import AppLayout from './App.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StudentsProvider>
       <h1>Student List</h1>
       <AddStudent/>
       <StudentList />
     </StudentsProvider>
    {/* <AppLayout /> */}
    {/* <Trial/> */}
    {/* <Ref/> */}
  </StrictMode>,
)

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client'
// import { StudentsProvider } from './StudentContext';
// import StudentList from './StudentList';

// function App() {
//   return (
//     <StudentsProvider>
//       <h1>Student List</h1>
//       <StudentList />
//     </StudentsProvider>
//   );
// }

// ReactDOM.render(<App />, document.getElementById('root'));

