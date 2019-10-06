import React from 'react';
import {connect} from 'react-redux';

const _students = ({schools, students}) => {
  return (
    <ul>
    {
      students.map(student =>
      <li key = {student.id}>
        {student.firstName} {student.lastName} <p />
        GPA: {student.gpa}
        <select name = 'schools' onChange = {()=> updateStudent(student)}>
          <option defaultValue = "not enrolled"> --Not Enrolled--</option>
          {schools.map(s => (<option key={s.id} defaultValue= {s.id} selected = {s.id === student.schoolId ? true : false}>{s.name}</option>))}
        </select>
        <button onClick = {() =>destroyStudent(student.id)}>Destroy</button>
      </li> )
    }
    </ul>
  );
};

const mdp = (dispatch) => {
  return dispatch(updateStudent)
}

const Students = connect((state)=> state)(_students);


export default Students;
