import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Detail from './pages/Detail';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Pricing from './pages/Pricing';
import CountryList from './pages/CountryList';

function App() {
  return (
    <Router>
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
      </div>
    </Router>
  );
}

export default App;
