import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Componants/Home';
import Navbar from './Shared/Navbar';
import Resume from './Componants/Resume';
import Projects from './Projects/Projects';
import Blogs from './Componants/Blogs';
import NotFound from './Componants/Notfound';
import ContactMe from './Componants/ContactMe';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/resume' element={<Resume></Resume>}></Route>
        <Route path='/contact' element={<ContactMe></ContactMe>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
