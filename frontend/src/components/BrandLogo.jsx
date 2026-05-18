const BrandLogo = ({ compact = false, subtitle = false, className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative h-11 w-11 shrink-0 rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 p-[1px] shadow-lg shadow-blue-500/20">
        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-black">
          <span className="text-sm font-black tracking-wide text-white">AI</span>
        </div>
        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)]" />
        <span className="absolute -bottom-1 -left-1 h-2.5 w-2.5 rounded-full bg-purple-300 shadow-[0_0_12px_rgba(216,180,254,0.8)]" />
      </div>

      {!compact && (
        <div className="leading-none">
          <div className="text-2xl font-extrabold tracking-wide text-white">
            Learn<span className="text-cyan-300">AI</span>
          </div>
          {subtitle && (
            <div className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
              Roadmap Mentor
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BrandLogo;
