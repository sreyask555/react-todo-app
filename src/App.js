import React from 'react';
import Todolist from './component/TodoApp/Todolist';
import Header from './component/Header/Header';
import About from './component/About/About';
import {BrowserRouter as Router, Route} from 'react-router-dom';

export default () => {
    return(
        <Router>
            <Header/>
            <Route path='/' exact component={Todolist} />
            <Route path='/about' component={About} />
        </Router>
    );
}

//OR
// const App = () => <Todolist />
// export default App;
//OR
// class App extends Component{
//   render() {
//     return(
//       <div>
//         <Todolist />
//       </div>
//     );
//   }
// }