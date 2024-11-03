<script>
    import { motion } from 'svelte-motion';
  
    export let onStartClick;
    export let onSettingsClick;
    export let showSettings;
  </script>
  
  <header class="hero-section">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>AdaptiveWatch</h1>
      <p class="hero-subtitle">A continuous, adaptive authentication tool for dynamic security needs.</p>
      <div class="action-buttons">
        <button on:click={onStartClick} class="start-btn">
          Start Monitoring
          <span class="btn-icon">→</span>
        </button>
        <button on:click={onSettingsClick} class="settings-btn">
          {showSettings ? "Close Settings" : "Configure Settings"}
        </button>
      </div>
    </motion.div>
  </header>
  
  <style>
    .hero-section {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 6rem 2rem;
      background: linear-gradient(135deg, #f6f9fc 0%, #edf2f7 100%);
    }
  
    h1 {
      font-size: 4rem;
      font-weight: 800;
      margin-bottom: 1.5rem;
      background: linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  
    .hero-subtitle {
      font-size: 1.5rem;
      color: #666;
      max-width: 600px;
      margin: 0 auto 3rem;
    }
  
    .action-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }
  
    .start-btn, .settings-btn {
      padding: 1rem 2rem;
      font-size: 1.1rem;
      font-weight: 600;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
  
    .start-btn {
      background: #4caf50;
      color: white;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  
    .settings-btn {
      background: #ff9800;
      color: white;
    }
  
    .start-btn:hover, .settings-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
  </style>