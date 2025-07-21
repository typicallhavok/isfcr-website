export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readTime: number;
  featured?: boolean;
  imageUrl?: string;
  imageAlt?: string;
  thumbnailUrl?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "understanding-web-vulnerabilities",
    title: "Understanding Modern Web Application Vulnerabilities",
    summary: "Exploring the most critical web vulnerabilities every security professional should understand.",
    excerpt: "A deep dive into the most common web vulnerabilities we encounter in CTFs and real-world scenarios, including OWASP Top 10 and beyond.",
    content: `Web application security is a constantly evolving field, with new vulnerabilities discovered regularly. In this post, we'll explore some of the most critical vulnerabilities that every security professional should understand.

## SQL Injection: Still a Major Threat

Despite being well-known for decades, SQL injection remains one of the most dangerous vulnerabilities. We've encountered numerous variations in CTF competitions, from basic union-based injections to complex blind boolean-based attacks.

## Cross-Site Scripting (XSS): Beyond the Basics

XSS attacks have evolved significantly. Modern frameworks provide some protection, but developers still need to understand DOM-based XSS, mutation XSS, and other advanced techniques.

## Server-Side Request Forgery (SSRF): The Hidden Danger

SSRF vulnerabilities allow attackers to make requests from the server, potentially accessing internal services. We've seen creative SSRF exploits in recent CTFs that bypass common filters.

Stay tuned for more technical deep-dives from the ISFCR team!`,
    author: "Praneet T H",
    date: "2024-12-15",
    category: "Web Security",
    tags: ["web", "vulnerabilities", "owasp", "ctf"],
    readTime: 8,
    featured: true,
    imageUrl: "/banner.svg",
    imageAlt: "Web Security Vulnerabilities Diagram",
    thumbnailUrl: "/banner.svg"
  },
  {
    id: "cryptography-in-ctfs",
    title: "Cryptography Challenges in CTF Competitions",
    summary: "From classical ciphers to modern RSA attacks in competitive cryptography challenges.",
    excerpt: "Breaking down common cryptographic challenges and the mathematical concepts behind them, from classical ciphers to modern encryption.",
    content: `Cryptography challenges in CTFs range from simple classical ciphers to complex mathematical problems involving modern encryption schemes.

## Classical Ciphers: The Foundation

Understanding Caesar ciphers, Vigenère ciphers, and other historical encryption methods provides the foundation for more complex challenges.

## RSA Attacks: Mathematical Beauty

RSA challenges often involve factoring large numbers, exploiting weak key generation, or understanding mathematical relationships in modular arithmetic.

## Modern Cryptography: Real-World Applications

CTF crypto challenges increasingly mirror real-world cryptographic implementations, teaching practical skills alongside theoretical knowledge.`,
    author: "Koushik P",
    date: "2024-12-10",
    category: "Cryptography",
    tags: ["crypto", "rsa", "mathematics", "ctf"],
    readTime: 6,
    imageUrl: "/logo.png",
    imageAlt: "Cryptography and Mathematical Concepts",
    thumbnailUrl: "/logo.png"
  },
  {
    id: "penetration-testing-methodology",
    title: "Our Penetration Testing Methodology",
    summary: "A systematic approach to penetration testing from reconnaissance to reporting.",
    excerpt: "How ISFCR approaches penetration testing engagements, from reconnaissance to reporting, sharing our battle-tested methodology.",
    content: `At ISFCR, we've developed a systematic approach to penetration testing that ensures comprehensive coverage and actionable results.

## Reconnaissance: The Art of Information Gathering

Proper reconnaissance is crucial for successful penetration testing. We use a combination of passive and active techniques to map the attack surface.

## Enumeration: Finding the Entry Points

Once we have a clear picture of the target, we systematically enumerate services, applications, and potential vulnerabilities.

## Exploitation: Turning Findings into Impact

The goal isn't just to find vulnerabilities, but to demonstrate their real-world impact through careful exploitation.

## Documentation: Communicating Risk Effectively

Clear, actionable reporting is essential for helping organizations improve their security posture.`,
    author: "Amogh E M",
    date: "2024-12-05",
    category: "Penetration Testing",
    tags: ["pentest", "methodology", "security", "assessment"],
    readTime: 10,
    featured: true,
    imageUrl: "/banner.svg",
    imageAlt: "Penetration Testing Methodology Workflow",
    thumbnailUrl: "/banner.svg"
  },
  {
    id: "reverse-engineering-fundamentals",
    title: "Reverse Engineering Fundamentals for CTF Players",
    summary: "Essential tools and techniques for mastering reverse engineering challenges.",
    excerpt: "Essential reverse engineering techniques and tools that every CTF player should master, from static analysis to dynamic debugging.",
    content: `Reverse engineering is often considered one of the most challenging CTF categories, but with the right approach and tools, it becomes much more manageable.

## Static Analysis: Reading Without Running

Tools like IDA Pro, Ghidra, and radare2 allow us to analyze binaries without executing them, revealing program structure and logic.

## Dynamic Analysis: Learning Through Execution

Debuggers like GDB, x64dbg, and specialized tools help us understand program behavior during runtime.

## Anti-Analysis Techniques: The Cat and Mouse Game

Modern malware and CTF challenges often include anti-debugging and obfuscation techniques that require creative solutions.`,
    author: "Vamshi K",
    date: "2024-11-28",
    category: "Reverse Engineering",
    tags: ["reverse", "analysis", "debugging", "malware"],
    readTime: 7,
    imageUrl: "/logo-transparent.png",
    imageAlt: "Reverse Engineering Tools and Analysis",
    thumbnailUrl: "/logo-transparent.png"
  },
  {
    id: "incident-response-lessons",
    title: "Lessons from Real-World Incident Response",
    summary: "Insights from actual security incidents and effective response strategies.",
    excerpt: "Insights gained from responding to actual security incidents, including common attack vectors and defensive strategies.",
    content: `Real-world incident response provides invaluable learning opportunities that complement our CTF experience.

## Initial Response: The Critical First Hours

The first few hours of an incident are crucial. Proper containment and evidence preservation can make or break an investigation.

## Forensic Analysis: Uncovering the Truth

Digital forensics techniques help us understand what happened, when it happened, and how to prevent similar incidents.

## Recovery and Lessons Learned

The goal is not just to recover from an incident, but to emerge stronger with improved defenses and procedures.`,
    author: "ISFCR Team",
    date: "2024-11-20",
    category: "Incident Response",
    tags: ["incident", "response", "forensics", "defense"],
    readTime: 9,
    imageUrl: "/ctftime.svg",
    imageAlt: "Incident Response Process and Timeline",
    thumbnailUrl: "/ctftime.svg"
  }
];

export const categories = [
  "All",
  "Web Security",
  "Cryptography", 
  "Penetration Testing",
  "Reverse Engineering",
  "Incident Response",
  "CTF Writeups",
  "Research"
];
