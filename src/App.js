import './App.css';
import Places from './components/Places/Places';

function App() {
  return (
    <div>
      <div className='heading'>
        <h1>Dream Destination</h1>
        <h2>Choose 4 of Your Desired Packages</h2>
      </div>
      <Places></Places>
    </div>
  );
}

export default App;
