import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: '404 - Page Not Found',
    description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    {/* Big 404 Text with daisyUI gradient style */}
                    <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent selection:bg-primary selection:text-primary-content">
                        404
                    </h1>
                    
                    {/* Error Title */}
                    <h2 className="text-3xl font-bold mt-4 text-base-content tracking-tight">
                        Aww... Snap! Page Not Found
                    </h2>
                    
                    {/* Description */}
                    <p className="py-6 text-base-content/70 text-balance">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                    
                 
                    <div className="flex justify-center gap-4">
                        <Link 
                            href="/" 
                            className="btn btn-primary shadow-lg shadow-primary/20 hover:scale-105 transition-all duration-200"
                        >
                            Back to Homepage
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}