import { Instagram, Linkedin, Flag } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="flex items-center justify-center py-6 w-full shrink-0 border-t bg-secondary">
            <div className="container flex flex-col items-center justify-between gap-4 px-4 md:px-6 md:flex-row">
                <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} ISFCR. All rights reserved.</p>
                <div className="flex gap-4">
                    <Link href="https://www.instagram.com/isfcr.pesu/" aria-label="Instagram" className="text-muted-foreground transition-colors hover:text-primary"><Instagram className="h-5 w-5"/></Link>
                    <Link href="https://in.linkedin.com/company/isfcr" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-primary"><Linkedin className="h-5 w-5"/></Link>
                    <Link href="https://ctftime.org/team/166645" aria-label="CTFtime" className="text-muted-foreground transition-colors hover:text-primary"><Flag className="h-5 w-5"/></Link>
                </div>
            </div>
      </footer>
    );
}
