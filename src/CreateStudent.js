import React from 'react';
import { connect } from 'react-redux';
import { createStudent } from './store';

const _Create = ({schools, createStudent}, props) =>{
  return (
    <form id = 'createS' onSubmit = {(ev)=>this.props.createStudent(ev.target.value)} >
      <label>
        First Name: <input type = "text" name = "firstName" required></input>
      </label>
      <label>
        Last Name:  <input type = "text" name = "lastName" required></input>
      </label>
      <label>
        Email: <input type = "text" name = "email" required></input>
      </label>
      <label>
        GPA: <input type='decimal' name = 'gpa' required></input>
      </label>
      <label>
        Enrolled at: <select name = 'school'>
        <option defaultValue> --Pick a School--</option>
          {schools.map(s => (<option key={s.id} value= {s.id}>{s.name}</option>))}
        </select>
      </label>
      <button type="submit"> Save</button>
    </form>
  )
}

const mdp = (dispatch) =>{
  return {
    createStudent: (ev)=> {
     const student = {
        firstName: ev.target.firstName.value,
        lastName: ev.target.lastName.value,
        email: ev.target.email.value,
        gpa: ev.target.gpa.value,
        schoolId: ev.target.school.id.value
      }
    ev.preventDefault();
    dispatch(createStudent(student));
}}
};

const CreateStudent = connect((state) => {return {students: state.students, schools: state.schools}}, mdp)(_Create)
export default CreateStudent
