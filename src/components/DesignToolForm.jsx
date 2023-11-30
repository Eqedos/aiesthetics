import React, { useState } from 'react';
import ResultComponent from './ResultComponent';
import { motion } from 'framer-motion';

const DesignToolForm = () => {
  const [image, setImage] = useState(null);
  const [prompt, setPrompt] = useState('');
  const [isSustainable, setIsSustainable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false); // State to control result display

  const handleImageDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      setImage(URL.createObjectURL(event.dataTransfer.files[0]));
    }
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true); // Begin loading animation

    // Simulate a loading time with a timeout
    setTimeout(() => {
      setIsLoading(false); // Stop loading animation
      setShowResult(true); // Show the result component
      // Reset the states if needed, or handle this in the ResultComponent
    }, 2000); // This is the simulated load time (e.g., 2 seconds)
  };

  const openFileSelector = () => {
    document.getElementById('file-upload').click();
  };

  if (isLoading) {
    // Framer Motion loading spinner
    return (
      <div className="flex justify-center items-center h-screen">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (showResult) {
    return <ResultComponent />;
  }
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-3/4 bg-white p-10 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-4">
              <div
                onDrop={handleImageDrop}
                onDragOver={(event) => event.preventDefault()}
                onClick={openFileSelector}
                className="w-full h-64 flex items-center justify-center border-2 border-dashed border-gray-300 bg-gray-100 cursor-pointer"
              >
                {image && (
                  <img src={image} alt="Uploaded design" className="max-w-full max-h-full" />
                )}
                <input
                  id="file-upload"
                  type="file"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>
            </div>
            <div className="lg:w-1/2 p-4 flex flex-col justify-between">
              <div className="mb-4">
                <label htmlFor="prompt" className="block text-gray-700 text-sm font-bold mb-2">Prompt</label>
                <input
                  type="text"
                  id="prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Describe your space"
                />
              </div>
              <div className="mb-4 flex items-center">
                <input
                  id="sustainability"
                  type="checkbox"
                  checked={isSustainable}
                  onChange={(e) => setIsSustainable(e.target.checked)}
                  className="form-checkbox h-5 w-5 text-green-600"
                />
                <label htmlFor="sustainability" className="ml-2 block text-gray-700 text-sm font-bold">
                  Sustainable Design
                </label>
              </div>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit Design
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DesignToolForm;
