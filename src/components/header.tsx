'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Shield, Menu, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navItems = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/achievements', label: 'Achievements' },
	{ href: '/members', label: 'Members' },
];

export default function Header() {
	const pathname = usePathname();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const { theme, setTheme } = useTheme();

	const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
		<Link
			href={href}
			className={cn(
				'text-sm font-medium transition-colors hover:text-primary',
				pathname === href ? 'text-primary' : ' text-foreground'
			)}
			onClick={() => setIsMobileMenuOpen(false)}
		>
			{children}
		</Link>
	);

	const ThemeToggle = () => (
		<Button
			variant="ghost"
			size="icon"
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			className="h-9 w-9"
		>
			<Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);

	return (
		<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 max-w-screen-2xl items-center justify-between px-24">
				<Link href="/" className="flex rounded-lg bg-white p-0.5" onClick={() => setIsMobileMenuOpen(false)}>
					<Image src="/logo-transparent.png" alt="ISFCR" width={54} height={54} />
				</Link>
				<nav className="hidden items-center gap-6 md:flex">
					{navItems.map((item) => (
						<NavLink key={item.href} href={item.href}>
							{item.label}
						</NavLink>
					))}
				</nav>
				<div className="flex items-center gap-2">
					<ThemeToggle />
					<div className="md:hidden">
						<Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
							<SheetTrigger asChild>
								<Button variant="ghost" size="icon">
									<Menu className="h-5 w-5" />
									<span className="sr-only">Open menu</span>
								</Button>
							</SheetTrigger>
							<SheetContent side="right" className="w-full max-w-xs">
								<div className="flex flex-col gap-6 p-6">
									<Link
										href="/"
										className="mb-4 flex items-center gap-2"
										onClick={() => setIsMobileMenuOpen(false)}
									>
										<Shield className="h-6 w-6 text-primary" />
										<span className="font-headline text-lg font-bold">ISFCR</span>
									</Link>
									{navItems.map((item) => (
										<NavLink key={item.href} href={item.href}>
											{item.label}
										</NavLink>
									))}
									<div className="mt-4 border-t pt-4">
										<ThemeToggle />
									</div>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</header>
	);
}
