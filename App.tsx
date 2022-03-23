import { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './src/components/Auth/Login';
import Signup from './src/components/Auth/Signup';
import Dashboard from './src/components/Dashboard';

import NotificationBanner from './src/components/Shared/NotificationBanner';
import PublicRoute from './src/components/Shared/Router/public-route';
import PrivateRoute from './src/components/Shared/Router/private-route';
import ErrorBoundary from './src/components/Shared/ErrorBoundary';
import GlobalStyles from './src/components/Shared/GlobalStyles';

function App(): ReactElement {
  return (
    <>
      <GlobalStyles />
      <NotificationBanner />
      <Router>
        <ErrorBoundary link="/">
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <PublicRoute>
                  <Signup />
                </PublicRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </ErrorBoundary>
      </Router>
    </>
  );
}

export default App;
