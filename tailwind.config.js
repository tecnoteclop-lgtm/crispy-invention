module.exports = {
  darkMode: "class",   // toggle via .dark class on <html>
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}", "./types/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink:     "hsl(var(--color-ink)     / <alpha-value>)",
        surface: "hsl(var(--color-surface) / <alpha-value>)",
        brand:   "hsl(var(--color-brand)   / <alpha-value>)",
        brand2:  "hsl(var(--color-brand2)  / <alpha-value>)",
        line:    "hsl(var(--color-line)    / <alpha-value>)",
        canvas:  "hsl(var(--color-canvas)  / <alpha-value>)",
        card:    "hsl(var(--color-card)    / <alpha-value>)",
        muted:   "hsl(var(--color-muted)   / <alpha-value>)",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(13, 18, 30, 0.08)",
        "soft-dark": "0 10px 30px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
}
