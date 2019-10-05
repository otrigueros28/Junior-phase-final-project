import React from 'react';
import {connect} from 'react-redux';
import {destroyStudent} from '../store.js'

const _students = ({schools, students}) => {
  return (
    <ul>
    {
      students.map(student =>
      <li key = {student.id}>
        {student.firstName} {student.lastName}
        GPA: {student.gpa}
        <select name = 'schools'>
          <option defaultValue= {student.schoolId}> --Not Enrolled--</option>
          {schools.map(s => (<option key={s.id} value= {s.id}>{s.name}</option>))}
        </select>
        <button onClick = {() => destroyStudent(student.id)}>Destroy</button>
      </li> )
    }
    </ul>
  );
};

const Students = connect((state)=> state)(_students);


export default Students;
