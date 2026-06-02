import React from "react";
import Link from "next/link";

const UserDetailPage = async ({ params }) => {
  const { id } = await params;

  let userDetail = null;
  try {
    // 🌐 JSONPlaceholder থেকে সরাসরি নির্দিষ্ট ইউজারের ডাটা ফেচ করা হচ্ছে
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      cache: "no-store",
    });
    
    if (res.ok) {
      userDetail = await res.json();
    }
  } catch (error) {
    console.error("Fetch Error: ", error);
  }

  // 🛡️ ইউজার না পাওয়া গেলে সেফটি চেক কার্ড
  if (!userDetail || !userDetail.id) {
    return (
      <div className="min-h-screen bg-[#070b12] flex flex-col items-center justify-center text-center p-6 text-slate-200">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 max-w-sm shadow-2xl">
          <h2 className="text-2xl font-black text-white mb-2">User Not Found</h2>
          <p className="text-sm text-slate-400 mb-6">The user with ID {id} does not exist or could not be loaded.</p>
          <Link href="/users" className="px-5 py-2.5 bg-[#8b5cf6] text-white font-bold text-xs tracking-widest rounded-xl shadow-lg hover:bg-[#7c3aed] transition-all uppercase">
            Back to Users
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#070b12] text-slate-100 py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center overflow-hidden">
      
      {/* 🔮 ব্যাকগ্রাউন্ড নিওন গ্লো ইফেক্ট */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none z-0"></div>

      <div className="w-full max-w-xl relative z-10 space-y-6">
        
        {/* ⬅️ ব্যাক বাটন (Pure SVG) */}
        <Link 
          href="/users" 
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest mb-2 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back to Users
        </Link>

        {/* 💎 মেইন ইউজার প্রোফাইল গ্লাস কার্ড */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl space-y-6">
          
          {/* پروফাইল হেডার */}
          <div className="flex flex-col sm:flex-row gap-5 items-center text-center sm:text-left border-b border-white/5 pb-6">
            {/* ডেইজিইউআই অ্যাভাটার বা বক্স স্টাইল */}
            <div className="flex justify-center items-center bg-purple-500/10 text-[#8b5cf6] rounded-2xl p-4 border border-white/10 shadow-md flex-shrink-0 w-[80px] h-[80px]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white">{userDetail?.name}</h1>
              <p className="text-xs font-bold text-[#8b5cf6] uppercase tracking-widest mt-0.5">@{userDetail?.username}</p>
            </div>
          </div>

          {/* 📑 ইউজারের বিস্তারিত তথ্য গ্রিড (ডেইজিইউআই ফ্রেন্ডলি) */}
          <div className="space-y-4 text-sm font-medium text-slate-300">
            
            {/* Email Box */}
            <div className="flex items-center gap-3.5 bg-slate-950/30 p-3.5 rounded-xl border border-white/5">
              <span className="text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </span>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Email Address</p>
                <p className="text-slate-200 mt-0.5">{userDetail?.email}</p>
              </div>
            </div>

            {/* Website Box */}
            <div className="flex items-center gap-3.5 bg-slate-950/30 p-3.5 rounded-xl border border-white/5">
              <span className="text-cyan-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.099-1.533.284-2.253" />
                </svg>
              </span>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Website</p>
                <p className="text-slate-200 mt-0.5">{userDetail?.website}</p>
              </div>
            </div>

            {/* Company Box */}
            <div className="flex items-center gap-3.5 bg-slate-950/30 p-3.5 rounded-xl border border-white/5">
              <span className="text-amber-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                </svg>
              </span>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Company</p>
                <p className="text-slate-200 mt-0.5">{userDetail?.company?.name}</p>
                <p className="text-xs text-slate-400 italic mt-0.5">"{userDetail?.company?.catchPhrase}"</p>
              </div>
            </div>

            {/* Location Box */}
            <div className="flex items-center gap-3.5 bg-slate-950/30 p-3.5 rounded-xl border border-white/5">
              <span className="text-rose-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </span>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Location</p>
                <p className="text-slate-200 mt-0.5">
                  {userDetail?.address?.suite}, {userDetail?.address?.street}, {userDetail?.address?.city}
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;