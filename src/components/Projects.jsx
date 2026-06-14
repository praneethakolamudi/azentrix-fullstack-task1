import { useEffect, useRef, useState } from "react"

const projects = [
  {
    title: "E-Commerce Website",
    description: "A full-stack online shopping platform with cart and payment integration.",
    tech: ["React", "Node JS", "MongoDB"],
    color: "#a855f7"
  },
  {
    title: "Portfolio Designer Tool",
    description: "A drag and drop portfolio builder for creative professionals.",
    tech: ["React", "Figma API", "CSS"],
    color: "#3b82f6"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather app with beautiful UI and city search feature.",
    tech: ["React", "OpenWeather API"],
    color: "#10b981"
  },
  {
    title: "Social Media App",
    description: "A Instagram-like app with posts, likes, and follow system.",
    tech: ["React", "Firebase", "Tailwind"],
    color: "#f59e0b"
  },
  {
    title: "AI Chat Bot",
    description: "A smart chatbot powered by OpenAI API with chat history.",
    tech: ["React", "OpenAI API", "Node JS"],
    color: "#ef4444"
  },
  {
    title: "Task Manager App",
    description: "A productivity app with drag and drop tasks and deadlines.",
    tech: ["React", "Redux", "CSS"],
    color: "#8b5cf6"
  }
]

export default function Projects() {
  const [visible, setVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    })
    observer.observe(ref.current)
  }, [])

  return (
    <section id="projects" ref={ref} style={{
      minHeight: "100vh",
      backgroundColor: "#111111",
      padding: "80px 40px",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(60px)",
      transition: "all 0.8s ease"
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{
          color: "#a855f7",
          fontSize: "16px",
          letterSpacing: "4px",
          marginBottom: "10px",
          textAlign: "center"
        }}>
          WHAT I BUILT
        </h2>
        <h3 style={{
          color: "white",
          fontSize: "42px",
          fontWeight: "bold",
          marginBottom: "50px",
          textAlign: "center"
        }}>
          My Projects
        </h3>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px"
        }}>
          {projects.map((project) => (
            <div key={project.title} style={{
              backgroundColor: "#1a1a1a",
              borderRadius: "16px",
              padding: "30px",
              border: `1px solid ${project.color}`,
              transition: "transform 0.3s ease",
              cursor: "pointer"
            }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-8px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              <div style={{
                width: "50px",
                height: "50px",
                borderRadius: "12px",
                backgroundColor: project.color,
                marginBottom: "20px"
              }} />
              <h4 style={{
                color: "white",
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "12px"
              }}>
                {project.title}
              </h4>
              <p style={{
                color: "#aaa",
                fontSize: "15px",
                lineHeight: "1.6",
                marginBottom: "20px"
              }}>
                {project.description}
              </p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {project.tech.map((t) => (
                  <span key={t} style={{
                    backgroundColor: "#2a2a2a",
                    color: project.color,
                    padding: "4px 12px",
                    borderRadius: "20px",
                    fontSize: "13px"
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}