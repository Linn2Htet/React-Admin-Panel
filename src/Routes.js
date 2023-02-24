import { Route, Navigate } from 'react-router-dom';

// Assume that isAuthenticated is a boolean value indicating whether the user is authenticated or not
const isAuthenticated = true;

// A public route that can be accessed by anyone
export const PublicRoute = ({ component: Component, ...props }) => (
  <Route {...props} element={<Component />} />
);

// A protected route that requires authentication
export const ProtectedRoute = ({ component: Component, ...props }) => (
  <Route
    {...props}
    element={
      isAuthenticated ? (
        <Component />
      ) : (
        <Navigate to="/login" replace={true} />
      )
    }
  />
);
