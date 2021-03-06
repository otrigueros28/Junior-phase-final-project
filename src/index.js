import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { Provider, connect} from "react-redux";
import store, { setStudents, setSchools } from './store';
import Nav from './Nav';
import Home from './Home'
import Students from './Students';
import Schools from './Schools';
import School from './School';

class _App extends React.Component {
  componentDidMount(){
    this.props.fetchData()
  }
  render (){
    return (
      <HashRouter>
          <Route component={ Nav } />
          <Route path='/' component={ Home } exact />
          <Route path='/students' component={ Students } />
          <Route path='/schools' exact component={ Schools } />
          <Route path='/schools/:id' component={ School } />
      </HashRouter>
    )
  }
}

const mdp = (dispatch) =>{
  return {
    fetchData: ()=>{
      dispatch(setSchools());
      dispatch(setStudents());
    }
  }
};


const App = connect(null, mdp)(_App);

ReactDOM.render(<Provider store ={store}><App /></Provider>, root);
