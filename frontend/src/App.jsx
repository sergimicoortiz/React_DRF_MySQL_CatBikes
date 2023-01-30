import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading/Loading';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import { StationContext } from './context/StationsContext';
import './App.scss';
import { BikesContextProvider } from "./context/BikesContext";
import { SlotsContextProvider } from "./context/SlotsContext";
import { UserContextProvider } from './context/UserContext';

function App() {

  const NotFound = React.lazy(() => import('./pages/NotFound/NotFound'));
  const Home = React.lazy(() => import('./pages/Home/Home'));
  const Dashboard = React.lazy(() => import('./pages/Dashboard/Dashboard'));

  //Bikes Dashboard
  const BikesList = React.lazy(() => import('./pages/Dashboard/Bikes/BikesList'));
  const BikesCreate = React.lazy(() => import('./pages/Dashboard/Bikes/BikesCreate'));
  const BikesUpdate = React.lazy(() => import('./pages/Dashboard/Bikes/BikesUpdate'));

  //Station Dashboard
  const StationList = React.lazy(() => import('./pages/Dashboard/Stations/StationsList'));
  const StationsCreate = React.lazy(() => import('./pages/Dashboard/Stations/StationsCreate'));
  const StationsUpdate = React.lazy(() => import('./pages/Dashboard/Stations/StationsUpdate'));

  //SLot Dashboard
  const SlotsList = React.lazy(() => import('./pages/Dashboard/Slots/SlotsList'));
  const SlotsDetails = React.lazy(() => import('./pages/Dashboard/Slots/SlotsDetails'));

  //Station Client
  const StationsClientList = React.lazy(() => import('./pages/StationsClient/StationsClientList'));
  const StationDetails = React.lazy(() => import('./pages/StationDetails/StationDetails'));

  //Login/Register
  const Login = React.lazy(() => import('./pages/Login/Login'));
  const Register = React.lazy(() => import('./pages/Login/Register'));

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <UserContextProvider>
            <StationContext>
              <BikesContextProvider>
                <SlotsContextProvider>
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
                    {/* Dashboard Slots */}
                    <Route path="/dashboard/slots" element={<SlotsList />} />
                    <Route path="/dashboard/slots/:id" element={<SlotsDetails />} />
                    {/* Stations Client */}
                    <Route path="/stations" element={<StationsClientList />} />
                    <Route path="/stations/:slug" element={<StationDetails />} />
                    {/* Login/Register */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                  </Routes>
                  <Footer />
                </SlotsContextProvider>
              </BikesContextProvider>
            </StationContext>
          </UserContextProvider>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
