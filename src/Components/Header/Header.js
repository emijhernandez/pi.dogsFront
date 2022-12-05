import {Link} from 'react-router-dom'
import './Header.css';


function Header() {
  return(
    <div className="header">
      <div className="header_cont">
        <div className='div_responsive_header'>
          <br/>
          <br/>
          <br/>
          <br/>
          <Link to="/home" className="logo"><h1 className="logo">DOGS</h1></Link>
        </div>
          <a href="https://www.linkedin.com/in/emiliano-hernandez-473a3a231/" target="_balck" className="about">Linkedin</a>
      </div>
    </div>
  )
}

export default Header;