<script>
    import { onMount } from 'svelte';
    import logo from "../assets/logo.png";
  
    let isScrolled = false;
  
    onMount(() => {
      const handleScroll = () => {
        isScrolled = window.scrollY > 50;
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    });
  </script>
  
  <nav class="navbar" class:scrolled={isScrolled}>
    <div class="nav-content">
      <img src={logo} alt="AdaptiveWatch Logo" class="logo" />
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#partners">Partners</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
  
  <style>
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
    }
  
    .navbar.scrolled {
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
  
    .nav-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
    .logo {
      height: 40px;
      transition: transform 0.3s ease;
    }
  
    .logo:hover {
      transform: scale(1.05);
    }
  
    .nav-links {
      display: flex;
      gap: 2rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }
  
    .nav-links a {
      color: #1a1a1a;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
    }
  
    .nav-links a:hover {
      color: #0066cc;
    }
  </style>