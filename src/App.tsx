import './App.css'
import Pagination from './components/Pagination';
// import usePagination from "./usePagination";

function App() {
 
  return (
    <div>
      <div className='pagination'>
        <h2>Pagination Demo</h2>
        <Pagination />
      </div>

      <div className="debounce">
        <h2>Debounce</h2>
      </div>
    </div>
  )
}

export default App
