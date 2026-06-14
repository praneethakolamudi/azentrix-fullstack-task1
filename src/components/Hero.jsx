import { useEffect, useState } from "react"

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)
  }, [])

  return (
    <section id="hero" style={{
      height: "100vh",
      backgroundColor: "#0f0f0f",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      textAlign: "center",
      transition: "all 0.8s ease",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(60px)"
    }}>
      <p style={{ color: "#a855f7", fontSize: "18px", marginBottom: "10px" }}>
        👋 Hello, I am
      </p>
      <h1 style={{
        color: "white",
        fontSize: "64px",
        fontWeight: "bold",
        marginBottom: "10px"
      }}>
        Alex Carter
      </h1>
      <h2 style={{ color: "#888", fontSize: "28px", marginBottom: "30px" }}>
        UI Designer & Creative Developer
      </h2>
      <p style={{ color: "#aaa", fontSize: "18px", maxWidth: "500px", marginBottom: "40px" }}>
        I build beautiful, animated websites that leave a lasting impression.
      </p>
      <a href="#projects" style={{
        backgroundColor: "#a855f7",
        color: "white",
        padding: "14px 36px",
        borderRadius: "30px",
        textDecoration: "none",
        fontSize: "16px",
        fontWeight: "bold"
      }}>
        View My Work 🚀
      </a>
    </section>
  )
}