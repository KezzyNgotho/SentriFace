<script>
    import Settings from '../components/Settings.svelte';
    import AuthenticationModule from '../components/AuthenticationModule';
    import { onMount } from 'svelte';
  
    let showSettings = false;
    let showAuthentication = false;
  
    function toggleSettings() {
      showSettings = !showSettings;
      showAuthentication = false;
    }
  
    function startAuthentication() {
      showAuthentication = true;
      showSettings = false;
    }
  </script>
  
  <div class="landing-page">
    <header>
      <img src="/assets/logo.png" alt="AdaptiveWatch Logo" class="logo" />
      <h1>AdaptiveWatch</h1>
      <p>A continuous, adaptive authentication tool for dynamic security needs</p>
    </header>
  
    <div class="action-buttons">
      <button on:click={startAuthentication} class="start-btn">Start Monitoring</button>
      <button on:click={toggleSettings} class="settings-btn">
        {showSettings ? "Close Settings" : "Configure Settings"}
      </button>
    </div>
  
    {#if showSettings}
      <Settings />
    {/if}
  
    {#if showAuthentication}
      <AuthenticationModule />
    {/if}
  </div>
  
  <style>
    .landing-page {
      text-align: center;
      padding: 2rem;
      font-family: sans-serif;
    }
    .logo {
      width: 100px;
      margin: 1rem 0;
    }
    .action-buttons {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }
    .start-btn, .settings-btn {
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      color: white;
    }
    .start-btn { background-color: #4CAF50; }
    .settings-btn { background-color: #007BFF; }
  </style>
  