"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    content: ['./app/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: 'hsl(var(--primary) / <alpha-value>)',
                secondary: 'var(--secondary) / <alpha-value>',
                accent: 'hsl(var(--accent) / <alpha-value>)',
                background: 'hsl(var(--background) / <alpha-value>)',
                text: 'hsl(var(--text) / <alpha-value>)',
            }
        },
    },
    plugins: [],
};
