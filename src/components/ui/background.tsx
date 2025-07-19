'use client';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

export function Background16() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const mouse = useRef({ x: 0, y: 0 });
    const { theme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const animationIdRef = useRef<number>();

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        
        const stars: {x: number, y: number, z: number}[] = [];
        const starCount = 200;
        const speed = 2;

        for (let i = 0; i < starCount; i++) {
            stars[i] = {
                x: Math.random() * width - width / 2,
                y: Math.random() * height - height / 2,
                z: Math.random() * 500 + 1
            };
        }
        
        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.current.x = (e.clientX - rect.left - width / 2) * 2;
            mouse.current.y = (e.clientY - rect.top - height / 2) * 2;
        };
        
        const draw = () => {
            // Get current theme inside draw loop
            const currentTheme = theme === 'system' ? systemTheme : theme;
            const isDark = currentTheme === 'dark';
            
            // Add blur filter
            ctx.filter = 'blur(1px)';
            
            // Theme-responsive background
            if (isDark) {
                ctx.fillStyle = 'rgba(0, 5, 10, 0.1)';
            } else {
                ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
            }
            ctx.fillRect(0, 0, width, height);
            
            // Reset filter for particles
            ctx.filter = 'none';
            
            ctx.save();
            ctx.translate(width / 2, height / 2);
            
            for (let i = 0; i < starCount; i++) {
                const star = stars[i];
                star.z -= speed;

                if (star.z <= 0) {
                    star.x = Math.random() * width - width / 2;
                    star.y = Math.random() * height - height / 2;
                    star.z = 500;
                }

                const k = 128 / star.z;
                // Increase mouse influence significantly
                const px = star.x * k + mouse.current.x * (1 - star.z / 500)*0.4;
                const py = star.y * k + mouse.current.y * (1 - star.z / 500)*0.4;

                const size = Math.max((1 - star.z / 500) * 4, 0.5);
                const opacity = Math.max((1 - star.z / 500), 0.2);
                
                // Theme-responsive particle color
                if (isDark) {
                    ctx.fillStyle = `rgba(255, 140, 0, ${opacity})`;
                } else {
                    ctx.fillStyle = `rgba(255, 140, 0, ${opacity})`;
                }
                ctx.beginPath();
                ctx.arc(px, py, size, 0, Math.PI * 2);
                ctx.fill();
            }
            
            ctx.restore();
            animationIdRef.current = requestAnimationFrame(draw);
        };

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);  // Changed from canvas to window
        
        // Initial clear
        const currentTheme = theme === 'system' ? systemTheme : theme;
        const isDark = currentTheme === 'dark';
        
        if (isDark) {
            ctx.fillStyle = '#00050a';
        } else {
            ctx.fillStyle = '#ffffff';
        }
        ctx.fillRect(0, 0, width, height);
        
        draw();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);  // Changed from canvas to window
            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current);
            }
        };
    }, [theme, systemTheme, mounted]);

    if (!mounted) {
        return null;
    }

    const currentTheme = theme === 'system' ? systemTheme : theme;
    const isDark = currentTheme === 'dark';

    return (
        <div ref={containerRef} className={`fixed inset-0 overflow-hidden -z-10 ${isDark ? 'bg-[#00050a]' : 'bg-white'}`}>
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full block filter blur-sm"></canvas>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-primary font-mono pointer-events-none z-10 filter blur-lg">
                <h2 className="text-4xl md:text-6xl font-bold">DATA TUNNEL</h2>
                <p className="text-lg md:text-2xl">Breaching firewall...</p>
            </div>
        </div>
    );
}
