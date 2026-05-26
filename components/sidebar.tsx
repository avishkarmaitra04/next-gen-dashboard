export default function Sidebar() {
    return (
      <aside className="
      w-full
      md:w-64
      border-r
      border-zinc-800
      bg-zinc-950
      p-6
      ">
        <h2 className="text-2xl font-bold text-white">
          Dashboard
        </h2>
  
        <nav className="mt-8 space-y-4">
          <div className="text-zinc-400 hover:text-white cursor-pointer">
            Home
          </div>
  
          <div className="text-zinc-400 hover:text-white cursor-pointer">
            Courses
          </div>
  
          <div className="text-zinc-400 hover:text-white cursor-pointer">
            Settings
          </div>
        </nav>
      </aside>
    );
  }