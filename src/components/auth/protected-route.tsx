import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './auth-context-provider';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  return isAuthenticated ? children : null;
};

export default ProtectedRoute;
