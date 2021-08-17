/** @format */

export const listingdetail = (listingdetail) => {
  return { type: 'LISTING_DETAIL', data: listingdetail }


};

export const getlistingdetail = () => {
  return { type: 'GET_LISTING_DETAIL', data: listingdetail }


};



export const getlistingcategory = (Category, check) => {
  return { type: 'GET_LISTING_CATERGORIES', data: { category: Category, check: check } }


};

export const datafromfilters = (data,check) => {
  return { type: 'GET_DATA_FROM_FILTERS', data: {details:data,check:check} }
}