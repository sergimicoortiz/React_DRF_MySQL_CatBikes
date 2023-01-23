import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading/Loading';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import { StationContext } from './context/StationsContext';
import './App.scss';
import { BikesContextProvider } from "./context/BikesContext";

function App() {

  const NotFound = React.lazy(() => import('./pages/NotFound/NotFound'));
  const Home = React.lazy(() => import('./pages/Home/Home'));
  const Dashboard = React.lazy(() => import('./pages/Dashboard/Dashboard'));
  
  const BikesList = React.lazy(() => import('./pages/Dashboard/Bikes/BikesList'));
  const BikesCreate = React.lazy(() => import('./pages/Dashboard/Bikes/BikesCreate'));
  const BikesUpdate = React.lazy(() => import('./pages/Dashboard/Bikes/BikesUpdate'));

  const StationList = React.lazy(() => import('./pages/Dashboard/Stations/StationsList'));
  const StationsCreate = React.lazy(() => import('./pages/Dashboard/Stations/StationsCreate'));
  const StationsUpdate = React.lazy(() => import('./pages/Dashboard/Stations/StationsUpdate'));


  return (
    <div>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <StationContext>
          
          <Header />
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
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              {/* Dashboard Bikes */}
              <Route path="/dashboard/bikes" element={<BikesList />} />
              <Route path="/dashboard/bikes/create" element={<BikesCreate />} />
              <Route path="/dashboard/bikes/update/:slug" element={<BikesUpdate />} />
              {/* DASHBOARD STATIONS */}
              <Route path="/dashboard/stations" element={<StationList />} />
              <Route path="/dashboard/stations/create" element={<StationsCreate />} />
              <Route path="/dashboard/stations/update/:slug" element={<StationsUpdate />} />
            </Routes>
          </BikesContextProvider>             
            <Footer />
          </StationContext>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
