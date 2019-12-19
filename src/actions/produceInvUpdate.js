export default (operation, index) => {
    console.log('update produce');
    return {
        type: 'updateProduce',
        payload: {
            operation,
            index
        }
    }
}