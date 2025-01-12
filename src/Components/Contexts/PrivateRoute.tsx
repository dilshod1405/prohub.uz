import { useAuth } from './Auth';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  client?: React.ReactNode;
  staff?: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ client, staff }) => {
  const {checkStaff, checkToken} = useAuth();

  if (!checkToken()) {
    return <Navigate to="/login" />;
  }

  if (checkStaff() === true && checkToken()) {
    return <><Navigate to="/admin-dashboard" />{staff}</>;
  } else if (checkStaff() === false && checkToken()) {
    return <><Navigate to="/client-dashboard" />{client}</>;
  } else {
    return <Navigate to="/login" />;
  }
  
};

export default PrivateRoute;