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
      <Link to = '/students/:id'>Most Popular - </Link>
      <Link to = '/students/:id'>Highest GPA - </Link>
    </nav>
    <div>
      <CreateStudent />
    </div>
    </div>
  );
}
/////////most Popular, topgpas some reason getting an undefined


// const popS = (students, schools) => {

// const vals = students.map(s => {
// //   const val = {};
// //   if(val[s.schoolId]){
// //     val[s.schoolId]++
// //   } else {
// //     val[s.schoolId] = 1
// //   }
// //   return val
// // });

// // const pop = schools.map(school => {
// //   const highNum = students.filter(stu => stu.schoolId === school.id).length;
// //   if(vals[school.id] === highNum){
// //     return Object.Keys(val[school.id]);
// //   }
// // });
// // const popSchool = schools.filter( s => s.id === pop ? s : null);
// return popSchool; }
// console.log(popS);

////////////////////////stuck on topgpa

/* find students who attend, of those who attend, find average, sort for highest => place into object with school as key, avg as value, then find max in object */

// const topgpa = (schools, students) => {
//   const gpas = {};
//   students.map(s => {
//     if(!gpas[s.schoolId]) {
//       gpas[s.schoolId] = [];
//       gpas[s.school.id].push(s);
//     }
//     if(gpas[s.schoolId]){
//       gpas[s.school.id].push(s);
//     }});
//     const schs = Object.keys(gpas);
//     const mapped = schs.map(i => i.reduce((sum, it)=> sum + it.gpa, 0)/i.length);
//     const idx = mapped.indexOf(Math.max(...mapped));
//     const highschool = schs[idx];
//     const school = schools.map(s => s.id === highschool);
//     return school;
// }

const Nav = connect((state) => state)(_Nav)
export default Nav;

