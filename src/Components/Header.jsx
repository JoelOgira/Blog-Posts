import { Link } from "react-router-dom";
import { FaSearch, FaMobileAlt, FaTabletAlt, FaLaptop } from "react-icons/fa";

const Header = ({ search, setSearch, width }) => {
  return (
    <header className="Header navbar navbar-expand-sm navbar-responsive bg-transparent py-4">
      <div className="container">
        <div className="navbar-brand">
            <Link to="/" className='py-2'><strong>Windfall <span style={{color: 'black'}}>Blogs</span></strong></Link>
        </div>   
        <div className="deviceShowcase">
          {width < 768 ? <FaMobileAlt /> : width < 992 ? <FaTabletAlt /> : <FaLaptop />}
        </div>     
        <ul className="navbar-nav mx-4">
            <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/post" className="nav-link">Post</Link>
            </li>
            <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
            </li>
        </ul>
        <form className="searchForm" onSubmit={e => e.preventDefault()}>
          <div className="input-group">
          <label htmlFor="Search">Search posts</label>
          <input 
            type="text"
            placeholder="Search posts"
            className="form-control"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button className="btn btn-outline-secondary" style={{color: 'teal', border: 'none'}}><FaSearch /></button>
          </div>
        </form>
      </div>
    </header>
  )
}

export default Header;