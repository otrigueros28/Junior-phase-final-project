import React from 'react';
import { connect } from 'react-redux';


const _Home = ({schools, students}) => {
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
      <h1>Home</h1>
      <div>
        Our most popular school is {finalP.name}. <p />
        Our top performing school is {topGpa.name} at {highGPA} GPA.
      </div>
    </div>
  );
};

const Home = connect(({schools, students}) => {return {schools, students}})(_Home);

export default Home;
