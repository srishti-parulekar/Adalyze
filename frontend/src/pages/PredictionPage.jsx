import React, { useState } from 'react';
import { BarChart2, Instagram, Loader, AlertCircle, CheckCircle } from 'lucide-react';
import api from '../api';

const PredictionPage = () => {
  const [formData, setFormData] = useState({
    likesViewsRatio: 0.5,
    mediaType: 1,
    platform: 1, 
    likesNumeric: 100,
    hasHashtags: 1, 
    timeOfDay: 3, 
    weekDay: 1, 
    isWeekend: 0, 
    captionLength: 100,
    costOfAdvertisement: 200,
    engagementRatio: 0.2
  });

  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let parsedValue = value;
    
    if (name !== 'platform' && name !== 'mediaType') {
      parsedValue = parseFloat(value);
    }
    
    setFormData({
      ...formData,
      [name]: parsedValue
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    // Transform form data into the format expected by the API
    const features = [
      formData.likesViewsRatio,
      formData.mediaType,
      formData.platform,
      formData.likesNumeric,
      formData.hasHashtags,
      formData.timeOfDay,
      formData.weekDay,
      formData.isWeekend,
      formData.captionLength,
      formData.costOfAdvertisement,
      formData.engagementRatio
    ];

    try {
        const response = await api.post('/predict', { features });
        setPrediction(response.data);
      } catch (err) {
        setError('Failed to get prediction: ' + (err.response?.data?.error || err.message));
      } finally {
        setLoading(false);
      }
  };

  const mediaTypeOptions = [
    { value: 1, label: 'Image' },
    { value: 2, label: 'Video' },
    { value: 3, label: 'Carousel' }
  ];

  const platformOptions = [
    { value: 1, label: 'Instagram' },
    { value: 2, label: 'Facebook' },
    { value: 3, label: 'Twitter/X' }
  ];

  const timeOfDayOptions = [
    { value: 1, label: 'Morning (6AM-12PM)' },
    { value: 2, label: 'Afternoon (12PM-5PM)' },
    { value: 3, label: 'Evening (5PM-9PM)' },
    { value: 4, label: 'Night (9PM-6AM)' }
  ];

  const weekDayOptions = [
    { value: 1, label: 'Monday' },
    { value: 2, label: 'Tuesday' },
    { value: 3, label: 'Wednesday' },
    { value: 4, label: 'Thursday' },
    { value: 5, label: 'Friday' },
    { value: 6, label: 'Saturday' },
    { value: 7, label: 'Sunday' }
  ];

  const booleanOptions = [
    { value: 0, label: 'No' },
    { value: 1, label: 'Yes' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      {/* Navigation */}
      <nav className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-indigo-600">Adalyze</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="/" className="text-gray-600 hover:text-indigo-600 transition">Home</a>
          <a href="#features" className="text-gray-600 hover:text-indigo-600 transition">Features</a>
          <a href="#insights" className="text-gray-600 hover:text-indigo-600 transition">Insights</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Will Your Post Go <span className="text-indigo-600">Viral</span>?
          </h1>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Use our AI-powered tool to predict if your social media content has what it takes to go viral.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
          <div className="flex items-center mb-6">
            <div className="bg-indigo-100 p-3 rounded-full mr-4">
              <BarChart2 className="text-indigo-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Viral Post Predictor</h2>
          </div>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Media Type</label>
              <select
                name="mediaType"
                value={formData.mediaType}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {mediaTypeOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Platform</label>
              <select
                name="platform"
                value={formData.platform}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {platformOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Time of Day</label>
              <select
                name="timeOfDay"
                value={formData.timeOfDay}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {timeOfDayOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Day of Week</label>
              <select
                name="weekDay"
                value={formData.weekDay}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {weekDayOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Is Weekend?</label>
              <select
                name="isWeekend"
                value={formData.isWeekend}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {booleanOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Has Hashtags?</label>
              <select
                name="hasHashtags"
                value={formData.hasHashtags}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {booleanOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Caption Length (characters)</label>
              <input
                type="number"
                name="captionLength"
                value={formData.captionLength}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                min="0"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Expected Likes</label>
              <input
                type="number"
                name="likesNumeric"
                value={formData.likesNumeric}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                min="0"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Likes to Views Ratio</label>
              <input
                type="number"
                name="likesViewsRatio"
                value={formData.likesViewsRatio}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                min="0"
                max="1"
                step="0.01"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Advertisement Cost (INR)</label>
              <input
                type="number"
                name="costOfAdvertisement"
                value={formData.costOfAdvertisement}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                min="0"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Engagement Ratio</label>
              <input
                type="number"
                name="engagementRatio"
                value={formData.engagementRatio}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                min="0"
                max="1"
                step="0.01"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition shadow-md flex items-center justify-center"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader className="animate-spin mr-2" size={20} />
                    Analyzing...
                  </>
                ) : (
                  'Predict Virality'
                )}
              </button>
            </div>
          </form>

          {error && (
            <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200 flex items-start">
              <AlertCircle className="text-red-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
              <p className="text-red-700">{error}</p>
            </div>
          )}

          {prediction && !error && (
            <div className="mt-8 bg-indigo-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Prediction Results</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-700">Random Forest Model</h4>
                    <div className={`flex items-center ${prediction.random_forest_prediction === 1 ? 'text-green-600' : 'text-gray-600'}`}>
                      {prediction.random_forest_prediction === 1 ? (
                        <CheckCircle size={20} className="mr-1" />
                      ) : (
                        <AlertCircle size={20} className="mr-1" />
                      )}
                      <span className="font-medium">
                        {prediction.random_forest_prediction === 1 ? 'Viral' : 'Not Viral'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Probability of going viral</span>
                      <span className="text-sm font-medium text-indigo-600">{(prediction.random_forest_probability * 100).toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-indigo-600 h-2 rounded-full" 
                        style={{ width: `${prediction.random_forest_probability * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-700">Logistic Regression Model</h4>
                    <div className={`flex items-center ${prediction.logistic_regression_prediction === 1 ? 'text-green-600' : 'text-gray-600'}`}>
                      {prediction.logistic_regression_prediction === 1 ? (
                        <CheckCircle size={20} className="mr-1" />
                      ) : (
                        <AlertCircle size={20} className="mr-1" />
                      )}
                      <span className="font-medium">
                        {prediction.logistic_regression_prediction === 1 ? 'Viral' : 'Not Viral'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Probability of going viral</span>
                      <span className="text-sm font-medium text-indigo-600">{(prediction.logistic_regression_probability * 100).toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-indigo-600 h-2 rounded-full" 
                        style={{ width: `${prediction.logistic_regression_probability * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-gray-700">
                  <strong>Interpretation:</strong> Based on our analysis of Quick Commerce social media strategies, 
                  {prediction.random_forest_prediction === 1 || prediction.logistic_regression_prediction === 1 
                    ? " your post has characteristics that suggest it could perform well. Consider proceeding with this content strategy." 
                    : " your post may need refinement to achieve viral status. Consider adjusting factors like posting time, caption length, or advertisement budget."}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Tips Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Tips for Viral Content</h2>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Learn from our analysis of successful Quick Commerce marketing strategies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Instagram className="text-indigo-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Optimal Posting Times</h3>
            <p className="text-gray-600">
              Our analysis shows that posts between 6-8 PM on weekdays achieve 37% higher engagement for Quick Commerce products.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <BarChart2 className="text-indigo-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Content Strategy</h3>
            <p className="text-gray-600">
              Carousel posts with product-in-use demonstrations receive 42% more likes and saves than single-image posts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="text-indigo-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Caption Optimization</h3>
            <p className="text-gray-600">
              Captions between 75-125 characters with 3-5 targeted hashtags show the highest conversion rates for Quick Commerce.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Want More Detailed Analysis?</h2>
          <p className="text-lg text-indigo-100 mb-6 max-w-2xl mx-auto">
            Get our comprehensive report on Quick Commerce marketing strategies
          </p>
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition font-medium shadow-lg">
            Download Full Report
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-white">Adalyze</span>
            <p className="text-gray-400">© 2025 Adalyze. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PredictionPage;