import {Routes,Route}from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import MyAlbums from './components/MyAlbums';
import MyAlbumOne from './components/MyAlbumOne';
const App = ()=>{
  return(
   <div className='container'>
    <Header/>    
    <Routes>
      <Route path='/' exact element={<Main/>}/>
      <Route path='myalbums' element={<MyAlbums/>}/>
      <Route path='myalbumone' element={<MyAlbumOne/>}/>
    </Routes>
    <Footer/>
   </div>
  )
};

export default App;