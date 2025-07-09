import { Card } from '@/components/ui/card';
import { Target, Flag, Rocket } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
};

const timelineEvents = [
  { year: '2020', title: 'The Genesis', description: 'A small group of friends with a shared passion for puzzles and code forms ISFCR.' },
  { year: '2021', title: 'First Blood', description: 'Won our first major online CTF, placing in the top 10 internationally.' },
  { year: '2022', title: 'Going Pro', description: 'Started participating in DEF CON and other major league CTFs, gaining recognition.' },
  { year: '2023', title: 'Expanding Horizons', description: 'Grew the team and began offering security consultation services.' },
  { year: 'Present', title: 'Digital Guardians', description: 'Continuously pushing boundaries in cybersecurity research and competition.' },
];

export default function AboutPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000">
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
              Our Story
            </h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              From a humble beginning to a force in the cybersecurity world. This is the journey of ISFCR.
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
                src="https://placehold.co/550x550.png"
                width={550}
                height={550}
                alt="Team working"
                data-ai-hint="team collaboration"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">Our History: A Timeline</h2>
          <div className="relative mt-12 w-full max-w-3xl mx-auto">
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative mb-8 flex w-full items-center even:flex-row-reverse">
                <div className="w-5/12">
                  <Card className="p-4 bg-card transition-shadow hover:shadow-md hover:shadow-primary/20">
                    <p className="font-headline text-lg font-bold text-primary">{event.year}</p>
                    <h3 className="font-bold">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </Card>
                </div>
                <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                  <Flag className="h-4 w-4" />
                </div>
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
