import logo from '../../logo.svg';
import '../../App.css';

import { Link } from 'react-router-dom';

const PageHome = () => (
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Link to={"/login"} > Login</Link>
        <Link to={"/cadastro"}> Cadastro </Link>
        <Link to={"/principal"}> Principal </Link>
      </div>
)

export default PageHome