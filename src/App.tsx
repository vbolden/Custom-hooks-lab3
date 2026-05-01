import './App.css'
import Pagination from './components/Pagination';
import Debounce from './components/Debounce';

function App() {
 
  return (
    <div>
      <div className='pagination'>
        <h2>Pagination Demo</h2>
        <Pagination />
      </div>

      <div className="debounce">
        <h2>Debounce Search Demo</h2>
        <Debounce />
      </div>
    </div>
  )
}

export default App
