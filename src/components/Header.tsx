import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Heart, Menu, X, User, LogOut } from 'lucide-react';
import Button from './ui/Button';

const Header: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
    navigate('/');
  };

  const navLinkClasses = ({ isActive }: { isActive: boolean }) => {
    return `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
      isActive
        ? 'text-green-700 bg-green-50'
        : 'text-gray-600 hover:text-green-700 hover:bg-gray-50'
    }`;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Heart className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">MediCare</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-2">
            <NavLink to="/" className={navLinkClasses} end>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClasses}>
              About Us
            </NavLink>
            <NavLink to="/contact" className={navLinkClasses}>
              Contact
            </NavLink>

            {isAuthenticated ? (
              <>
                {user?.role === 'patient' && (
                  <NavLink to="/patient/history" className={navLinkClasses}>
                    Medical History
                  </NavLink>
                )}
                <div className="ml-3 flex items-center space-x-2">
                  <div className="px-3 py-2 text-sm text-gray-700">
                    <span className="font-medium">{user?.name}</span>
                    <span className="ml-1 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-800 capitalize">
                      {user?.role}
                    </span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleLogout}
                    className="flex items-center"
                  >
                    <LogOut className="h-4 w-4 mr-1" />
                    Logout
                  </Button>
                </div>
              </>
            ) : (
              <div className="flex items-center ml-3 space-x-2">
                <Button variant="outline" size="sm" onClick={() => navigate('/signin')}>
                  Sign In
                </Button>
                <Button size="sm" onClick={() => navigate('/signup')}>
                  Sign Up
                </Button>
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg bg-white">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive
                  ? 'text-green-700 bg-green-50'
                  : 'text-gray-700 hover:text-green-700 hover:bg-gray-50'
              }`
            }
            onClick={() => setIsMenuOpen(false)}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive
                  ? 'text-green-700 bg-green-50'
                  : 'text-gray-700 hover:text-green-700 hover:bg-gray-50'
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive
                  ? 'text-green-700 bg-green-50'
                  : 'text-gray-700 hover:text-green-700 hover:bg-gray-50'
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>

          {isAuthenticated ? (
            <>
              {user?.role === 'patient' && (
                <NavLink
                  to="/patient/history"
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? 'text-green-700 bg-green-50'
                        : 'text-gray-700 hover:text-green-700 hover:bg-gray-50'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Medical History
                </NavLink>
                           
              )}
              <div className="border-t border-gray-200 pt-4 pb-3">
                <div className="px-3 py-2">
                  <div className="flex items-center">
                    <User className="h-8 w-8 rounded-full bg-gray-100 p-1 text-gray-700" />
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">{user?.name}</div>
                      <div className="text-sm font-medium text-gray-500">{user?.email}</div>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1">
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-700 hover:bg-gray-50"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="mt-3 space-y-2 px-3">
              <Button
                fullWidth
                variant="outline"
                onClick={() => {
                  navigate('/signin');
                  setIsMenuOpen(false);
                }}
              >
                Sign In
              </Button>
              <Button
                fullWidth
                onClick={() => {
                  navigate('/signup');
                  setIsMenuOpen(false);
                }}
              >
                Sign Up
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;