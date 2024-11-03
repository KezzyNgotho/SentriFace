<script>
    import { riskScore } from '../store/riskStore';
    $: color = $riskScore > 50 ? "red" : $riskScore > 20 ? "orange" : "green";
  </script>
  
  <div class="risk-meter" style="background-color: {color};">
    <p>Risk Level: {$riskScore}</p>
  </div>
  
  <style>
    .risk-meter {
      padding: 1rem;
      color: white;
      text-align: center;
      border-radius: 8px;
    }
  </style>
  