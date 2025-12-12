export default function Footer() {
  return (
    <footer
      className="footer"
      style={{
        padding: "2rem",
        textAlign: "center",
        background: "var(--color-bg-card)",
        marginTop: "3rem",
        borderTop: "1px solid var(--color-primary-soft)",
      }}
    >
      <p>Autorzy strony: Illia Volobuiev i Kiryl Tolochko</p>
      <p>Rok: 2025</p>

      <a href="#header" className="btn-accent" style={{ marginTop: "1rem" }}>
        Na górę
      </a>
    </footer>
  );
}
