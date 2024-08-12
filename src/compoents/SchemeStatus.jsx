import React from 'react'
import { Navbar } from './Navbar'

function SchemeStatus() {
  return (
    <>
        <Navbar />
        <div className='container-fluid'>
    <h2 className='mt-2'>Applied scheme status</h2>
    <div className="d-flex flex-row justify-content-center">
        <div className="col-md-9">
            <div className="card mb-3 border-2" style={{backgroundColor: "#DCE6F4"}}>
                <div className="card-body d-flex justify-content-around align-items-center">
                    <div className="col-6">hi</div>
                    <div className="col-6">hello</div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default SchemeStatus