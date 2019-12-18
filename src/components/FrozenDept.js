import React, { Component } from 'react';

// we want this component to know about redux. 
// we use react-redux to connect this compo to redux 
// Provider connects app to redux at the app level
// Connect connects app at the component level
import { connect } from 'react-redux';

class FrozenDept extends Component {


    render() {
        console.log(this.props.frozenData);
        return (
            <div>
                <h1>Frozen Food Department</h1>
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
        frozenData: state.frozen
    }
}

// export default FrozenDept;
export default connect(mapStateToProps)(FrozenDept);