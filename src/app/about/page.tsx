import { Card } from '@/components/ui/card';
import { Target, Flag, Rocket, Instagram, Linkedin, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { expertise } from '@/app/data/experts';

export const metadata: Metadata = {
  title: 'About Us',
};

export default function AboutPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000">
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
              About ISFCR
            </h1>
            <p className="mt-4 text-lg dark:text-muted-foreground md:text-xl">
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

      <section className="py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Our Mission</h2>
              <p className="dark:text-muted-foreground">
                We are driven by a three-fold mission: to innovate, to educate, and to secure.
              </p>
              <ul className="grid gap-6">
                <li className="flex gap-4">
                  <div className="bg-primary/20 text-primary p-3 rounded-full h-fit">
                    <Rocket className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-headline">Innovate</h3>
                    <p className="dark:text-muted-foreground">To push the boundaries of cybersecurity by developing novel techniques and tools for both offensive and defensive operations.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-primary/20 text-primary p-3 rounded-full h-fit">
                    <Flag className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-headline">Educate</h3>
                    <p className="dark:text-muted-foreground">To share our knowledge and passion with the community, nurturing the next generation of cybersecurity talent.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-primary/20 text-primary p-3 rounded-full h-fit">
                    <Target className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-headline">Secure</h3>
                    <p className="dark:text-muted-foreground">To make the digital world a safer place by identifying vulnerabilities and helping organizations strengthen their security posture.</p>
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
                className="rounded-lg bg-white p-5 shadow-lg "
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
              <p className="mt-4 text-lg dark:text-muted-foreground">
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
                    <p className="dark:dark:text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                      {item.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Connect with Us Section */}
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
                  <p className="dark:dark:text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
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
                  <p className="dark:dark:text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
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
                  <p className="dark:dark:text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
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
    </div>
  );
}
