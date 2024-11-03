import { writable } from 'svelte/store';

// Create a writable store to hold the application state
export const state = writable({
  isAuthenticated: false,   // User authentication status
  user: null,               // User data, initially null
  settings: {
    darkMode: false,        // Example setting
    notificationsEnabled: true, // Example setting
  },
  // Add more state variables as needed
});

// Function to update user authentication status
export function setAuthentication(authenticated, userData = null) {
  state.update(current => ({
    ...current,
    isAuthenticated: authenticated,
    user: authenticated ? userData : null,
  }));
}

// Function to toggle dark mode
export function toggleDarkMode() {
  state.update(current => ({
    ...current,
    settings: {
      ...current.settings,
      darkMode: !current.settings.darkMode,
    },
  }));
}

// Function to toggle notifications
export function toggleNotifications() {
  state.update(current => ({
    ...current,
    settings: {
      ...current.settings,
      notificationsEnabled: !current.settings.notificationsEnabled,
    },
  }));
}
