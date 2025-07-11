import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { ArrowRight, Shield, Target, Trophy } from 'lucide-react';

const teamMembers = [
  { name: 'Amogh E M', role: 'Team Lead & Pentester', avatar: 'AEM', },
  { name: 'Praneet T H', role: 'Web Exploitation Expert', avatar: 'PTH' },
  { name: 'Koushik P', role: 'Cryptographer', avatar: 'KNP' },
  { name: 'Vamshi K', role: 'Pentester', avatar: 'VK' },
];

export default function Home() {
  return (
    <>
      <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-background/80 backdrop-blur-md z-10"></div>
        <div className="absolute inset-0 z-0">
          <iframe
            className="w-[120%] h-[120%] absolute top-[-10%] left-[-10%] z-[-1] scale-110"
            src="https://www.youtube.com/embed/sQ22pm-xvrE?autoplay=1&mute=1&loop=1&playlist=sQ22pm-xvrE&controls=0&showinfo=0&rel=0&modestbranding=1&enablejsapi=1&vq=hd1080"
            title="Background video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="container px-4 md:px-6 z-10 animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary">
              ISFCR
            </h1>
            <p className="mt-4 text-lg text-foreground md:text-xl">
              Masters of the Digital Realm. We are a passionate team of cybersecurity enthusiasts dedicated to solving the most complex challenges in the digital world.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="font-bold">
                <Link href="/achievements">Our Victories</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-primary">Our Expertise</div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">FOCUS</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We thrive on complex problems across all major Capture The Flag categories.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-12">
            <div className="grid gap-2 text-center items-center justify-center">
              <div className="flex items-center justify-center">
                <div className="bg-accent/20 p-4 rounded-full">
                  <Trophy className="h-10 w-10 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-bold font-headline">CTF Competitions</h3>
              <p className="text-sm text-muted-foreground">Dominating leaderboards in Jeopardy, Attack-Defense, and King of the Hill style competitions.</p>
            </div>
            <div className="grid gap-2 text-center items-center justify-center">
              <div className="flex items-center justify-center">
                <div className="bg-accent/20 p-4 rounded-full">
                  <Target className="h-10 w-10 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-bold font-headline">Vulnerability Research</h3>
              <p className="text-sm text-muted-foreground">Discovering and responsibly disclosing zero-day vulnerabilities in real-world systems.</p>
            </div>
            <div className="grid gap-2 text-center items-center justify-center">
              <div className="flex items-center justify-center">
                <div className="bg-accent/20 p-4 rounded-full">
                  <Shield className="h-10 w-10 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-bold font-headline">Security Audits</h3>
              <p className="text-sm text-muted-foreground">Providing professional security assessments and penetration testing services.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Meet The Core Team</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The masterminds behind our success. Get to know the faces of ISFCR.
              </p>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 gap-8 pt-12 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <Card key={member.name} className="border-none bg-background/50 text-center transition-transform duration-300 hover:scale-105 hover:shadow-primary/20 shadow-lg">
                <CardContent className="flex flex-col items-center gap-4 pt-6">
                  <Avatar className="h-24 w-24 border-2 border-primary">
                    {/* <AvatarImage src={`https://placehold.co/100x100.png`} data-ai-hint="hacker portrait" /> */}
                    <AvatarFallback>{member.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <h3 className="text-lg font-bold font-headline">{member.name}</h3>
                    <p className="text-sm text-primary">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/members">View All Members <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
