<script>
  import Settings from '../components/Settings.svelte';
  import AuthenticationModule from '../components/AuthenticationModule.svelte';
  import { onMount } from 'svelte';
  import logo from "../assets/logo1.png";
  import proctor from "../assets/exam-proctor-icon.png"
  import education from "../assets/eduaction-icon.png"
  import government from "../assets/government-icon.png"
  import corporate from "../assets/corporate-icon.png"

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
  <!-- Navigation Bar -->
   <!-- Navigation Bar -->
   <nav class="navbar">
    <img src={logo} alt="AdaptiveWatch Logo" class="logo" />
    <ul class="nav-links">
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#services">Services</a>
      </li>
      <li>
        <a href="#partners">Partners</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
      <li>
        <button on:click={toggleSettings} class="dropdown-toggle">
          Settings
        </button>
        {#if showSettings}
          <div class="dropdown-content">
            <a href="#profile" on:click={startAuthentication}>Profile Settings</a>
            <a href="#notifications">Notification Settings</a>
          </div>
        {/if}
      </li>
      <li>
        <button on:click={startAuthentication} class="dropdown-toggle">
          Authentication
        </button>
        {#if showAuthentication}
          <div class="dropdown-content">
            <a href="#start-monitoring">Start Monitoring</a>
            <a href="#authentication-methods">Authentication Methods</a>
          </div>
        {/if}
      </li>
    </ul>
  </nav>

  <!-- Hero Section -->
  <header class="hero-section">
    <h1>SentriFace</h1>
    <p>A continuous, adaptive authentication tool for dynamic security needs.</p>
    <div class="action-buttons">
      <button on:click={startAuthentication} class="start-btn">Start Monitoring</button>
      <button on:click={toggleSettings} class="settings-btn">
        {showSettings ? "Close Settings" : "Configure Settings"}
      </button>
    </div>
  </header>

  <!-- About Section -->
  <section id="about" class="section about-section">
    <h2>About AdaptiveWatch</h2>
    <p>
      AdaptiveWatch is a cutting-edge authentication solution designed to continuously monitor and validate user identity in real-time. As digital security threats become more sophisticated, traditional methods of authentication alone may not be enough. AdaptiveWatch leverages advanced behavioral biometrics, machine learning, and adaptive authentication techniques to ensure that the right person is accessing sensitive information, no matter where they are.
    </p>
    <div class="about-details">
      {#each [
        { title: "Continuous Monitoring", content: "AdaptiveWatch continuously monitors user behavior and environmental factors to verify identity in real-time." },
        { title: "Behavioral Biometrics", content: "Our tool analyzes unique patterns such as typing rhythms, mouse movements, and other behaviors." },
        { title: "Adaptive Authentication", content: "By dynamically adjusting authentication requirements based on user risk level, AdaptiveWatch ensures seamless access." },
        { title: "Privacy and Security", content: "AdaptiveWatch complies with stringent data privacy regulations, safeguarding user data with industry-leading encryption." }
      ] as feature}
        <div class="about-feature">
          <h3>{feature.title}</h3>
          <p>{feature.content}</p>
        </div>
      {/each}
    </div>
  </section>

  <!-- Services Section -->
  <section id="services" class="section services-section">
    <h2>Our Services</h2>
    <div class="service-list">
      {#each [
        { title: "Continuous Authentication", content: "Real-time user monitoring with adaptive frequency." },
        { title: "Behavioral Biometrics", content: "Integration of unique user behaviors." },
        { title: "Facial Recognition", content: "Leveraging advanced face recognition for touchless authentication." }
      ] as service}
        <div class="service-item">
          <h3>{service.title}</h3>
          <p>{service.content}</p>
        </div>
      {/each}
    </div>
  </section>

  <!-- Partners Section -->
  <section id="partners" class="section partners-section">
    <h2>Our Partners</h2>
    <div class="partners-list">
      {#each [
        { image: proctor, title: "Exam Proctors", content: "Ensuring secure identity verification for online examinations." },
        { image: education, title: "Educational Institutions", content: "Providing secure learning environments." },
        { image: corporate, title: "Corporate Security Teams", content: "Supporting data protection for corporate applications." },
        { image: government, title: "Government Agencies", content: "Maintaining secure access to sensitive information." }
      ] as partner}
        <div class="partner-item">
          <img src={partner.image} alt={partner.title} class="partner-icon" />
          <h3>{partner.title}</h3>
          <p>{partner.content}</p>
        </div>
      {/each}
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="section contact-section">
    <h2>Contact Us</h2>
    <p>We’d love to hear from you! Whether you’re a potential partner, a curious user, or need support, feel free to reach out.</p>
    <form class="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>

  <!-- Settings and Authentication Module -->
  {#if showSettings}
    <Settings />
  {/if}

  {#if showAuthentication}
    <AuthenticationModule />
  {/if}
</div>

<style>
  .landing-page {
    font-family: Arial, sans-serif;
    color: #333;
    margin: 0;
    padding: 0;
  }

  /* Navigation Bar */
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: rgba(0, 139, 139, 0.9); /* Semi-transparent Teal */
    z-index: 1000; /* Ensures it stays above other content */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  .navbar .logo {
    width: 50px;
  }
  .nav-links {
    list-style: none;
    display: flex;
    gap: 1.5rem;
    position: relative; /* Ensure dropdowns are positioned correctly */
  }
  .nav-links a, .dropdown-toggle {
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;
    cursor: pointer;
  }
  .nav-links a:hover, .dropdown-toggle:hover {
    color: #90CAF9; /* Light Blue */
  }
  .dropdown-content {
    position: absolute;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
  }
  .dropdown-content a {
    color: #333;
    text-decoration: none;
  }
  .dropdown-content a:hover {
    color: #008080; /* Teal */
  }

  /* Hero Section */
  .hero-section {
    text-align: center;
    padding: 4rem 2rem;
    margin-top: 80px; /* Add margin to push content below the navbar */
    background-color: #f4f6f9;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  .hero-section h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  .hero-section p {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
  .action-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  .start-btn, .settings-btn {
    padding: 0.8rem 2rem;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .start-btn {
    background-color: #008080; /* Teal */
    color: white;
  }
  .start-btn:hover {
    background-color: #006d6d; /* Darker Teal */
  }
  .settings-btn {
    background-color: #90CAF9; /* Light Blue */
    color: #333;
  }
  .settings-btn:hover {
    background-color: #74b8e8; /* Slightly Darker Light Blue */
  }

  /* Section Styles */
  .section {
    padding: 2rem;
    margin-top: 2rem;
  }
  .section h2 {
    text-align: center;
    margin-bottom: 1.5rem;
  }
  .about-details, .service-list, .partners-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
  }
  .about-feature, .service-item, .partner-item {
    background-color: #ffffff;
    border-radius: 5px;
    padding: 1rem;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    width: 200px; /* Set a fixed width for uniformity */
  }

  /* Contact Form */
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 400px;
    margin: 0 auto;
  }
  .contact-form input, .contact-form textarea {
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
  }
  .contact-form button {
    padding: 0.8rem;
    background-color: #008080; /* Teal */
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .contact-form button:hover {
    background-color: #006d6d; /* Darker Teal */
  }
</style>
