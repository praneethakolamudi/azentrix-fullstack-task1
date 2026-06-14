export default function Navbar() {
  return (
    <nav style={{
      position: "fixed",
      top: 0,
      width: "100%",
      backgroundColor: "#0f0f0f",
      padding: "15px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: 1000
    }}>
      <h2 style={{ color: "#a855f7", fontSize: "22px" }}>Alex Carter</h2>
      <ul style={{ display: "flex", gap: "30px", listStyle: "none" }}>
        {["Hero", "About", "Skills", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} style={{
              color: "white",
              textDecoration: "none",
              fontSize: "16px"
            }}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}