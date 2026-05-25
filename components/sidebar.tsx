export default function Sidebar() {
    return (
      <aside className="w-64 bg-zinc-900 border-r border-zinc-800 p-4">
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