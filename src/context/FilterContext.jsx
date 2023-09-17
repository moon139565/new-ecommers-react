import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./Productcontex";
import reducer from "../reducer/FilterReducer";

const FilterContext = createContext()

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value:"lowest",
    filters:{
        text: "",
        category:"All",
        company:"All",
        color:"All",
        price: 0,
        minPrice: 0,
        maxPrice: 0,
    }
}



export const FilterContextProvider = ({children}) => {

    const {products} = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState)

    // grid view 
    const setGridView = ()=> {
        return dispatch({type: "SET_GRID_VIEW"})
    }
    // listview 
    const setListView = ()=> {
        return dispatch({type: "SET_LIST_VIEW"})
    }

    // sort view 
    const sortView = (event) => {
        let userValue = event.target.value;
        return dispatch({type: "GET_SORT_VIEW", payload: userValue})
    }

    // updateFilterValue
    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        return dispatch({type: "UPDATE_FILTER_VALUE", payload: { name, value }})
    } 

    const clearFilters = ()=>{
        return dispatch({type: "CLEAR_FILTERS", })
    }

    useEffect(()=>{
        dispatch({type: "FILTER_PRODUCTS"})
        dispatch({type: "SORTING_PRODUCTS"})
    },[products, state.sorting_value, state.filters])

    useEffect(()=>{
        dispatch({type: "LOADE_FILTER_PRODUCTS", payload: products})
    }, [products])

    return <FilterContext.Provider value={{...state, setGridView, setListView, sortView, clearFilters, updateFilterValue}}>{children}</FilterContext.Provider>
}

export const useFilterContext = () => {
    return useContext(FilterContext);
}