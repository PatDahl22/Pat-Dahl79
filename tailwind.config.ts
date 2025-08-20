/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
				'xs': '450px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				'border-light': 'hsl(var(--border-light))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				surface: 'hsl(var(--surface))',
				'surface-muted': 'hsl(var(--surface-muted))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					hover: 'hsl(var(--primary-hover))',
					light: 'hsl(var(--primary-light))'
				},
				secondary: 'hsl(var(--secondary))',
				tertiary: 'hsl(var(--tertiary))',
				'black-100': 'hsl(var(--black-100))',
				'black-200': 'hsl(var(--black-200))',
				'white-100': 'hsl(var(--white-100))',
				accent: 'hsl(var(--accent))',
				text: {
					primary: 'hsl(var(--text-primary))',
					secondary: 'hsl(var(--text-secondary))',
					muted: 'hsl(var(--text-muted))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
					hover: 'hsl(var(--card-hover))'
				},
				success: 'hsl(var(--success))',
				warning: 'hsl(var(--warning))',
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				}
			},
			borderRadius: {
				'radius': 'var(--radius)',
				'radius-sm': 'var(--radius-sm)',
				'radius-lg': 'var(--radius-lg)',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'sm': 'var(--shadow-sm)',
				'DEFAULT': 'var(--shadow)',
				'lg': 'var(--shadow-lg)',
				'card': '0px 35px 120px -15px #A0A0A0'
			},
			transitionTimingFunction: {
				'smooth': 'var(--ease-smooth)',
				'bounce': 'var(--ease-bounce)'
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif']
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-up': 'slide-up 0.8s ease-out'
			},
			backgroundImage: {
				'hero-pattern': "url('/src/assets/herobg.png')",
				'hero2-pattern': "url('/src/assets/Bg1.png')",
				'section-pattern': "url('/src/assets/herobg.png')",
				'project1-image': "url('/src/assets/company/TB-Hero.png')",
				'project2-image': "url('/src/assets/company/Ws-banner.png')",
				'project3-image': "url('/src/assets/company/FT-banner.png')",
				'project4-image': "url('/src/assets/company/Shoes&stiches1.png')"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
