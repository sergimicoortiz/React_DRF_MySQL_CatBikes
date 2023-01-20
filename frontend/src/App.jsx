import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading/Loading';
import Header from './components/Header/Header';
import { ToastContainer } from 'react-toastify';
import { StationContext } from './context/StationsContext';
import './App.scss';

function App() {

  const Home = React.lazy(() => import('./pages/Home/Home'));
  const Dashboard = React.lazy(() => import('./pages/Dashboard/Dashboard'));
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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              {/* DASHBOARD STATIONS */}
              <Route path="/dashboard/stations" element={<StationList />} />
              <Route path="/dashboard/stations/create" element={<StationsCreate />} />
              <Route path="/dashboard/stations/update/:slug" element={<StationsUpdate />} />
            </Routes>
          </StationContext>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
