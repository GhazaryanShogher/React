
const mathReducer = (state = {add:[]}, action) => {
    let obj = Object.assign({}, state);
    switch(action.type) {
        case 'ADD_NUMBER' :

            return {
                ...state,
                add: [...action.payload]
            }

            break;
        case 'REMOVE_NUMBER' :
            obj.remove = action.payload;
            break;
    }
    return obj;
}

export default mathReducer;