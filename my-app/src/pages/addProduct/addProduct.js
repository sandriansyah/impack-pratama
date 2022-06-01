import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import '../../App.css'
import Nav from '../../component/navbar'
import UploadImg from '../../media/upload foto.png'

import { addProduct, updateProduct } from '../../actions/productsAction'
import { useNavigate } from 'react-router-dom'

const AddPruduct = () => {

    const navigate = useNavigate()
    const dispatchh = useDispatch()

    const {detailProductResult}= useSelector((state)=>state.ProductReducer)

    const [form,setForm]=useState({
        namaProduct:"",
        hargaProduct:"",
        codeProduct:"",
        uom:"",
        deskripsiProduct:"",
        id:"",
    })

    useEffect(()=>{
        if(detailProductResult){
            setForm({
                ...form,
                namaProduct: detailProductResult.namaProduct ,
                hargaProduct: detailProductResult.hargaProduct,
                codeProduct: detailProductResult.codeProduct,
                uom: detailProductResult.uom,
                deskripsiProduct: detailProductResult.deskripsiProduct,
                id: detailProductResult.id
            });
        }
    },[detailProductResult,dispatchh])

    const dispatch = useDispatch()

    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
        
    }

    const handleSubmit=(e)=>{

        e.preventDefault()
        if(detailProductResult.id){
            dispatch(updateProduct(form))
            
        }else{
            dispatch(addProduct(form))
        }
    }

 
  return (
    <div style={{background:"#eeeeee",paddingBottom:"20px"}}>
        <Nav/>
        <div className='w-75 p-3 rounded mt-4' style={{margin:"auto"}}>
            <h3 className='mb-4 ms-3'>Add Product</h3>
            <form onSubmit={handleSubmit} className='d-flex flex-column mb-3'>
                <div className='p-3 bg-light w-25 d-flex mb-3' style={{borderRadius:"10px"}}>
                    <img src={UploadImg} style={{width:"200px",margin:"auto"}} alt=""/>
                </div>
                <label className='label'>
                    Nama Product :
                    <input name='namaProduct' type="text" placeholder='Nama Product' className='input' value={form.namaProduct} onChange={handleChange}/>
                </label>
                <label className='label'>
                    Harga Product :
                    <input name='hargaProduct' type="text" placeholder='Harga Product' className='input' value={form.hargaProduct} onChange={handleChange}/>
                </label>
                <label className='label'>
                    Code Product :
                    <input name='codeProduct' type="text" placeholder='Code Product' className='input' value={form.codeProduct} onChange={handleChange}/>
                </label>
                <label className='label'>
                    Unit
                    <select name='uom' className='input' value={form.uom} onChange={handleChange}>
                        <option value=""></option>
                        <option value="roll"> Roll</option>
                        <option value="sheet">Sheet</option>
                        <option value="pcs">Pcs</option>
                    </select>
                </label>
                <label className='label'>
                    Deskripsi Product :
                    <textarea name='deskripsiProduct' placeholder='Deskripsi' className='input' value={form.deskripsiProduct} style={{height:"100px"}} onChange={handleChange}/>
                </label>
                <button type='submit' className='btn btn-primary shadow-none mt-3 w-25'>Add Product</button>
            </form>
        </div>
    </div>
  )
}

export default AddPruduct