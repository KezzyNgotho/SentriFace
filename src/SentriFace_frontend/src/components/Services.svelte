<script>
    import { motion } from 'svelte-motion';
    import { inview } from 'svelte-intersection-observer';
  
    const services = [
      {
        title: "Continuous Authentication",
        description: "Real-time user monitoring with adaptive frequency.",
        icon: "🔐"
      },
      {
        title: "Behavioral Biometrics",
        description: "Integration of unique user behaviors.",
        icon: "📊"
      },
      {
        title: "Facial Recognition",
        description: "Advanced face recognition technology.",
        icon: "👁️"
      }
    ];
  </script>
  
  <section id="services" class="section services-section" use:inview>
    <h2>Our Services</h2>
    <div class="service-list">
      {#each services as service, i}
        <motion.div
          class="service-item"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
        >
          <span class="service-icon">{service.icon}</span>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
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
  
    .service-list {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
    }
  
    .service-item {
      flex: 1 1 calc(33.333% - 2rem);
      padding: 2rem;
      border-radius: 10px;
      background: #fff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
  
    .service-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }
  
    .service-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
  </style>