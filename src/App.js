import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from './components/pages-component/AboutUs';
import Blog from './components/pages-component/Blog';
import Home from "./components/pages-component/Home";
import Contacts from './components/pages-component/Contacts';
import Explore from './components/pages-component/Explore';
import CreatePost from './components/pages-component/user/CreatePost';
import Login from './components/pages-component/user/Login';
import UserProfile from './components/pages-component/user/Profile';
import ProfileSettings from './components/pages-component/user/ProfileSettings';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog-flow' element={<Home />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contacts' element={<Contacts />} />
          {/* User Routes */}
          <Route path='/login' element={<Login />} />
          <Route path='/user-profile' element={<UserProfile />} />
          <Route path='/user-settings' element={<ProfileSettings />} />
          <Route path='/create-post' element={<CreatePost />} />

          <Route
            path="/:author/:title"
            element={
              <Blog
                blogTitle="Sample Blog Title"
                blogThumbnail="sample-thumbnail.jpg"
                blogContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                blogAuthor="John Doe"
              />}
          />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
