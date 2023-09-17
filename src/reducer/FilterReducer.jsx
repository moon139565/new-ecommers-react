

const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOADE_FILTER_PRODUCTS":
        let priceArr = action.payload.map((curElm) => curElm.price);
        let maxPrice = Math.max(...priceArr);
        return {
            ...state,
            filter_products:[...action.payload],
            all_products:[...action.payload],
            filters: { ...state.filters, maxPrice, price: maxPrice },
        }



    case "SET_GRID_VIEW":
        return {
            ...state,
            grid_view: true,
        }

    case "SET_LIST_VIEW":
        return {
            ...state,
            grid_view: false,
        }
    case "GET_SORT_VIEW":
        return {
            ...state,
            sorting_value: action.payload,
        }

    case "SORTING_PRODUCTS":
        let newSortData;

        const{filter_products} = state;
        let tempSortProduct = [...filter_products];

        const sortingProducts = (a, b)=>{
            if(state.sorting_value === "lowest"){
                return a.price - b.price
            }if(state.sorting_value === "highest"){
                return b.price - a.price
            } if(state.sorting_value === "a-z"){
                return a.name.localeCompare(b.name)
            }if(state.sorting_value === "z-a"){    
                return b.name.localeCompare(a.name)
            }    
        };

        newSortData = tempSortProduct.sort(sortingProducts)

        return {
            ...state,
            filter_products:newSortData,
        }

    case "UPDATE_FILTER_VALUE":
        const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };


    case "FILTER_PRODUCTS":
        let {all_products} = state;
        let tempAllfillProducts = [...all_products];

        let { text, category, company, color, price } = state.filters;

        if(text){
            tempAllfillProducts = tempAllfillProducts.filter((curElm)=>{
                return curElm.name.toLowerCase().includes(text);
            })
        }

        if (category !== "All") {
            tempAllfillProducts = tempAllfillProducts.filter(
              (curElm) => curElm.category === category
            );
          }
    
          if (company !== "All") {
            tempAllfillProducts = tempAllfillProducts.filter(
                (curElm) =>  curElm.company.toLowerCase() === company.toLowerCase()
            );
          }
          if(color !== "All"){
            tempAllfillProducts = tempAllfillProducts.filter(
                (curElm) => curElm.colors.includes(color)
              );
          }
          if(price === 0){
            tempAllfillProducts = tempAllfillProducts.filter(
                (curElm) => curElm.price == price
              );
          }else{
            tempAllfillProducts = tempAllfillProducts.filter(
                (curElm) => curElm.price <= price
          )}
    
    return {
        ...state,
        filter_products: tempAllfillProducts,
    }

    case "CLEAR_FILTERS":
        return{
            ...state,
            filters:{
                ...state.filters,
                text: "",
                category:"All",
                company:"All",
                color:"All",
                maxPrice: 0,
                price: state.filters.maxPrice,
                minPrice: state.filters.maxPrice,
                
            }
        }
  
    default:
        return state
  }
}

export default FilterReducer