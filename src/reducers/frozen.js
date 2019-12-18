//frozen reducer not a component 
// it is just a function

//can use regular function definition syntax
// or arrow function 

// All reducers have 2 params:
// 1. current state, usually provide a default state - in this example, default state is empty array
// 2. info that came from any action

export default (state = [], action) => {
    return state;
}


// function frozen(state = [], action) {
//     return state;
// }
// export default frozen;