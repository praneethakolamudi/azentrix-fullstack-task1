import { useEffect, useRef, useState } from "react"

export default function Contact() {
  const [visible, setVisible] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    })
    observer.observe(ref.current)
  }, [])

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = "Name is required"
    if (!form.email.trim()) newErrors.email = "Email is required"
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = "Enter valid email"
    if (!form.message.trim()) newErrors.message = "Message is required"
    return newErrors
  }

  const handleSubmit = () => {
    const foundErrors = validate()
    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors)
    } else {
      setErrors({})
      setSubmitted(true)
    }
  }

  return (
    <section id="contact" ref={ref} style={{
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
      <div style={{ maxWidth: "600px", width: "100%" }}>
        <h2 style={{
          color: "#a855f7",
          fontSize: "16px",
          letterSpacing: "4px",
          marginBottom: "10px",
          textAlign: "center"
        }}>
          GET IN TOUCH
        </h2>
        <h3 style={{
          color: "white",
          fontSize: "42px",
          fontWeight: "bold",
          marginBottom: "50px",
          textAlign: "center"
        }}>
          Contact Me
        </h3>

        {submitted ? (
          <div style={{
            backgroundColor: "#1a1a1a",
            border: "1px solid #a855f7",
            borderRadius: "16px",
            padding: "60px",
            textAlign: "center"
          }}>
            <h4 style={{ color: "#a855f7", fontSize: "28px", marginBottom: "16px" }}>
              🎉 Message Sent!
            </h4>
            <p style={{ color: "#aaa", fontSize: "16px" }}>
              Thank you for reaching out. I'll get back to you soon!
            </p>
          </div>
        ) : (
          <div style={{
            backgroundColor: "#1a1a1a",
            borderRadius: "16px",
            padding: "40px",
            border: "1px solid #2a2a2a"
          }}>
            {/* Name */}
            <div style={{ marginBottom: "24px" }}>
              <label style={{ color: "white", fontSize: "14px", display: "block", marginBottom: "8px" }}>
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  backgroundColor: "#0f0f0f",
                  border: errors.name ? "1px solid red" : "1px solid #333",
                  borderRadius: "8px",
                  color: "white",
                  fontSize: "15px",
                  outline: "none",
                  boxSizing: "border-box"
                }}
              />
              {errors.name && <p style={{ color: "red", fontSize: "13px", marginTop: "6px" }}>{errors.name}</p>}
            </div>

            {/* Email */}
            <div style={{ marginBottom: "24px" }}>
              <label style={{ color: "white", fontSize: "14px", display: "block", marginBottom: "8px" }}>
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  backgroundColor: "#0f0f0f",
                  border: errors.email ? "1px solid red" : "1px solid #333",
                  borderRadius: "8px",
                  color: "white",
                  fontSize: "15px",
                  outline: "none",
                  boxSizing: "border-box"
                }}
              />
              {errors.email && <p style={{ color: "red", fontSize: "13px", marginTop: "6px" }}>{errors.email}</p>}
            </div>

            {/* Message */}
            <div style={{ marginBottom: "32px" }}>
              <label style={{ color: "white", fontSize: "14px", display: "block", marginBottom: "8px" }}>
                Your Message
              </label>
              <textarea
                placeholder="Write your message here..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                rows={5}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  backgroundColor: "#0f0f0f",
                  border: errors.message ? "1px solid red" : "1px solid #333",
                  borderRadius: "8px",
                  color: "white",
                  fontSize: "15px",
                  outline: "none",
                  resize: "vertical",
                  boxSizing: "border-box"
                }}
              />
              {errors.message && <p style={{ color: "red", fontSize: "13px", marginTop: "6px" }}>{errors.message}</p>}
            </div>

            {/* Button */}
            <button
              onClick={handleSubmit}
              style={{
                width: "100%",
                padding: "14px",
                backgroundColor: "#a855f7",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >
              Send Message 🚀
            </button>
          </div>
        )}
      </div>
    </section>
  )
}