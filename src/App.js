
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/HomePage/page';
import Genres from './pages/Genres/page';
import TopSearch from './pages/TopSearches/page';
import MoviePage from './pages/MoviePage/page';
import SearchPage from './pages/Search/page';

function App() {
  return (
    <div className="App  bg-bgColor_1">
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/genres/:id' element={<Genres/>}/>
        <Route path='/topsearch' element={<TopSearch/>}/>
        <Route path='/movie/:id' element={<MoviePage/>}/>
        <Route path='/search/:searchtext' element={<SearchPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
