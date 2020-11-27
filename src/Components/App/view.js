import './style.module.scss';
import Header from '../Header';
import Home from '../Home/view';
import WoloxInfo from '../WoloxInfo/view';

function App() {
  return (
    <div className="main-container">

      <Header />
      <Home />
      <WoloxInfo />

    </div>
  );
}

export default App;
