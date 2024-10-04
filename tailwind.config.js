/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                yanami: {
                    10: '#d3e2f5',
                    15: '#bbe1f4',
                    20: '#2b528b',
                },
                komari: {
                    10: '#FC87B3',
                },
                lemon: {
                    10: '#DED735',
                },
                nukumizu: {
                    10: '#FE702E',
                    20: '#FDAF04',
                },
            },
        },
    },
    plugins: [],
};
