import { GET_LIST_PRODUCTS,ADD_PRODUCT,DELETE_PRODUCT,DETAIL_PRODUCT,UPDATE_PRODUCT } from "../../actions/productsAction";

const initialState={
    getListProductResult: false,
    getListProductLoading: false,
    getListProductError: false,

    detailProductResult: false,

    addProductResult: false,
    addProductLoading: false,
    addProductError: false,

    deleteProductResult: false,
    deleteProductLoading: false,
    deleteProductError: false,

    updateProductResult: false,
    updateProductLoading: false,
    updateProductError: false,
}

const product = (state = initialState,action) =>{
    switch(action.type){
        case GET_LIST_PRODUCTS:
            return{
                ...state,
                getListProductResult: action.payload.data,
                getListProductLoading: action.payload.loading,
                getListProductError: action.payload.errorMessage,
            }
        case DETAIL_PRODUCT:
            return{
                ...state,
                detailProductResult: action.payload.data,
            }
        case GET_LIST_PRODUCTS:
            return{
                ...state,
                getListProductResult: action.payload.data,
                getListProductLoading: action.payload.loading,
                getListProductError: action.payload.errorMessage,
            }
        case ADD_PRODUCT:
            return{
                ...state,
                addProductResult: action.payload.data,
                addProductLoading: action.payload.loading,
                addProductError: action.payload.errorMessage,
            }
        case DELETE_PRODUCT:
            return{
                ...state,
                deleteProductResult: action.payload.data,
                deleteProductLoading: action.payload.loading,
                deleteProductError: action.payload.errorMessage,
            }
        case UPDATE_PRODUCT:
            return{
                ...state,
                updateProductResult: action.payload.data,
                updateProductLoading: action.payload.loading,
                updateProductError: action.payload.errorMessage,
            }
        default:
            return state;
    } 
}

export default product