import React, { Component } from 'react';
import PropTypes from "prop-types";


export class TodoItem extends Component {

    getStyle = () => {
        if(this.props.todo.completed) {
            return {
                textDecoration: 'none'
            } 
        } else {
            return {
                textDecoration: 'line-through'
            }
        }

        // return {
        //     backgroundColor: this.props.todo.completed ? '#f4f4f4' : '#ffffff',
        //     padding: '10px',
        //     borderBottom: '1px #ccc dotted',
        //     textDecoration: this.props.todo.completed ? 'none' : 'line-through',
        // }
    }


    

    render() {  
        return (
            <div style={this.getStyle()}>
                <p>{this.props.todo.title}</p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
