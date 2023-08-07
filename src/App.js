import './App.css'
import CardsList from './components/CardsList';



function App() {
  return(
    <>
      <div className='header'>
      <div className='row1'>
      </div>
      <div className='row2'>
        <h3>About your Books</h3>
      </div>
    </div>
    <div className='container'>
      <CardsList/>
      </div>
    </>
  )
}

export default App;
