/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'blood-red': '#8a0303',
                'dark-red': '#6d0202',
            },
            fontFamily: {
                creepster: ['Creepster', 'cursive'],
                cinzel: ['Cinzel', 'serif'],
            },
        },
    },
    plugins: [],
}