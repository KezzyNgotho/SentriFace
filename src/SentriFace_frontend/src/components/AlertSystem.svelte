<script>
  import { riskScore } from '../store/riskStore';
  let showAlert = false;

  $: if ($riskScore > 50) {
    showAlert = true;
  }

  function closeAlert() {
    showAlert = false;
  }
</script>

{#if showAlert}
  <div class="alert">
    <h3>High-Risk Activity Detected!</h3>
    <p>Immediate attention is required.</p>
    <button on:click={closeAlert}>Close</button>
  </div>
{/if}

<style>
  .alert {
    position: fixed;
    top: 1rem;
    right: 1rem;
    background: red;
    color: white;
    padding: 1rem;
    border-radius: 5px;
  }
</style>
