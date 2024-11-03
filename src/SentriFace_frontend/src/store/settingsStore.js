import { writable } from 'svelte/store';

export const monitoringFrequency = writable("medium");
export const riskThreshold = writable(50);
