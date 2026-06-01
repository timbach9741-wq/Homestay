import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Detail from './pages/Detail';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Pricing from './pages/Pricing';
import CountryList from './pages/CountryList';
import { LanguageProvider } from './context/LanguageContext';

// Scroll to top on every page navigation (route changes)
function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTopOnNavigate />
      <LanguageProvider>
        <div className="bg-background text-on-background min-h-screen font-body-md antialiased overflow-x-hidden flex flex-col">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/country/:countryId" element={<CountryList />} />
              <Route path="/landing" element={<Landing />} />
              <Route path="/detail" element={<Detail />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/pricing" element={<Pricing />} />
            </Routes>
          </div>
          <Footer />
          <ScrollToTop />
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;
