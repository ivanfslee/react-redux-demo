import React, { Component } from 'react';

// we want this component to know about redux. 
// we use react-redux to connect this compo to redux 
// Provider connects app to redux at the app level
// Connect connects app at the component level
import { connect } from 'react-redux';
import updateMeat from '../actions/meatInvUpdate';
import { bindActionCreators } from 'redux';

class MeatDept extends Component {

    increment = (operation, index) => {
        // console.log(operation, index);
        this.props.updateMeat(operation, index);
    }

    render() {
        //this.props.frozenData is from mapStateToProps which gets frozenData from redux store
        const meatInventory = this.props.meatData.map((item, i) => {
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
                <h1>Meat Department</h1>
                <ul>
                    {meatInventory}
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
        meatData: state.meat,

        //can access the other redux store state like so:
        // meatData: state.meat,
        // produceData: state.produce
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateMeat: updateMeat
    }, dispatch)
}

// export default FrozenDept;
export default connect(mapStateToProps, mapDispatchToProps)(MeatDept);