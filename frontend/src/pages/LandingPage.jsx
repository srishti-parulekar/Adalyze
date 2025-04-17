import React from 'react';
import { ChevronRight, BarChart2, Users, TrendingUp, Instagram } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      {/* Navigation */}
      <nav className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-indigo-600">Adalyze</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-600 hover:text-indigo-600 transition">Features</a>
          <a href="#insights" className="text-gray-600 hover:text-indigo-600 transition">Insights</a>
          <a className="text-gray-600 hover:text-indigo-600 transition" onClick={() => navigate('/dashboard')}>Analysis Dashboard</a>
        </div>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition shadow-md" onClick={() => navigate('/predict')}>
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Uncover <span className="text-indigo-600">Quick Commerce</span> Marketing Insights
          </h1>
          <p className="text-xl text-gray-600 mt-6">
            Analysis of social media strategies from leading Indian Quick Commerce companies to help new ventures succeed.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition shadow-md flex items-center justify-center mb-4 sm:mb-0 sm:mr-4" onClick={() => navigate('/dashboard')}>
              View Dashboard
              <ChevronRight className="ml-2" size={20} />
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition" onClick={() => navigate('/predict')}>
              Check Virality
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="bg-white p-6 rounded-2xl shadow-xl">
            <div className="bg-indigo-50 rounded-xl p-4 flex items-center justify-center">
              <BarChart2 className="text-indigo-600" size={200} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Our Analysis Approach</h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Instagram className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Social Media Analysis</h3>
              <p className="text-gray-600">Detailed examination of Instagram posts and engagement metrics from Swiggy Instamart, Blinkit, and Zepto.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Demographic Insights</h3>
              <p className="text-gray-600">In-depth analysis of user demographics most likely to interact with Quick Commerce content.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Marketing Trends</h3>
              <p className="text-gray-600">Analysis of advertisement costs, ROI, and latest trends used by marketing teams to boost engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Preview */}
      <section id="insights" className="py-20 bg-gradient-to-br from-indigo-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Key Insights</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Making the Quick Commerce industry more approachable for new ventures
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Companies Analyzed</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold text-green-600">S</span>
                    </div>
                    <span className="text-gray-700">Swiggy Instamart</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-yellow-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold text-yellow-600">B</span>
                    </div>
                    <span className="text-gray-700">Blinkit</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-purple-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold text-purple-600">Z</span>
                    </div>
                    <span className="text-gray-700">Zepto</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Analysis Metrics</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Engagement Rate</span>
                      <span className="text-indigo-600 font-medium">42%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '42%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Demographic Reach</span>
                      <span className="text-indigo-600 font-medium">76%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '76%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Cost Efficiency</span>
                      <span className="text-indigo-600 font-medium">63%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '63%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Gain valuable insights into Quick Commerce marketing strategies and position your venture for success.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition font-medium shadow-lg">
            Request Access
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <span className="text-2xl font-bold text-white">Adalyze</span>
              <p className="text-gray-400 mt-2 max-w-xs">
                Quick Commerce marketing insights for emerging businesses.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Product</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Features</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Pricing</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Case Studies</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition" >About</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Support</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Documentation</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 Adalyze. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;