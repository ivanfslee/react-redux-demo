//frozen reducer not a component 
// it is just a function

//can use regular function definition syntax
// or arrow function 

// All reducers have 2 params:
// 1. current state, usually provide a default state - in this example, default state is empty array
// 2. info that came from any action

const seedData = [
    {
        food: 'lettuce',
        quantity: 13
    },
    {
        food: 'turnips',
        quantity: 22
    },
    {
        food: 'apples',
        quantity: 21
    },
    {
        food: 'apples',
        quantity: 21
    }
]

export default (state = seedData, action) => {
    if (action.type === 'updateProduce') {
        const payload = action.payload;
        const newState = [...state];
        newState[payload.index].quantity += payload.operation;
        return newState;
    } else {
        return state;
    }
}


// function frozen(state = [], action) {
//     return state;
// }
// export default frozen;