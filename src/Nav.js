import { Link } from 'react-router-dom';
import React from 'react';
import  CreateStudent  from './CreateStudent';
import { connect } from 'react-redux';


const _Nav = ({schools, students}) =>{
  return (
    <div>
    <nav>
      ACME Schools
      <Link to = '/'>Home</Link>
      <Link to ='/schools'> Schools ({schools.length})</Link>
      <Link to = '/students'> Students({students.length})</Link>

    </nav>
    <div>
      <CreateStudent />
    </div>
    </div>
  );
}

const Nav = connect((state) => state)(_Nav)
export default Nav;





// const vals = students.map(stu => {
//   const val = {};
//   if(val[stu.schoolId]){
//     val[stu.schoolId]++
//   } else {
//     val[stu.schoolId] = 1
//   }
//   return val
// });

// const pop = schools.map(school => {
//   const highNum = students.filter(stu => stu.schoolId === school.id).length;
//   if(vals[school] === highNum){
//     return Object.Key(val[school]);
//   }
// });
// const popSchool = schools.find( s => s.name === pop);

