import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export type Member = {
  name: string;
  fallback: string;
  role: string;
  bio: string;
  skills: string[];
  social: {
    github?: string;
    linkedin?: string;
  };
};

export function MemberCard({ member }: { member: Member }) {
  return (
    <Card className="flex flex-col transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20">
      <CardHeader className="items-center text-center">
        <CardTitle className="font-headline pt-4">{member.name}</CardTitle>
        <p className="text-sm text-primary font-medium">{member.role}</p>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground text-center mb-4">{member.bio}</p>
        <div className="flex flex-wrap justify-center gap-2">
          {member.skills.map((skill) => (
            <Badge key={skill} variant="secondary">{skill}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="justify-center gap-2">
        {member.social.github && (
          <Button asChild variant="ghost" size="icon">
            <Link href={member.social.github} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s Github`}>
              <Github className="h-5 w-5" />
            </Link>
          </Button>
        )}
        {member.social.linkedin && (
          <Button asChild variant="ghost" size="icon">
            <Link href={member.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s LinkedIn`}>
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
