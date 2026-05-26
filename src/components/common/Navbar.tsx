import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return isActive
      ? "text-on-surface border-b-2 border-secondary-container font-bold pb-1 text-label-md font-label-md"
      : "text-on-surface-variant pb-1 text-label-md font-label-md hover:text-secondary-container transition-colors";
  };

  return (
    <header className={`fixed top-0 z-50 w-full bg-surface-container-lowest transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <nav className="flex justify-between items-center w-full px-margin-desktop py-4 max-w-container-max mx-auto">
        <Link to="/" className="text-headline-md font-headline-md font-bold text-on-surface hover:opacity-80">
          EduGuard
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          <Link className={getLinkClass('/')} to="/">Home</Link>
          <Link className={getLinkClass('/detail')} to="/detail">Homestays</Link>
          {user && (
            <Link className={getLinkClass('/dashboard')} to="/dashboard">Dashboard</Link>
          )}
        </div>
        <div className="flex gap-4 items-center">
          <button className="text-label-md font-label-md text-on-surface-variant hover:text-secondary-container transition-colors">Language</button>
          
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-label-md text-on-surface-variant font-medium">
                {user.email.split('@')[0]}님
                {user.membershipTier === 'premium' && <span className="ml-2 text-xs bg-secondary text-on-secondary px-2 py-1 rounded-full">Premium</span>}
              </span>
              <button 
                onClick={() => { logout(); navigate('/'); }}
                className="bg-surface-container-high text-on-surface px-6 py-2 rounded-full font-label-md hover:bg-surface-container-highest transition-all duration-200"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link 
              to="/login"
              className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-md hover:opacity-80 transition-all duration-200 inline-block"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
