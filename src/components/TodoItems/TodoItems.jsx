import React from "react";
import cn from 'classnames';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

// компонент повинен виводити всі TodoItems на окремій сторінці, але
// що має повернути return (і звідки брати дані для рендеру)?

const TodoItems = (props) => {
    const { savedTodoItems, onRemove } = props;

    return (
        <div>{
            savedTodoItems.map((item, index) => {
                return (
                    <div className="todo-item" key={ uniqid() }>
                        <div className="row">
                            <div className="col-auto">
                                <button className={ cn("btn", "btn-primary", "btn-sm")}
                                        type="button"
                                        onClick={ onRemove(index) }>-</button>
                            </div>
                            <div className="col">{ item }</div>
                        </div>
                    </div>
                )
            })
        }</div>
    )

};

TodoItems.propTypes = {
    savedTodoItems: PropTypes.array,
    onRemove: PropTypes.func
};

export default TodoItems;