import { BookOpen, Heart, Instagram, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer style={{ background: "#1e1035", color: "#d4b8f5" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #9333ea, #c026d3)" }}
              >
                <BookOpen className="text-white w-4 h-4" />
              </div>
              <span className="text-white" style={{ fontFamily: "'Georgia', serif", fontSize: "1.1rem", fontWeight: 700 }}>
                Conta pra Mim
              </span>
            </div>
            <p style={{ fontSize: "0.85rem", lineHeight: "1.7", color: "#a78bcd" }}>
              Histórias mágicas que acendem a imaginação e o amor pela leitura em cada criança.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" style={{ color: "#c084fc" }} />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white mb-4" style={{ fontWeight: 600, fontSize: "0.9rem" }}>
              Histórias
            </h4>
            <ul className="flex flex-col gap-2">
              {["Princesas", "Aventura", "Fantasia", "Animais", "Espaço", "Fundo do Mar"].map((cat) => (
                <li key={cat}>
                  <Link
                    to="/historias"
                    className="hover:text-purple-300 transition-colors"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4" style={{ fontWeight: 600, fontSize: "0.9rem" }}>
              Plataforma
            </h4>
            <ul className="flex flex-col gap-2">
              {["Como Funciona", "Planos e Preços", "Para Escolas", "Blog", "Contato"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-purple-300 transition-colors" style={{ fontSize: "0.85rem" }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4" style={{ fontWeight: 600, fontSize: "0.9rem" }}>
              Benefícios Premium
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                "✨ +200 histórias exclusivas",
                "🎧 Audiobooks narrados",
                "🖨️ Atividades para imprimir",
                "🌙 Novas histórias toda semana",
                "📱 Acesso em todos os dispositivos",
              ].map((benefit) => (
                <li key={benefit} style={{ fontSize: "0.82rem", lineHeight: "1.5" }}>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)", fontSize: "0.8rem", color: "#7c5fa7" }}
        >
          <p className="flex items-center gap-1">
            © 2026 Conta pra Mim. Feito com <Heart className="w-3 h-3 text-pink-400 fill-pink-400" /> para crianças e famílias.
          </p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-purple-300 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-purple-300 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
