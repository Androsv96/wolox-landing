import styles from './style.module.scss';
import Header from '../Header';
import Home from '../Home/view';
import WoloxInfo from '../WoloxInfo/view';
import Benefits from '../Benefits/view';
import Footer from '../Footer/view';

function App() {
  return (
    <div className={styles.main_container}>

      <Header />
      <Home />
      <WoloxInfo />
      <Benefits />
      <hr className={styles.separator} />
      <Footer />

    </div>
  );
}

export default App;
