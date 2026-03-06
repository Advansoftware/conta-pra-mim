import { Clock, Star, Lock, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router";
import { Story } from "../data/stories";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface StoryCardProps {
  story: Story;
  index?: number;
}

export function StoryCard({ story, index = 0 }: StoryCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!story.isPremium) {
      navigate(`/historias/${story.id}`);
    } else {
      navigate(`/historias/${story.id}`);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: "#fff",
        boxShadow: "0 4px 20px rgba(109,40,217,0.08)",
        transition: "all 0.3s ease",
        animationDelay: `${index * 60}ms`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 40px rgba(109,40,217,0.18)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(109,40,217,0.08)";
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
        <ImageWithFallback
          src={story.image}
          alt={story.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Category badge */}
        <div
          className="absolute top-3 left-3 px-3 py-1 rounded-full text-white"
          style={{
            background: story.categoryColor,
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.03em",
            textTransform: "uppercase",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        >
          {story.category === "princesas" && "👑 "}
          {story.category === "aventura" && "⚔️ "}
          {story.category === "fantasia" && "🧙 "}
          {story.category === "animais" && "🐾 "}
          {story.category === "espaco" && "🚀 "}
          {story.category === "fundo-do-mar" && "🐠 "}
          {story.category.charAt(0).toUpperCase() + story.category.slice(1).replace("-", " ")}
        </div>

        {/* Premium lock */}
        {story.isPremium && (
          <div
            className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
          >
            <Lock className="w-4 h-4 text-yellow-300" />
          </div>
        )}

        {/* Overlay gradient */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          style={{ background: "rgba(109,40,217,0.4)" }}
        >
          <div
            className="px-5 py-2 rounded-full text-white flex items-center gap-2"
            style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)", fontWeight: 600, fontSize: "0.9rem" }}
          >
            {story.isPremium ? <Lock className="w-4 h-4" /> : null}
            {story.isPremium ? "Ver História" : "Ler Agora"}
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3
          className="mb-1 line-clamp-2"
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "1rem",
            fontWeight: 700,
            color: "#2d1b69",
            lineHeight: "1.4",
          }}
        >
          {story.title}
        </h3>

        <p
          className="line-clamp-2 flex-1 mb-3"
          style={{ fontSize: "0.82rem", color: "#6b7280", lineHeight: "1.6" }}
        >
          {story.description}
        </p>

        {/* Meta */}
        <div
          className="flex items-center justify-between pt-3"
          style={{ borderTop: "1px solid #f3f4f6" }}
        >
          <div className="flex items-center gap-3">
            <span
              className="flex items-center gap-1"
              style={{ fontSize: "0.78rem", color: "#9ca3af" }}
            >
              <Clock className="w-3.5 h-3.5" />
              {story.readingTime} min
            </span>
            <span style={{ fontSize: "0.78rem", color: "#9ca3af" }}>
              {story.ageRange}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
            <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#374151" }}>
              {story.rating}
            </span>
          </div>
        </div>

        {/* Premium badge bottom */}
        {story.isPremium && (
          <div
            className="mt-3 w-full py-2 rounded-lg flex items-center justify-center gap-2"
            style={{ background: "linear-gradient(135deg, #fef9c3, #fef08a)", fontSize: "0.78rem", fontWeight: 600, color: "#713f12" }}
          >
            <Lock className="w-3.5 h-3.5" />
            Exclusivo Premium
          </div>
        )}
      </div>
    </div>
  );
}
