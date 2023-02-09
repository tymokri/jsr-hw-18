import React, { useState, useEffect } from "react";
import TodoItem from "../TodoItem/TodoItem";

const FormWithItems = () => {
    // form state (ідентифікатором буде індекс, чи краще генерувати id окремим полем в об'єкті ?)
    const [newTodoItemForm, setNewTodoItemForm] = useState({
        title: '',
        description: '',
        done: false
    });
    // to do items state
    const [savedTodoItems, setSavedTodoItems] = useState([]);
    const [isDisabled, setDisabled] = useState(true);

    // дані зникають зі сторджу при перезавантаженні - чому ?
    useEffect(() => {
        const dataFromStorage = localStorage.getItem('todoItems') || [];
        console.log(dataFromStorage); // дані є і порожній масив оночасно

        setSavedTodoItems(JSON.parse(dataFromStorage));

    },[]);

    useEffect(() => {
        localStorage.setItem('todoItems', JSON.stringify(savedTodoItems));
    },[newTodoItemForm, savedTodoItems]);

    const handleInputChange = (event) => {
        event.preventDefault();
        const target = event.target;
        const name = target.name;
        const value = target.value;
        if (target) {
            setDisabled(false);
        }
        setNewTodoItemForm({
            title: name === "title" ? value : newTodoItemForm.title,
            description: name === "description" ? value : newTodoItemForm.description,
            done: false
        });
    };

    const handleInputAdd = (event) => {
        event.preventDefault();
        savedTodoItems.unshift(newTodoItemForm);
        setSavedTodoItems(savedTodoItems);
        setNewTodoItemForm({
            title: '',
            description: '',
            done: false
        });
        setDisabled(true);
    };

    const handleInputClear = (event) => {
        event.preventDefault();
        setNewTodoItemForm({
            title: '',
            description: '',
            done: false
        });
    };

    // не працює функція для checkbox
    const handleTodoCheck = (index) => (event) => {
        event.preventDefault();

        savedTodoItems.filter((item, i) => i === index ?
            setNewTodoItemForm({
                        title: '',
                        description: '',
                        done: true
                    }) :
            setNewTodoItemForm({
                title: '',
                description: '',
                done: false
            })
        );
    };

    const handleRemove = (index) => (event) => {
        event.preventDefault();
        setSavedTodoItems(
            savedTodoItems.filter((todo, i) => i !== index)
        );
    };

    return (
        <div className="container">
            <div className="row">

                <div className="col-4">
                    <form id="todoForm">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="input-title">Task title</label>
                            <input type="text"
                                   name="title"
                                   className="form-control"
                                   placeholder="Title"
                                   required=""
                                   id="input-title"
                                   value={ newTodoItemForm.title }
                                   onChange={ handleInputChange }/>
                        </div>

                        <div className="mb-3">
                            <label className="form-label" htmlFor="textarea-title">Task title</label>
                            <textarea type="text"
                                      name="description"
                                      className="form-control"
                                      placeholder="Task body"
                                      cols="30" rows="10"
                                      required=""
                                      id="textarea-title"
                                      value={ newTodoItemForm.description }
                                      onChange={ handleInputChange }/>
                        </div>

                        <div className="d-flex justify-content-between">
                            <div className="d-flex gap-2">
                                <button type="submit"
                                        className="btn btn-primary"
                                        disabled={ isDisabled }
                                        onClick={ handleInputAdd }>
                                    Create task!
                                </button>
                                <button type="reset"
                                        className="btn btn-warning"
                                        onClick={ handleInputClear }>
                                    Clear
                                </button>
                            </div>

                            <div>
                                <button type="button"
                                        className="btn btn-danger remove-all"
                                        onClick={ handleRemove }>
                                    Delete
                                </button>
                            </div>

                        </div>

                    </form>
                </div>

                <div className="col-8">
                    <div className="row" id="todoItems">
                        <TodoItem
                            savedTodoItems={ savedTodoItems }
                            onRemove={ handleRemove }
                            onChange={ handleTodoCheck }
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FormWithItems;