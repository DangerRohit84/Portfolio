import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:desinarohit2007@gmail.com?subject=Contact from Portfolio - ${formData.name}&body=${formData.message}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="flex flex-col h-full justify-center">
      <div className="flex items-center mb-12">
        <div className="h-px bg-green-500 w-12 mr-4"></div>
        <h2 className="text-3xl font-bold tracking-widest text-white uppercase">Contact Me</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Info Side */}
        <div className="space-y-8">
          <p className="text-gray-400 text-lg leading-relaxed">
            I am currently available for projects and collaborations. 
            Connect with me to discuss AI, Machine Learning, or Software Development opportunities.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-300 group hover:text-green-400 transition-colors">
              <div className="w-12 h-12 rounded bg-gray-900 flex items-center justify-center border border-gray-800 group-hover:border-green-500/50 text-green-500 transition-all">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a href="mailto:desinarohit2007@gmail.com" className="font-medium hover:underline">desinarohit2007@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-300 group hover:text-green-400 transition-colors">
              <div className="w-12 h-12 rounded bg-gray-900 flex items-center justify-center border border-gray-800 group-hover:border-green-500/50 text-green-500 transition-all">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <a href="tel:+919391084844" className="font-medium hover:underline">+91 9391084844</a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-300 group hover:text-green-400 transition-colors">
              <div className="w-12 h-12 rounded bg-gray-900 flex items-center justify-center border border-gray-800 group-hover:border-green-500/50 text-green-500 transition-all">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">Andhra Pradesh, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <form onSubmit={handleSubmit} className="bg-gray-900/40 p-8 rounded-2xl border border-gray-800 shadow-xl backdrop-blur-sm hover:border-green-500/20 transition-colors">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all resize-none"
                placeholder="Let's discuss a project..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-500 text-black font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
            >
              <Send size={18} /> Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;