import Home from './components/home/home';
import BlogPage from './components/blogPage/blogPage';
import BlogInfo from './components/blogInfo/blogInfo';
import JoinLogin from './components/join-login/join-login';
import JoinSign from './components/join-sign/join-sign';
import Content from './components/content/content';
import Forgot from './components/forgot/forgot';
import BuildPass from './components/forgot/buildPass';
import NewPass from './components/forgot/newPass';
import './App.scss'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <div className='main-app'>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<BlogPage />} path="/blog" />
            <Route element={<BlogInfo />} path="/blog/:id" />
            <Route element={<JoinLogin />} path="/login" />
            <Route element={<JoinSign />} path="/sign" />
            <Route element={<Content />} path="/content" />
            <Route element={<Forgot />} path="/forgot" />
            <Route element={<BuildPass />} path="/build" />
            <Route element={<NewPass />} path="/newPass" />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
