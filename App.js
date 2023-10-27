import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Router-Links/Login';
import { auth, app } from './firebaseConfig';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from './components/Router-Links/SignUp';
import Register from './components/Router-Links/Register';
import HomeComponent from './HomeComponent';
import Home from './components/Router-Links/Home'
import Explore from './components/Router-Links/Explore'
import Communities from './components/Router-Links/Communities'
import Messages from './components/Router-Links/Messages'
import Bookmarks from './components/Router-Links/Bookmarks'
import Profile from './components/Router-Links/Profile'
import More from './components/Router-Links/More'
import ForYou from './components/Router-Links/ForYou'
import Following from './components/Router-Links/Following'
import Search from './components/Router-Links/Search'
import Notifications from './components/Router-Links/Notifications'
import { Toaster } from 'react-hot-toast';
import TweetComponent from './components/Router-Links/TweetComponent';


function App() {
  return (
      <>
        <Routes>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/' element={<HomeComponent/>}>
            <Route path='/' element={<Home/>}>
              <Route path='ForYou' element={<ForYou/>}/>
              <Route path='Following' element={<Following/>}/>
            </Route>
            <Route path='Explore' element={<Explore/>}/>
            <Route path='Communities' element={<Communities/>}/>
            <Route path='Notifications' element={<Notifications/>}/>
            <Route path='Messages' element={<Messages/>}/>
            <Route path='Bookmarks' element={<Bookmarks/>}/>
            <Route path='Profile' element={<Profile/>}/>
            <Route path='More' element={<More/>}/>
            <Route path='Search' element={<Search/>}/>
          </Route>
        </Routes> 
        <Toaster position='top-center'/>
    </>
  );
    }


export default App;
