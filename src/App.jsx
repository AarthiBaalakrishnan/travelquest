import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Explore from './pages/Explore';
import BucketList from './pages/BucketList';
import Results from './pages/Results';
import About from './pages/About';
import { useState } from 'react';

function App() {
  const [bucketList, setBucketList] = useState([]);
  return (
    <BrowserRouter>

    <Header />
    <Navigation />
    
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/explore" element={<Explore bucketList={bucketList} setBucketList={setBucketList} />}/>
            <Route path="/quiz/:cityId/:placeId" element={<Quiz />}/>
            <Route path='/results' element={<Results />}/>
            <Route path="/bucketlist" element={<BucketList bucketList={bucketList}
                                                          setBucketList={setBucketList} />}/>
            <Route path="/about" element={<About />}/>
        </Routes>

    <Footer />    
    
    </BrowserRouter>
  );
}
export default App;