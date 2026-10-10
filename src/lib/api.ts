import { appConfig } from '../config';

export async function postToBackend(path: string, body: Record<string, unknown>) {
  const response = await fetch(`${appConfig.apiBaseUrl}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Request failed: ${response.status} ${text}`);
  }

  return response.json();
}
