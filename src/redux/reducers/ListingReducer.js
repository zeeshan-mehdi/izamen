/** @format */

const initState = { listingfordetail: null,getlistingfordetail: null,category:null,data:null };

const ListingReducer = (state = initState, action) => {
  switch (action.type) {
    case "LISTING_DETAIL":
      return {
        ...state,
        listingfordetail: action.data,
      };
      case "GET_DATA_FROM_FILTERS":
        return {
          ...state,
          data: action.data.details,
          check:action.data.check
        };
      case "GET_LISTING_DETAIL":
      return {
        ...state,
        getlistingfordetail: action.data,
      };
      case "GET_LISTING_CATERGORIES":
        return {
          ...state,
          category: action.data.category,
          check:action.data.check
        };

    default:
      return initState;
  }
};

export default ListingReducer;
