/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                coves: ['Coves', 'sans-serif'],
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                yanami: {
                    100: '#d3e2f5',
                    150: '#bbe1f4',
                    200: '#2b528b',
                },
                komari: {
                    100: '#ffb0ce',
                    200: '#FC87B3',
                },
                lemon: {
                    100: '#DED735',
                },
                nukumizu: {
                    100: '#FE702E',
                    200: '#FDAF04',
                },
            },
        },
    },
    plugins: [],
};
