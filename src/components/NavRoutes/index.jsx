import { Routes, Route } from "react-router-dom";
import HomePage from "../../routes/HomePage";
import TodoItemsPage from "../../routes/TodoItemsPage";
import SingleTodoItem from "../../routes/SingleTodoItem";

const NavRoutes = () => {
    return <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="todoItems" element={<TodoItemsPage />} />

        {/* приймаємо динамічний параметр в path */}
        <Route path="todoItems/:Id" element={<SingleTodoItem />} />

        <Route
            path="*"
            element={
                <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                </main>
            }
        />
    </Routes>
};

export default NavRoutes;