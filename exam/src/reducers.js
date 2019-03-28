import { combineReducers} from 'redux';

function counter(state =0, action) {
        switch (action.type){
            case "INCREMENT" :
            return state + 1 
            case "DECREMENT" : 
            return state -1
            default :
            return state 
        }
    };
    
    function changeName(state = "Vardan", action) {
        switch (action.type){
            case "CHANGE_TEXT" :
            return action.text
          
            default :
            return state 
        }
    }


     const reducer = combineReducers({counter, changeName});
      
      export default reducer;

