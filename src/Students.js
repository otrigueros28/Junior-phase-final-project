import React from 'react';
import {connect} from 'redux';

const _students = ({schools, students}) => {
  return (
    <ul>
    {
      students.map(student =>
      <li key = {student.id}>
        {student.name}
        GPA: {student.gpa}
        <select name = 'schools'>
          <option disabled selected value> Not Enrolled</option>
          {schools.map(s => (<option key={s.id} value= {s.id}>{s.name}</option>))}
        </select>
        <button onClick = {() => destroy(student.id)}>Destroy</button>
      </li> )
    }
    </ul>
  );
};

const Students = connect((state)=> state)(_students);


export default Students;
