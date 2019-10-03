const {combineReducers, createStore, applyMiddleware} = redux;

const SET_STUDENTS = 'SET_STUDENTS';
const SET_SCHOOLS = "SET_SCHOOLS";
const CREATE_STUDENT =  'CREATE_STUDENT';
const DESTROY = 'DESTROY';
const UPDATE_STUDENT = 'UPDATE_STUDENT';

const schoolReducer = (state = [], action) => {
  switch (action.type){
    case SET_SCHOOLS:
      return action.schools
    }
    return state;
  };

const studentReducer = (state =  [], action) => {
  switch(action.type){
    case SET_STUDENTS:
      return action.students;
    case CREATE_STUDENT:
      return [...state, action.student];
    case DESTROY:
      return state.filter(student => student.id !== action.student.id);
    case UPDATE_STUDENT:
      return state.map(student => student.id === action.student.id ? action.student : student)
  }
  return state;
}

const reducer = combineReducers({
  schools: schoolReducer,
  students: studentReducer
});

const settingStudents = (students) => ({type: SET_STUDENTS, students});
const settingSchools = (schools) => ({type: SET_SCHOOLS, schools});
const destroyingStudent = (id) => ({type: DESTROY, id});
const createingStudent = (student) => ({type: CREATE_STUDENT, student})
const updatingStudent = (student) => ({type: UPDATE_STUDENT, student});

const setStudents = () => {
  return async(dispatch) => {
    const students = (await axios.get('api/students')).data;
    return dispatch(settingStudents(students));
  }
};
const setSchools = () => {
  return async (dispatch) => {
    const schools = (await axios.get('api/schools')).data;
    return dispatch(settingSchools(schools));
  }
};

const destroyStudent = (id) => {
  return async (dispatch) => {
    await axios.delete(`api/student/${id}`);
    return dispatch(destroyingStudent(id))
  }
};

const createStudent = ()=> {
  return async (dispatch) => {
    const newstudent = (await axios.post('api/students', student));
    return dispatch(createingStudent(newstudent))
  }
};

const updateStudent = (id, schoolId)=> {
  return async (dispatch) => {
    const student = (await axios.put(`api/students/${id}`, {schoolId}))
    return dispatch(updatingStudent(student))
  }
};


const store = createStore(reducer, applyMiddleware(thunk));

export default store;
export {setStudents, setStudents, createStudent, destroyStudent, updateStudent};
