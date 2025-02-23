// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import RecipeDetails from "./pages/RecipeDetails";
// import Login from "./pages/Login.jsx";
// import SignUp from "./pages/SignUp.jsx"
// import Footer from "./components/Footer.jsx"

// function App() {

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* <Route path="/recipes" element={<RecipeList />} /> */}
//         <Route path="/recipe/:id" element={<RecipeDetails />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="signup" element={<SignUp/>}/>
//         {/* <Route path="/signup" element={<SignUp />} /> */}


//       </Routes>
//       <Footer/>
//     </Router>
//   )
// }



// export default 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        <Route 
          path="/" 
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;

