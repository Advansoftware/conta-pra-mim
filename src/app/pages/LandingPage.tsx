import { useNavigate } from "react-router";
import { BookOpen, Star, Shield, Sparkles, Play, ChevronRight, Heart, Zap } from "lucide-react";
import { stories } from "../data/stories";
import { StoryCard } from "../components/StoryCard";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const testimonials = [
  {
    name: "Mariana Costa",
    role: "Mãe da Sofia, 5 anos",
    avatar: "MC",
    color: "#ec4899",
    text: "Minha filha pede histórias do Conta pra Mim toda noite antes de dormir. É incrível ver o quanto ela já cresceu com o vocabulário!",
    rating: 5,
  },
  {
    name: "Ricardo Alves",
    role: "Pai do Pedro, 8 anos",
    avatar: "RA",
    color: "#8b5cf6",
    text: "O meu filho não gostava de ler. Depois do Conta pra Mim, ele lê por conta própria. Melhor investimento que já fiz para ele.",
    rating: 5,
  },
  {
    name: "Juliana Lima",
    role: "Professora, 2º ano",
    avatar: "JL",
    color: "#06b6d4",
    text: "Uso na sala de aula e os resultados são fantásticos. As crianças ficam completamente envolvidas com as histórias. Recomendo demais!",
    rating: 5,
  },
];

export function LandingPage() {
  const navigate = useNavigate();
  const featuredStories = stories.filter((s) => s.isFeatured).slice(0, 3);
  const freeStories = stories.filter((s) => !s.isPremium).slice(0, 4);

  return (
    <div>
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #4c1d95 0%, #6d28d9 40%, #9333ea 70%, #c026d3 100%)",
          minHeight: "92vh",
        }}
      >
        {/* Decorative circles */}
        <div
          className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #f9a8d4, transparent)" }}
        />
        <div
          className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #93c5fd, transparent)" }}
        />
        {/* Stars scattered */}
        {["✨", "⭐", "🌟", "✨", "💫", "⭐"].map((star, i) => (
          <span
            key={i}
            className="absolute select-none opacity-40"
            style={{
              top: `${[10, 20, 60, 75, 35, 50][i]}%`,
              left: `${[5, 85, 3, 90, 45, 70][i]}%`,
              fontSize: ["1.5rem", "1rem", "2rem", "1.2rem", "0.8rem", "1.8rem"][i],
            }}
          >
            {star}
          </span>
        ))}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10">
          {/* Text */}
          <div className="flex-1 text-center md:text-left z-10">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-white/90" style={{ fontSize: "0.85rem", fontWeight: 600 }}>
                +200 histórias mágicas esperando por você
              </span>
            </div>

            <h1
              className="text-white mb-6"
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "clamp(2.4rem, 6vw, 4rem)",
                fontWeight: 800,
                lineHeight: "1.15",
                letterSpacing: "-0.02em",
              }}
            >
              Histórias que <br />
              <span style={{ color: "#fde68a" }}>encantam</span> e<br /> inspiram
            </h1>

            <p
              className="text-white/80 mb-8 max-w-xl mx-auto md:mx-0"
              style={{ fontSize: "1.1rem", lineHeight: "1.7" }}
            >
              Uma plataforma mágica de histórias infantis para despertar a imaginação, o amor pela leitura e os valores que formam crianças incríveis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => navigate("/historias")}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full hover:scale-105 transition-transform cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #fef08a, #fcd34d)",
                  color: "#5b21b6",
                  fontWeight: 700,
                  fontSize: "1rem",
                  boxShadow: "0 8px 24px rgba(253,211,77,0.4)",
                }}
              >
                <BookOpen className="w-5 h-5" />
                Ver Histórias Grátis
              </button>
              <button
                onClick={() => navigate("/historias")}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full hover:scale-105 transition-transform cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "2px solid rgba(255,255,255,0.4)",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "1rem",
                  backdropFilter: "blur(8px)",
                }}
              >
                <Play className="w-4 h-4 fill-white" />
                Conhecer o Premium
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mt-10 justify-center md:justify-start">
              {[
                { value: "+200", label: "Histórias" },
                { value: "50k+", label: "Famílias" },
                { value: "4.9★", label: "Avaliação" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div
                    className="text-white"
                    style={{ fontSize: "1.6rem", fontWeight: 800 }}
                  >
                    {value}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.7)" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 flex items-center justify-center z-10">
            <div className="relative">
              <div
                className="w-[280px] h-[340px] md:w-[340px] md:h-[420px] rounded-3xl overflow-hidden"
                style={{
                  boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
                  border: "4px solid rgba(255,255,255,0.25)",
                }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1664734978491-2d2b4f2e908a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                  alt="Criança lendo história"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating cards */}
              <div
                className="absolute -bottom-6 -left-10 px-4 py-3 rounded-2xl flex items-center gap-3"
                style={{
                  background: "rgba(255,255,255,0.95)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                  minWidth: "160px",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #ec4899, #f43f5e)" }}
                >
                  <Heart className="w-5 h-5 text-white fill-white" />
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>Histórias lidas</div>
                  <div style={{ fontSize: "1rem", fontWeight: 700, color: "#1f2937" }}>1.2M+ ✨</div>
                </div>
              </div>
              <div
                className="absolute -top-6 -right-8 px-4 py-3 rounded-2xl flex items-center gap-3"
                style={{
                  background: "rgba(255,255,255,0.95)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                  minWidth: "150px",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #f59e0b, #fcd34d)" }}
                >
                  <Star className="w-5 h-5 text-white fill-white" />
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>Avaliação</div>
                  <div style={{ fontSize: "1rem", fontWeight: 700, color: "#1f2937" }}>4.9 / 5 ⭐</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80H1440V30C1200 70 900 10 720 30C540 50 240 0 0 40V80Z" fill="#f9f5ff" />
          </svg>
        </div>
      </section>

      {/* FEATURED STORIES */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
                fontWeight: 700,
                color: "#2d1b69",
              }}
            >
              🌟 Histórias em Destaque
            </h2>
            <p style={{ color: "#6b7280", fontSize: "0.95rem", marginTop: "4px" }}>
              As mais amadas pelas famílias essa semana
            </p>
          </div>
          <button
            onClick={() => navigate("/historias")}
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full hover:scale-105 transition-transform cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #6d28d9, #9333ea)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "0.9rem",
            }}
          >
            Ver todas <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredStories.map((story, i) => (
            <StoryCard key={story.id} story={story} index={i} />
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(180deg, #f9f5ff 0%, #ede9fe 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
                fontWeight: 700,
                color: "#2d1b69",
              }}
            >
              Por que as famílias amam o Conta pra Mim?
            </h2>
            <p style={{ color: "#6b7280", fontSize: "0.95rem", marginTop: "8px" }}>
              Muito mais do que histórias — uma experiência completa de leitura infantil
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "📚",
                title: "+200 Histórias",
                description: "Um acervo rico e diversificado com novos títulos toda semana",
                color: "#8b5cf6",
                bg: "#f5f3ff",
              },
              {
                icon: "🎯",
                title: "Por Faixa Etária",
                description: "Histórias selecionadas de acordo com a idade e fase da criança",
                color: "#06b6d4",
                bg: "#ecfeff",
              },
              {
                icon: "💡",
                title: "Valores & Lições",
                description: "Cada história ensina empatia, coragem, amizade e criatividade",
                color: "#10b981",
                bg: "#f0fdf4",
              },
              {
                icon: "🌙",
                title: "Acesso 24h",
                description: "Leia na hora da soneca, no tablet, celular ou computador",
                color: "#f59e0b",
                bg: "#fffbeb",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 rounded-2xl text-center"
                style={{ background: benefit.bg, border: `1px solid ${benefit.color}20` }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: `${benefit.color}15`, fontSize: "1.8rem" }}
                >
                  {benefit.icon}
                </div>
                <h3
                  className="mb-2"
                  style={{ fontWeight: 700, color: "#1f2937", fontSize: "1rem" }}
                >
                  {benefit.title}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "#6b7280", lineHeight: "1.6" }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREE STORIES */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
              fontWeight: 700,
              color: "#2d1b69",
            }}
          >
            📖 Histórias Gratuitas
          </h2>
          <p style={{ color: "#6b7280", fontSize: "0.95rem", marginTop: "8px" }}>
            Comece agora — sem precisar de cadastro!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {freeStories.map((story, i) => (
            <StoryCard key={story.id} story={story} index={i} />
          ))}
        </div>
        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/historias")}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full hover:scale-105 transition-transform cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #6d28d9, #9333ea)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "1rem",
              boxShadow: "0 8px 24px rgba(109,40,217,0.25)",
            }}
          >
            <BookOpen className="w-5 h-5" />
            Ver Todas as Histórias
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* PREMIUM CTA */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #4c1d95 0%, #7c3aed 50%, #a855f7 100%)",
        }}
      >
        {/* Decorations */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <div
            className="w-[600px] h-[600px] rounded-full"
            style={{ background: "radial-gradient(circle, white, transparent)" }}
          />
        </div>
        {["⭐", "✨", "💫", "🌟", "✨"].map((s, i) => (
          <span
            key={i}
            className="absolute select-none opacity-30"
            style={{
              top: `${[15, 70, 30, 80, 50][i]}%`,
              left: `${[10, 5, 85, 88, 50][i]}%`,
              fontSize: ["2rem", "1.5rem", "1.8rem", "1.2rem", "2.5rem"][i],
            }}
          >
            {s}
          </span>
        ))}

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6"
            style={{
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            <Zap className="w-4 h-4 text-yellow-300 fill-yellow-300" />
            <span className="text-white" style={{ fontSize: "0.85rem", fontWeight: 600 }}>
              Oferta especial por tempo limitado
            </span>
          </div>

          <h2
            className="text-white mb-4"
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(1.8rem, 5vw, 3rem)",
              fontWeight: 800,
              lineHeight: "1.2",
            }}
          >
            Acesse <span style={{ color: "#fde68a" }}>todas as histórias</span><br />
            por menos de R$ 1 por dia
          </h2>

          <p
            className="mb-10"
            style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.05rem", lineHeight: "1.7" }}
          >
            Desbloqueie +200 histórias exclusivas, audiobooks, atividades educativas e muito mais. Cancele quando quiser.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            {[
              {
                period: "Mensal",
                price: "R$ 19,90",
                per: "/mês",
                highlight: false,
              },
              {
                period: "Anual",
                price: "R$ 9,90",
                per: "/mês",
                highlight: true,
                badge: "🔥 Mais popular",
              },
            ].map((plan) => (
              <div
                key={plan.period}
                className="px-8 py-6 rounded-2xl flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                style={{
                  background: plan.highlight
                    ? "linear-gradient(135deg, #fef08a, #fcd34d)"
                    : "rgba(255,255,255,0.1)",
                  border: plan.highlight ? "none" : "2px solid rgba(255,255,255,0.25)",
                  backdropFilter: plan.highlight ? "none" : "blur(8px)",
                  minWidth: "180px",
                }}
              >
                {plan.badge && (
                  <span
                    className="mb-2 px-3 py-0.5 rounded-full"
                    style={{
                      background: "#dc2626",
                      color: "#fff",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                    }}
                  >
                    {plan.badge}
                  </span>
                )}
                <div
                  style={{
                    color: plan.highlight ? "#5b21b6" : "rgba(255,255,255,0.6)",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                  }}
                >
                  {plan.period}
                </div>
                <div
                  style={{
                    color: plan.highlight ? "#1e1035" : "#fff",
                    fontSize: "2rem",
                    fontWeight: 800,
                    lineHeight: 1.2,
                  }}
                >
                  {plan.price}
                  <span style={{ fontSize: "0.85rem", fontWeight: 500, opacity: 0.7 }}>
                    {plan.per}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => navigate("/historias")}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full hover:scale-105 transition-transform cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #fff, #f3e8ff)",
              color: "#6d28d9",
              fontWeight: 700,
              fontSize: "1.1rem",
              boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
            }}
          >
            <Sparkles className="w-5 h-5" />
            Quero Acesso Premium
            <ChevronRight className="w-5 h-5" />
          </button>

          <p className="mt-4" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.82rem" }}>
            ✅ Cancele quando quiser &nbsp;·&nbsp; ✅ Sem compromisso &nbsp;·&nbsp; ✅ 7 dias grátis
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ background: "#f9f5ff" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
                fontWeight: 700,
                color: "#2d1b69",
              }}
            >
              O que as famílias estão dizendo 💬
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl"
                style={{
                  background: "#fff",
                  boxShadow: "0 4px 20px rgba(109,40,217,0.07)",
                }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p style={{ fontSize: "0.9rem", color: "#374151", lineHeight: "1.7", fontStyle: "italic" }}>
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0"
                    style={{ background: t.color, fontWeight: 700, fontSize: "0.85rem" }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "#1f2937", fontSize: "0.9rem" }}>
                      {t.name}
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "#9ca3af" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
