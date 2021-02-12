import React, {Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import clienteAxios from '../config/axios';

const Person = (props) => {

    if(props.person.length === 0) {
        console.log('hola');
        props.history.push('/');
        return null;
    }

    const deletePerson = id => {
        clienteAxios.delete(`/people/${id}`)
        .then(res => {
            props.reCheck(true);
            props.history.push('/');
        })
        .catch(e => console.log(e));
    }

    return ( 
        <Fragment>
            <h1 className="my-5">About {props.person[0].name}</h1>

            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Go back</Link>
                    </div>
                </div>
            </div>     

            <div className="col-md-8 mx-auto">
                <div className="list-group">
                    <div className="p-5 list-group-item list-group-item-action flex-column align-items-center">
                        <div className="d-flex w-100 justify-content-between mb-4">
                            <h3 className="mb-3">{props.person[0].name}</h3>
                                <p>
                                    {props.person[0].birthday} - {props.person[0].home_address}
                                </p>
                        </div>
                        <div className="d-flex">
                            <button type="button" className="text-uppercase py-2 px-5 font-weight-bold btn btn-danger col" onClick={() => deletePerson(props.person[0].id)}>
                                Delete
                            </button>
                        </div>
                        <div className="col-12 mb-5 d-flex justify-content-center">
                            <Link to={`/edit/${props.person[0].id}`} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Edit</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default withRouter(Person);