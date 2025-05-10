import { User } from '../types';

// This would be replaced with actual API endpoints in production
export async function signIn(email: string, password: string, role: 'doctor' | 'patient'): Promise<User> {
  // Stub implementation for development
  // In production: return axios.post('/api/auth/signin', { email, password, role }).then(response => response.data);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Mock authentication
  if (email && password) {
    return Promise.resolve({
      id: 'user-' + Math.random().toString(36).substr(2, 9),
      email,
      role,
      name: email.split('@')[0].replace(/[.]/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
    });
  }
  
  throw new Error('Invalid credentials');
}

export async function signUp(email: string, password: string, name: string, role: 'doctor' | 'patient'): Promise<User> {
  // Stub implementation for development
  // In production: return axios.post('/api/auth/signup', { email, password, name, role }).then(response => response.data);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock registration
  if (email && password && name) {
    return Promise.resolve({
      id: 'user-' + Math.random().toString(36).substr(2, 9),
      email,
      role,
      name
    });
  }
  
  throw new Error('Invalid registration data');
}


export async function signOut(): Promise<void> {
  // Stub implementation for development
  // In production: return axios.post('/api/auth/signout').then(() => {});
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return Promise.resolve();
}