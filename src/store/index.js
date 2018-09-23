/*Action Type */
const SET_ADDRESS = 'SET_ADDRESS'
const SET_LATLNG = 'SET_LATLNG'
const SET_HOMEVAL = 'SET_HOMEVAL'

/*Action Creator */
export const setAddress = address => ({type: SET_ADDRESS, address})
export const setLatlng = latlng => ({type:SET_LATLNG, latlng})
export const setValTaxMortg = (valTaxMortg) => ({type:SET_HOMEVAL, valTaxMortg})

/*Thunks */

/*Reducer */
const reducer = (state={}, action)=> {
  switch(action.type){
    case SET_ADDRESS:
      return {...state, address:action.address}
    case SET_LATLNG:
      return {...state, ...action.latlng}
      case SET_HOMEVAL:
      return {...state, ...action.valTaxMortg}
    default:
      return state
    }
}

export default reducer;