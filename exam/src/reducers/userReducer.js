

const userReducer = (state = {name:'' , surname: ''}, action) => {
    let obj = Object.assign({}, state);
    switch(action.type){
        case 'CHANGE_NAME' :
            obj.name = action.payload
            break;
        case 'CHANGE_SURNAME' :
            obj.surname = action.payload
            break;
    }
    return obj;
}

export default userReducer;