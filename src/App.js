import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Header from './components/Shared/Header/Header';
import Home from './components/Pages/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Blog from './components/Pages/Blog/Blog';
import NotFound from './components/Shared/NotFound/NotFound';
import EmailLogin from './components/Pages/Login/EmailLogin/EmailLogin';
import Registar from './components/Pages/Login/Registar/Registar';
import MyItems from './components/Pages/Items/MyItems/MyItems';
import ManageItems from './components/Pages/Items/ManageItems/ManageItems';
import AddItem from './components/Pages/Items/AddItem/AddItem';
import ItemDetails from './components/Pages/Items/ItemDetails/ItemDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>


      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<EmailLogin></EmailLogin>}></Route>
        <Route path='/registar' element={<Registar></Registar>}></Route>

        <Route path='/additem' element={
          <AddItem></AddItem>
        }></Route>



        <Route path='/myitems' element={
          <MyItems></MyItems>
        }></Route>



        <Route path='/manageitems' element={
          <ManageItems></ManageItems>
        }></Route>

        <Route path='/manageitem/:itemID' element={
          <ItemDetails></ItemDetails>
        }></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>


      <Footer></Footer>

      <ToastContainer />
    </div>
  );
}

export default App;
