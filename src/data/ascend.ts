export const starterGoals = [
  'Build my first app',
  'Learn piano',
  'Improve confidence',
  'Lose weight',
  'Start a side hustle',
] as const;

export const roadmapMilestones = [
  {
    day: '01',
    title: 'Identity lock-in',
    description: 'Define the version of yourself this journey is building.',
    xp: 80,
  },
  {
    day: '07',
    title: 'First proof',
    description: 'Ship a small visible proof of progress and log the lesson.',
    xp: 160,
  },
  {
    day: '15',
    title: 'Skill stretch',
    description: 'Increase difficulty with a focused challenge block.',
    xp: 240,
  },
  {
    day: '30',
    title: 'Boss milestone',
    description: 'Complete a public, measurable milestone for the goal.',
    xp: 500,
  },
] as const;

export const dailyMissions = [
  {
    title: 'Main quest',
    description: 'Spend 25 minutes on the smallest meaningful next action.',
    reward: '+120 XP',
    status: 'Ready',
  },
  {
    title: 'Proof upload',
    description: 'Capture a note, image, or link that proves today happened.',
    reward: '+40 XP',
    status: 'Optional',
  },
  {
    title: 'Reflection',
    description: 'Write one sentence about what became easier today.',
    reward: '+2 streak',
    status: 'Bonus',
  },
] as const;

export const achievements = [
  { title: 'First Step', description: 'Created a personal dream journey.', tone: 'accent' },
  { title: 'Seven Day Flame', description: 'Kept a full week streak alive.', tone: 'reward' },
  { title: 'Boss Clear', description: 'Completed a milestone challenge.', tone: 'primary' },
] as const;

export const leaderboard = [
  { rank: 1, name: 'Maya', xp: '8,420 XP', league: 'Diamond' },
  { rank: 2, name: 'Jon', xp: '7,980 XP', league: 'Diamond' },
  { rank: 3, name: 'You', xp: '7,640 XP', league: 'Diamond' },
  { rank: 4, name: 'Nour', xp: '7,120 XP', league: 'Gold' },
] as const;

export const profileStats = [
  { label: 'Level', value: '12' },
  { label: 'Streak', value: '18d' },
  { label: 'Total XP', value: '7.6k' },
  { label: 'Goals', value: '3' },
] as const;
