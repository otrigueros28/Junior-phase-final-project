import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {updateStudent} from '../store.js'


const _schools = ({schools, students}) => {

  return (
    <ul>
    {
      schools.map(school =>
      <li key = {school.id}>
      <Link to = {`/schools/${school.id}`}>
        {school.name}
      </Link>
        <img src = {school.imageURL} />
        Student count: {students.filter(stu => stu.schoolId === school.id).length}
        <select name = 'student'onChange = {()=> updateStudent(student)} >
        <option defaultValue> --Add a Student--</option>
          {students.map(s => <option key={s.id} value= {s.id}>{s.firstName} {s.lastName}</option>)}
        </select>
      </li> )
    }
    </ul>
  );
};

const Schools = connect(({schools, students}) => {return {schools, students}})(_schools);
export default Schools;
