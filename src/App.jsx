import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Navbar from './components/Navbar';
import { Home, About, Projects, Contact } from './pages';

const TransitionLayout = ({ children }) => {
    let location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                classNames="fade"
                timeout={300}
            >
                {children}
            </CSSTransition>
        </TransitionGroup>
    );
}

const App = () => {
    return (
        <main className='bg-slate-300/20'>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<TransitionLayout><About /></TransitionLayout>} />
                    <Route path='/projects' element={<TransitionLayout><Projects /></TransitionLayout>} />
                    <Route path='/contact' element={<TransitionLayout><Contact /></TransitionLayout>} />
                </Routes>
            </Router>
        </main>
    )
}

export default App;