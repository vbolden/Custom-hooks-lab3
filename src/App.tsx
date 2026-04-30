import './App.css'
import Items from './components/Items.tsx'

function App() {
 
  return (
    <div>
      <div className='pagination'>
        <h2>Pagination Demo</h2>
        <Items />
      </div>

      <div className="debounce">
        <h2>Debounce</h2>
      </div>
    </div>
  )
}

export default App
