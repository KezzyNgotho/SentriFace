<script>
  import { riskScore } from '../store/riskStore';
  let isMonitoring = true;

  function startMonitoring() {
    isMonitoring = true;
    // Placeholder for actual facial recognition and behavioral tracking
    trackUserAttention();
  }

  function stopMonitoring() {
    isMonitoring = false;
  }

  // Simulated function for attention tracking
  function trackUserAttention() {
    setInterval(() => {
      riskScore.update(score => (Math.random() > 0.8 ? score + 5 : score));
    }, 2000);
  }
</script>

<div class="authentication-module">
  <h2>Continuous Authentication Active</h2>
  <p>Monitoring Status: {isMonitoring ? 'Active' : 'Paused'}</p>

  <div class="controls">
    <button on:click={startMonitoring}>Start</button>
    <button on:click={stopMonitoring}>Stop</button>
  </div>
</div>

<style>
  .authentication-module {
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-top: 2rem;
    text-align: center;
  }
  .controls {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
</style>
