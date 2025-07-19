"use client";
import type { Metadata } from 'next';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import members from '@/app/data/members';

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
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Keep 'all' for filtering but don't display an 'all' terminal
  const categories = ['all', 'staff', 'core', 'ctf'];
  const displayCategories = ['staff', 'core', 'ctf'];

  // Assign members to their highest priority category (staff > core > ctf)
  const assignedMembers = members.reduce((acc, member) => {
    // Check if member matches search term
    const matchesSearch = searchTerm === '' ||
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.codename.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role?.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return acc;

    // Find highest priority category for this member based on hierarchy
    let assignedCategory = null;
    if (member.categories.includes('staff')) {
      assignedCategory = 'staff';
    } else if (member.categories.includes('core')) {
      assignedCategory = 'core';
    } else if (member.categories.includes('ctf')) {
      assignedCategory = 'ctf';
    }

    // Skip if member doesn't match current filter
    if (selectedCategory !== 'all' && !member.categories.includes(selectedCategory)) {
      return acc;
    }

    // Add member to their assigned category
    if (assignedCategory) {
      if (!acc[assignedCategory]) {
        acc[assignedCategory] = [];
      }
      acc[assignedCategory].push(member);
    }

    return acc;
  }, {} as Record<string, typeof members>);

  // Total filtered members count for display
  const totalFilteredCount = Object.values(assignedMembers).flat().length;

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-start py-12 px-2"
      style={{
        fontFamily: 'Fira Mono, Menlo, monospace',
      }}
    >
      <div className="w-full max-w-7xl flex gap-6">
        {/* Filter Terminal */}
        <AnimatePresence>
          {/** always present, so only animate once on mount */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-96 rounded-lg shadow-lg border border-primary bg-card p-6 relative h-fit"
          >
            <TerminalButtons />
            <div className="flex items-center mb-4">
              <span className="ml-4 text-primary font-bold tracking-widest">_ FILTER_TERMINAL</span>
            </div>

            <TerminalLine color="text-primary">
              Executing: <span className="text-accent">init_filter_system()</span>
            </TerminalLine>
            <TerminalLine color="dark:text-muted-foreground">... Loading filter options ...</TerminalLine>

            {/* Search Bar */}
            <div className="mt-4 mb-4">
              <TerminalLine prompt="$" color="text-primary">
                search_operator:
              </TerminalLine>
              <div className="ml-8 mt-2">
                <input
                  type="text"
                  placeholder="Enter name, codename, or role..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-background border border-muted rounded px-3 py-2 text-sm font-mono text-primary focus:outline-none focus:border-accent"
                />
              </div>
            </div>

            {/* Category List */}
            <div className="mt-4">
              <TerminalLine prompt="$" color="text-primary">
                filter_by_category:
              </TerminalLine>
              <div className="ml-8 mt-2 space-y-1">
                {categories.map(category => (
                  <div
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-2 rounded text-sm font-mono border cursor-pointer transition-colors bg-background text-primary border-muted hover:border-accent hover:bg-muted/20`}
                  >
                    <span className="text-destructive mr-2">&gt;</span>
                    <span className={selectedCategory === category ? 'underline' : ''}>
                      {category.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="mt-4">
              <TerminalLine color="dark:text-muted-foreground">
                Status: Showing {totalFilteredCount} of {members.length} operators
              </TerminalLine>
              <TerminalLine color="text-primary">
                Filter: <span className="text-accent">{selectedCategory}</span>
              </TerminalLine>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Right Side Content */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Main header terminal */}
          <AnimatePresence>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full rounded-lg shadow-lg border border-primary bg-card p-6 relative"
            >
              <TerminalButtons />
              <div className="flex items-center mb-4">
                <span className="ml-4 text-primary font-bold tracking-widest">_ ISFCR_TERMINAL</span>
              </div>
              <TerminalLine color="text-primary">
                Executing: <span className="text-accent">show_team_details --team="ISFCR"</span>
              </TerminalLine>
              <TerminalLine color="dark:text-muted-foreground">... Loading team manifest ...</TerminalLine>
              <TerminalLine color="text-primary">... Success. Found {totalFilteredCount} operators.</TerminalLine>
            </motion.div>
          </AnimatePresence>

          {/* One terminal per category */}
          <AnimatePresence>
            {displayCategories.map((category) => {
              const categoryMembers = assignedMembers[category] || [];

              // Skip rendering if no members in this category
              if (categoryMembers.length === 0) {
                return null;
              }

              return (
                <motion.div
                  key={category}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full rounded-lg shadow-lg border border-primary bg-card p-6 relative"
                >
                  <TerminalButtons />
                  <div className="flex items-center mb-4">
                    <span className="ml-4 text-primary font-bold tracking-widest">
                      _ {category.toUpperCase()}_OPERATORS
                    </span>
                  </div>

                  <TerminalLine color="text-primary">
                    Executing: <span className="text-accent">list_operators --category="{category}"</span>
                  </TerminalLine>
                  <TerminalLine color="dark:text-muted-foreground">... Retrieving operator data ...</TerminalLine>
                  <TerminalLine color="text-primary">
                    ... Found {categoryMembers.length} operators in {category.toUpperCase()}
                  </TerminalLine>

                  {categoryMembers.map((member, idx) => (
                    <div key={member.name} className="mb-8 mt-4">
                      <TerminalLine prompt=">" color="text-primary">
                        <span>
                          load_operator(<span className="text-accent">'{member.codename}'</span>)
                        </span>
                      </TerminalLine>
                      <div className="ml-8 mt-2 mb-2">
                        <div className="text-primary font-mono">
                          <span className="font-bold text-xl">{member.name}</span>{' '}
                          {member.role&&<span className="dark:text-muted-foreground">({member.role})</span>}
                        </div>
                        <div className="dark:text-muted-foreground font-mono text-sm mb-1">{member.bio}</div>
                        {member.skills && (<div className="text-primary font-mono text-xs mb-1">
                          <span className="dark:text-muted-foreground">Skills:</span> {member.skills?.join(', ')}
                        </div>)}
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
                      {idx < categoryMembers.length - 1 && <div className="border-b border-muted my-4" />}
                    </div>
                  ))}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}