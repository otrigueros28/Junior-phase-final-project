import { Link } from 'react-router-dom';
import React from 'react';
import  CreateStudent  from './CreateStudent';

const Nav = ({schools, students}) =>{
  return (
    <div>
    <nav>
      <Link to = '/'>Home</Link>
      <Link to ='/schools'> Schools()</Link>
      <Link to = '/students'> Students()</Link>

    </nav>
    <div>
      <CreateStudent />
    </div>
    </div>
  );
}

export default Nav;
