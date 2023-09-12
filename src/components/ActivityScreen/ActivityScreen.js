import React, { useState } from 'react';

function ActivityScreen() {
  const [activeTab, setActiveTab] = useState('media'); // Initially, show the 'media' content

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-semibold mb-4">Activity</h1>
      <div className="flex justify-center space-x-0 mb-4 bg-gray-50 border rounded-md">
        <button
          className={`px-4 py-1 ${
            activeTab === 'media' ? 'bg-white-700 text-black border rounded-md h-8' : 'bg-gray-200'
          }`}
          onClick={() => handleTabClick('media')}
        >
          Media
        </button>
        <button
          className={`px-10 py-1 ${
            activeTab === 'maps' ? 'bg-white-500 text-black border rounded-md h-8' : 'bg-gray-200'
          }`}
          onClick={() => handleTabClick('maps')}
        >
          Maps
        </button>
        <button
          className={`px-4 py-1 ${
            activeTab === 'people' ? 'bg-white-500 text-black border  rounded-md h-8' : 'bg-gray-200'
          }`}
          onClick={() => handleTabClick('people')}
        >
          People
        </button>
      </div>
      <div className="flex-grow p-4">
        {activeTab === 'media' && <MediaContent />}
        {activeTab === 'maps' && <MapsContent />}
        {activeTab === 'people' && <PeopleContent />}
      </div>
    </div>
  );
}

function MediaContent() {
  // Add your media content here
  return (
    <div>
      <p>Media Content</p>
      {/* Add images or other media content */}
    </div>
  );
}

function MapsContent() {
  // Add Google Maps integration here
  return (
    <div>
      <p>Google Maps</p>
      {/* Add Google Maps component */}
    </div>
  );
}

function PeopleContent() {
  // Add your people/friends list here
  return (
    <div>
      <p>People Content</p>
      {/* Add friends list */}
    </div>
  );
}

export default ActivityScreen;
