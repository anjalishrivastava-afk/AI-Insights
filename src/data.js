// Mock data ported verbatim from the AI Insights Dashboard design prototype.

export const agentData = {
  hasFocus: false,
  priorityText:
    'Your introduction is super important because it sets the tone for the whole call. Make sure you introduce yourself clearly and professionally on every call. Try saying, "Hi, my name is [Your Name], and I’m happy to help you today."',
  avgScore: 77.9,
  avgScoreStr: '77.9%',
  scoreDelta: 1.3,
  pctLabel: 'Top 28%',
  pctRank: '#350 of 1,261 agents',
  pctGood: true,
  calls: '454',
  callsKpis: 'Professional Tone Check, Agent Speech Clarity & Pace, RM Active Listening & Acknowledgment',
  moodHappy: 32,
  moodUnhappy: 13,
  prof: '94%',
  profNote: 'Good — room to improve',
  goodJob: {
    title: 'Job Inquiry Handling',
    pct: '100%',
    team: 'Team avg: 98.86%',
    text: 'You are doing a fantastic job helping people with their job inquiries. You handle 10 out of 10 of these calls perfectly, which is even better than the team average of about 9 out of 10 calls. Keep up the great work.',
  },
  improve: [
    {
      name: 'Reference Account Opening Inquiry',
      pct: 15.2,
      teamAvg: 16.9,
      detail: true,
      means: 'This is how well you help customers who want to open a new account.',
      missed: 'Missed on 385 of 454 calls',
      missedText:
        'Sometimes you miss chances to help customers open new accounts — either you don’t offer to help, or you don’t guide them through the process clearly. Make it easy for them to open an account with us.',
      quote: 'The agent gives an automated message and does not ask for references.',
      sayThis: 'I can help you with that. What kind of account are you looking to open today?',
    },
    {
      name: 'Cross-sell Pitch Discussion',
      pct: 24.4,
      teamAvg: 27.7,
      detail: true,
      means:
        'This is how often you mention a relevant additional product or service when the customer’s need makes it a natural fit.',
      missed: 'Missed on 343 of 454 calls',
      missedText:
        'Customers often mention needs that match another product, but the conversation moves on without a suggestion. A single relevant recommendation is enough.',
      quote: 'The customer asked about investment options but no related product was suggested.',
      sayThis:
        'Since you’re interested in this, many customers also find our [related product] useful — would you like me to share a quick overview?',
    },
    {
      name: 'Agent Introduction Proper',
      pct: 27.5,
      teamAvg: 38.8,
      detail: true,
      means:
        'This is how consistently you open the call with a clear, professional introduction — your name and the company.',
      missed: 'Missed on 329 of 454 calls',
      missedText:
        'Many calls begin without a proper greeting or name, which makes customers less comfortable and less sure who they are speaking with.',
      quote: 'The agent starts the call without stating their name or the company.',
      sayThis: 'Hello, thank you for calling [Company Name], my name is [Your Name]. How can I help you today?',
    },
    {
      name: 'Agent Personalization (Customer Name Mentioned)',
      pct: 29.7,
      teamAvg: 28.8,
      detail: true,
      means: 'This is how often you address the customer by their name during the conversation.',
      missed: 'Missed on 319 of 454 calls',
      missedText:
        'Using the customer’s name once or twice makes the call feel personal and attentive. Most calls currently go by without it.',
      quote: 'The agent never addresses the client by name during the call.',
      sayThis: 'Absolutely, [Customer Name] — let me check that for you right away.',
    },
    {
      name: 'Expressive Empathy/Sympathy/Apology',
      pct: 30.2,
      teamAvg: 32.4,
      detail: true,
      means:
        'This is how often you acknowledge the customer’s frustration or inconvenience with an empathetic statement or apology.',
      missed: 'Missed on 317 of 454 calls',
      missedText:
        'When customers describe a problem, moving straight to the fix can feel cold. A short acknowledgement first makes the resolution land better.',
      quote: 'The client described a failed transaction; the agent proceeded without acknowledging the inconvenience.',
      sayThis: 'I’m really sorry for the trouble this has caused you — let me sort this out for you right now.',
    },
  ],
};

export const teamData = {
  hasFocus: true,
  focusKpi: 'Reference Account Opening Inquiry',
  focusDelta: '',
  focusFromTo: '',
  focusText:
    'Previous day’s top weak KPI was "Reference Account Opening Inquiry" — check if targeted coaching has moved the needle.',
  priorityTitle: 'Today’s Team Priority',
  priorityText:
    'Your team’s overall score has dropped. Both agents are struggling with Reference Account Opening Inquiry, Client Needs Insight Gathered, Cross-sell Pitch Discussion, Call Closure Technique Adoption and Client Understanding Depth. Focus on Client Needs Insight Gathered first — review calls where it was done well and discuss how to apply those techniques.',
  strengthTitle: 'Team Strength',
  strengthText:
    'Your team is doing an excellent job with Self-Researched Recommendations, achieving a 100% pass rate. Your agents are proactive and resourceful in finding solutions for clients.',
  overviewLabel: 'Team Overview',
  cards: [
    { value: '69%', colorKey: 'accent', label: 'Team Avg Score', delta: '-8.9%', deltaUp: false },
    { value: '2', colorKey: 'text', label: 'Active Agents' },
    { value: '3', colorKey: 'text', label: 'Calls Analyzed' },
    { value: '2', colorKey: 'green', label: 'Agents Above Avg Score', sub: '100% of team' },
    { value: '0', colorKey: 'red', label: 'Agents Below Avg Score', sub: '0% of team' },
  ],
  dist: [0, 0, 0, 2, 0],
  avgVal: 69,
  roster: [
    {
      agent: 'H18244',
      score: '69%',
      scoreGood: false,
      delta: '-12.1%',
      deltaUp: false,
      calls: '1',
      unhappy: '0%',
      weakKpi: 'Expressive Empathy/Sympathy/Apology · 0%',
    },
    {
      agent: 'H5007',
      score: '69%',
      scoreGood: false,
      delta: '-5.8%',
      deltaUp: false,
      calls: '2',
      unhappy: '0%',
      weakKpi: 'Product Benefit Explained · 0%',
    },
  ],
  weakLabel: 'Team-Wide Weak KPIs',
  coachingScope: 'team-wide',
  weak: [
    { name: 'Reference Account Opening Inquiry', pct: 100, below: '2 below 50%' },
    { name: 'Client Needs Insight Gathered', pct: 100, below: '2 below 50%' },
    { name: 'Cross-sell Pitch Discussion', pct: 100, below: '2 below 50%' },
    { name: 'Call Closure Technique Adoption', pct: 100, below: '2 below 50%' },
    { name: 'Client Understanding Depth', pct: 100, below: '2 below 50%' },
    { name: 'Agent Call Closing Quality', pct: 75, below: '1 below 50%' },
    { name: 'Expressive Empathy/Sympathy/Apology', pct: 75, below: '1 below 50%' },
  ],
  coaching: [
    {
      n: 1,
      title: 'Reference Account Opening Inquiry',
      text: 'Critical: 100.0% evaluation fail rate with 2 agents below 50% pass rate. Schedule a focused training session this week — even a 10% improvement here could lift the team avg score by ~10.0 points.',
    },
    {
      n: 2,
      title: 'Client Needs Insight Gathered',
      text: 'Critical: 100.0% evaluation fail rate with 2 agents below 50% pass rate. Schedule a focused training session this week — even a 10% improvement here could lift the team avg score by ~10.0 points.',
    },
    {
      n: 3,
      title: 'Cross-sell Pitch Discussion',
      text: 'Critical: 100.0% evaluation fail rate with 2 agents below 50% pass rate. Schedule a focused training session this week — even a 10% improvement here could lift the team avg score by ~10.0 points.',
    },
  ],
  attention: [
    {
      avatar: 'H1',
      name: 'H18244',
      score: '69%',
      delta: '-12.1%',
      calls: '1',
      unhappy: '0%',
      tag: 'Expressive Empathy/Sympathy/Apology · 0%',
      note: 'Near the bottom of the team at rank #1. Expressive Empathy/Sympathy/Apology at 0% is the most impactful area to improve.',
    },
    {
      avatar: 'H5',
      name: 'H5007',
      score: '69%',
      delta: '-5.8%',
      calls: '2',
      unhappy: '0%',
      tag: 'Product Benefit Explained · 0%',
      note: 'Near the bottom of the team at rank #2. Product Benefit Explained at 0% is the most impactful area to improve.',
    },
  ],
};

export const orgData = {
  hasFocus: false,
  priorityTitle: 'Org Priority',
  priorityText:
    'The organization’s average score increased by 1.0 point to 76.8% this period — a slight overall improvement. However, the score distribution remains heavily concentrated: 1,168 of 1,261 agents score between 60–80%, suggesting a systemic plateau rather than widespread high performance.',
  strengthTitle: 'Org Strength',
  strengthText:
    'The organization demonstrates exceptional performance in UPI/Payment ID Request, achieving a 100% pass rate org-wide — a robust, consistent application of this process across all agents.',
  overviewLabel: 'Org Overview',
  cards: [
    { value: '76.8%', colorKey: 'accent', label: 'Org Avg Score', delta: '+1.0%', deltaUp: true },
    { value: '1,261', colorKey: 'text', label: 'Active Agents' },
    { value: '594,715', colorKey: 'text', label: 'Calls Analyzed' },
    { value: '573', colorKey: 'green', label: 'Agents Above Avg Score', sub: '45% of org' },
    { value: '688', colorKey: 'red', label: 'Agents Below Avg Score', sub: '55% of org' },
  ],
  dist: [0, 0, 0, 1168, 93],
  avgVal: 76.8,
  hasRankTables: true,
  top5: [
    { agent: 'abhi@agent', score: '91.4%', calls: '27', rank: '#4' },
    { agent: 'H11813', score: '86.9%', calls: '102', rank: '#6' },
    { agent: 'supervisorit', score: '86.7%', calls: '113', rank: '#7' },
    { agent: 'H15028', score: '86.7%', calls: '493', rank: '#8' },
    { agent: 'arjun@super', score: '86.5%', calls: '28', rank: '#9' },
  ],
  bottom5: [
    { agent: 'H20566', score: '71.2%', calls: '949', rank: '#1256' },
    { agent: 'H16617', score: '71.3%', calls: '392', rank: '#1255' },
    { agent: 'H4618', score: '71.5%', calls: '40', rank: '#1253' },
    { agent: 'H20612', score: '71.5%', calls: '637', rank: '#1252' },
    { agent: 'H21285', score: '71.6%', calls: '140', rank: '#1251' },
  ],
  weakLabel: 'Org-Wide Weak KPIs',
  coachingScope: 'org-wide',
  weak: [
    { name: 'Reference Account Opening Inquiry', pct: 83.11, fail: '83.11%', below: '1,243 below 50%' },
    { name: 'Cross-sell Pitch Discussion', pct: 72.28, fail: '72.28%', below: '1,224 below 50%' },
    { name: 'Agent Personalization (Customer Name Mentioned)', pct: 71.16, fail: '71.16%', below: '1,185 below 50%' },
    { name: 'Call Closure Technique Adoption', pct: 69.07, fail: '69.07%', below: '1,236 below 50%' },
    { name: 'Expressive Empathy/Sympathy/Apology', pct: 67.59, fail: '67.59%', below: '1,215 below 50%' },
    { name: 'Agent Introduction Proper', pct: 61.17, fail: '61.17%', below: '952 below 50%' },
    { name: 'Callback/Follow-up Timing Setup', pct: 57.43, fail: '57.43%', below: '953 below 50%' },
  ],
  coaching: [
    {
      n: 1,
      title: 'Reference Account Opening Inquiry',
      text: 'Critical: 83.1% evaluation fail rate with 1,243 agents below 50% pass rate. Schedule a focused training session this week — even a 10% improvement here could lift the org avg score by ~8.2 points.',
    },
    {
      n: 2,
      title: 'Cross-sell Pitch Discussion',
      text: '1,224 agents below 50% pass rate (72.3% evaluation fail rate). Add this to the daily huddle script and pair low performers with top agents for shadowing sessions.',
    },
    {
      n: 3,
      title: 'Agent Personalization (Customer Name Mentioned)',
      text: '1,185 agents below 50% pass rate (71.2% evaluation fail rate). Add this to the daily huddle script and pair low performers with top agents for shadowing sessions.',
    },
  ],
  attention: [
    {
      avatar: 'H2',
      name: 'H20918',
      score: '64%',
      calls: '1',
      unhappy: '0%',
      tag: 'IPO/SGB Mutual Fund Pitch · 0%',
      note: 'Near the bottom at rank #1261. IPO/SGB Mutual Fund Pitch at 0% is the most impactful area to improve.',
    },
    {
      avatar: 'H1',
      name: 'H18153',
      score: '64.5%',
      delta: '-11.8%',
      calls: '2',
      unhappy: '50%',
      tag: 'Expressive Empathy/Sympathy/Apology · 0%',
      note: 'Near the bottom at rank #1260. 50% unhappy customers — highest concern area. Expressive Empathy/Sympathy/Apology at 0% is the most impactful area to improve.',
    },
    {
      avatar: 'H4',
      name: 'H4853',
      score: '66%',
      delta: '-15.1%',
      calls: '3',
      unhappy: '0%',
      tag: 'Agent Introduction Proper · 0%',
      note: 'Near the bottom at rank #1258. Agent Introduction Proper at 0% is the most impactful area to improve.',
    },
    {
      avatar: 'H2',
      name: 'H20466',
      score: '66%',
      calls: '1',
      unhappy: '0%',
      tag: 'Client Needs Insight Gathered · 0%',
      note: 'Near the bottom at rank #1259. Client Needs Insight Gathered at 0% is the most impactful area to improve.',
    },
  ],
};

export const dataByView = { agent: agentData, team: teamData, org: orgData };

export const selectorOptionsByView = {
  team: ['H0172', 'H0461', 'H0967'],
  agent: ['H0967', 'H0461', 'H0172'],
};
