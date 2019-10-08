import { Link } from 'react-router-dom';
import React from 'react';
import  CreateStudent  from './CreateStudent';
import { connect } from 'react-redux';


const _Nav = ({schools, students}) =>{
  const gpas = {};
  const newstudents = students.filter( s => s.schoolId !== null);
  newstudents.map(s => {
    if(!gpas[s.schoolId]) {
      gpas[s.schoolId] = [];
      gpas[s.schoolId].push(s);
    }
    if(gpas[s.schoolId]){
      gpas[s.schoolId].push(s);
    }});
  const schs = Object.keys(gpas);
  const mapped = schs.map(item => gpas[item]);
  const average = mapped.map(item => item.reduce((sum, i) => sum + Number(i.gpa), 0) / item.length );
  const highGPA = Math.max(...average);
  const idx = average.indexOf(Math.max(...average));
  const highschool = schs[idx];
  const topG = schools.filter(s => s.id === highschool);
  const topGpa ={...topG[0]};

  let val = {};
  const vals = students.map(s => {
      if(!val[s.schoolId]){
        val[s.schoolId] =1
      } else {
        val[s.schoolId] ++
      }
    });
  const id = Object.keys(val).reduce((a, b) => val[a] - val[b] ? a :b, 0);
  const popS = schools.filter(i => i.id === id);
  const finalP = {...popS[0]};
  return (
    <div>
    <nav>
      ACME Schools
      <Link to = '/'>Home</Link>
      <Link to ='/schools'> Schools ({schools.length})</Link>
      <Link to = '/students'> Students({students.length})</Link>
      <Link to = {`/schools/${finalP.id}`}>Most Popular - {finalP.name}</Link>
      <Link to = {`/schools/${topGpa.id}`}>Top GPA - {topGpa.name} ({highGPA})</Link>
    </nav>
    <div>
      <CreateStudent />
    </div>
    </div>
  );
};


const msp = ({schools, students})=> {
  return {
    schools,
    students,
  }
}

const Nav = connect(msp)(_Nav)
export default Nav;

