import '../App.css'
import Logo from '../assets/blendix-logo.svg';

function Header () {

    return(
        <>
        <div className= "nav-bar" id="home" >
            <a className="logo" href="#home">            
                <img src={Logo} alt="Logo" />
            </a>
            <div className="nav-link">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Header
