export type ThemeMode = 'light' | 'dark';

export type AiStatus = 'working' | 'requires-configuration' | 'not-implemented';

export interface FeatureStatusItem {
  feature: string;
  status: AiStatus;
  details: string;
}

export interface ConversationMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  createdAt: string;
}

export interface MemoryItem {
  id: string;
  label: string;
  content: string;
  createdAt: string;
  userVisible: boolean;
}

export interface AppSettings {
  language: 'en' | 'hi' | 'hi-en';
  voice: 'default' | 'male' | 'female';
  theme: ThemeMode;
  memoryEnabled: boolean;
  privacyMode: 'standard' | 'strict';
  aiProfile: 'general' | 'coding' | 'assistant';
}
