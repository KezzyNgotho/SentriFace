<script>
    import { motion } from 'svelte-motion';
    import { inview } from 'svelte-intersection-observer';
  
    const features = [
      {
        title: "Continuous Monitoring",
        description: "Real-time user monitoring with adaptive frequency.",
        icon: "🔄"
      },
      {
        title: "Behavioral Biometrics",
        description: "Analysis of unique patterns and behaviors.",
        icon: "👤"
      },
      {
        title: "Adaptive Authentication",
        description: "Dynamic security based on risk levels.",
        icon: "🛡️"
      },
      {
        title: "Privacy and Security",
        description: "Industry-leading encryption and privacy.",
        icon: "🔒"
      }
    ];
  </script>
  
  <section id="about" class="section about-section" use:inview>
    <h2>About AdaptiveWatch</h2>
    <p class="section-intro">
      AdaptiveWatch is a cutting-edge authentication solution designed to continuously monitor and validate user identity in real-time.
    </p>
    <div class="about-details">
      {#each features as feature, i}
        <motion.div
          class="about-feature"
          initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <span class="feature-icon">{feature.icon}</span>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </motion.div>
      {/each}
    </div>
  </section>
  
  <style>
    .section {
      padding: 4rem 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
  
    h2 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }
  
    .section-intro {
      font-size: 1.2rem;
      margin-bottom: 3rem;
      color: #555;
    }
  
    .about-details {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
    }
  
    .about-feature {
      flex: 1 1 calc(25% - 2rem);
      padding: 2rem;
      border-radius: 10px;
      background: #fff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
  
    .about-feature:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }
  
    .feature-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
  </style>