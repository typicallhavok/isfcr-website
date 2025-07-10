import { MemberCard, type Member } from '@/components/member-card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team',
};

const members: Member[] = [
  {
    name: 'Amogh E M',
    fallback: 'AEM',
    role: 'Team Lead & Pentester',
    bio: 'The strategic mastermind. Archon leads the team with a deep understanding of system architecture and exploitation.',
    skills: ['Web Security', 'Javascript', 'Python', 'Burp Suite', 'XSS', 'SQLi'],
    social: {
      github: 'https://github.com/typicallhavok',
      linkedin: 'https://www.linkedin.com/in/amoghem/',
    },
  },
  {
    name: 'Praneet T H',
    fallback: 'PTH',
    role: 'Web Exploitation Expert',
    bio: 'Glitch can take any binary and turn it inside out. Expert in disassembly and malware analysis.',
    skills: ['Reverse Engineering', 'Assembly', 'IDA Pro', 'Ghidra', 'Malware Analysis'],
    social: {
      github: '#',
    },
  },
  {
    name: 'Chloe "Nyx" Davis',
    fallback: 'CD',
    role: 'Web Exploitation Expert',
    bio: 'No web server is safe from Nyx. Specializes in finding and exploiting web vulnerabilities.',
    skills: ['Web Security', 'JavaScript', 'SQLi', 'XSS', 'Burp Suite'],
    social: {
      github: '#',
      linkedin: '#',
    },
  },
  {
    name: 'David "Cipher" Evans',
    fallback: 'DE',
    role: 'Cryptographer',
    bio: 'Cipher breaks codes for breakfast. From classical ciphers to modern algorithms, nothing is unbreakable.',
    skills: ['Cryptography', 'Mathematics', 'SageMath', 'Python', 'Side-Channel Attacks'],
    social: {
      github: '#',
    },
  },
  {
    name: 'Eva "Proxy" Foster',
    fallback: 'EF',
    role: 'Forensics & Network Analyst',
    bio: 'Proxy pieces together digital crime scenes and deciphers network traffic like no other.',
    skills: ['Digital Forensics', 'Networking', 'Wireshark', 'Volatility', 'Steganography'],
    social: {
      linkedin: '#',
    },
  },
  {
    name: 'Frank "Root" Green',
    fallback: 'FG',
    role: 'OSINT & Social Engineering',
    bio: 'Root can find information on anyone, anywhere. The human element is his favorite vulnerability.',
    skills: ['OSINT', 'Social Engineering', 'Maltego', 'Recon-ng', 'Psychology'],
    social: {
      linkedin: '#',
    },
  },
];

export default function MembersPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-24 animate-in fade-in slide-in-from-bottom-12 duration-1000">
      <div className="mx-auto max-w-3xl text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
          Meet the Team
        </h1>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl">
          The brilliant minds behind ISFCR. Each member brings a unique set of skills and a shared passion for cybersecurity.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  );
}
