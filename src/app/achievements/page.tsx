'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';

const chartData = [
  { category: 'Web', solved: 150, total: 200 },
  { category: 'Pwn', solved: 120, total: 150 },
  { category: 'Reverse', solved: 90, total: 120 },
  { category: 'Crypto', solved: 110, total: 130 },
  { category: 'Misc', solved: 180, total: 220 },
];

const chartConfig = {
  solved: {
    label: 'Solved',
    color: 'hsl(var(--primary))',
  },
  total: {
    label: 'Total',
    color: 'hsl(var(--accent))',
  },
};

const pastEvents = [
  { name: 'DEF CON CTF', year: 2023, rank: 5, location: 'Las Vegas, USA' },
  { name: 'Google CTF', year: 2023, rank: 3, location: 'Online' },
  { name: 'PlaidCTF', year: 2023, rank: 8, location: 'Online' },
  { name: 'Hack.lu CTF', year: 2022, rank: 2, location: 'Luxembourg' },
  { name: 'Insomni\'hack CTF', year: 2022, rank: 1, location: 'Geneva, Switzerland' },
  { name: '0CTF/TCTF', year: 2021, rank: 10, location: 'Online' },
];

export default function AchievementsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-24 animate-in fade-in slide-in-from-bottom-12 duration-1000">
      <div className="mx-auto max-w-3xl text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
          Our Achievements
        </h1>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl">
          A testament to our skills, dedication, and countless hours of hacking.
        </p>
      </div>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="font-headline">Challenge Completion Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-border" />
                <XAxis dataKey="category" stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} />
                <Tooltip
                  cursor={{ fill: 'hsl(var(--secondary))' }}
                  content={<ChartTooltipContent />}
                />
                <Bar dataKey="solved" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="total" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Past Events & Rankings</CardTitle>
        </CardHeader>
        <CardContent>
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
              {pastEvents.map((event) => (
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
  );
}
