import Navbar from './components/Navbar';
import Footer from './components/Footer';
import KanbanBoard from './components/KanbanBoard';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main className="container">
        <h2>Task Management</h2>
        
        <section style={{ marginBottom: '20px' }}>
          <h3>Task List</h3>
          {/* You can add task list components here in the future */}
        </section>

        <section>
         
          <KanbanBoard />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;