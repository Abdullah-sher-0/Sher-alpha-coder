/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        /* Mission-control palette */
        ink: "#050810",
        panel: "#0c1220",
        raise: "#111a2b",
        hover: "#16223a",
        line: "#1a2540",
        "line-soft": "#131c31",
        fog: "#5b6b8c",
        mist: "#8fa0c2",
        paper: "#dbe4f5",
        cy: "#22d3ee",
        mint: "#34d399",
        amber: "#fbbf24",
        rose: "#f87171",
        mag: "#f472b6",
        viol: "#a78bfa",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "led-pulse": {
          "0%,100%": { opacity: "1", boxShadow: "0 0 6px 1px currentColor" },
          "50%": { opacity: "0.45", boxShadow: "0 0 2px 0 currentColor" },
        },
        "sweep": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "rise-in": {
          from: { opacity: "0", transform: "translateY(10px) scale(0.985)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "bar-compare": {
          "0%,100%": { transform: "translateY(0)" },
          "45%": { transform: "translateY(-9px)" },
        },
        "bar-swap": {
          "0%": { transform: "translateY(0) scale(1)" },
          "35%": { transform: "translateY(-12px) scale(1.1)" },
          "100%": { transform: "translateY(0) scale(1)" },
        },
        "pop-found": {
          "0%": { transform: "scale(0.9)" },
          "55%": { transform: "scale(1.12)" },
          "100%": { transform: "scale(1)" },
        },
        "node-enter": {
          "0%": { opacity: "0", transform: "translateY(14px) scale(0.8)" },
          "60%": { opacity: "1", transform: "translateY(-3px) scale(1.05)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "scan-x": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(240%)" },
        },
        "glow-breathe": {
          "0%,100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "led-pulse": "led-pulse 1.5s ease-in-out infinite",
        "sweep": "sweep 4.2s linear infinite",
        "rise-in": "rise-in 0.45s cubic-bezier(0.22,1,0.36,1) both",
        "bar-compare": "bar-compare 0.5s cubic-bezier(0.22,1,0.36,1)",
        "bar-swap": "bar-swap 0.6s cubic-bezier(0.34,1.56,0.64,1)",
        "pop-found": "pop-found 0.55s cubic-bezier(0.16,1,0.3,1)",
        "node-enter": "node-enter 0.5s cubic-bezier(0.34,1.56,0.64,1) both",
        "scan-x": "scan-x 2.8s cubic-bezier(0.4,0,0.2,1) infinite",
        "glow-breathe": "glow-breathe 3s ease-in-out infinite",
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        disp: ["'Space Grotesk'", "'JetBrains Mono'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}