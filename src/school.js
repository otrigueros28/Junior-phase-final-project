import React from 'react';
import { connect } from 'react-redux';
import Students from './Students';

const _School = ({school, theirStudents }) => {

  return (
    <div>
      <h3>{school.name} ({theirStudents.length} Students Enrolled)</h3>
      <select name = 'student'>
        <option disabled selected value> Add a Student</option>
        {students.map(s => (<option key={s.id} value= {s.id}>{s.name}</option>))}
      </select>
        <ul>
          { theirStudents.map(s => {
            return <li key={s.id}>
              <Students student={ student } />
            </li>
          }) }
        </ul>
    </div>
  )
}

const mdp = ({ schools, students }, { match }) => {
  const school = schools.find(school => school.id === match.params.id)
  const theirStudents = students.filter(student => student.schoolId === match.params.id);
  return {
    school,
    theirStudents
  }
}

const School = connect ((state)=> state, mdp)(_School);

export default School;
