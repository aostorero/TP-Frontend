import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import clienteAxios from './config/axios';
//components
import People from './components/People';
import NewPerson from './components/NewPerson'
import Person from './components/Person'
import EditPerson from './components/EditPerson';
function App() {
  //state de la app
  const [people, savePeople] = useState([]);
  const [check, reCheck] = useState(true);

  useEffect(() => {
    if (check) {
      const consultApi = () => {
        clienteAxios.get('/people')
          .then(res => {
            savePeople(res.data);
            reCheck(false);
          })
          .catch(err => console.log(err));
      }
      consultApi();
    }
  }, [check]);

  return (
    //las rutas tienen que estar adentro de un switch, que esta adentro del router
    <Router>
      <Switch>
        <Route
          //url que ingresa el usuario
          exact path="/"
          component={() => <People people={people}/>}
        />
        <Route
          exact path="/new"
          component={() => <NewPerson reCheck={reCheck}/>}
        />
        <Route
          exact path="/people/:id"
          render={(props) => {
            const person = people.filter(p => p.id === props.match.params.id);
            console.log(person);
            return(
              <Person person={person} reCheck={reCheck}/>
            )
          }}
        />
        <Route
          exact path="/edit/:id"
          render={(props) => {
            const person = people.filter(p => p.id === props.match.params.id);
            console.log(person);
            return(
              <EditPerson person={person} reCheck={reCheck}/>
            )
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
