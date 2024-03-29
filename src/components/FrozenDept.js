import React, { Component } from 'react';

// we want this component to know about redux. 
// we use react-redux to connect this compo to redux 
// Provider connects app to redux at the app level
// Connect connects app at the component level
import { connect } from 'react-redux';
import updateFrozen from '../actions/frozenInvUpdate';
import { bindActionCreators } from 'redux';

class FrozenDept extends Component {

    increment = (operation, index) => {
        // console.log(operation, index);
        this.props.updateFrozen(operation, index);
    }

    render() {
        //this.props.frozenData is from mapStateToProps which gets frozenData from redux store
        const frozenInventory = this.props.frozenData.map((item, i) => {
            return (
                <div key={i}>
                    <li>{item.food} : {item.quantity}</li>
                    <input type="button" onClick={() => this.increment('+', i)} value="+" />
                    <input type="button" onClick={() => this.increment('-', i)} value="-" />
                </div>
            )        
        })
        return (
            <div>
                <h1>Frozen Food Department</h1>
                <ul>
                    {frozenInventory}
                </ul>
            </div>
        );
    }
}

//returns a function because connect is a react-redux function
console.log(connect); 
// connect takes 3 args - mapStateToProps / mapDispatchToProps / mergeProps
// mapStateToProps - is a function that MAPS A PIECE OF REDUX STATE TO THIS COMPONENTS PROPS
// mapStateToProps takes 1 arg - "state" and that is the rootReducer (you can also think of it as the redux store)
// mapStateToProps returns an obj - with:
//  property/key is local prop name in this component
//  value will be a property/key in the rootReducer (that is, a piece of the redux store)
function mapStateToProps(state) {
    return {
        //accessing anything in redux store here via key/prop name in rootReducer
        frozenData: state.frozen,

        //can access the other redux store state like so:
        // meatData: state.meat,
        // produceData: state.produce
    }
}

//mapDispatchToProps is how we tie our component to the dispatch
//takes 1 arg: dispatch
function mapDispatchToProps(dispatch) {
    //this function returns, bindActionCreators
    //we hand bindActionCreators an obj
    //each property will be a local prop
    //each value will be a function that is dispatched when run 
    //second arg for bindActionCreators is the dispatch
    return bindActionCreators({
        updateFrozen: updateFrozen
    }, dispatch)
}


// export default FrozenDept;
//connect takes 2 args -
//first arg is a function that maps piece of redux state to this components props
//second arg to connect is mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(FrozenDept);