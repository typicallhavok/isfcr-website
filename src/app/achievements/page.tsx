'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Bug, Lightbulb, Shield, Award } from 'lucide-react';
import { pastEvents, bugBounties, miscAchievements } from '@/app/data/achievements';

export default function AchievementsPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-8 md:px-6 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
            Our Triumphs
          </h1>
          <p className="mt-4 text-lg dark:text-muted-foreground md:text-xl">
            A testament to our skills, dedication, and countless hours of hacking, both in and out of competitions.
          </p>
        </div>
      </div>

      {/* CTF Events Section */}
      <section className="w-full bg-background/20">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="mb-0">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div>
                  <CardTitle className="font-headline flex items-center gap-2">
                    <Award className="h-6 w-6 text-primary"/> CTF Events & Rankings
                  </CardTitle>
                  <CardDescription>Our track record in competitive Capture The Flag events.</CardDescription>
                </div>
                <div className="text-center sm:text-right">
                  {/* <p className="text-sm text-muted-foreground">Current Country Rank</p>
                  <p className="font-headline text-3xl font-bold text-primary">#1</p> */}
                </div>
              </div>
            </CardHeader>
            <CardContent className="overflow-y-auto max-h-80">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Event Name</TableHead>
                    <TableHead>Year</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead className="text-right">Rank</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pastEvents.sort((a, b) => b.year - a.year || a.rank - b.rank).map((event) => (
                    <TableRow key={event.name + event.year}>
                      <TableCell className="font-medium">{event.name}</TableCell>
                      <TableCell>{event.year}</TableCell>
                      <TableCell>{event.location}</TableCell>
                      <TableCell className="text-right font-bold text-primary">{event.rank}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Bug Bounty & Miscellaneous Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bug Bounty */}
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2">
                  <Bug className="h-6 w-6 text-primary"/> Bug Bounty Highlights
                </CardTitle>
                <CardDescription>Responsible disclosures and real-world impact.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4 overflow-y-auto max-h-64">
                  {bugBounties.map((bounty, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="flex-shrink-0 bg-primary/20 text-primary p-3 rounded-full h-fit">
                        <Shield className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-bold">
                          {bounty.vulnerability} on {bounty.company}
                        </p>
                        <p className="text-sm dark:text-muted-foreground">
                          By: {bounty.Name}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Miscellaneous Achievements */}
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2">
                  <Lightbulb className="h-6 w-6 text-primary"/> Miscellaneous Achievements
                </CardTitle>
                <CardDescription>Contributing back to the security community.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4 overflow-y-auto max-h-64">
                  {miscAchievements.map((ach, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="flex-shrink-0 bg-primary/20 text-primary p-3 rounded-full h-fit">
                        <Lightbulb className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-bold">{ach.title}</p>
                        <p className="text-sm text-muted-foreground">{ach.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
