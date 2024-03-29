import { 
    Route,
    Routes
    } from "react-router-dom";
import { Details, Favorites, Home, Search } from "./pages";

export const AppRoutes =()=>{
    return(  
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/favorites" element={<Favorites/>}/> 
                <Route path="/Search/:name" element={<Search/>}/>
                <Route path="/Detail/:id" element={<Details/>}/> 
            </Routes>
    )
}