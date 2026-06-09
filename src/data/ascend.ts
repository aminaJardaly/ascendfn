export const starterGoals = [
  {
    title: 'Build my first app',
    description: 'Create, polish, and launch a real app idea.',
    path: 'Creator',
  },
  {
    title: 'Learn piano',
    description: 'Build daily practice rhythm and play a complete song.',
    path: 'Performer',
  },
  {
    title: 'Improve confidence',
    description: 'Practice small public actions and identity proof.',
    path: 'Presence',
  },
  {
    title: 'Lose weight',
    description: 'Stack simple workouts, nutrition wins, and tracking.',
    path: 'Vitality',
  },
  {
    title: 'Start a side hustle',
    description: 'Validate, offer, sell, and improve a small service.',
    path: 'Builder',
  },
] as const;

export const onboardingQuestions = [
  {
    label: 'Primary dream',
    prompt: 'What goal has been waiting in the background?',
    options: ['Build an app', 'Get fit', 'Start earning', 'Learn a skill'],
  },
  {
    label: 'Timeline',
    prompt: 'Choose the first progression cycle.',
    options: ['30 days', '60 days', 'Custom later'],
  },
  {
    label: 'Intensity',
    prompt: 'Pick a daily difficulty that feels sustainable.',
    options: ['Light', 'Balanced', 'Ambitious'],
  },
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

export const roadmapPhases = [
  {
    title: 'Foundation',
    range: 'Days 1-7',
    focus: 'Identity, routine, first tiny proof.',
    progress: 100,
  },
  {
    title: 'Momentum',
    range: 'Days 8-15',
    focus: 'Daily reps, feedback loop, confidence stack.',
    progress: 68,
  },
  {
    title: 'Expansion',
    range: 'Days 16-24',
    focus: 'Harder missions, visible output, social accountability.',
    progress: 0,
  },
  {
    title: 'Boss level',
    range: 'Days 25-30',
    focus: 'Final challenge, proof submission, reward unlock.',
    progress: 0,
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

export const sideChallenges = [
  { title: 'Share proof with one friend', reward: '+75 XP', difficulty: 'Social' },
  { title: 'Spend 10 minutes reviewing yesterday', reward: '+35 XP', difficulty: 'Focus' },
  { title: 'Create a monetization idea list', reward: '+90 XP', difficulty: 'Market' },
] as const;

export const achievements = [
  { title: 'First Step', description: 'Created a personal dream journey.', tone: 'accent', state: 'Unlocked' },
  { title: 'Seven Day Flame', description: 'Kept a full week streak alive.', tone: 'reward', state: 'Unlocked' },
  { title: 'Proof Maker', description: 'Uploaded five visible proof entries.', tone: 'success', state: '82%' },
  { title: 'Boss Clear', description: 'Completed a milestone challenge.', tone: 'primary', state: 'Locked' },
] as const;

export const rewardUnlocks = [
  { title: 'Cyan profile aura', requirement: 'Reach level 10', unlocked: true },
  { title: 'Diamond league frame', requirement: 'Finish top 3 this week', unlocked: true },
  { title: 'Mentor voice pack', requirement: 'Complete day 30 boss level', unlocked: false },
] as const;

export const leaderboard = [
  { rank: 1, name: 'Maya', xp: '8,420 XP', league: 'Diamond' },
  { rank: 2, name: 'Jon', xp: '7,980 XP', league: 'Diamond' },
  { rank: 3, name: 'You', xp: '7,640 XP', league: 'Diamond' },
  { rank: 4, name: 'Nour', xp: '7,120 XP', league: 'Gold' },
] as const;

export const leagueChallenges = [
  { title: 'Consistency Sprint', description: 'Complete 5 missions before Friday.', reward: '+300 XP' },
  { title: 'Proof Duel', description: 'Submit the clearest proof in your league.', reward: 'Gold badge' },
] as const;

export const profileStats = [
  { label: 'Level', value: '12' },
  { label: 'Streak', value: '18d' },
  { label: 'Total XP', value: '7.6k' },
  { label: 'Goals', value: '3' },
] as const;

export const proofEntries = [
  { day: '12', title: 'Wireframed the first app flow', type: 'Design proof' },
  { day: '11', title: 'Chose the MVP feature set', type: 'Planning proof' },
  { day: '10', title: 'Finished a focused build block', type: 'Time proof' },
] as const;

export const authHighlights = [
  'AI-generated 30 or 60 day roadmaps',
  'XP, streaks, levels, and boss milestones',
  'Proof vault and weekly league rankings',
] as const;
