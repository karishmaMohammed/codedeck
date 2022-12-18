import React, { useEffect, useState, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import routes from './routes';
import ModalProvider from './Context/ModalContext';
import  PlaygroundProvider  from './Context/PlaygroundContext';
const Loader = () => {
  <div className='flex justify-center items-center'>
    <div className='spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full ' role="status">
      <span className='visually-hidden'>Loading .... </span>
    </div>
  </div>
}
function App() {
  return (
    <Suspense fallback={Loader()}>
      {
        <PlaygroundProvider>
          <ModalProvider>
            <Router>
              <Routes>
                <>
                  {
                    routes.map((route, index) =>
                      <Route
                        path={route.path}
                        element={route.component}
                      />
                    )}
                </>
              </Routes>
            </Router>
          </ModalProvider>
        </PlaygroundProvider>

      }
    </Suspense>
  );
}

export default App;