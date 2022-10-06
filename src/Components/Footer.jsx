import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {  
  const today = new Date();
  return (
    <footer className="sticky-footer container">      
      <hr style={{color: 'green', width: '100%', height: '1px'}} />
      <div className="row">
        <div className="col quick-links">
          <ul className="navbar-nav">
            <h4>Quick Links</h4>
            <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/post" className="nav-link">Posts</Link>
            </li>
            <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
            </li>
          </ul>
        </div>
        <div className="col useful-links">
          <ul className="navbar-nav">
            <h4>Categories</h4>
            <li className="nav-item">
                <Link to="/webdev" className="nav-link">WebDev</Link>
            </li>
            <li className="nav-item">
                <Link to="/mobile" className="nav-link">Mobile</Link>
            </li>
            <li className="nav-item">
                <Link to="/cybersecurity" className="nav-link">Cybersecurity</Link>
            </li>
          </ul>
        </div>
        <div className="col follow-us">
          <ul className="navbar-nav">
            <h4>Follow us</h4>
            <li className="nav-item">
                <a href="https://github.com" target="_blank" className="nav-link"><FaGithub style={{fontSize: '22px'}} /></a>
            </li>
            <li className="nav-item">
                <a href="https://linkedin.com" target="_blank" className="nav-link"> <FaLinkedin style={{fontSize: '22px'}} /> </a>
            </li>
            <li className="nav-item">
                <a href="https://twitter.com" target="_blank" className="nav-link"> <FaTwitter style={{fontSize: '22px'}} /> </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center pb-4" style={{color: 'teal', marginTop: '1em'}}>
        Windfall Blogs &copy; {today.getFullYear()}
      </p>
    </footer>
  )
}

export default Footer;