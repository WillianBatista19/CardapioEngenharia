import icone from '../imgs/icone.png';
import './nav.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light w-1000">
            <img class="navbar-logo" src={icone} width="60" height="60" alt=""/>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
        
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Cardápio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Empresa</a>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/register">Login</Link>
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar;