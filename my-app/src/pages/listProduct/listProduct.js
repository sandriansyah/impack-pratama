import React, { useEffect, useState } from 'react'
import Nav from '../../component/navbar'
import  Product from '../../media/sweeter.jpg'
import  Hp from '../../media/hp.jpg'
import  Headset from '../../media/headset.jpg'
import  Sandal from '../../media/sandal.jpg'
import  Sepatu from '../../media/sepatu.jpg'
import {Modal} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, detailProduct, getListProduct } from '../../actions/productsAction'
import { useNavigate } from 'react-router-dom'

const ListProduct = () => {

    const navigate = useNavigate()

    const {getListProductResult,getListProductLoading,getListProductError,deleteProductResult}=useSelector((state)=>state.ProductReducer)

    const [modalDel,setModalDel]= useState(false)

    const dispatch = useDispatch()

    useEffect(()=>{
        //pangil action get list product
        dispatch(getListProduct())

    },[dispatch])

    useEffect(()=>{
        if(deleteProductResult){
            dispatch(getListProduct())
        }
    },[dispatch,deleteProductResult])

    const[idDelete,setIdDelete]= useState(null)
    const[dataDel,setDataDel]=useState({})

  return (
    <div style={{backgroundColor:"#eeeeee",paddingBottom:"20px"}}>

        <Modal show={modalDel} onHide={()=> setModalDel(false)}>
            <div className='p-4 d-flex flex-column'>
                <div className='d-flex justify-content-center'>
                    <img  style={{width:"100%",height:"180px",borderRadius:"5px"}} src={Product} alt="foto product"/>
                </div>
                <h6 className='mt-2'>{dataDel.codeProduct}</h6>
                <h4>{dataDel.namaProduct}</h4>
                <h5>{dataDel.hargaProduct}</h5>
                <div className='d-flex justify-content-end mt-3'>
                    <button className='btn btn-outline-primary shadow-none me-1' onClick={()=> setModalDel(false)}>No</button>
                    <button className='btn btn-outline-danger shadow-none' onClick={()=>{ dispatch(deleteProduct(idDelete));setModalDel(false)}}>Yes</button>
                </div>
            </div>
        </Modal>

        <Nav/>
        <div className='mx-5 px-5 mt-3'>
            <h3>Best Seller</h3>
            <div className='d-flex row justify-content-between'>
                <div className='col-3 p-2' >
                    <div className='h-100'>
                        <img className='w-100 h-100 rounded' src={Headset} alt=""/>
                    </div>
                </div>
                <div className='col-3 p-2' >
                    <div className='h-100'>
                        <img className='w-100 h-100 rounded' src={Hp} alt=""/>
                    </div>
                </div>
                <div className='col-3 p-2' >
                    <div className='h-100'>
                        <img className='w-100 h-100 rounded' src={Sepatu} alt=""/>
                    </div>
                </div>
                <div className='col-3 p-2' >
                    <div className='h-100'>
                        <img className='w-100 h-100 rounded' src={Sandal} alt=""/>
                    </div>
                </div>
                
            </div>
        </div>
        <div className='mx-5 px-5'>
            <h3 className='mt-3'>All Product</h3>
            <div className='bg-light mt-2 d-flex justify-content-start align-items-start p-4 row' style={{borderRadius:"15px"}}>
            {getListProductResult ? (
                getListProductResult.getData.map((data)=>{
                    return(
                        <div key={data.id} className='d-flex flex-column justify-content-center p-2 rounded col-3' style={{width:"20%"}}>
                            <div className='p-2 d-flex flex-column justify-content-between' style={{background:"#eeeeee",height: "450px"}}>
                                <div>
                                    <img style={{width:"100%",height:"120px"}} src={Product} alt="foto product"/>
                                    <h6>{data.codeProduct}</h6>
                                    <h4>{data.namaProduct}</h4>
                                    <h5> Rp.{data.hargaProduct}/ {data.uom}</h5>
                                    <p className='mt-2'>{data.deskripsiProduct.substr(0,120)}</p>
                                </div>
                                <div className='d-flex justify-content-end mt-3'>
                                    <button className='btn btn-outline-primary shadow-none me-1'  onClick={()=>{dispatch(detailProduct(data)); navigate('/addProduct')}}>Edit</button>
                                    <button className='btn btn-outline-danger shadow-none' onClick={()=> {setModalDel(true); setIdDelete(data.id); setDataDel(data)}}>Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            ) : getListProductLoading ? (
                <p>Loading ...</p>
            ) : (
                <p>{getListProductError ? getListProductError : " Data Kosong"}</p>
            )}
            </div>
        </div>
    </div>
  )
}

export default ListProduct