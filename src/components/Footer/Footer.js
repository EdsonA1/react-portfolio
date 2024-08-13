import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-white text-center py-8">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-xl font-medium mb-4">
          "Do not be wise in your own eyes; Fear the Lord and shun evil" - Proverbs 3:7
        </p>
      </div>
      <div className="mt-6 text-2xl font-bold text-gray-800">
        {currentTime.toLocaleString('en-US', { timeZone: 'America/New_York' })}
      </div>
    </footer>
  );
};

export default Footer;
