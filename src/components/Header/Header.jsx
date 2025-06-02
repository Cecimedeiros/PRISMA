import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaSearch } from 'react-icons/fa';
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleGoToLogin = () => {
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div
            className="logo-container"
            onClick={handleGoHome}
            style={{ cursor: 'pointer' }}
          >
            <img src="./assets/logo.png" alt="Polícia Civil de Pernambuco" className="logo" />
            <div className="logo-text">
              <h3 className="h3">POLÍCIA CIVIL DE</h3>
              <h2 className="h2">PERNAMBUCO</h2>
            </div>
          </div>

          <div className="header-right">
            <div className="social-icons">
              <a href="#" className="social-icon"><FaFacebook /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaYoutube /></a>
            </div>

            <div className="institutional-links">
              <span
                onClick={handleGoToLogin}
                style={{ cursor: 'pointer', textDecoration: 'underline', color: 'white' }}
              >
                PORTAL DE INTERNET INSTITUCIONAL
              </span>
              {' | SERVIÇOS | CONCURSOS | OUVIDORIA | FALE CONOSCO'}
            </div>

            <div className="search-box">
              <input type="text" placeholder="Buscar..." />
              <button className="search-button"><FaSearch /></button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

