import { useState, useEffect } from "react";
import photos from "./photos.json";

function App() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(photos.flatMap(p => p.category))];

  useEffect(() => {
    // Runs once when the component mounts
    if (window.innerWidth <= 768) {
      alert("⚠ Warning: Not optimized for mobile yet");
    }
  }, []);

  const filtered = filter === "All" ? photos : photos.filter(p => p.category.includes(filter));

  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Intro */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold">Hey, I’m Wonyoung :)</h1>
        <p className="mt-2 text-gray-600">This is my photo journal.</p>
      </header>

      {/* Filter buttons */}
      <div className="flex gap-4 mb-6 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1 rounded-full border ${filter === cat ? "bg-black text-white" : "text-gray-600"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map((photo, idx) => (
          <div key={idx} className="relative group overflow-hidden rounded-lg shadow">
            <img src={photo.src} alt={photo.title} className="w-full h-full object-cover" />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition p-4 flex flex-col justify-end">
              <h3 className="text-lg font-bold">{photo.title}</h3>
              <p className="text-sm">{photo.location}</p>
              <p className="mt-2">{photo.insight}</p>
              <div className="mt-2 text-xs">{photo.category.join(" ")}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;