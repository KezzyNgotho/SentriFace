<script>
  import { monitoringFrequency, riskThreshold } from '../store/settingsStore';
  let selectedFrequency = $monitoringFrequency;
  let selectedThreshold = $riskThreshold;

  function saveSettings() {
    monitoringFrequency.set(selectedFrequency);
    riskThreshold.set(selectedThreshold);
  }
</script>

<div class="settings">
  <h2>Settings</h2>
  <label>
    Monitoring Frequency:
    <select bind:value={selectedFrequency}>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
  </label>
  
  <label>
    Risk Threshold:
    <input type="range" min="10" max="100" bind:value={selectedThreshold} />
    <span>{selectedThreshold}</span>
  </label>

  <button on:click={saveSettings}>Save</button>
</div>

<style>
  .settings {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-top: 1rem;
  }
</style>
