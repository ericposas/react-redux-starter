// Reducer function with returns Redux state data 
export default function Reducer(state, action){
  if(state === undefined){
    // default state 
    return {
      prop1: '',
      prop2: ''
    }
  }
  // switch statement to handle all incoming actions dispatched by
  // functions in 'mapDispatchToProps()'
  switch(action.type){
    case 'type1':
      return { prop1: action.prop1, prop2: state.prop2 }
    case 'type2':
      return { prop1: state.prop1, prop2: action.prop2 }
    default:
      return state
  }
}
