//this file is an action creator - it is just a function
//action creators return actions
//an action is an object that has at minimum - a property of type 
//this action creator is going to be handed ot the dispatch

//no redux here - it is just a straight-up function
//a function that returns an obj

export default (operation, index) => {
    return {
        type: 'updateFrozen', 
        payload: {
            operation,
            index
        }
    }
}