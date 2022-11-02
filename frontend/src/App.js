import './App.css';
import {Routes, Route} from "react-router-dom"
// Importing Pages
import Homepage from "./pages/Homepage/Homepage"
import SearchPage from './pages/Searchpage/SearchPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import AcessPage from './pages/AccessPage/AccessPage'
import RestaurantPage from "./pages/RestaruantPage/RestaurantPage";
import CreateRestaurant from "./components/CreateRestaurantComponent/CreateRestaurantComponent";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

function App() {
  
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<Homepage/>}></Route>
                <Route path={"/search"} element={<SearchPage/>}></Route>
                <Route path={"/profile"} element={<ProfilePage/>}></Route>
                <Route path={"/access"} element={<AcessPage/>}></Route>
                <Route path={"/createRestaurant"} element={<CreateRestaurant/>}></Route>
                <Route path={"/restaurant/:restaurantID"} element={<RestaurantPage/>}></Route>
                <Route path={"/registration"} element={<RegistrationPage/>}></Route>
                <Route path={"/createReview"} element={<RegistrationPage/>}></Route>

            </Routes>
        </div>
    );
}

export default App;