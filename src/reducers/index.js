
const reducer=(state, action)=>{

    switch(action.type)
    {
        case "WITHDRAW":
            if (state.totalAmount<action.amount)
             {
                alert("Your balance is insufficient!");
                return state;
             }
             else{
                return {...state, totalAmount: state.totalAmount-action.amount};
             }

        default:
             return state;
}
}

export default reducer;