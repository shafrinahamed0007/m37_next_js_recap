const UserCard = ({ user }) => {
  return (
    <div className="p-2">
      {/* 🔮 গ্লাস-মরফিজম মেইন কার্ড কন্টেইনার */}
      <div className="card w-96 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl hover:border-purple-500/30 hover:shadow-purple-500/10 transition-all duration-300 group overflow-hidden">
        
        <div className="card-body p-6 md:p-8 space-y-4">
          
          {/* 👤 ইউজারের নাম (হোভার করলে পার্পল কালার হবে) */}
          <h2 className="card-title text-xl font-black text-white tracking-tight group-hover:text-purple-400 transition-colors">
            {user?.name || "Anonymous User"}
          </h2>
          
          {/* 📄 ডেসক্রিপশন টেক্সট */}
          <p className="text-slate-300 text-sm leading-relaxed font-medium">
            A card component has a figure, a body part, and inside body there
            are title and actions parts.
          </p>
          
          {/* ⚡ অ্যাকশন বাটন */}
          <div className="card-actions justify-end pt-2">
            <button className="px-5 py-2.5 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-extrabold text-xs tracking-widest rounded-xl shadow-lg shadow-purple-950/50 hover:shadow-purple-500/20 active:scale-[0.95] transition-all uppercase">
              Detals...
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UserCard;