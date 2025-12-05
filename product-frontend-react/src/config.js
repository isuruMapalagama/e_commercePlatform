const defaultHost = window.location.hostname === 'localhost' ? 'localhost' : '127.0.0.1';
const envBase = import.meta.env.VITE_API_URL;
const base = (envBase && typeof envBase === 'string' ? envBase : `http://${defaultHost}:8000/api`).replace(/\/+$/, '');
export const API_URL = base;


