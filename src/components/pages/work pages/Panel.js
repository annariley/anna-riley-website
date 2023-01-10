import './Work.css';
import background from '../../srcimages/Lunch_atop_a_Skyscraper_-_Charles_Clyde_Ebbets.jpg'
import { Link } from 'react-router-dom';
import React, { Component } from 'react'

class Panel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            class1: props.class1,
            class2: props.class2,
            type: props.type
        }

        // Binding this keyword
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {

        // Changing state
        this.setState({ type: 'hi' })
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <h2>Message :</h2>


                <p>{this.state.msg}</p>

            </div>
        )
    }
}

export default Panel
