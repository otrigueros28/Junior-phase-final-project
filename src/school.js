import React from 'react';
import { connect } from 'react-redux';
import {destroyStudent, updateStudent} from '../store.js'


const _School = ({school, students, theirStudents, schools, destroyStudent}) => {
  return (
  <div>
      <h3> { school[0].name } ({theirStudents.length} Students Enrolled)</h3>
      <select name = 'student'onChange = {updateStudent} >
        <option defaultValue> --Add a Student--</option>
          {students.map(s => <option key={s.id} value= {s.id}>{s.firstName} {s.lastName}</option>)}
        </select>
       <ul>
          { theirStudents.map(student => {
            return (
              <li key = {student.id}>
              {student.firstName} {student.lastName} <p />
              GPA: {student.gpa}
              <select name = 'schools' onChange = {updateStudent} value ={student.schoolID}>
                <option defaultValue = "not enrolled"> --Not Enrolled--</option>
                {schools.map(s => (<option key={s.id} defaultValue= {s.id} selected = {s.id === student.schoolId ? true : false}>{s.name}</option>))}
              </select>
              <button onClick ={destroyStudent}>Destroy</button>
            </li> )})}
          </ul>
          </div>
    )};


const mdp = ({ schools, students }, { match }) => {
  const school = schools.filter(school => school.id === match.params.id);
  const theirStudents = students.filter(student => student.schoolId === match.params.id);
  return {
    school,
    students,
    schools,
    theirStudents
  }
}

const School = connect(mdp)(_School);
export default School;



//{schools.filter(s => s.id === student.schoolID).imageURL ? <img src = {imageURl} /> : null }
