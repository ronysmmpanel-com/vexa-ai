export const appConfig = {
  appName: 'VEXA AI',
  supportLanguages: ['en', 'hi', 'hi-en'] as const,
  defaultTheme: 'dark' as const,
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8787',
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL ?? 'https://example.supabase.co',
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY ?? 'placeholder-anon-key'
};
