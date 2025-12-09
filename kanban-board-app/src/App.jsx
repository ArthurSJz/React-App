import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import KanbanBoard from './components/KanbanBoard';  // Import the new component
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="container">
        <KanbanBoard />
      </div>
      <Footer />
    </div>
  );
}

export default App;