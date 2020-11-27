import './style.module.scss';
import Header from '../Header';
import Home from '../Home/view';

function App() {
  return (
    <div className="main-container">

      <Header />
      <Home />
      <div className="benefits"></div>
      <div className="footer"></div>

    </div>
  );
}

export default App;
