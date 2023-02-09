import { Link } from "react-router-dom";
// import { getTodoItems } from "../../data/..."; // треба передати дані для нинамічних todoItems

const Nav = () => {
    // let todoItems = getTodoItems(); // треба передати дані для нинамічних todoItems
    return (
        <div>
            <nav className='navigation-todo d-flex gap-3 justify-content-center mb-5'>
                <Link to="/">Home</Link>
                <Link to="/todoItems">TodoItems</Link>

                {/*треба передати дані для нинамічних todoItems*/}
                {/*{todoItems.map((todoItem, index) => (*/}
                {/*    <Link*/}
                {/*        to={`/todoItems/${index}`}*/}
                {/*        key={todoItem.id}*/}
                {/*    >*/}
                {/*        {todoItem.title}*/}
                {/*    </Link>))}*/}
            </nav>
        </div>
    );
};

export default Nav;