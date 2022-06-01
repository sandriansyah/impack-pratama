import axios from "axios";

export const GET_LIST_PRODUCTS ='GET_LIST_PRODUCT'
export const DETAIL_PRODUCT ='DETAIL_PRODUCT'
export const ADD_PRODUCT ='ADD_PRODUCT'
export const DELETE_PRODUCT ='DELETE_PRODUCT'
export const UPDATE_PRODUCT ='UPDATE_PRODUCT'

export const getListProduct = ()=>{
    return(dispatch) =>{
        //loading
        dispatch({
            type: GET_LIST_PRODUCTS,
            payload:{
                loading: true,
                data: false,
                errorMessage:false
            }
        })
        //get api
        axios({
            method: 'GET',
            url: 'http://localhost:5000/api/v1/get-products', 
            timeout: 120000
        })
        .then((response)=>{
            //berhasil get api
            console.log(response.data);
            dispatch({
                type: GET_LIST_PRODUCTS,
                payload:{
                    loading: false,
                    data: response.data,
                    errorMessage:false
                }
            })

        })
        .catch((error)=>{
            //gagal get api
            console.log(error)
            dispatch({
                type: GET_LIST_PRODUCTS,
                payload:{
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
    }
}

export const detailProduct=(data)=>{
    console.log(data);
    return(dispatch)=>{
        dispatch({
            type: DETAIL_PRODUCT,
            payload:{
                data:data
            }
        })
    }
}

export const addProduct = (data)=>{
    return(dispatch) =>{
        //loading
        dispatch({
            type: ADD_PRODUCT,
            payload:{
                loading: true,
                data: false,
                errorMessage:false
            }
        })
        //get api
        axios({
            method: 'POST',
            url: 'http://localhost:5000/api/v1/add-product', 
            timeout: 120000,
            data: data
        })
        .then((response)=>{
            //berhasil get api
            console.log(response.data);
            dispatch({
                type: ADD_PRODUCT,
                payload:{
                    loading: false,
                    data: response.data,
                    errorMessage:false
                }
            })

        })
        .catch((error)=>{
            //gagal get api
            console.log(error)
            dispatch({
                type: ADD_PRODUCT,
                payload:{
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
    }
}

export const deleteProduct = (id)=>{
    return(dispatch) =>{
        //loading
        dispatch({
            type: DELETE_PRODUCT,
            payload:{
                loading: true,
                data: false,
                errorMessage:false
            }
        })
        //get api
        axios({
            method: 'DELETE',
            url: 'http://localhost:5000/api/v1/delete-product/'+id, 
            timeout: 120000,
            data: id
        })
        .then((response)=>{
            //berhasil get api
            console.log(response.data);
            dispatch({
                type: DELETE_PRODUCT,
                payload:{
                    loading: false,
                    data: response.data,
                    errorMessage:false
                }
            })

        })
        .catch((error)=>{
            //gagal get api
            console.log(error)
            dispatch({
                type: DELETE_PRODUCT,
                payload:{
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
    }
}

export const updateProduct = (data)=>{
    return(dispatch) =>{
        //loading
        dispatch({
            type: UPDATE_PRODUCT,
            payload:{
                loading: true,
                data: false,
                errorMessage:false
            }
        })
        //get api
        axios({
            method: 'PATCH',
            url: 'http://localhost:5000/api/v1/edit-product/'+data.id, 
            timeout: 120000,
            data: data
        })
        .then((response)=>{
            //berhasil get api
            console.log(response.data);
            dispatch({
                type: UPDATE_PRODUCT,
                payload:{
                    loading: false,
                    data: response.data,
                    errorMessage:false
                }
            })

        })
        .catch((error)=>{
            //gagal get api
            console.log(error)
            dispatch({
                type: UPDATE_PRODUCT,
                payload:{
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })
    }
}
