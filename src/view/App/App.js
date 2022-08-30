import './App.scss';
import TickerValue from '../../components/TickerValue/TickerValue';
import TradingPairs from '../../components/TradingPairs/TradingPairs';

function App() {
  return (
    <div className='app'>
      <section className='tickerv__container'>
        <TickerValue />
      </section>
      <section className='selection__container'>
        <TradingPairs />
      </section>
    </div>
  );
}

export default App;
