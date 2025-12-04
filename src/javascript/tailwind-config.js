/* Tailwind configuration moved from inline <script> in index.html */
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Inter', 'sans-serif'],
            },
            colors: {
                'brand-green': '#34D399',
                'dark-bg': '#111827',
                'dark-card': '#1F2937',
                'dark-text': '#E5E7EB',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            }
        }
    },
    darkMode: 'class',
}
