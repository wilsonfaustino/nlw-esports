/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.tsx', './index.html'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'nlw-background': "url('/landing.png')",
                'nlw-gradient': 'linear-gradient(90deg, #9572FC 10%, #43E7AD 50%, #E1D55D 90%)',
                'game-box-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67%)',
                parallax: "url('/mist.png'), url('/stars.png')",
            },
            animation: {
                'gradient-x': 'gradient-x 3s ease infinite',
                'gradient-y': 'gradient-y 3s ease infinite',
                'gradient-xy': 'gradient-xy 3s ease infinite',
                bounce: 'bounce 8s linear infinite',
            },
            keyframes: {
                'gradient-y': {
                    '0%, 100%': {
                        'background-size': '400% 400%',
                        'background-position': 'center top',
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'center center',
                    },
                },
                'gradient-x': {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center',
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center',
                    },
                },
                'gradient-xy': {
                    '0%, 100%': {
                        'background-size': '400% 400%',
                        'background-position': 'left center',
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center',
                    },
                },
                'animate-bounce': {
                    '0%, 100%': {
                        transform: 'translateY(-25%)',
                        'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
                    },
                    '50%': {
                        transform: 'translateY(15%)',
                        'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
                    },
                },
            },
        },
    },
    plugins: [require('tailwindcss-radix')()],
}
