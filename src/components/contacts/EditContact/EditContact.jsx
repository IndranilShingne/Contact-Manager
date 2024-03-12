import React from 'react'
import { Link } from 'react-router-dom'
const EditContact = () => {
  return (
    <React.Fragment>
    <section className='add-contact'>
   <div className='container p-3'>
  <div className='row'>
    <p className='text-primary h4 fw-bold'>Edit Contact</p>
    <p className='fst-italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur rerum incidunt vero debitis sequi ex!</p>
  </div>
   </div>
    </section>
    <div className='row d-flex align-items-center'>
<div className='col-md-4'>
  <form action="" >
    <div className='mb-2'>
      <input type="text" placeholder='Name' className='form-control' />
    </div>
    <div className='mb-2'>
      <input type="text" placeholder='Photo URL' className='form-control' />
    </div>
    <div className='mb-2'>
      <input type="number" placeholder='Contact' className='form-control' />
    </div>
    <div className='mb-2'>
      <input type="mail" placeholder='Email' className='form-control' />
    </div>
    <div className='mb-2'>
      <input type="text" placeholder='Company name' className='form-control' />
    </div>
    <div className='mb-2'>
      <input type="text" placeholder='Title' className='form-control' />
    </div>
    <div className='mb-2'>
        <select name="" id="" className='form-control'>
          <option value="">Select  a Group</option>
          </select></div>
    <div className='mb-2'>
      <input type="submit" value='Update' className='btn btn-primary'/>
    <Link to={'/contacts/list'} className='btn btn-danger ms-2'>Cancel</Link>
    </div>
  </form>
</div>
<div className='col-md-8'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6mTMx8AB1-L0wAAhgsJj_zpHLvjMA3Y3bHQ&usqp=CAU" alt="" className='img-fluid'/>
                
    </div>
</div>
  </React.Fragment>
  )
}
export default EditContact
