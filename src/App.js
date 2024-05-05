import { Link } from 'react-router-dom';

import './App.css';
import AppRoutes from './Config/Routes';

const App = () => (
    <>
        <AppRoutes>
            <header>
                <Link to={"/"} > Login</Link>
                <Link to={"/cadastro"}> Cadastro </Link>
                <Link to={"/principal"}> Principal </Link>
            </header>
        </AppRoutes>
    </>
)
      
export default App;
