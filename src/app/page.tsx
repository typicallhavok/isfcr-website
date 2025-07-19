import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Target, Trophy, ArrowRight, Flag, Rocket, Brain, Search, Shield, Globe, HardDrive, Network, Bitcoin, Key, Instagram, Linkedin, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const teamMembers = [
  { name: 'Amogh E M', role: 'Team Lead & Pentester', avatar:'AEM' },
  { name: 'Praneet T H', role: 'Web Exploitation Expert', avatar: <Image src="/prant.png" width={94} height={94} alt="PTH"/> },
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
            <p className="mt-4 text-lg text-white md:text-xl">
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

      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg px-3 py-1 text-sm text-primary">Our Expertise</div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">FOCUS</h2>
              <p className="max-w-[900px] dark:text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
              <p className="text-sm dark:text-muted-foreground">Dominating leaderboards in Jeopardy, Attack-Defense, and King of the Hill style competitions.</p>
            </div>
            <div className="grid gap-2 text-center items-center justify-center">
              <div className="flex items-center justify-center">
                <div className="bg-accent/20 p-4 rounded-full">
                  <Target className="h-10 w-10 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-bold font-headline">Vulnerability Research</h3>
              <p className="text-sm dark:text-muted-foreground">Discovering and responsibly disclosing zero-day vulnerabilities in real-world systems.</p>
            </div>
            <div className="grid gap-2 text-center items-center justify-center">
              <div className="flex items-center justify-center">
                <div className="bg-accent/20 p-4 rounded-full">
                  <Shield className="h-10 w-10 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-bold font-headline">Security Audits</h3>
              <p className="text-sm dark:text-muted-foreground">Providing professional security assessments and penetration testing services.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Meet The Core Team</h2>
              <p className="max-w-[900px] dark:text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The masterminds behind our success. Get to know the faces of ISFCR.
              </p>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 gap-8 pt-12 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <Card key={member.name} className="border-none bg-background text-center transition-transform duration-300 hover:scale-105 hover:shadow-primary/20 shadow-lg">
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
      <section className="py-16 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Connect with Us
              </h2>
              <p className="text-lg dark:text-muted-foreground mb-12">
                Follow our journey and stay updated with our latest achievements
              </p>

              <div className="grid gap-8 md:grid-cols-3">
                {/* Instagram */}
                <Link
                  href="https://instagram.com/isfcr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="p-8 px-7 text-center space-y-4 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 ease-out">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full h-fit mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                      <Instagram className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold font-headline group-hover:text-primary transition-colors duration-300">
                      Instagram
                    </h3>
                    <p className="dark:text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                      Follow us for behind-the-scenes content and team updates
                    </p>
                    <div className="flex items-center justify-center gap-2 text-primary">
                      <span className="text-sm">@isfcr</span>
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  </Card>
                </Link>

                {/* LinkedIn */}
                <Link
                  href="https://linkedin.com/company/isfcr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="p-8 text-center space-y-4 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 ease-out">
                    <div className="bg-blue-600 text-white p-4 rounded-full h-fit mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                      <Linkedin className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold font-headline group-hover:text-primary transition-colors duration-300">
                      LinkedIn
                    </h3>
                    <p className="dark:text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                      Connect with us professionally and see our achievements
                    </p>
                    <div className="flex items-center justify-center gap-2 text-primary">
                      <span className="text-sm">ISFCR Team</span>
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  </Card>
                </Link>

                {/* CTFTime */}
                <Link
                  href="https://ctftime.org/team/isfcr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="p-8 text-center space-y-4 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 ease-out">
                    <div className=" text-white p-4 rounded-full h-fit mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src="/ctftime.svg"
                        alt="CTFTime"
                        width={64}
                        height={64}
                        className="h-8 w-32"
                      />
                    </div>
                    <h3 className="text-xl font-bold font-headline group-hover:text-primary transition-colors duration-300">
                      CTFTime
                    </h3>
                    <p className="dark:text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                      Check out our CTF rankings and competition history
                    </p>
                    <div className="flex items-center justify-center gap-2 text-primary">
                      <span className="text-sm">ISFCR Team</span>
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  </Card>
                </Link>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="dark:text-muted-foreground text-sm">
                  Ready to join our cybersecurity community? Reach out to us through any of these platforms!
                </p>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
