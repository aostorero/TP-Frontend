import React, {Fragment, useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import clienteAxios from '../config/axios';

const UpdatedPerson = (props) => {
    //generate state as an object
    const [person, savePerson] = useState({
        name: '',
        birthday: '',
        home_address: '',
        sex: ''
    });

    //get data from form
    const updateState = e => {
        savePerson({
            ...person,
            [e.target.name] : e.target.value
        })
    }

    //send data to db
    const updatePerson = e =>{
        e.preventDefault();
        //send via axios
        clienteAxios.put(`/people/${props.person[0].id}`, person)
            .then(res => {
                console.log(res);
                props.reCheck(true);
                //redirect
                props.history.push('/');
            })
            .catch(e => {console.log(e);});
    }

    return (
        <Fragment>
            <h1 className="my-5">Update person</h1>
            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Go back</Link>
                    </div>
                </div>
            </div>

            <div className="col-md-8 mx-auto">
            <form onSubmit={updatePerson} className="bg-white p-5 bordered">
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
                type="text" 
                className="form-control form-control-lg" 
                id="name" 
                name="name" 
                placeholder="Name" 
                onChange={updateState}
            />
        </div>

        <div className="form-group">
            <input type="radio" id="male" name="sex" value="M" onChange={updateState}/>
            <label for="male">Male</label><br></br>
            <input type="radio" id="female" name="sex" value="F" onChange={updateState}/>
            <label for="female">Female</label><br></br>
            <input type="radio" id="other" name="sex" value="O" onChange={updateState}/>
            <label for="other">Other</label>
        </div>

        <div className="form-group">
            <label htmlFor="propietario">Birthday</label>
            <input 
                type="date" 
                className="form-control form-control-lg" 
                id="birthday" 
                name="birthday" 
                onChange={updateState}
            />
        </div>

        <div className="form-group">
            <label htmlFor="telefono">Home Address</label>
            <input 
                type="text" 
                className="form-control form-control-lg" 
                id="home_address" 
                name="home_address" 
                placeholder="Home address" 
                onChange={updateState}
            />
        </div>

        <input type="submit" className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold" value="Update Person" />
</form>
            </div>
        </Fragment>
    );
}

export default withRouter(UpdatedPerson);