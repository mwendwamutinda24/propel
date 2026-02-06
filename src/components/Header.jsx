import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);


  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="navigation">
      <div className="logo">
        <img src="/Propel.png" alt="Propel Logo" />
      </div>

      {/* Hamburger / Close Icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          
          <span >✕</span>
        ) : (
        
          <>
            <span></span>
            <span></span>
            <span></span>
          </>
        )}
      </div>

      {/* Navigation Links */}
      <nav className={isOpen ? "nav-links open" : "nav-links"}>
        <Link to="/" onClick={handleLinkClick}>Products</Link>
        <Link to="/Experiment" onClick={handleLinkClick}>Experiments</Link>
        <Link to="/Results" onClick={handleLinkClick}>Results</Link>
        <Link to="/Experts" onClick={handleLinkClick}>Experts</Link>
        <Link to="/RequestAccess" onClick={handleLinkClick}>Request Access</Link>
        <Link to="/api" onClick={handleLinkClick}>APIs</Link>
      </nav>
    </header>
  );
}

export default Header;
