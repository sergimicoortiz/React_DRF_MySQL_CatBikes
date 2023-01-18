import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading/Loading';
// import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import './App.scss';

function App() {

  const Home = React.lazy(() => import('./pages/Home/Home'));
  const BikesList = React.lazy(() => import('./pages/Dashboard/Bikes/BikesList'));
  // const NotFound = React.lazy(() => import('./components/error_404'));
  // const ArticleList = React.lazy(() => import('./components/Article/ArticleList'));
  // const ArticleCreate = React.lazy(() => import('./components/Article/ArticleCreate'));
  // const ArticleUpdate = React.lazy(() => import('./components/Article/ArticleUpdate'));

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
            {/* Dashboard Bikes */}
            <Route path="/dashboard/bikes" element={<BikesList />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
