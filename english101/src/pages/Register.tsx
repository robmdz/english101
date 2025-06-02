import { useState } from 'react';

interface FormData {
  name: string;
  phone: string;
  email: string;
}

const Register = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // TODO: Add registration logic here
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="min-h-screen bg-black p-8">
      <nav className="max-w-7xl mx-auto mb-8">
        <div className="flex justify-between items-center">
          <a 
            href="/" 
            className="text-3xl font-bold text-purple-400 hover:text-purple-300"
          >
            English 101
          </a>
        </div>
      </nav>

      <div className="max-w-md mx-auto bg-gray-900 rounded-lg shadow-lg p-8 border border-purple-500">
        <h2 className="text-2xl font-bold text-purple-400 mb-6">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-purple-300">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 bg-gray-800 text-white ${
                errors.name ? 'border-red-500' : 'border-gray-700'
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-purple-300">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 bg-gray-800 text-white ${
                errors.phone ? 'border-red-500' : 'border-gray-700'
              }`}
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-purple-300">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 bg-gray-800 text-white ${
                errors.email ? 'border-red-500' : 'border-gray-700'
              }`}
              placeholder="Enter your email address"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Register
          </button>

          <p className="text-center text-sm text-purple-300">
            Already have an account?{' '}
            <a href="/" className="text-purple-400 hover:text-purple-300">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;