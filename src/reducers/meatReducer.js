//frozen reducer not a component 
// it is just a function

//can use regular function definition syntax
// or arrow function 

// All reducers have 2 params:
// 1. current state, usually provide a default state - in this example, default state is empty array
// 2. info that came from any action

const seedData = [
    {
        food: 'chicken',
        quantity: 13
    },
    {
        food: 'bacon',
        quantity: 22
    },
    {
        food: 'mahi mahi',
        quantity: 21
    },
    {
        food: 'pork',
        quantity: 234
    }
]

export default (state = seedData, action) => {
    if (action.type === 'updateMeat') {
        const newState = [...state];
        const payload = action.payload;
        if (payload.operation === '+') {
            newState[payload.index].quantity++;
        } else if (payload.operation === '-') {
            newState[payload.index].quantity--;
        }
        return newState;
    } else {
        return state;
    }   
}