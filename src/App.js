import './App.css';
import Main from './components/Main';
import {  Route, BrowserRouter, Switch } from 'react-router-dom';
import DataBase from './components/bd/DataBase';
import BookInfo from './components/bookInfo';
import Text from './components/Text';


function App() {

  return (
    < BrowserRouter >
      <div className="App dark-theme">
        <Switch>
          <Route
            exact path='/'
            component={Main}
          />
          <Route
            path='/news'
            component={Main}
          />
          <Route
            path='/books'
            component={BookInfo}
          />
          <Route
            path='/database'
            component={DataBase}
          />
          <Route
            path='/text'
            component={Text}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );}
export default App;
