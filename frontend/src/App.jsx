import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading/Loading';
// import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import './App.scss';
import { BikesContextProvider } from "./context/BikesContext";

function App() {

  const Home = React.lazy(() => import('./pages/Home/Home'));
  const BikesList = React.lazy(() => import('./pages/Dashboard/Bikes/BikesList'));
  const BikesCreate = React.lazy(() => import('./pages/Dashboard/Bikes/BikesCreate'));

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          {/* <Header /> */}
          <ToastContainer
            position="top-right"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover
            theme="light"
          />
          <BikesContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              {/* Dashboard Bikes */}
              <Route path="/dashboard/bikes" element={<BikesList />} />
              <Route path="/dashboard/bikes/create" element={<BikesCreate />} />
            </Routes>
          </BikesContextProvider>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
