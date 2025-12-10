import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import KanbanBoard from './components/KanbanBoard';
import List from './components/List'
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
   
      <div className="container">
        <h2>Task Management</h2>
        
        <div style={{ marginBottom: '20px' }}>
          <h3>Task List</h3>
          <List />
        </div>

        <div>
          <h3>Kanban Board</h3>
          <KanbanBoard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;