import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

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
        Student count: {students.filter(s => s.schoolID === school.id).length}
        <select name = 'student'>
        <option defaultValue> --Add a Student--</option>
          {students.map(s => (<option key={s.id} value= {s.id}>{s.name}</option>))}
        </select>
      </li> )
    }
    </ul>
  );
};

const Schools = connect((state) => state)(_schools);
export default Schools;
