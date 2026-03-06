import { useState, useMemo } from "react";
import { Search, Filter, Star, Lock, BookOpen, ChevronDown } from "lucide-react";
import { stories, categories } from "../data/stories";
import { StoryCard } from "../components/StoryCard";

const sortOptions = [
  { value: "popular", label: "Mais Populares" },
  { value: "newest", label: "Mais Recentes" },
  { value: "shortest", label: "Mais Curtas" },
  { value: "longest", label: "Mais Longas" },
];

export function StoriesPage() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [showPremiumOnly, setShowPremiumOnly] = useState(false);
  const [showFreeOnly, setShowFreeOnly] = useState(false);

  const filteredStories = useMemo(() => {
    let result = [...stories];

    // Category filter
    if (activeCategory !== "todos") {
      result = result.filter((s) => s.category === activeCategory);
    }

    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q)
      );
    }

    // Premium/Free filter
    if (showPremiumOnly) {
      result = result.filter((s) => s.isPremium);
    }
    if (showFreeOnly) {
      result = result.filter((s) => !s.isPremium);
    }

    // Sort
    if (sortBy === "popular") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "shortest") {
      result.sort((a, b) => a.readingTime - b.readingTime);
    } else if (sortBy === "longest") {
      result.sort((a, b) => b.readingTime - a.readingTime);
    }

    return result;
  }, [activeCategory, searchQuery, sortBy, showPremiumOnly, showFreeOnly]);

  const freeCount = stories.filter((s) => !s.isPremium).length;
  const premiumCount = stories.filter((s) => s.isPremium).length;

  return (
    <div style={{ background: "#f9f5ff", minHeight: "100vh" }}>
      {/* Page Header */}
      <div
        className="relative py-14 px-4 sm:px-6 lg:px-8 text-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #4c1d95 0%, #7c3aed 60%, #9333ea 100%)",
        }}
      >
        {["✨", "⭐", "💫", "🌟"].map((s, i) => (
          <span
            key={i}
            className="absolute select-none opacity-25"
            style={{
              top: `${[20, 60, 30, 70][i]}%`,
              left: `${[8, 5, 88, 90][i]}%`,
              fontSize: ["2rem", "1.5rem", "1.8rem", "1.2rem"][i],
            }}
          >
            {s}
          </span>
        ))}
        <div className="max-w-3xl mx-auto relative z-10">
          <h1
            className="text-white mb-3"
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
              fontWeight: 800,
            }}
          >
            📚 Todas as Histórias
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem" }}>
            Explore o nosso acervo completo de histórias mágicas para crianças
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <div
              className="px-4 py-2 rounded-full flex items-center gap-2"
              style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
            >
              <BookOpen className="w-4 h-4 text-white" />
              <span className="text-white" style={{ fontSize: "0.85rem", fontWeight: 600 }}>
                {freeCount} Gratuitas
              </span>
            </div>
            <div
              className="px-4 py-2 rounded-full flex items-center gap-2"
              style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
            >
              <Lock className="w-4 h-4 text-yellow-300" />
              <span className="text-yellow-200" style={{ fontSize: "0.85rem", fontWeight: 600 }}>
                {premiumCount} Exclusivas Premium
              </span>
            </div>
          </div>
        </div>
        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40H1440V15C1200 35 900 5 720 15C540 25 240 0 0 20V40Z" fill="#f9f5ff" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Search & Filters */}
        <div
          className="p-5 rounded-2xl mb-8"
          style={{ background: "#fff", boxShadow: "0 4px 20px rgba(109,40,217,0.08)" }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
                style={{ color: "#9ca3af" }}
              />
              <input
                type="text"
                placeholder="Buscar histórias..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl outline-none"
                style={{
                  background: "#f9f5ff",
                  border: "2px solid #ede9fe",
                  fontSize: "0.95rem",
                  color: "#1f2937",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#8b5cf6")}
                onBlur={(e) => (e.target.style.borderColor = "#ede9fe")}
              />
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none pl-4 pr-10 py-3 rounded-xl outline-none cursor-pointer"
                style={{
                  background: "#f9f5ff",
                  border: "2px solid #ede9fe",
                  fontSize: "0.9rem",
                  color: "#374151",
                  fontWeight: 500,
                  minWidth: "180px",
                }}
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                style={{ color: "#6b7280" }}
              />
            </div>

            {/* Premium/Free toggles */}
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setShowFreeOnly(!showFreeOnly);
                  setShowPremiumOnly(false);
                }}
                className="px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all cursor-pointer"
                style={{
                  background: showFreeOnly ? "#6d28d9" : "#f9f5ff",
                  color: showFreeOnly ? "#fff" : "#6b7280",
                  border: `2px solid ${showFreeOnly ? "#6d28d9" : "#ede9fe"}`,
                  fontWeight: 600,
                  fontSize: "0.85rem",
                }}
              >
                <BookOpen className="w-4 h-4" />
                Grátis
              </button>
              <button
                onClick={() => {
                  setShowPremiumOnly(!showPremiumOnly);
                  setShowFreeOnly(false);
                }}
                className="px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all cursor-pointer"
                style={{
                  background: showPremiumOnly ? "#f59e0b" : "#f9f5ff",
                  color: showPremiumOnly ? "#fff" : "#6b7280",
                  border: `2px solid ${showPremiumOnly ? "#f59e0b" : "#ede9fe"}`,
                  fontWeight: 600,
                  fontSize: "0.85rem",
                }}
              >
                <Lock className="w-4 h-4" />
                Premium
              </button>
            </div>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="px-4 py-2 rounded-full transition-all cursor-pointer hover:scale-105"
                style={{
                  background:
                    activeCategory === cat.id
                      ? "linear-gradient(135deg, #6d28d9, #9333ea)"
                      : "rgba(109,40,217,0.06)",
                  color: activeCategory === cat.id ? "#fff" : "#6d28d9",
                  border: `1.5px solid ${activeCategory === cat.id ? "transparent" : "#ddd6fe"}`,
                  fontWeight: activeCategory === cat.id ? 700 : 500,
                  fontSize: "0.85rem",
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p style={{ color: "#6b7280", fontSize: "0.9rem" }}>
            <span style={{ fontWeight: 700, color: "#2d1b69" }}>{filteredStories.length}</span> histórias encontradas
          </p>
        </div>

        {/* Stories Grid */}
        {filteredStories.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredStories.map((story, i) => (
              <StoryCard key={story.id} story={story} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#2d1b69", marginBottom: "8px" }}>
              Nenhuma história encontrada
            </h3>
            <p style={{ color: "#9ca3af", fontSize: "0.9rem" }}>
              Tente buscar com outras palavras ou selecione outra categoria.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("todos");
                setShowPremiumOnly(false);
                setShowFreeOnly(false);
              }}
              className="mt-6 px-6 py-3 rounded-full cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #6d28d9, #9333ea)",
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.9rem",
              }}
            >
              Limpar filtros
            </button>
          </div>
        )}

        {/* Premium Banner */}
        <div
          className="mt-16 p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center gap-8"
          style={{
            background: "linear-gradient(135deg, #4c1d95 0%, #7c3aed 60%, #a855f7 100%)",
          }}
        >
          <div className="flex-1 text-center md:text-left">
            <h3
              className="text-white mb-2"
              style={{ fontFamily: "'Georgia', serif", fontSize: "1.6rem", fontWeight: 700 }}
            >
              🔓 Desbloqueie todas as histórias!
            </h3>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", lineHeight: "1.7" }}>
              Com o Premium você tem acesso a {premiumCount} histórias exclusivas, audiobooks narrados, atividades para imprimir e muito mais.
            </p>
          </div>
          <button
            className="flex-shrink-0 px-8 py-4 rounded-full hover:scale-105 transition-transform cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #fef08a, #fcd34d)",
              color: "#4c1d95",
              fontWeight: 700,
              fontSize: "1rem",
              boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
              whiteSpace: "nowrap",
            }}
          >
            ✨ Assinar Agora — 7 dias grátis
          </button>
        </div>
      </div>
    </div>
  );
}
