import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Pages/Layout';
import Sent from './Pages/LayoutPages/Sent';
import Inbox from './Pages/LayoutPages/Inbox';
import Drafts from './Pages/LayoutPages/Drafts';
import Analytics from './Pages/LayoutPages/Analytics';
import Deleted from './Pages/LayoutPages/Deleted';
import Settings from './Pages/LayoutPages/Settings';
import Favourite from './Pages/LayoutPages/Favourite';
function App() {
  
  const userInfo = {
    names : "Tuseef Ahmed",
    ages: 20
  }

  return (
   <>
  <div className="navbars_aligns">
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout profiename={userInfo.names} />}>
          <Route index element={<Inbox />} />
          <Route path="/blog" element={<Sent />} />
          <Route path="/drafts" element={<Drafts/>} />
          <Route path="/analytics" element={<Analytics/>} />
          <Route path="/deleted" element={<Deleted/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/favourite" element={<Favourite/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
   </>
    
  );
}

export default App;
