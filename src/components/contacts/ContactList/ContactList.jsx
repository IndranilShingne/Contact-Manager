import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContactServices } from '../../../services/ContactService';
import Spinner from '../../Spinner/Spinner';

const ContactList = () => {
  let [state, setState] = useState({ loading: false, contacts: [], errorMessage: '' });

  useEffect(() => {
    let promise = new Promise((res, rej) => {
      setState({ ...state, loading: true });
      let response = ContactServices.getAllContacts();
      res(response);
      rej("error");
    });

    promise
      .then((res) => {
        console.log(res.data);
        setState({ ...state, loading: false, contacts: res.data });
      })
      .catch(() => {
        alert("Error while fetching the data");
        setState({ ...state, loading: false, errorMessage: "error message" });
      });
  }, []);

  let { loading, contacts, errorMessage } = state;

  return (
    <div>
      <React.Fragment>
        <section className='contact-search p-3'>
          <div className='container'>
            <div className='grid'>
              <div className='row'>
                <p className='h3'>
                  Contact Manager{' '}
                  <Link to={'/contacts/add'} className='btn btn-primary'>
                    <i className='fa fa-plus-circle me-2' />New
                  </Link>
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eligendi dolore repudiandae eum sint,
                  dolor reprehenderit officiis temporibus perspiciatis doloribus, ipsa aliquid magni exercitationem
                  accusantium cum voluptates velit, fugit praesentium!
                </p>
              </div>
              <div className='row'>
                <div className='col-md-6'>
                  <form className='row'>
                    <div className='col mb-2'>
                      <input type='text' name='' id='' placeholder='search names' className='form-controls' />
                    </div>
                    <div className='col mb-2'>
                      <input type='submit' className='btn btn-outline-dark' value='Search' />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {loading ? (
          <Spinner />
        ) : (
          <React.Fragment>
            <section className='contact-card'>
              <div className='container'>
                <div className='row'>
                  {contacts.length > 0 &&
                    contacts.map((contact) => {
                      return (
                        <div className='col-md-6' key={contact.id}>
                          <div className='card my-2'>
                            <div className='card-body'>
                              <div className='row d-flex align-items-center'>
                                <div className='col-md-4'>
                                  <img src={contact.photo} alt='' className='img-fluid' />
                                </div>
                                <div className='col-md-7'>
                                  <ul className='list-group'>
                                    <li className='list-group-item list-group-item-action'>
                                      Name : <span className='fw-bold'>{contact.name}</span>
                                    </li>
                                    <li className='list-group-item list-group-item-action'>
                                      Contact : <span className='fw-bold'>{contact.mobile}</span>
                                    </li>
                                    <li className='list-group-item list-group-item-action'>
                                      Email: <span className='fw-bold'>{contact.email}</span>
                                    </li>
                                  </ul>
                                </div>
                                <div className='col-md-1 d-flex flex-column align-items-center'>
                                  <Link to={`/contacts/view/${contact.id}`} className='btn btn-warning'>
                                    <i className='fa fa-eye'></i>
                                  </Link>
                                  <Link to={`/contacts/edit/${contact.id}`} className='btn btn-primary my-1'>
                                    <i className='fa fa-pen'></i>
                                  </Link>
                                  <button className='btn btn-danger'>
                                    <i className='fa fa-trash my-1'></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </section>
          </React.Fragment>
        )}
      </React.Fragment>
    </div>
  );
};

export default ContactList;
