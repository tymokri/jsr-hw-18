import React from "react";
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import { Link } from "react-router-dom";
// import cn from 'classnames';

const TodoItem = (props) => {
    const { savedTodoItems, onRemove, onChange } = props;

    return (
        savedTodoItems.map((item, index) => {
            return (
                <div className="col-4" key={ uniqid() }>
                    <div className="taskWrapper">

                        {/* індекс треба замінити на id для Link */}
                        <Link to={`todoItems/${index}`} className="taskHeading">{ item.title }</Link>

                        <div className="taskDescription">{ item.description }</div>

                        <hr/>

                        <div className="d-flex gap-2">
                            <input className="form-check-input"
                                   id="checkboxId"
                                   data-item-id={ index }
                                   type="checkbox"
                                   checked={ savedTodoItems.done }
                                   onChange={ onChange(index) }
                            />
                            <label className="form-label" htmlFor="checkboxId">
                                <span>Done</span>
                            </label>
                        </div>

                        <hr/>

                        <button type="button"
                                className="btn btn-danger delete-btn"
                                data-item-id={ index }
                                onClick={ onRemove(index) }>
                            Delete
                        </button>
                    </div>

                    {/*// <div className="todoItem" key={ uniqid() }>*/}
                    {/*//     <div className="row">*/}
                    {/*//         <div className="col-auto">*/}
                    {/*//             <button className={ cn("btn", "btn-primary", "btn-sm")}*/}
                    {/*//                     type="button"*/}
                    {/*//                     onClick={ onRemove(index) }>-</button>*/}
                    {/*//         </div>*/}
                    {/*//         <div className="col">{ item }</div>*/}
                    {/*//     </div>*/}
                    {/*// </div>*/}
                </div>
            );
        })
    );
};

TodoItem.propTypes = {
    savedTodoItems: PropTypes.array,
    onRemove: PropTypes.func
};

export default TodoItem;