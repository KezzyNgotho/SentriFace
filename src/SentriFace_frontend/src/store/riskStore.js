// src/stores/riskStore.js
import { writable } from 'svelte/store';

export const riskScore = writable(0); // Risk level dynamically updated based on monitoring
