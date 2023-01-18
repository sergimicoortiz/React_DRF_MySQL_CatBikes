import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading/Loading';
// import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import './App.scss';

function App() {

  const Home = React.lazy(() => import('./pages/Home/Home'));
  const StationList = React.lazy(() => import('./pages/Dashboard/Stations/StationsList'));
  const StationsCreate = React.lazy(() => import('./pages/Dashboard/Stations/StationsCreate'));
  const StationsUpdate = React.lazy(() => import('./pages/Dashboard/Stations/StationsUpdate'));

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {/* DASHBOARD STATIONS */}
            <Route path="/dashboard/stations" element={<StationList />} />
            <Route path="/dashboard/stations/create" element={<StationsCreate />} />
            <Route path="/dashboard/stations/update/:id" element={<StationsUpdate />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
