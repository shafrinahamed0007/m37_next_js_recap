import React from 'react';

const LoadingPage = () => {
    return (
         <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-900">
   
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-blue-200 rounded-full animate-ping"></div>
        <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
      </div>
     
      <h2 className="mt-4 text-xl font-semibold text-slate-700 dark:text-slate-200 animate-pulse">
        Loading please wait...
      </h2>Í
    </div>
    );
};

export default LoadingPage;