import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import ConditionalFooter from '@/components/conditional-footer';
import { Background16 } from '@/components/ui/background';

export const metadata: Metadata = {
  title: {
    default: 'ISFCR | CTF Team',
    template: '%s | ISFCR',
  },
  description: 'ISFCR CTF Team Official Website. Masters of the Digital Realm.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased text-foreground min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Background16 />
          <div className="relative z-10">
            <Header />
            <main className="flex-1">{children}</main>
            <ConditionalFooter />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
