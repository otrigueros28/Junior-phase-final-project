import React from 'react';
import {connect} from 'react-redux';
import {destroyStudent, updateStudent} from './store.js'


const _Students = ({schools, students, updateStudent, destroyStudent}) => {
  return (
    <ul>
    {
      students.map(student =>
      <li key = {student.id}>
        {student.firstName} {student.lastName} <p />
        GPA: {student.gpa}
        <select name = 'schools' onChange = {(ev)=> updateStudent({ schoolId: ev.target.value})} value ={student.schoolID}>
          <option defaultValue = "not enrolled"> --Not Enrolled--</option>
          {schools.map(s => (<option key={s.id} defaultValue= {s.id} selected = {s.id === student.schoolId ? true : false}>{s.name}</option>))}
        </select>
        <button onClick = {()=> destroyStudent(student.id) }>Destroy</button>
      </li> )
    }
    </ul>
  );
};

const mdp = (dispatch) => {
  return {
   updateStudent: (student)=> dispatch(updateStudent(student)),
   destroyStudent: (student) => dispatch(destroyStudent(student))
}}

const Students = connect((state)=> state, mdp)(_Students);


export default Students;
