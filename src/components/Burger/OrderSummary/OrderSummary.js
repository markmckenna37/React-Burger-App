import React, { Component } from "react";

import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
    // Could be functional component
    componentWillUpdate() {
        console.log("summary updated")
    }
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
            <li key={igKey}>
                <span style={{textTransform: "capitalize"}}>{igKey}</span>: {this.props.ingredients[igKey]}
            </li>
            );
        })
        return (
            <Auxiliary>
            <h3>Your Order</h3>
            <p>A nice burg with this stuff on it:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCanceled}>Cancel</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
        </Auxiliary>
        );
    }
}

export default OrderSummary;