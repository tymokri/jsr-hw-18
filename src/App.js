import Nav from './components/Nav';
import NavRoutes from './components/NavRoutes';
import './App.css';

function App() {
  return (
    <div className="App">

      <h1 className="text-center mt-5 mb-5">TODO LIST</h1>

      <Nav />

      <NavRoutes />

    </div>
  );
}

export default App;
