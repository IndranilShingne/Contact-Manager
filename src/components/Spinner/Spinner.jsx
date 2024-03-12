import React from 'react'
import spinnerImg from '../../components/assets/img/spinner.gif'
const Spinner = () => {
  return (
    <div>
      <img src={spinnerImg} alt="" className='d-flex m-auto' style={{width:"200px"}} />
    </div>
  )
}

export default Spinner
