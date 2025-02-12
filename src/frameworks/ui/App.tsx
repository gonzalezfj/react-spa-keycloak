import { Route, Routes } from 'react-router-dom';
import { UserDatil } from './pages/UserDetail/UserDetail';
import { Home } from './pages/Application/Home';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="users">
        <Route path=":id" element={<UserDatil />} />
      </Route>
    </Routes>
  );
}

export default App;
