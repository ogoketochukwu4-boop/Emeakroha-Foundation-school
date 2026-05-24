/**
 * study/config/models.js
 * Points to the Netlify function — API key lives only on the server.
 */
export const MODEL_CONFIG = {
  functionUrl: '/.netlify/functions/study-ai',
  model:       'llama-3.3-70b-versatile',
  maxTokens:   2500,
};