import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Componants/Home';
import Navbar from './Shared/Navbar';
import Resume from './Componants/Resume';
import Projects from './Projects/Projects';
import ProjectOne from './Projects/ProjectOne';
import ProjectTwo from './Projects/ProjectTwo';
import Blogs from './Componants/Blogs';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='projects' element={<Projects></Projects>}></Route>
        <Route path='projectOne' element={<ProjectOne></ProjectOne>}></Route>
        <Route path='projectTwo' element={<ProjectTwo></ProjectTwo>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/resume' element={<Resume></Resume>}></Route>
      </Routes>
    </div>
  );
}

export default App;
