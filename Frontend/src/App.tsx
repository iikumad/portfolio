import { BrowserRouter, Routes, Route, Navigate,useLocation } from 'react-router-dom'

// pages and components
import NavBar from './components/navBar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import About from './pages/About'
import Skills from './pages/Skills'
import { CSSTransition, TransitionGroup } from 'react-transition-group';


function App() {
  const location = useLocation();  // Using location in a valid context

  return (
    <div>
      <NavBar />
      <div className='pages'>
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade"  timeout={{ enter: 400, exit: 200 }}>
            <Routes location={location}>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/Resume' element={<Skills />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

export default App;