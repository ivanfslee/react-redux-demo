//frozen reducer not a component 
// it is just a function

//can use regular function definition syntax
// or arrow function 

// All reducers have 2 params:
// 1. current state, usually provide a default state - in this example, default state is empty array
// 2. info that came from any action

const seedData = [
    {
        food: 'Tv dinner',
        quantity: 10
    },
    {
        food: 'Frozen Veggies',
        quantity: 21
    },
    {
        food: 'Frozen Pizzas',
        quantity: 25
    }
]

export default (state = seedData, action) => {
    return state;
}


// function frozen(state = [], action) {
//     return state;
// }
// export default frozen;