<script>
    import { motion } from 'svelte-motion';
  
    function handleSubmit(event) {
      event.preventDefault();
      // Add form submission logic here
    }
  </script>
  
  <section id="contact" class="section contact-section">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Contact Us</h2>
      <p class="section-intro">Ready to enhance your security? Get in touch with us today.</p>
      <form class="contact-form" on:submit={handleSubmit}>
        <div class="form-group">
          <input type="text" id="name" placeholder="Your Name" required />
        </div>
        <div class="form-group">
          <input type="email" id="email" placeholder="Your Email" required />
        </div>
        <div class="form-group">
          <textarea id="message" placeholder="Your Message" rows="4" required></textarea>
        </div>
        <button type="submit" class="submit-btn">Send Message</button>
      </form>
    </motion.div>
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
  
    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 600px;
      margin: 0 auto;
    }
  
    .form-group {
      display: flex;
      flex-direction: column;
    }
  
    input, textarea {
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 5px;
      font-size: 1rem;
    }
  
    .submit-btn {
      padding: 0.75rem;
      border: none;
      border-radius: 5px;
      background-color: #2196f3;
      color: white;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  
    .submit-btn:hover {
      background-color: #1976d2;
    }
  </style>