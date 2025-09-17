
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
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors from design system
				brilliance: 'hsl(var(--brilliance))',
				'little-dipper': 'hsl(var(--little-dipper))',
				'buffed-plum': 'hsl(var(--buffed-plum))',
				'garish-green': 'hsl(var(--garish-green))',
				'heavy-grey': 'hsl(var(--heavy-grey))',
				'wall-street': 'hsl(var(--wall-street))',
				'pale-grey': 'hsl(var(--pale-grey))',
				'diamond-cut': 'hsl(var(--diamond-cut))',
				'lavender-blue': 'hsl(var(--lavender-blue))',
				'stonewall-grey': 'hsl(var(--stonewall-grey))',
				'purple-illusion': 'hsl(var(--purple-illusion))',
				'perrywinkle': 'hsl(var(--perrywinkle))'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'4': '4px',
				'8': '8px',
				'12': '12px',
				'16': '16px',
				'20': '20px'
			},
			fontFamily: {
				'inter': ['Inter', 'system-ui', 'sans-serif'],
				'mono': ['IBM Plex Mono', 'Courier New', 'monospace']
			},
			fontSize: {
				'32': '32px',
				'24': '24px',
				'20': '20px',
				'18': '18px',
				'16': '16px'
			},
			spacing: {
				'8': '8px',
				'16': '16px',
				'24': '24px',
				'44': '44px',
				'48': '48px',
				'52': '52px',
				'56': '56px',
				'64': '64px'
			},
			maxWidth: {
				'360': '360px',
				'1280': '1280px'
			},
			minHeight: {
				'120': '120px'
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
				shimmer: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				shake: {
					'0%, 100%': { transform: 'translateX(0)' },
					'25%': { transform: 'translateX(-4px)' },
					'75%': { transform: 'translateX(4px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'shimmer': 'shimmer 1.5s infinite',
				'shake': 'shake 0.3s ease-in-out'
			},
			screens: {
				'xs': '375px'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
