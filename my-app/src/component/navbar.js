import React from 'react'
import { Navbar } from 'react-bootstrap'
import FotoProfile from '../media/Rectangle 12.png'
import { useNavigate } from 'react-router-dom'

const Nav = () => {

    const navigate = useNavigate()

  return (
    <div className='px-5'>
        <Navbar>
            <div className=' w-100 d-flex align-items-center justify-content-between'>
                <div className='d-flex'>
                    <h6 className='me-3' style={{cursor:"pointer"}} onClick={()=>navigate('/listProduct')}>List Produck</h6>
                    <h6 style={{cursor:"pointer"}} onClick={()=>navigate('/addProduct')}>Add Produck</h6>
                </div>
                <div className='d-flex align-items-center'>
                    <h5 className='me-3'>Impack Pratama Solusi</h5>
                    <img className='bg-primary' style={{width:"60px",height:"60px",borderRadius:"60px"}} src={FotoProfile} alt="profileFoto"/>
                </div>
            </div>
        </Navbar>
    </div>
  )
}

export default Nav