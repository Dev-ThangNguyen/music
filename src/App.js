
import { Routes, Route } from 'react-router-dom'

import './App.css';
import Header from './Resource/partial/Header';
import Home from './Resource/view/home/Home';
import Page_1 from './Resource/view/page_1/Page_1';
import Provider from './Resource/view/page_1/Todo/Provider';
import Page_2 from './Resource/view/page_2/Page_2';
import Page_3 from './Resource/view/page_3/Page_3';
function App() {
  
  return (
    <>
      <div className="App">
            <Header />
      </div>
      <Routes>
        <Route path='/music' element={<Home />} defaut></Route>
        <Route path='/todo' element={
          <Provider>
            <Page_1 />
          </Provider>
      }></Route>
        <Route path='/page2' element={<Page_2 />}></Route>
        <Route path='/page3' element={<Page_3 />}></Route>
      </Routes>
    </>

  );
}

export default App;
