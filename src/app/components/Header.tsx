import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { BookOpen, Menu, X, Star, Sparkles } from "lucide-react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header
      style={{
        background: "linear-gradient(135deg, #6d28d9 0%, #9333ea 50%, #c026d3 100%)",
        boxShadow: "0 4px 20px rgba(109,40,217,0.3)",
      }}
      className="sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)" }}
            >
              <BookOpen className="text-white w-5 h-5" />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="text-white"
                style={{ fontFamily: "'Playfair Display', 'Georgia', serif", fontSize: "1.2rem", fontWeight: 700, letterSpacing: "-0.02em" }}
              >
                Conta pra Mim
              </span>
              <span style={{ color: "#f9d4ff", fontSize: "0.65rem", letterSpacing: "0.08em" }}>
                HISTÓRIAS INFANTIS
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "Início", path: "/" },
              { label: "Histórias", path: "/historias" },
              { label: "Categorias", path: "/historias" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-white/80 hover:text-white transition-colors"
                style={{ fontSize: "0.95rem", fontWeight: 500 }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              className="text-white/80 hover:text-white transition-colors"
              style={{ fontSize: "0.9rem" }}
            >
              Entrar
            </button>
            <button
              onClick={() => navigate("/historias")}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-purple-700 hover:scale-105 transition-transform cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #fef08a, #fde68a)",
                fontWeight: 700,
                fontSize: "0.9rem",
                boxShadow: "0 4px 12px rgba(253,224,71,0.4)",
              }}
            >
              <Sparkles className="w-4 h-4" />
              Acesso Premium
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="md:hidden pb-4 border-t"
            style={{ borderColor: "rgba(255,255,255,0.2)" }}
          >
            <nav className="flex flex-col gap-2 pt-4">
              {[
                { label: "Início", path: "/" },
                { label: "Histórias", path: "/historias" },
                { label: "Categorias", path: "/historias" },
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-white/90 hover:text-white py-2 px-3 rounded-lg hover:bg-white/10 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => { navigate("/historias"); setMenuOpen(false); }}
                className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-full text-purple-700"
                style={{
                  background: "linear-gradient(135deg, #fef08a, #fde68a)",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                }}
              >
                <Sparkles className="w-4 h-4" />
                Acesso Premium
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}