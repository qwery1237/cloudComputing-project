import { useState } from 'react';
import Header from './components/Header/Header';
import Todolist from './components/todoList/Todolist';
import { DarkModeProvider } from './context/DarkModeContext';

const filters = ['all', 'active', 'completed'];

function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <Todolist filter={filter} />
    </DarkModeProvider>
  );
}

export default App;
