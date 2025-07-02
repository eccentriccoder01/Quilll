import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About';
import Article from './Pages/Article';
import Articles from './Pages/Articles';
import Navbar from './Components/Navbar';
import NotFound from './Pages/NotFound';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar/>
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-20">
          <Routes>  
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/articles' element={<Articles/>}/>
            <Route path='/article/:name' element={<Article/>}/>
            <Route path='*' element={<NotFound/>}></Route>
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;