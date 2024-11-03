# `SentriFace`


## Overview

**SentriFace** is a context-aware, adaptive authentication system designed for continuous monitoring. It dynamically adjusts monitoring intervals based on user activity, risk levels, and behavioral patterns. This decentralized application (dApp) leverages advanced technologies in machine learning, biometrics, and eye tracking to offer non-intrusive, privacy-preserving security on the blockchain.

### Key Features

- **Dynamic Monitoring**: Adjusts authentication intervals based on risk score and user behavior.
- **Multi-Factor Authentication**: Combines behavioral biometrics, facial recognition, and eye tracking.
- **Attention Detection**: Monitors gaze and focus using real-time eye tracking to ensure attention during sensitive tasks.
- **Progressive Security Escalation**: Gradual security checks based on risk level, reducing intrusiveness for low-risk users.
- **Privacy-Preserving Design**: Blockchain-based and on-device processing minimizes data transmission and ensures user privacy.

---

## Technologies Used

### Frontend
- **Svelte**: For building a responsive and interactive user interface.
- **Tailwind CSS**: Lightweight and utility-first CSS framework for clean, customizable styling.
- **JavaScript (TensorFlow.js)**: For client-side machine learning, particularly in behavioral biometrics and eye tracking.
- **WebRTC**: Used for capturing webcam data for face recognition and eye tracking.

### Backend
- **Motoko (DFINITY Internet Computer)**: Core backend logic is implemented using Motoko, leveraging the security and decentralized nature of the Internet Computer. This handles user authentication, risk assessment, and logging.
- **Internet Identity**: Authentication for secure, decentralized identity management.
- **DFINITY’s Face Recognition Module**: Provides facial recognition capabilities for frequent authentication checks.

### Machine Learning & Biometrics
- **TensorFlow.js**: Runs machine learning models directly in the browser to process behavioral biometrics, minimizing latency and improving privacy.
- **Eye-Tracking Libraries**: JavaScript libraries for gaze detection and attention monitoring.

---

## Project Structure

```
AdaptiveWatch/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/         # Reusable UI components (e.g., Dashboard, Alerts)
│   │   ├── assets/             # Static images and icons
│   │   ├── App.svelte          # Main Svelte application
│   └── tailwind.config.js      # Tailwind CSS configuration
│
├── backend/
│   ├── src/
│   │   ├── main.mo    # Motoko code for authentication logic
│   ├── canister_ids.json       # Canister IDs for IC deployment
│   └── dfx.json                # DFINITY configuration file
│
├── docs/                       # Documentation files
├── README.md                   # Project overview and setup instructions
└── .gitignore
```

---

## Getting Started

### Prerequisites

- **Node.js** (version 14+)
- **DFINITY SDK** (for deploying Motoko backend on the Internet Computer)
- **Internet Identity**: Required for decentralized identity management.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/AdaptiveWatch.git
   cd AdaptiveWatch
   ```

2. **Install frontend dependencies**:

   ```bash
   cd frontend
   npm install
   ```

3. **Set Up DFINITY and Deploy Motoko Canister**:

   - Ensure that the DFINITY SDK is installed and configured.
   - Start a local Internet Computer replica:

     ```bash
     dfx start
     ```

   - Deploy the backend canister:

     ```bash
     dfx deploy
     ```

4. **Configure Canister IDs**:
   - After deploying, copy the canister IDs from `canister_ids.json` and add them to the frontend configuration.

5. **Start the Application**:

   - In separate terminals:
     - **Backend**:

       ```bash
       dfx start
       ```

     - **Frontend**:

       ```bash
       cd frontend
       npm run dev
       ```

---

## Core Modules

### 1. Face Recognition Module
   - Uses DFINITY’s face recognition example for initial user verification.
   - Verifies users at adjustable intervals based on calculated risk scores.

### 2. Risk Assessment Engine (Motoko)
   - Analyzes user behavior (time patterns, geolocation, and activity level).
   - Calculates a **risk score** that determines the authentication frequency.

### 3. Behavioral Analysis Module
   - Tracks typing speed, mouse movement, and scroll behavior to create a unique user profile.
   - Uses TensorFlow.js to process these behaviors locally.

### 4. Alert System (Motoko)
   - Sends notifications and alerts when suspicious behavior or risky patterns are detected.
   - Includes customizable security thresholds for each user role.

---

## Usage Guide

### Running the Authentication System

1. **Initial Setup**:
   - Admins can configure thresholds for monitoring intervals, set roles, and define suspicious behavior parameters.
  
2. **Real-Time Monitoring**:
   - For high-risk actions, the system will increase authentication checks.
   - The **security bar** (in the UI) reflects the current trust level, adjusting dynamically.

3. **Attention Detection**:
   - Eye tracking alerts users when their attention deviates from the screen.
   - Customizable in-app settings allow users to adjust eye-tracking sensitivity.

---

## User Stories

1. **Exam Proctor**:
   - Continuously monitors students, receives alerts for suspicious behavior, and generates reports.

2. **Student**:
   - Experiences non-intrusive authentication with privacy controls, and has the option to review and contest flagged incidents.

---

## Future Enhancements

- **Hardware Support**: Integrate additional biometric sensors (e.g., fingerprint and heartbeat).
- **Multi-Language Support**: Localize the UI for global accessibility.
- **Advanced AI Models**: Incorporate deep learning models for improved pattern recognition and risk assessment.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

---

## License

This project is licensed under the MIT License.

--- 
