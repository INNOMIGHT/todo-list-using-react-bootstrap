import React, {Component} from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component{

    render() {
        const {items, handleRemove, removeItem, handleEdit} = this.props

        return(
                <div>
                    <ul className="list-group my-5"><h3 className="text-capitalize text-center">TodoList</h3>
                        {
                            items.map(item => {
                                return(
                                    <TodoItem
                                        key={item.id}
                                        title={item.title}
                                        removeItem={() => removeItem(item.id)}
                                        handleEdit={() => handleEdit(item.id)}
                                    />
                                )
                            })
                        }

                    <button className="btn btn-danger btn-block text-capitalize mt-5" onClick={handleRemove}>Clear List</button>
                    </ul>
                </div>
        )

    }
}

export default TodoList