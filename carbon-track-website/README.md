# Carbon Track Technical Documentation

Welcome to the Carbon Track documentation website repository. This site provides detailed technical documentation for the Carbon Track project, a real-time carbon emissions monitoring system for KTDA's tea factories.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [System Architecture](#system-architecture)
- [Components](#components)
- [API Endpoints](#api-endpoints)
- [Installation and Deployment](#installation-and-deployment)
- [Security Considerations](#security-considerations)
- [Testing and Monitoring](#testing-and-monitoring)
- [Maintenance and Scaling](#maintenance-and-scaling)

---

## Project Overview

Carbon Track enables KTDA tea factories to monitor and manage carbon emissions in real-time, ensuring compliance with environmental regulations and improving operational efficiency.

---

## Features

- Real-time CO₂ monitoring with IoT sensors
- User-friendly energy usage input portals
- Emissions leaderboard
- Historical data visualizations
- Automated compliance reporting

---

## Technology Stack

- **IoT:** ESP32 microcontroller, CO₂ sensors, thermocouples, anemometers
- **Backend:** Django 4.2+, Django REST Framework, PostgreSQL, HiveMQ MQTT broker
- **Frontend:** React.js for web portals
- **API Docs:** Swagger UI, Redoc, Postman

---

## Getting Started

### Prerequisites

- Node.js (>=16)
- npm or yarn
- Git

### Clone and Install Dependencies

git clone https://github.com/your-github-username/carbontrack-docs.git
cd carbontrack-docs
npm install
or

yarn install

text

---

## System Architecture

Modular IoT-cloud-web architecture integrating sensors, MQTT broker, Django backend, PostgreSQL database, and React portals.

---

## Components

- IoT devices in chimneys collecting sensor data
- Django REST backend managing data and APIs
- React portals for Factory and HQ users

---

## API Endpoints

Detailed API documentation is available via Swagger UI and Redoc in the live site or local build.

---

## Installation and Deployment

### Build for Production

npm run build
npm run export

text

### Deploy to GitHub Pages

1. Install GitHub Pages package (if not installed):

npm install --save-dev gh-pages

text

2. Add the following to `package.json` scripts:

"scripts": {
"predeploy": "next build && next export",
"deploy": "gh-pages -d out"
}

text

3. Deploy with:

npm run deploy

text

4. Configure `next.config.js` with your repository name:

module.exports = {
basePath: '/carbontrack-docs',
assetPrefix: '/carbontrack-docs/',
}

text

Replace `'carbontrack-docs'` with your repo name.

---

## Security Considerations

- TLS encrypted communication (MQTT & API)
- Token-based authentication and role permissions
- Input validation to prevent injection

---

## Testing and Monitoring

- Unit and integration tests
- Monitoring with Sentry and Prometheus
- Success criteria: uptime, data compliance, emission targets

---

## Maintenance and Scaling

- Use Git for version control
- Redis caching for performance
- Horizontal scaling and offline buffering for remote sites

---



