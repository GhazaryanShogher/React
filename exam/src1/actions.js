export function changeText(text){
    return {
        type: "CHANGE_TEXT",
        text
    }
};

export function incrementNumber(number){
    return {
        type: "INCREMENT",
        number
    }
};
export function decrementNumber(number){
    return {
        type: "DECREMENT",
        number
    }
};

