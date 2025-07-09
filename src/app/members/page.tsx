import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team',
};

const members = [
  {
    name: 'Amogh E M',
    codename: 'Archon',
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
    codename: 'Glitch',
    role: 'Web Exploitation Expert',
    bio: 'Glitch can take any binary and turn it inside out. Expert in disassembly and malware analysis.',
    skills: ['Reverse Engineering', 'Assembly', 'IDA Pro', 'Ghidra', 'Malware Analysis'],
    social: {
      github: '#',
    },
  },
  {
    name: 'Chloe "Nyx" Davis',
    codename: 'Nyx',
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
    codename: 'Cipher',
    role: 'Cryptographer',
    bio: 'Cipher breaks codes for breakfast. From classical ciphers to modern algorithms, nothing is unbreakable.',
    skills: ['Cryptography', 'Mathematics', 'SageMath', 'Python', 'Side-Channel Attacks'],
    social: {
      github: '#',
    },
  },
  {
    name: 'Eva "Proxy" Foster',
    codename: 'Proxy',
    role: 'Forensics & Network Analyst',
    bio: 'Proxy pieces together digital crime scenes and deciphers network traffic like no other.',
    skills: ['Digital Forensics', 'Networking', 'Wireshark', 'Volatility', 'Steganography'],
    social: {
      linkedin: '#',
    },
  },
  {
    name: 'Frank "Root" Green',
    codename: 'Root',
    role: 'OSINT & Social Engineering',
    bio: 'Root can find information on anyone, anywhere. The human element is his favorite vulnerability.',
    skills: ['OSINT', 'Social Engineering', 'Maltego', 'Recon-ng', 'Psychology'],
    social: {
      linkedin: '#',
    },
  },
];

function TerminalLine({
  prompt = '>',
  children,
  color = 'text-primary',
}: {
  prompt?: string;
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <div className="flex">
      <span className="text-destructive mr-2">{prompt}</span>
      <span className={`font-mono ${color}`}>{children}</span>
    </div>
  );
}

// Button group for top right
function TerminalButtons() {
  return (
    <div className="flex space-x-2 absolute right-6 top-6">
      <span className="h-3 w-3 rounded-full bg-destructive inline-block"></span>
      <span className="h-3 w-3 rounded-full bg-primary inline-block"></span>
      <span className="h-3 w-3 rounded-full bg-accent inline-block"></span>
    </div>
  );
}

export default function MembersPage() {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-start py-12 px-2"
      style={{
        fontFamily: 'Fira Mono, Menlo, monospace',
      }}
    >
      {/* Terminal Header Section */}
      <div className="w-full max-w-5xl rounded-lg shadow-lg border border-primary bg-card p-6 mb-8 relative">
        <TerminalButtons />
        <div className="flex items-center mb-4">
          <span className="ml-4 text-primary font-bold tracking-widest">_ ISFCR_TERMINAL</span>
        </div>
        <TerminalLine color="text-primary">
          Executing: <span className="text-accent">show_team_details --team="ISFCR"</span>
        </TerminalLine>
        <TerminalLine color="text-muted-foreground">... Loading team manifest ...</TerminalLine>
        <TerminalLine color="text-primary">... Success. Found {members.length} operators.</TerminalLine>
      </div>
      {/* Members Section */}
      <div className="w-full max-w-5xl rounded-lg shadow-lg border border-primary bg-card p-6 relative">
        <TerminalButtons />
        {members.map((member, idx) => (
          <div key={member.name} className="mb-8">
            <TerminalLine prompt=">" color="text-primary">
              <span>
                load_operator(<span className="text-accent">'{member.codename}'</span>)
              </span>
            </TerminalLine>
            <div className="ml-8 mt-2 mb-2">
              <div className="text-primary font-mono">
                <span className="font-bold">{member.name}</span>{' '}
                <span className="text-muted-foreground">({member.role})</span>
              </div>
              <div className="text-muted-foreground font-mono text-sm mb-1">{member.bio}</div>
              <div className="text-primary font-mono text-xs mb-1">
                <span className="text-muted-foreground">Skills:</span> {member.skills.join(', ')}
              </div>
              <div className="text-primary font-mono text-xs">
                {member.social.github && member.social.github !== '#' && (
                  <a
                    href={member.social.github}
                    className="underline text-accent mr-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {member.social.linkedin && member.social.linkedin !== '#' && (
                  <a
                    href={member.social.linkedin}
                    className="underline text-accent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
            {idx < members.length - 1 && <div className="border-b border-muted my-4" />}
          </div>
        ))}
      </div>
    </div>
  );
}