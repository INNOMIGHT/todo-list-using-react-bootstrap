import React, {Component} from "react";

class TodoItem extends Component{
    render() {
        const {title, removeItem, handleEdit} = this.props
        return (
            <div>
                <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                    <h6>{title}</h6>
                    <div className="todo-icon">
                            <span className="mx-2 text-success" onClick={handleEdit}>
                                <i className="fa fa-pencil" aria-hidden="true"></i>
                            </span>


                            <span className="mx-2 text-danger" onClick={removeItem}>
                                <i className="fa fa-trash" aria-hidden="true"></i>
                            </span>
                    </div>
                </li>
            </div>
        );
    }
}

export default TodoItem