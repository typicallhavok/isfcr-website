import { Card } from '@/components/ui/card';
import { Target, Flag, Rocket, Brain, Search, Shield, Globe, HardDrive, Network, Bitcoin, Key } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
};

const expertise = [
  {
    icon: Brain,
    title: 'AI Security',
    description: 'Exploring AI vulnerabilities, adversarial attacks, and securing machine learning systems.'
  },
  {
    icon: Search,
    title: 'Research',
    description: 'Conducting cutting-edge research in cybersecurity and publishing findings to the community.'
  },
  {
    icon: Shield,
    title: 'Attack & Defense',
    description: 'Mastering both offensive and defensive cybersecurity techniques and strategies.'
  },
  {
    icon: Globe,
    title: 'Web Exploitation',
    description: 'Identifying and exploiting web application vulnerabilities and security flaws.'
  },
  {
    icon: HardDrive,
    title: 'Digital Forensics',
    description: 'Investigating digital evidence and recovering data from compromised systems.'
  },
  {
    icon: Network,
    title: 'Network Security',
    description: 'Securing network infrastructure and analyzing network-based attacks and threats.'
  },
  {
    icon: Bitcoin,
    title: 'Blockchain',
    description: 'Exploring blockchain security, smart contract vulnerabilities, and DeFi protocols.'
  },
  {
    icon: Key,
    title: 'Cryptography',
    description: 'Implementing and breaking cryptographic algorithms and protocols.'
  }
];

export default function AboutPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000">
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
              About ISFCR
            </h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              Information Security,
              Forensics and
              Cyber Resilience
            </p>
            <p className="mt-4 text-lg text-foreground md:text-xl">
              ISFCR is a cybersecurity-focused student-driven research club and capture-the-flag (CTF) team
              from PES University, India.
              Formed under the guidance of faculty from the Department of Computer Science
              and Engineering, ISFCR serves as a platform for students to explore and research
              various domains of cybersecurity, including cryptography, web exploitation, reverse
              engineering, and digital forensics. The team actively participates in CTFs, conducts
              workshops, and contributes to building a strong cybersecurity culture within the
              university and beyond.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Our Mission</h2>
              <p className="text-muted-foreground">
                We are driven by a three-fold mission: to innovate, to educate, and to secure.
              </p>
              <ul className="grid gap-6">
                <li className="flex gap-4">
                  <div className="bg-primary/20 text-primary p-3 rounded-full h-fit">
                    <Rocket className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-headline">Innovate</h3>
                    <p className="text-muted-foreground">To push the boundaries of cybersecurity by developing novel techniques and tools for both offensive and defensive operations.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-primary/20 text-primary p-3 rounded-full h-fit">
                    <Flag className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-headline">Educate</h3>
                    <p className="text-muted-foreground">To share our knowledge and passion with the community, nurturing the next generation of cybersecurity talent.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-primary/20 text-primary p-3 rounded-full h-fit">
                    <Target className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-headline">Secure</h3>
                    <p className="text-muted-foreground">To make the digital world a safer place by identifying vulnerabilities and helping organizations strengthen their security posture.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/banner.svg"
                alt="About ISFCR"
                width={600}
                height={400}
                className="rounded-lg"
                data-ai-hint="team photo"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">What We Do</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our expertise spans across multiple domains of cybersecurity
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {expertise.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card 
                    key={index} 
                    className="p-6 text-center space-y-4 group cursor-pointer
                              hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 
                              transition-all duration-300 ease-out
                              animate-in fade-in slide-in-from-bottom-8"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="bg-primary/20 text-primary p-3 rounded-full h-fit mx-auto w-fit
                                  group-hover:bg-primary group-hover:text-primary-foreground
                                  group-hover:scale-110 transition-all duration-300 ease-out
                                  group-hover:rotate-12">
                      <IconComponent className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-lg font-bold font-headline group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                      {item.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
