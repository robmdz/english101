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
    <div className="min-h-screen bg-gradient-to-b from-purple-800 to-purple-900 p-4 sm:p-6 md:p-8">
      <nav className="max-w-7xl mx-auto mb-4 sm:mb-6 md:mb-8">
        <div className="flex justify-between items-center">
          <a 
            href="/" 
            className="text-2xl sm:text-3xl font-bold text-white hover:text-purple-300"
          >
            English 101
          </a>
        </div>
      </nav>

      <div className="max-w-md mx-auto bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border border-purple-500">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 bg-black text-white text-sm sm:text-base ${
                errors.name ? 'border-red-500' : 'border-purple-500'
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && <p className="mt-1 text-xs sm:text-sm text-red-400">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 bg-black text-white text-sm sm:text-base ${
                errors.phone ? 'border-red-500' : 'border-purple-500'
              }`}
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="mt-1 text-xs sm:text-sm text-red-400">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 bg-black text-white text-sm sm:text-base ${
                errors.email ? 'border-red-500' : 'border-purple-500'
              }`}
              placeholder="Enter your email address"
            />
            {errors.email && <p className="mt-1 text-xs sm:text-sm text-red-400">{errors.email}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-2 px-4 rounded-md hover:from-purple-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black text-sm sm:text-base"
          >
            Register
          </button>

          <p className="text-center text-xs sm:text-sm text-white">
            Already have an account?{' '}
            <a href="/" className="text-purple-300 hover:text-purple-200">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;