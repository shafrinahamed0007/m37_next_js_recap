import React from 'react';
import Link from 'next/link';

const PostCard = ({ post }) => {
    return (
        <div className="p-2">
            {/* 🔮 প্রিমিয়াম গ্লাস-মরফিজম কন্টেইনার কার্ড */}
            <div className="card w-full max-w-sm bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl hover:border-purple-500/30 hover:shadow-purple-500/10 transition-all duration-300 group flex flex-col justify-between h-full overflow-hidden">
                
                <div className="card-body p-6 space-y-4">
                    {/* 🔖 পোস্ট আইডি বা ব্যাজ */}
                    <div className="flex justify-between items-center">
                        <span className="px-2.5 py-1 bg-purple-500/10 text-[#8b5cf6] font-bold text-[10px] tracking-widest uppercase rounded-md border border-white/5">
                            Post #{post?.id || "0"}
                        </span>
                    </div>

                    {/* 📝 পোস্ট টাইটেল (হোভার করলে কালার চেইঞ্জ হবে) */}
                    <h2 className="card-title text-lg font-black text-white tracking-tight line-clamp-2 group-hover:text-purple-400 transition-colors capitalize">
                        {post?.title}
                    </h2>
                    
                    {/* 📄 পোস্ট বডি বা ডেসক্রিপশন */}
                    <p className="text-slate-300 text-sm leading-relaxed font-medium line-clamp-3">
                        {post?.body}
                    </p>
                </div>

                {/* ⚡ অ্যাকশন বাটন এবং লিংক */}
                <div className="p-6 pt-0 mt-auto card-actions justify-end">
                    <Link 
                        href={`/blogs/${post?.id}`} 
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/5 hover:bg-[#8b5cf6] border border-white/10 hover:border-[#8b5cf6] text-slate-300 hover:text-white font-extrabold text-[10px] tracking-widest rounded-xl transition-all uppercase shadow-md active:scale-[0.95]"
                    >
                        Read More
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default PostCard;