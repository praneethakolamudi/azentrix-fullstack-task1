import { useEffect, useRef, useState } from "react"

const skills = [
  { name: "HTML & CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React JS", level: 85 },
  { name: "UI Design", level: 80 },
  { name: "Figma", level: 75 },
  { name: "Node JS", level: 70 },
]

export default function Skills() {
  const [visible, setVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    })
    observer.observe(ref.current)
  }, [])

  return (
    <section id="skills" ref={ref} style={{
      minHeight: "100vh",
      backgroundColor: "#0f0f0f",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "80px 40px",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(60px)",
      transition: "all 0.8s ease"
    }}>
      <div style={{ maxWidth: "700px", width: "100%" }}>
        <h2 style={{
          color: "#a855f7",
          fontSize: "16px",
          letterSpacing: "4px",
          marginBottom: "10px",
          textAlign: "center"
        }}>
          WHAT I KNOW
        </h2>
        <h3 style={{
          color: "white",
          fontSize: "42px",
          fontWeight: "bold",
          marginBottom: "50px",
          textAlign: "center"
        }}>
          My Skills
        </h3>

        {skills.map((skill) => (
          <div key={skill.name} style={{ marginBottom: "30px" }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "8px"
            }}>
              <span style={{ color: "white", fontSize: "16px" }}>{skill.name}</span>
              <span style={{ color: "#a855f7", fontSize: "16px" }}>{skill.level}%</span>
            </div>
            <div style={{
              backgroundColor: "#1a1a1a",
              borderRadius: "10px",
              height: "10px",
              width: "100%"
            }}>
              <div style={{
                height: "10px",
                borderRadius: "10px",
                backgroundColor: "#a855f7",
                width: visible ? `${skill.level}%` : "0%",
                transition: "width 1.2s ease"
              }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}