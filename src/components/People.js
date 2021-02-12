import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const People = (props) => {

    if (props.people.length === 0) {
        return (
            <Fragment>
                <h1>The database is empty</h1>
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/new'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Create person</Link>
                    </div>
                </div>
            </Fragment>
        )

    }
    return (
        <Fragment>
            <h1 className="my-5">People currently in the database</h1>

            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/new'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Create person</Link>
                    </div>
                </div>

                <div className="col-md-8 mx-auto">
                    <div className="list-group">
                        {props.people.map(person => (
                            <Link to={`/people/${person.id}`} key={person.id} className="p-5 list-group-item list-group-item-action flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-between mb-4">
                                    <h3 className="mb-3">{person.name}</h3>
                                    <p>
                                        {person.birthday} - {person.home_address}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
 
export default People;