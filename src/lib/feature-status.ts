import type { FeatureStatusItem } from '../types';

export const featureStatus: FeatureStatusItem[] = [
  {
    feature: 'Responsive website and app shell',
    status: 'working',
    details: 'Mobile-first design and app navigation are implemented.'
  },
  {
    feature: 'Supabase auth and database',
    status: 'requires-configuration',
    details: 'Requires project URL, anon key, and SQL schema execution.'
  },
  {
    feature: 'OpenAI Responses API chat',
    status: 'requires-configuration',
    details: 'Secure backend is required; secrets never go in frontend.'
  },
  {
    feature: 'Personal memory consent system',
    status: 'requires-configuration',
    details: 'UI exists; database policy and consent flow still need wiring.'
  },
  {
    feature: 'Voice input and speech output',
    status: 'requires-configuration',
    details: 'Browser speech APIs are available, but permissions and runtime config are needed.'
  },
  {
    feature: 'Hey Boss wake-word detection',
    status: 'not-implemented',
    details: 'Background wake-word detection is unsupported in a normal web app without native Android support.'
  },
  {
    feature: 'Web search with source citations',
    status: 'requires-configuration',
    details: 'Needs server-side web search tool and source attribution.'
  },
  {
    feature: 'Daily assistant',
    status: 'not-implemented',
    details: 'Tasks, reminders, and the calendar view need storage and scheduling logic.'
  },
  {
    feature: 'Coding assistant',
    status: 'requires-configuration',
    details: 'Requires secure prompt and guardrail configuration.'
  },
  {
    feature: 'Permission-based automation',
    status: 'not-implemented',
    details: 'Only explicitly approved server-side actions are allowed.'
  },
  {
    feature: 'Android APK build',
    status: 'requires-configuration',
    details: 'Capacitor config is present, but Android Studio and SDK setup are still required.'
  }
];
