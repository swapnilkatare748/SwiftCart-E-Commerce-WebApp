import React from 'react'
import './App.css';
import { BrowserRouter , Routes, Route, Link } from 'react-router-dom';
import HomePage from "./Pages/HomePage/HomePage";
import Error from './Pages/ErrorPage/Error';
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ProductDetailPage from './Pages/ProductDetailPage/ProductDetailPage';
import CartPage from './Pages/CartPage/CartPage';
import { CartProvider } from "./Context/CartContext.jsx"; // Import the CartProvider



// const ProtectedRoute = ({ children, allowedRoles }) => {
//   const isLoggedIn = localStorage.getItem("loggedIn") === "true";
//   const userType = localStorage.getItem("userRole");

//   console.log("ProtectedRoute - LoggedIn:", isLoggedIn);
//   console.log("ProtectedRoute - UserType:", userType);
//   console.log("Allowed Roles:", allowedRoles); // Check allowedRoles array

//   // Check if user is logged in
//   if (!isLoggedIn) {
//     return <Navigate to="/login" replace />;
//   }
//   return children;
// };


function App() {
  return (
    <div className='App'>
      <CartProvider>
       <Navbar/>
       <Routes>
        
          <Route path='/' element={<HomePage/>}/>
          <Route path='*' element={<Error/>}/>
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path='/cart' element={<CartPage/>}/>
          {/*        
             <Route
          path="/exam"
          element={
            <ProtectedRoute allowedRoles={["User"]}>
              <ExamDashbord/>
            </ProtectedRoute>
          }
        >
          <Route index element={<ExamPanel />} />
          <Route path='dashboard' element={<ExamPanel />} />

          <Route path="/exam/:section/:page" element={<Homepage />} />
          <Route path='settings' element={<Setting/>}/>

           </Route> */}


       </Routes>
       <Footer/>
       </CartProvider>
    </div>
  )
}

export default App
