
import { useAdmin } from '@/contexts/AdminContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Admin = () => {
  const { logout } = useAdmin();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50 pt-24 pb-12"> {/* Added pt-24 for padding-top */}
        <div className="page-container py-12">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
            <Button 
              variant="outline" 
              onClick={handleLogout}
              className="button-hover-effect"
            >
              Logout
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">User Management</h2>
              <p className="text-gray-600 mb-4">Manage user accounts, permissions, and activities</p>
              <Button className="w-full">Manage Users</Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Content Management</h2>
              <p className="text-gray-600 mb-4">Update website content, blogs, and announcements</p>
              <Button className="w-full">Edit Content</Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Analytics</h2>
              <p className="text-gray-600 mb-4">View website traffic, user engagement, and other metrics</p>
              <Button className="w-full">View Reports</Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Claims Processing</h2>
              <p className="text-gray-600 mb-4">Review and manage insurance claims</p>
              <Button className="w-full">Process Claims</Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Policy Management</h2>
              <p className="text-gray-600 mb-4">Create and update insurance policies</p>
              <Button className="w-full">Manage Policies</Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">System Settings</h2>
              <p className="text-gray-600 mb-4">Configure application settings and preferences</p>
              <Button className="w-full">Configure System</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
