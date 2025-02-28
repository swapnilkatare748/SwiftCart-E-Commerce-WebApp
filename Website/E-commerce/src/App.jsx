import React from 'react'
import './App.css';
import { BrowserRouter , Routes, Route, Link } from 'react-router-dom';
import HomePage from "./Pages/HomePage/HomePage";
import Error from './Pages/ErrorPage/Error';
import Navbar from "./Components/Navbar/Navbar";

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
       <Navbar/>
       <Routes>
        
          <Route path='/' element={<HomePage/>}/>
          <Route path='*' element={<Error/>}/>

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
    </div>
  )
}

export default App
