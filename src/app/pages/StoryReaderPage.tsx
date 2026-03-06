import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Clock,
  Star,
  Lock,
  Sparkles,
  Share2,
  Heart,
} from "lucide-react";
import { stories } from "../data/stories";
import { StoryCard } from "../components/StoryCard";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function StoryReaderPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [liked, setLiked] = useState(false);

  const story = stories.find((s) => s.id === id);
  const related = stories.filter((s) => s.id !== id && s.category === story?.category).slice(0, 3);

  if (!story) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8" style={{ background: "#f9f5ff" }}>
        <div className="text-6xl mb-4">📚</div>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#2d1b69", marginBottom: "8px" }}>
          História não encontrada
        </h2>
        <button
          onClick={() => navigate("/historias")}
          className="mt-4 px-6 py-3 rounded-full cursor-pointer"
          style={{ background: "linear-gradient(135deg, #6d28d9, #9333ea)", color: "#fff", fontWeight: 600 }}
        >
          Ver todas as histórias
        </button>
      </div>
    );
  }

  const totalPages = story.content.length;
  const page = story.content[currentPage];
  const progress = ((currentPage + 1) / totalPages) * 100;

  const goNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };
  const goPrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <div style={{ background: "#f9f5ff", minHeight: "100vh" }}>
      {/* Back bar */}
      <div
        className="sticky top-16 md:top-20 z-40"
        style={{ background: "rgba(249,245,255,0.95)", backdropFilter: "blur(10px)", borderBottom: "1px solid #ede9fe" }}
      >
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => navigate("/historias")}
            className="flex items-center gap-2 px-4 py-2 rounded-full hover:scale-105 transition-transform cursor-pointer"
            style={{ background: "#ede9fe", color: "#6d28d9", fontWeight: 600, fontSize: "0.85rem" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </button>

          {/* Progress */}
          <div className="flex items-center gap-3 flex-1 mx-6">
            <div className="flex-1 h-2 rounded-full" style={{ background: "#ede9fe" }}>
              <div
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #6d28d9, #a855f7)",
                }}
              />
            </div>
            <span style={{ fontSize: "0.8rem", color: "#6b7280", whiteSpace: "nowrap", fontWeight: 600 }}>
              {currentPage + 1}/{totalPages}
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLiked(!liked)}
              className="w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
              style={{ background: liked ? "#fce7f3" : "#ede9fe" }}
            >
              <Heart
                className="w-4 h-4"
                style={{ color: liked ? "#ec4899" : "#9ca3af", fill: liked ? "#ec4899" : "none" }}
              />
            </button>
            <button
              className="w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
              style={{ background: "#ede9fe" }}
            >
              <Share2 className="w-4 h-4" style={{ color: "#9ca3af" }} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Story Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="px-3 py-1 rounded-full text-white"
              style={{
                background: story.categoryColor,
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              {story.category.replace("-", " ")}
            </span>
            {story.isPremium && (
              <span
                className="px-3 py-1 rounded-full flex items-center gap-1"
                style={{ background: "#fef9c3", color: "#713f12", fontSize: "0.75rem", fontWeight: 700 }}
              >
                <Lock className="w-3 h-3" />
                Premium
              </span>
            )}
          </div>

          <h1
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(1.8rem, 5vw, 2.6rem)",
              fontWeight: 800,
              color: "#2d1b69",
              lineHeight: "1.2",
              marginBottom: "12px",
            }}
          >
            {story.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5" style={{ fontSize: "0.85rem", color: "#6b7280" }}>
              <Clock className="w-4 h-4" />
              {story.readingTime} minutos
            </span>
            <span style={{ fontSize: "0.85rem", color: "#6b7280" }}>
              👶 {story.ageRange}
            </span>
            <span className="flex items-center gap-1.5" style={{ fontSize: "0.85rem", color: "#6b7280" }}>
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              {story.rating}
            </span>
          </div>
        </div>

        {/* Cover image (first page only) */}
        {currentPage === 0 && (
          <div
            className="w-full mb-8 rounded-3xl overflow-hidden"
            style={{
              maxHeight: "360px",
              boxShadow: "0 16px 40px rgba(109,40,217,0.15)",
            }}
          >
            <ImageWithFallback
              src={story.image}
              alt={story.title}
              className="w-full object-cover"
              style={{ maxHeight: "360px", width: "100%" }}
            />
          </div>
        )}

        {/* Premium gate */}
        {story.isPremium && currentPage >= 2 ? (
          <div
            className="rounded-3xl p-10 text-center"
            style={{
              background: "linear-gradient(135deg, #4c1d95, #7c3aed)",
              boxShadow: "0 20px 60px rgba(109,40,217,0.25)",
            }}
          >
            <div className="text-5xl mb-4">🔒</div>
            <h3
              className="text-white mb-3"
              style={{ fontFamily: "'Georgia', serif", fontSize: "1.5rem", fontWeight: 700 }}
            >
              Continue lendo com o Premium
            </h3>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", marginBottom: "24px", lineHeight: "1.7" }}>
              Esta história continua no plano Premium. Desbloqueie para ler o final e ter acesso a mais de 200 histórias exclusivas!
            </p>
            <button
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full hover:scale-105 transition-transform cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #fef08a, #fcd34d)",
                color: "#4c1d95",
                fontWeight: 700,
                fontSize: "1rem",
              }}
            >
              <Sparkles className="w-5 h-5" />
              Quero o Premium — 7 dias grátis
            </button>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", marginTop: "12px" }}>
              Cancele quando quiser. Sem compromisso.
            </p>
          </div>
        ) : (
          <>
            {/* Story content */}
            <div
              className="p-8 md:p-12 rounded-3xl mb-6"
              style={{
                background: "#fff",
                boxShadow: "0 4px 30px rgba(109,40,217,0.08)",
                minHeight: "280px",
              }}
            >
              {/* Page illustration */}
              {page.illustration && (
                <div
                  className="mb-6 rounded-2xl overflow-hidden"
                  style={{ maxHeight: "280px" }}
                >
                  <ImageWithFallback
                    src={page.illustration}
                    alt="Ilustração"
                    className="w-full object-cover rounded-2xl"
                    style={{ maxHeight: "280px" }}
                  />
                </div>
              )}

              {/* Decorative quote mark */}
              <div
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "5rem",
                  lineHeight: 0.6,
                  color: "#ede9fe",
                  marginBottom: "16px",
                  userSelect: "none",
                }}
              >
                "
              </div>

              <p
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)",
                  lineHeight: "2",
                  color: "#1f2937",
                }}
              >
                {page.text}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={goPrev}
                disabled={currentPage === 0}
                className="flex items-center gap-2 px-6 py-3 rounded-full transition-all cursor-pointer"
                style={{
                  background: currentPage === 0 ? "#f3f4f6" : "#ede9fe",
                  color: currentPage === 0 ? "#d1d5db" : "#6d28d9",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  cursor: currentPage === 0 ? "default" : "pointer",
                }}
              >
                <ChevronLeft className="w-4 h-4" />
                Anterior
              </button>

              {/* Page dots */}
              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className="rounded-full transition-all cursor-pointer"
                    style={{
                      width: i === currentPage ? "24px" : "8px",
                      height: "8px",
                      background: i === currentPage
                        ? "linear-gradient(90deg, #6d28d9, #a855f7)"
                        : "#ddd6fe",
                    }}
                  />
                ))}
              </div>

              {currentPage < totalPages - 1 ? (
                <button
                  onClick={goNext}
                  className="flex items-center gap-2 px-6 py-3 rounded-full transition-all hover:scale-105 cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #6d28d9, #9333ea)",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                  }}
                >
                  Próxima
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => navigate("/historias")}
                  className="flex items-center gap-2 px-6 py-3 rounded-full transition-all hover:scale-105 cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #10b981, #059669)",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                  }}
                >
                  <BookOpen className="w-4 h-4" />
                  Fim — Ver mais
                </button>
              )}
            </div>

            {/* Completed message */}
            {currentPage === totalPages - 1 && (
              <div
                className="mt-8 p-6 rounded-2xl text-center"
                style={{
                  background: "linear-gradient(135deg, #f0fdf4, #dcfce7)",
                  border: "2px solid #bbf7d0",
                }}
              >
                <div className="text-4xl mb-2">🎉</div>
                <h3 style={{ fontWeight: 700, color: "#166534", fontSize: "1.1rem", marginBottom: "4px" }}>
                  Você chegou ao fim da história!
                </h3>
                <p style={{ color: "#15803d", fontSize: "0.88rem" }}>
                  Parabéns! Explore outras histórias incríveis no nosso acervo.
                </p>
              </div>
            )}
          </>
        )}

        {/* Related stories */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2
              className="mb-6"
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "#2d1b69",
              }}
            >
              Você também pode gostar ✨
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {related.map((s, i) => (
                <StoryCard
                  key={s.id}
                  story={s}
                  index={i}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
