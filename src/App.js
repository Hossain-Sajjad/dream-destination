import './App.css';
import Places from './components/Places/Places';
import Question from './components/Questions/Question';

function App() {
  return (
    <div>
      <div className='heading'>
        <h1>Dream <span>Destination</span></h1>
        <h2>Choose 4 of Your <span>Desired Packages</span></h2>
      </div>
      <Places></Places>
      <Question></Question>
    </div>
  );
}

export default App;
