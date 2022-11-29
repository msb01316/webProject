import { Link } from 'react-router-dom';
import './css/Header.css';

function Header({validLogin, isLoggedIn}) {
    return (
        <header>
            <h1>YouPedia</h1>
            {!validLogin ? <Link to="/login"><button type="button">Login or Signup</button></Link> 
                : <button type='button'>Logout</button>}
            <br></br>
        </header>
    );
}

export default Header;

/* <header>
            <h1>YouPedia</h1>
            <Link to="/login"><button type="button">Login or Signup</button></Link>
            <br></br>
        </header> */