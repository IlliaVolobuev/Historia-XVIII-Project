export default function Footer() {
  return (
    <footer className="footer"
      style={{
        padding: "2rem",
        textAlign: "center",
        background: "var(--color-bg-card)",
        marginTop: "4rem",
        borderTop: "1px solid var(--color-primary-soft)",
      }}
    >
      <p>Автор сайта: ИЛЬЯ</p>
      <p>Год: 2025</p>

      <a href="#header" className="btn-accent" style={{ marginTop: "1rem" }}>
        Наверх
      </a>
    </footer>
  );
}

