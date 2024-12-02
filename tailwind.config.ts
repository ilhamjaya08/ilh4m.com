import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
			neoYellow: {
				100: '#FFF9E6',
				200: '#FFF3CC',
				300: '#FFECB3',
				400: '#FFE599',
				500: '#FFDD80',
				600: '#FFD666',
				700: '#FFCF4D',
				800: '#FFC833',
				900: '#FFC11A'
			},
			neoBlue: {
				100: '#E6F3FF',
				200: '#CCE7FF',
				300: '#B3DBFF',
				400: '#99CFFF',
				500: '#80C3FF',
				600: '#66B7FF',
				700: '#4DABFF',
				800: '#339FFF',
				900: '#1A93FF'
			},
			neoPink: {
				100: '#FFE6F3',
				200: '#FFCCE7',
				300: '#FFB3DB',
				400: '#FF99CF',
				500: '#FF80C3',
				600: '#FF66B7',
				700: '#FF4DAB',
				800: '#FF339F',
				900: '#FF1A93'
			},
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
