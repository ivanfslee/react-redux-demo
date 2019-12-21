import React, { Component } from 'react';
import { connect } from 'react-redux';
import clearInventory from '../actions/clearInventory';
import { bindActionCreators } from 'redux';

class Main extends Component {
    // clearInventoryAction = () => {
    //     this.props.clearInventory();
    // }


    render() {
        // console.log(this.props.produceData);
        // this.props.clearInventory();
        const produceInventory = this.props.produceData.map((item, i) => {
            return (
                <div key={i}>
                    <li>{item.food} : {item.quantity}</li>
                </div>
            )        
        })

        const frozenInventory = this.props.frozenData.map((item, i) => {
            return (
                <div key={i}>
                    <li>{item.food} : {item.quantity}</li>
                </div>
            )        
        })

        const meatInventory = this.props.meatData.map((item, i) => {
            return (
                <div key={i}>
                    <li>{item.food} : {item.quantity}</li>
                </div>
            )        
        })

        const frozenQuantity = this.props.frozenData.reduce((accum, frozenItem) => accum + frozenItem.quantity, 0)
        const meatQuantity = this.props.meatData.reduce((accum, meatItem) => accum + meatItem.quantity, 0)
        const produceQuantity = this.props.produceData.reduce((accum, produceItem) => accum + produceItem.quantity, 0)

        return (
            <div>
                <h1>Produce Dept: </h1>
                {produceInventory}
                <h2>Produce Dept Total: {produceQuantity}</h2>
                
                <h1>Frozen Dept: </h1>
                {frozenInventory}
                <h2>Frozen Dept Total: {frozenQuantity}</h2>
                
                <h1>Meat Dept: </h1>
                {meatInventory}
                <h2>Meat Dept Total: {meatQuantity}</h2>
                <button onClick={this.props.clearInventory}>Clear All Inventory</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        produceData: state.produce,
        frozenData: state.frozen,
        meatData: state.meat
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        clearInventory: clearInventory
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);