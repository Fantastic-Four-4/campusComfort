import React from 'react'
import Staff_form from './Staff_form'

const Staff_form_parents = ({createStaff,updateStaff,Perform_cancel,userData}) => {
  return (
    <div style={{margin:"20px 0px"}}>
      <Staff_form  updateStaff={updateStaff} createStaff={createStaff}  Perform_cancel={Perform_cancel} userData={userData}/>
    </div>
  )
}

export default Staff_form_parents
