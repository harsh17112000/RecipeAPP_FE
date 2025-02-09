import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom"
import Header from './layouts/Header';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Register from './pages/Register/Register';
import Forgotpassword from './pages/ForgotPassword/Forgotpassword';
import ResetPassword from './pages/ForgotPassword/ResetPassword';
import RecipeDetails from './pages/RecipeDetails/RecipeDetails';

function App() {
  return (
  <>
  <Header />
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route  path='/RecipeDetails/:id' element={<RecipeDetails />}/>
      <Route path='/forgotpassword' element={<Forgotpassword />} />
      <Route path='/resetpassword/:id/:token' element={<ResetPassword />} />
    </Routes>
  </>
  );
}

export default App;
