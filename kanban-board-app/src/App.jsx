import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import './App.css'

function App() {
return(
 <div className='container'>
    <Navbar />
    <Sidebar />
    <div className='main-content'>
      <h2>Home Page</h2>
    </div>
    <div>
      <Footer />
    </div>
  </div>

);

}

export default App
