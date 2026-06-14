import { useEffect, useRef, useState } from "react"

export default function About() {
  const [visible, setVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    })
    observer.observe(ref.current)
  }, [])

  return (
    <section id="about" ref={ref} style={{
      minHeight: "100vh",
      backgroundColor: "#111111",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "80px 40px",
      transition: "all 0.8s ease",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(60px)"
    }}>
      <div style={{ maxWidth: "800px", textAlign: "center" }}>
        <h2 style={{
          color: "#a855f7",
          fontSize: "16px",
          letterSpacing: "4px",
          marginBottom: "10px"
        }}>
          WHO I AM
        </h2>
        <h3 style={{
          color: "white",
          fontSize: "42px",
          fontWeight: "bold",
          marginBottom: "30px"
        }}>
          About Me
        </h3>
        <p style={{
          color: "#aaa",
          fontSize: "18px",
          lineHeight: "1.8",
          marginBottom: "20px"
        }}>
          Hi! I'm Alex Carter, a passionate UI Designer and Creative Developer 
          based in New York. I specialize in building beautiful, 
          high-performance websites with smooth animations and clean design.
        </p>
        <p style={{
          color: "#aaa",
          fontSize: "18px",
          lineHeight: "1.8",
          marginBottom: "40px"
        }}>
          With 5+ years of experience, I've worked with startups and 
          global brands to craft digital experiences that users love.
        </p>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap"
        }}>
          {[
            { number: "50+", label: "Projects Done" },
            { number: "30+", label: "Happy Clients" },
            { number: "5+", label: "Years Experience" }
          ].map((stat) => (
            <div key={stat.label} style={{
              backgroundColor: "#1a1a1a",
              padding: "30px 40px",
              borderRadius: "12px",
              border: "1px solid #a855f7"
            }}>
              <h4 style={{ color: "#a855f7", fontSize: "36px", fontWeight: "bold" }}>
                {stat.number}
              </h4>
              <p style={{ color: "#aaa", fontSize: "14px" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}