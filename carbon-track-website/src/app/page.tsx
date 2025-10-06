'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import ContentSection from './components/ContentSection';
import AnimatedSection from './components/AnimatedSection';
import AnimatedCard from './components/AnimatedCard';

export default function Home() {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const openZoom = (src: string) => setZoomedImage(src);
  const closeZoom = () => setZoomedImage(null);

  return (
    <>
      {/* Responsive CSS */}
      <style>
        {`
          .container {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background-color: #f8f6f5;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #2A4759;
            overflow-x: hidden;
          }
          @media (min-width: 900px) {
            .container {
              flex-direction: row;
            }
            main {
              margin-left: 260px;
              max-width: calc(100% - 260px);
              padding: 2.5rem 3.5rem 4rem;
            }
            .sidebar {
              position: fixed;
              width: 260px;
              height: 100vh;
              top: 0;
              left: 0;
              z-index: 1500;
            }
          }
          @media (max-width: 899px) {
            main {
              margin: 0;
              padding: 1.5rem 2rem 2.5rem;
            }
            .sidebar {
              position: relative;
              width: 100%;
              height: auto;
            }
          }
          main {
            flex: 1;
            overflow-y: auto;
            width: 100%;
          }
          /* Heading responsiveness */
          h1 {
            font-weight: 700;
            margin-bottom: 2.5rem;
            font-size: clamp(2.2rem, 4.5vw, 3.2rem);
            padding: 0 1rem;
            text-align: center;
            position: relative;
          }
          h1::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background-color: #F79B72;
            border-radius: 2px;
          }
          /* Text responsiveness */
          p {
            font-size: clamp(0.95rem, 1.6vw, 1.15rem);
            line-height: 1.6;
            margin-bottom: 1rem;
          }
          ul {
            padding-left: 1.8rem;
            margin-top: 1.2rem;
            margin-bottom: 1.5rem;
          }
          li {
            margin-bottom: 0.8rem;
          }
          /* Responsive image containers */
          .responsive-image-container {
            width: 100%;
            max-width: 800px;
            aspect-ratio: 16 / 9;
            position: relative;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.15);
            cursor: pointer;
            margin: 1.8rem auto;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .responsive-image-container:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.2);
          }
          /* Zoom modal styles */
          .zoom-overlay {
            position: fixed;
            inset: 0;
            background-color: rgba(0,0,0,0.85);
            z-index: 2000;
            cursor: zoom-out;
          }
          .zoom-modal {
            position: fixed;
            top: 5%;
            left: 20%;
            transform: translate(-50%, -50%);
            width: 90vw;
            max-width: 1000px;
            max-height: 90vh;
            cursor: zoom-out;
            border-radius: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1rem;
            z-index: 2001;
          }
          .zoom-modal img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            border-radius: 12px;
          }
          /* Banner text */
          .banner-text {
            position: absolute;
            bottom: 8%;
            left: 5%;
            width: 90%;
            color: white;
            text-shadow: 0 2px 15px rgba(0,0,0,0.9);
            font-weight: 700;
            font-size: clamp(1.8rem, 3vw, 2.8rem);
            line-height: 1.3;
            background: rgba(0,0,0,0.4);
            padding: 1.2rem;
            border-radius: 12px;
            backdrop-filter: blur(5px);
          }
          /* Motion div for landing */
          .landing {
            position: relative;
            height: 75vh;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            user-select: none;
            cursor: default;
            margin-bottom: 3rem;
          }
          /* Technical documentation styles */
          .tech-term {
            font-family: 'Courier New', monospace;
            background-color: rgba(42, 71, 89, 0.1);
            padding: 0.2rem 0.4rem;
            border-radius: 4px;
            font-weight: 600;
          }
          .code-block {
            background-color: #2A4759;
            color: #F79B72;
            padding: 1.2rem;
            border-radius: 8px;
            overflow-x: auto;
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
            line-height: 1.5;
            margin: 1.5rem 0;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          }
          /* Section spacing */
          .section-spacing {
            margin-bottom: 4rem;
          }
          /* Architecture image specific */
          .architecture-image {
            max-width: 700px;
            margin: 2rem auto;
          }
        `}
      </style>

      <div className="container">
        <Sidebar />

        <main>
          <motion.div
            id="landing"
            className="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            <Image
              src="/images/carbonemissions.jpg"
              alt="KTDA Tea Factory"
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 1200px"
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className="banner-text">
              Real-Time Carbon Emissions Monitoring for KTDA&apos;s Tea Factories
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02, color: '#F79B72' }}
          >
            Carbon Track
          </motion.h1>

          <AnimatedSection id="overview">
            <div className="section-spacing">
              <ContentSection title="System Overview">
                <p>
                  Carbon Track is a real-time emissions monitoring system designed for KTDA tea factories. The architecture comprises three primary components:
                </p>
                <ul>
                  <li><b>IoT Measurement System</b>: 
                    <ul>
                      <li>Hardware: ESP32 microcontroller interfaced with NDIR CO₂ sensors (0-5000ppm range), K-type thermocouples (-50°C to 1350°C), and anemometers (0-20m/s range)</li>
                      <li>Data Acquisition: Continuous sampling at 5-second intervals with ±2% accuracy for CO₂ and ±1.5°C for temperature</li>
                      <li>Communication: MQTT protocol (QoS 1) with TLS 1.3 encryption for secure data transmission</li>
                      <li>Deployment: Sensors installed 1-2 meters above chimney base with weatherproof enclosures (IP67 rating)</li>
                    </ul>
                  </li>
                  <li><b>Backend Processing System</b>: 
                    <ul>
                      <li>Framework: Django 4.2+ with Django REST Framework 3.14.0</li>
                      <li>Database: PostgreSQL 15.0 with TimescaleDB extension for time-series data</li>
                      <li>Data Processing: 
                        <ul>
                          <li>Emissions calculation: <span className="tech-term">CO₂ (kg/s) = (C × V × A × M) / (R × T)</span> where C=concentration, V=velocity, A=area, M=molar mass, R=gas constant, T=temperature</li>
                          <li>Data validation: Range checks and outlier detection using IQR method</li>
                          <li>Aggregation: 1-minute, 1-hour, and 24-hour rollups with configurable retention policies</li>
                        </ul>
                      </li>
                      <li>API Layer: RESTful endpoints with JWT authentication (OAuth 2.0), rate limiting (100 req/min), and OpenAPI 3.0 documentation</li>
                      <li>WebSocket Support: Real-time bidirectional communication for emission data transmission from frontend</li>
                      <li>Message Broker: HiveMQ Community Edition 2023.4 with MQTT over WebSockets support</li>
                    </ul>
                  </li>
                  <li><b>Web Portal Applications</b>: 
                    <ul>
                      <li><i>Factory Portal</i>: 
                        <ul>
                          <li>Authentication: Role-based access control (RBAC) with factory-specific permissions</li>
                          <li>Data Input: Forms for energy source entry (firewood, diesel, electricity) with unit conversion utilities</li>
                          <li>Visualization: Real-time dashboards with Chart.js 4.3.0 showing emission trends, energy usage, and compliance metrics</li>
                          <li>WebSocket Integration: Real-time emission data transmission to backend via WebSocket connections</li>
                          <li>Reporting: Automated PDF reports with factory-specific KPIs and regulatory compliance status</li>
                        </ul>
                      </li>
                      <li><i>KTDA Portal</i>: 
                        <ul>
                          <li>Network Analytics: Comparative views of all factories with filtering by region, size, and production capacity</li>
                          <li>Performance Benchmarking: Leaderboards ranked by emission intensity (kg CO₂/kg tea produced)</li>
                          <li>Compliance Tracking: Regulatory status dashboard with EU CBAM compliance indicators</li>
                          <li>Data Export: CSV, JSON, and PDF formats with customizable date ranges and metrics</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
                <p>Refer to subsequent sections for detailed technical specifications, API references, and deployment procedures.</p>
              </ContentSection>
            </div>
          </AnimatedSection>

          {/* Features Section */}
          <AnimatedSection id="features">
            <div className="section-spacing">
              <ContentSection title="System Features">
                <ul>
                  <li><b>Real-Time Emissions Monitoring</b>: Continuous measurement of CO₂ concentration (ppm) converted to mass flow (kg/s) using sensor data and chimney dimensions</li>
                  <li><b>WebSocket Data Transmission</b>: Bidirectional real-time communication between frontend and backend for emission data updates</li>
                  <li><b>Energy Usage Logging</b>: Web-based interface for recording energy consumption with automated unit conversions and validation</li>
                  <li><b>Performance Benchmarking</b>: Factory ranking system based on emission intensity metrics and compliance scores</li>
                  <li><b>Historical Data Analysis</b>: Interactive time-series charts with zoomable periods and comparative overlays</li>
                  <li><b>Regulatory Compliance</b>: Automated report generation for EU Carbon Border Adjustment Mechanism (CBAM) and local environmental regulations</li>
                </ul>
              </ContentSection>
            </div>
          </AnimatedSection>

          <AnimatedSection id="stakeholders">
            <div className="section-spacing">
              <ContentSection title="System Stakeholders">
                <ul>
                  <li><b>KTDA Manager</b>: 
                    <ul>
                      <li>Responsibilities: Network-wide emissions oversight, regulatory compliance, strategic decision-making</li>
                      <li>Access Level: Full system access with KTDA Portal privileges</li>
                    </ul>
                  </li>
                  <li><b>Factory Manager</b>: 
                    <ul>
                      <li>Responsibilities: Local emissions monitoring, energy data entry, equipment maintenance</li>
                      <li>Access Level: Factory-specific access with data entry and view permissions</li>
                    </ul>
                  </li>
                </ul>
              </ContentSection>
            </div>
          </AnimatedSection>

          <AnimatedSection id="technology-stack">
            <div className="section-spacing">
              <ContentSection title="Technology Stack">
                <ul>
                  <li><b>IoT Hardware</b>: 
                    <ul>
                      <li>Microcontroller: ESP32-WROOM-32 (dual-core 240MHz, Wi-Fi & Bluetooth)</li>
                      <li>Sensors: MH-Z19B CO₂ sensor, MAX6675 thermocouple amplifier, Adafruit anemometer</li>
                      <li>Power: 12V DC with battery backup (UPS)</li>
                    </ul>
                  </li>
                  <li><b>Backend</b>: 
                    <ul>
                      <li>Framework: Django 4.2.7 with DRF 3.14.0</li>
                      <li>Database: PostgreSQL 15.2 with TimescaleDB 2.12.0</li>
                      <li>Message Broker: HiveMQ 2023.4 Community Edition</li>
                      <li>WebSocket Implementation: Django Channels 4.0.0 for real-time bidirectional communication</li>
                      <li>Authentication: Simple JWT 5.3.0 with OAuth 2.0</li>
                    </ul>
                  </li>
                  <li><b>Frontend</b>: 
                    <ul>
                      <li>Framework: Next.js 13.5.4 with React 18.2.0</li>
                      <li>Rendering: Server-Side Rendering (SSR) and Static Site Generation (SSG) for optimal performance</li>
                      <li>WebSocket Client: Socket.IO 4.7.2 for real-time data transmission</li>
                      <li>Visualization: Chart.js 4.3.0 with react-chartjs-2</li>
                      <li>Styling: Tailwind CSS 3.3.3 with custom components</li>
                      <li>Routing: Next.js App Router for file-based routing and layout system</li>
                    </ul>
                  </li>
                  <li><b>Documentation</b>: 
                    <ul>
                      <li>API Docs: drf-yasg 1.21.7 for OpenAPI 3.0</li>
                      <li>Testing: Postman 10.18.9 collection</li>
                    </ul>
                  </li>
                </ul>
              </ContentSection>
            </div>
          </AnimatedSection>

          <AnimatedSection id="system-architecture">
            <div className="section-spacing">
              <ContentSection title="System Architecture">
                <p>The system implements a three-tier architecture with the following components:</p>
                <ul>
                  <li><b>Data Acquisition Layer</b>: 
                    <ul>
                      <li>Sensors deployed in factory chimneys collect environmental data</li>
                      <li>ESP32 microcontrollers process raw sensor data and format as JSON messages</li>
                      <li>Data transmission via MQTT to HiveMQ broker (TLS encrypted)</li>
                    </ul>
                  </li>
                  <li><b>Processing Layer</b>: 
                    <ul>
                      <li>Django backend consumes MQTT messages via paho-mqtt client</li>
                      <li>Data validation and transformation using Django serializers</li>
                      <li>Emissions calculations performed before storage in PostgreSQL</li>
                      <li>RESTful API endpoints exposed for frontend consumption</li>
                      <li>WebSocket endpoints for real-time bidirectional communication</li>
                    </ul>
                  </li>
                  <li><b>Presentation Layer</b>: 
                    <ul>
                      <li>Next.js-based web portals with role-based access control</li>
                      <li>Server-Side Rendering (SSR) for improved SEO and initial page load performance</li>
                      <li>WebSocket connections for real-time data transmission to backend</li>
                      <li>Interactive dashboards with Chart.js visualizations</li>
                    </ul>
                  </li>
                  <li><b>Data Flow</b>: 
                    <ul>
                      <li>Sensors → ESP32 → MQTT Broker → Django API → PostgreSQL → Next.js Portals</li>
                      <li>Energy input → Factory Portal → Django API → PostgreSQL</li>
                      <li>Real-time emission data → Factory Portal (WebSocket) → Django API → PostgreSQL</li>
                    </ul>
                  </li>
                  <li><b>Deployment</b>: 
                    <ul>
                      <li>Backend: Heroku dynos with PostgreSQL add-on</li>
                      <li>Frontend: Vercel for Next.js deployment with automatic SSR/SSG</li>
                      <li>MQTT Broker: AWS EC2 t3.medium instance</li>
                      <li>WebSocket Server: Django Channels with Daphne ASGI server</li>
                      <li>CDN: Cloudflare for static assets</li>
                    </ul>
                  </li>
                  <li><b>Security</b>: 
                    <ul>
                      <li>Transport: TLS 1.3 encryption for all communications</li>
                      <li>Authentication: JWT tokens with 15-minute expiration</li>
                      <li>Authorization: Django permissions framework with custom roles</li>
                      <li>WebSocket Security: Token-based authentication and origin validation</li>
                    </ul>
                  </li>
                </ul>
                <p><b>System Architecture Diagram:</b></p>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => openZoom('/architecture-diagram.png')}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openZoom('/architecture-diagram.png')}
                  className="responsive-image-container architecture-image"
                  aria-label="Open architecture diagram zoom"
                >
                  <Image
                    src="/architecture-diagram.png"
                    alt="System Architecture Diagram"
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="(max-width: 600px) 100vw, 700px"
                  />
                </div>
              </ContentSection>
            </div>
          </AnimatedSection>

          <AnimatedSection id="components">
            <div className="section-spacing">
              <ContentSection title="System Components">
                <h3 style={{ color: '#F79B72' }}>IoT Device (Carbon Track IoT)</h3>
                <ul>
                  <li><b>Hardware Specifications</b>: 
                    <ul>
                      <li>Microcontroller: ESP32-WROOM-32 (240MHz dual-core, 4MB flash)</li>
                      <li>CO₂ Sensor: MH-Z19B (0-5000ppm, ±50ppm + 3% reading)</li>
                      <li>Temperature Sensor: K-type thermocouple with MAX6675 amplifier (0°C to 1024°C)</li>
                      <li>Anemometer: Adafruit 1733 (0-32.4m/s, ±3% accuracy)</li>
                      <li>Power: 12V DC input with 18650 battery backup (2000mAh)</li>
                    </ul>
                  </li>
                  <li><b>Firmware Implementation</b>: 
                    <ul>
                      <li>Development Platform: Arduino IDE 2.2.1 with ESP32 board manager 2.0.11</li>
                      <li>Libraries: PubSubClient 2.8.0, ArduinoJson 6.21.3, MAX6675 1.0.0</li>
                      <li>Sampling Rate: 5-second intervals with configurable sleep modes</li>
                      <li>Data Format: JSON payload with timestamp, sensor readings, and device ID</li>
                      <li>Error Handling: Watchdog timer, sensor failure detection, automatic reconnection</li>
                    </ul>
                  </li>
                  <li><b>Deployment Requirements</b>: 
                    <ul>
                      <li>Installation Height: 1-2 meters above chimney base</li>
                      <li>Environmental Protection: IP67-rated enclosure with desiccant</li>
                      <li>Calibration: Biannual calibration using certified gas mixtures</li>
                    </ul>
                  </li>
                </ul>

                <h3 style={{ color: '#F79B72' }}>Backend System</h3>
                <ul>
                  <li><b>Technical Stack</b>: 
                    <ul>
                      <li>Framework: Django 4.2.7 with Python 3.11.5</li>
                      <li>API: Django REST Framework 3.14.0 with drf-yasg 1.21.7</li>
                      <li>Database: PostgreSQL 15.2 with TimescaleDB 2.12.0 extension</li>
                      <li>WebSocket: Django Channels 4.0.0 with Daphne ASGI server</li>
                      <li>Authentication: Simple JWT 5.3.0 with OAuth 2.0</li>
                      <li>MQTT: paho-mqtt 1.6.1 with HiveMQ broker</li>
                    </ul>
                  </li>
                  <li><b>Core Functionality</b>: 
                    <ul>
                      <li>Data Ingestion: MQTT consumer with message queue processing</li>
                      <li>WebSocket Handling: Real-time emission data reception from frontend</li>
                      <li>Validation: Range checks, data type validation, outlier detection</li>
                      <li>Calculations: Emissions mass flow, energy conversion factors</li>
                      <li>Storage: Time-series data with hypertable partitioning</li>
                      <li>API Endpoints: RESTful services with OpenAPI documentation</li>
                      <li>Scheduled Tasks: Report generation, data aggregation, notifications</li>
                    </ul>
                  </li>
                  <li><b>Repository</b>: 
                    <ul>
                      <li>URL: <a href="https://github.com/akirachix/carbontrack-backend.git" style={{ color: '#F79B72' }} target="_blank" rel="noreferrer">github.com/akirachix/carbontrack-backend.git</a></li>
                      <li>Branching Strategy: GitFlow with main, develop, and feature branches</li>
                      <li>CI/CD: GitHub Actions with automated testing and deployment</li>
                    </ul>
                  </li>
                </ul>

                <h3 style={{ color: '#F79B72' }}>Database Schema</h3>
                <ul>
                  <li><b>Core Models</b>: 
                    <ul>
                      <li>User: Django&apos;s built-in User model with custom profile</li>
                      <li>Factory: Factory details with location and capacity data</li>
                      <li>MCUDevice: IoT device information with calibration records</li>
                      <li>Emission: Time-series emission data with calculated mass flow</li>
                      <li>EnergyEntry: Energy consumption records with source types</li>
                      <li>ComplianceReport: Generated reports with regulatory metrics</li>
                    </ul>
                  </li>
                  <li><b>Schema Implementation</b>: 
                    <ul>
                      <li>Migrations: Django migrations with TimescaleDB hypertables</li>
                      <li>Indexes: Time-based partitioning and composite indexes</li>
                      <li>Constraints: Foreign keys, unique constraints, check constraints</li>
                    </ul>
                  </li>
                </ul>

                <h3 style={{ color: '#F79B72' }}>Web Portal Applications</h3>
                <ul>
                  <li><b>Factory Portal</b>: 
                    <ul>
                      <li>Framework: Next.js 13.5.4 with App Router architecture</li>
                      <li>Authentication: Factory-specific login with session management</li>
                      <li>Dashboard: Real-time emissions chart, energy input form, compliance status</li>
                      <li>Data Input: Energy source forms with unit conversion and validation</li>
                      <li>WebSocket Integration: Real-time emission data transmission to backend</li>
                      <li>Reports: PDF generation with factory-specific metrics</li>
                      <li>Responsive Design: Mobile-first approach with Tailwind CSS</li>
                      <li>Performance: Server-Side Rendering for improved SEO and initial load times</li>
                    </ul>
                  </li>
                  <li><b>KTDA Portal</b>: 
                    <ul>
                      <li>Framework: Next.js 13.5.4 with App Router architecture</li>
                      <li>Authentication: Role-based access with administrative privileges</li>
                      <li>Network View: Map-based factory overview with emission indicators</li>
                      <li>Analytics: Comparative charts, trend analysis, forecasting</li>
                      <li>Leaderboard: Factory ranking with emission intensity metrics</li>
                      <li>Compliance: Regulatory status dashboard with CBAM indicators</li>
                      <li>Data Export: Multi-format export with customizable parameters</li>
                      <li>Performance: Server-Side Rendering for improved SEO and initial load times</li>
                    </ul>
                  </li>
                  <li><b>Technical Implementation</b>: 
                    <ul>
                      <li>Framework: Next.js 13.5.4 with React 18.2.0</li>
                      <li>State Management: React Context API with useReducer</li>
                      <li>Data Fetching: Axios 1.5.0 with request interceptors and Next.js data fetching methods</li>
                      <li>WebSocket Client: Socket.IO 4.7.2 for real-time data transmission</li>
                      <li>Visualization: Chart.js 4.3.0 with react-chartjs-2</li>
                      <li>Styling: Tailwind CSS 3.3.3 with custom components</li>
                      <li>Routing: Next.js App Router for file-based routing and layout system</li>
                      <li>Rendering: Hybrid approach with SSR for dashboard pages and SSG for static content</li>
                    </ul>
                  </li>
                </ul>
              </ContentSection>
            </div>
          </AnimatedSection>

          <AnimatedSection id="api-endpoints">
            <div className="section-spacing">
              <ContentSection title="API Endpoints">
                <ul>
                  <li><b>Authentication</b>: 
                    <ul>
                      <li><code className="tech-term">POST /api/register/</code>: User registration with factory association</li>
                      <li><code className="tech-term">POST /api/login/</code>: JWT token generation with device fingerprinting</li>
                      <li><code className="tech-term">POST /api/token/refresh/</code>: JWT token refresh</li>
                    </ul>
                  </li>
                  <li><b>Energy Management</b>: 
                    <ul>
                      <li><code className="tech-term">GET /api/energy-entries/</code>: List energy entries with filtering</li>
                      <li><code className="tech-term">POST /api/energy-entries/</code>: Create new energy entry</li>
                      <li><code className="tech-term">PUT /api/energy-entries/{'{id}'}/</code>: Update energy entry</li>
                      <li><code className="tech-term">DELETE /api/energy-entries/{'{id}'}/</code>: Delete energy entry</li>
                    </ul>
                  </li>
                  <li><b>Emissions Data</b>: 
                    <ul>
                      <li><code className="tech-term">GET /api/emissions/</code>: List emission data with time filtering</li>
                      <li><code className="tech-term">POST /api/emissions/</code>: Create emission record (IoT only)</li>
                      <li><code className="tech-term">GET /api/emissions/aggregate/</code>: Aggregated emission data</li>
                      <li><code className="tech-term">WebSocket /ws/emissions/</code>: Real-time emission data submission</li>
                    </ul>
                  </li>
                  <li><b>Factory Management</b>: 
                    <ul>
                      <li><code className="tech-term">GET /api/factories/</code>: List factories with emission metrics</li>
                      <li><code className="tech-term">GET /api/factories/{'{id}'}/</code>: Factory details with current status</li>
                      <li><code className="tech-term">GET /api/factories/leaderboard/</code>: Factory performance ranking</li>
                    </ul>
                  </li>
                  <li><b>Compliance</b>: 
                    <ul>
                      <li><code className="tech-term">GET /api/compliance/reports/</code>: List compliance reports</li>
                      <li><code className="tech-term">POST /api/compliance/reports/</code>: Generate new report</li>
                      <li><code className="tech-term">GET /api/compliance/status/</code>: Current compliance status</li>
                    </ul>
                  </li>
                  <li><b>Device Management</b>: 
                    <ul>
                      <li><code className="tech-term">GET /api/mcu-devices/</code>: List IoT devices</li>
                      <li><code className="tech-term">POST /api/mcu-devices/</code>: Register new device</li>
                      <li><code className="tech-term">PUT /api/mcu-devices/{'{id}'}/</code>: Update device configuration</li>
                    </ul>
                  </li>
                </ul>
              </ContentSection>
            </div>
          </AnimatedSection>

          <AnimatedSection id="apidocumentation">
            <div className="section-spacing">
              <ContentSection title="API Documentation">
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '3.5rem',
                    maxWidth: 560,
                    margin: 'auto',
                    padding: '0 1rem',
                  }}
                >
                  {[
                    {
                      title: 'Swagger UI',
                      href: 'https://carbon-track-680e7cff8d27.herokuapp.com/api/schema/swagger-ui/',
                      img: '/images/swagger.png',
                    },
                    {
                      title: 'Redoc',
                      href: 'https://carbon-track-680e7cff8d27.herokuapp.com/api/schema/redoc/',
                      img: '/images/redoc.png',
                    },
                    {
                      title: 'Postman Collection',
                      href: 'https://documenter.getpostman.com/view/45609889/2sB3HooJrj',
                      img: '/images/postman.png',
                    },
                  ].map(({ title, href, img }) => (
                    <AnimatedCard
                      key={title}
                      style={{ cursor: 'pointer', textAlign: 'center' }}
                      onClick={() => window.open(href, '_blank')}
                    >
                      <h4 style={{ marginBottom: '1.2rem', cursor: 'pointer' }}>{title}</h4>
                      <Image
                        src={img}
                        alt={title}
                        width={320}
                        height={180}
                        style={{ borderRadius: 12, objectFit: 'cover' }}
                      />
                    </AnimatedCard>
                  ))}
                </div>
              </ContentSection>
            </div>
          </AnimatedSection>

          <AnimatedSection id="installation">
            <div className="section-spacing">
              <ContentSection title="Installation and Deployment">
                <h3 style={{ color: '#F79B72' }}>Prerequisites</h3>
                <ul>
                  <li>Python 3.11.5 or later</li>
                  <li>pip 23.2.1 or uv 0.1.11 package manager</li>
                  <li>PostgreSQL 15.2 with TimescaleDB extension</li>
                  <li>Git 2.42.0 or later</li>
                  <li>Node.js 18.18.0 or later (for frontend)</li>
                </ul>

                <h3 style={{ color: '#F79B72' }}>Backend Installation</h3>
                <ol>
                  <li>Clone repository: <code className="tech-term">git clone https://github.com/akirachix/carbontrack-backend.git</code></li>
                  <li>Navigate to project directory: <code className="tech-term">cd carbontrack-backend</code></li>
                  <li>Create virtual environment: <code className="tech-term">python -m venv venv</code></li>
                  <li>Activate virtual environment:
                    <ul>
                      <li>Linux/macOS: <code className="tech-term">source venv/bin/activate</code></li>
                      <li>Windows: <code className="tech-term">venv\Scripts\activate</code></li>
                    </ul>
                  </li>
                  <li>Install dependencies: <code className="tech-term">pip install -r requirements.txt</code></li>
                  <li>Configure environment variables:
                    <div className="code-block">
                      DEBUG=False<br/>
                      SECRET_KEY=your-secret-key<br/>
                      DATABASE_URL=postgresql://user:password@localhost/dbname<br/>
                      MQTT_HOST=your-mqtt-broker<br/>
                      MQTT_PORT=1883<br/>
                      MQTT_USERNAME=your-mqtt-user<br/>
                      MQTT_PASSWORD=your-mqtt-password
                    </div>
                  </li>
                  <li>Apply database migrations: <code className="tech-term">python manage.py migrate</code></li>
                  <li>Create superuser: <code className="tech-term">python manage.py createsuperuser</code></li>
                  <li>Collect static files: <code className="tech-term">python manage.py collectstatic</code></li>
                  <li>Run development server: <code className="tech-term">python manage.py runserver</code></li>
                  <li>Run WebSocket server: <code className="tech-term">daphne -p 8001 carbontrack.asgi:application</code></li>
                </ol>

                <h3 style={{ color: '#F79B72' }}>Frontend Installation</h3>
                <ol>
                  <li>Navigate to frontend directory: <code className="tech-term">cd frontend</code></li>
                  <li>Install dependencies: <code className="tech-term">npm install</code></li>
                  <li>Configure environment variables in <code className="tech-term">.env.local</code>:
                    <div className="code-block">
                      NEXT_PUBLIC_API_URL=http://localhost:8000/api<br/>
                      NEXT_PUBLIC_WS_URL=ws://localhost:8001/ws/emissions/
                    </div>
                  </li>
                  <li>Run development server: <code className="tech-term">npm run dev</code></li>
                </ol>

                <h3 style={{ color: '#F79B72' }}>Production Deployment</h3>
                <ul>
                  <li><b>Backend</b>: 
                    <ul>
                      <li>Deploy to Heroku with PostgreSQL add-on</li>
                      <li>Configure environment variables via Heroku Config Vars</li>
                      <li>Enable automatic builds from GitHub repository</li>
                      <li>Set up worker dyno for MQTT message processing</li>
                      <li>Configure WebSocket server with Daphne ASGI server</li>
                    </ul>
                  </li>
                  <li><b>Frontend</b>: 
                    <ul>
                      <li>Build optimized bundle: <code className="tech-term">npm run build</code></li>
                      <li>Deploy to Vercel with environment variables</li>
                      <li>Configure custom domain and SSL certificates</li>
                      <li>Enable Server-Side Rendering and Static Site Generation in Vercel dashboard</li>
                    </ul>
                  </li>
                  <li><b>MQTT Broker</b>: 
                    <ul>
                      <li>Deploy HiveMQ to AWS EC2 t3.medium instance</li>
                      <li>Configure TLS certificates for secure connections</li>
                      <li>Set up authentication and authorization policies</li>
                    </ul>
                  </li>
                </ul>
              </ContentSection>
            </div>
          </AnimatedSection>

          <AnimatedSection id="iotsetup">
            <div className="section-spacing">
              <ContentSection title="IoT Device Setup">
                <ul>
                  <li><b>Hardware Assembly</b>: 
                    <ul>
                      <li>Connect sensors to ESP32 according to pin configuration:
                        <div className="code-block">
                          CO₂ Sensor: VIN → 5V, GND → GND, TX → D2, RX → D3<br/>
                          Thermocouple: VCC → 3.3V, GND → GND, SCK → D5, CS → D6, SO → D7<br/>
                          Anemometer: Red → 5V, Black → GND, Yellow → D1
                        </div>
                      </li>
                      <li>Install components in IP67 enclosure with proper cable glands</li>
                      <li>Connect 12V DC power supply with battery backup</li>
                    </ul>
                  </li>
                  <li><b>Firmware Configuration</b>: 
                    <ul>
                      <li>Install ESP32 board manager in Arduino IDE</li>
                      <li>Flash firmware with sensor libraries:
                        <div className="code-block">
                          #include &lt;WiFi.h&gt;<br/>
                          #include &lt;PubSubClient.h&gt;<br/>
                          #include &lt;ArduinoJson.h&gt;<br/>
                          #include &lt;MHZ19.h&gt;<br/>
                          #include &lt;MAX6675.h&gt;
                        </div>
                      </li>
                      <li>Configure WiFi and MQTT credentials:
                        <div className="code-block">
                          const char* ssid = &quot;your-ssid&quot;;<br/>
                          const char* password = &quot;your-password&quot;;<br/>
                          const char* mqtt_server = &quot;your-mqtt-broker&quot;;<br/>
                          const int mqtt_port = 1883;<br/>
                          const char* mqtt_user = &quot;your-mqtt-user&quot;;<br/>
                          const char* mqtt_password = &quot;your-mqtt-password&quot;;
                        </div>
                      </li>
                      <li>Set sampling interval and calibration parameters</li>
                    </ul>
                  </li>
                  <li><b>Deployment Procedure</b>: 
                    <ul>
                      <li>Mount enclosure 1-2 meters above chimney base</li>
                      <li>Ensure sensors are positioned away from direct flame</li>
                      <li>Connect power supply and verify LED indicators</li>
                      <li>Test data transmission to MQTT broker</li>
                      <li>Perform initial calibration with certified gas mixture</li>
                    </ul>
                  </li>
                </ul>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
                  <AnimatedCard
                    style={{ maxWidth: 700, margin: '1rem auto', cursor: 'pointer' }}
                    onClick={() => openZoom('/iot-flashing-firmware.jpg')}
                  >
                    <Image
                      src="/images/carboncontainer2.png"
                      alt="IoT Device Assembly"
                      width={700}
                      height={450}
                      style={{ borderRadius: 12, objectFit: 'cover' }}
                    />
                  </AnimatedCard>
                  <AnimatedCard
                    style={{ maxWidth: 700, margin: '1rem auto', cursor: 'pointer' }}
                    onClick={() => openZoom('/iot-flashing-firmware.jpg')}
                  >
                    <Image
                      src="/images/carbon-container.png"
                      alt="IoT Device Enclosure"
                      width={700}
                      height={450}
                      style={{ borderRadius: 12, objectFit: 'cover' }}
                    />
                  </AnimatedCard>
                  <AnimatedCard
                    style={{ margin: '1rem auto', cursor: 'pointer' }}
                    onClick={() => openZoom('/iot-flashing-firmware.jpg')}
                  >
                    <Image
                      src="/images/container.jpg"
                      alt="IoT Device Installation"
                      width={700}
                      height={450}
                      style={{ borderRadius: 12, objectFit: 'cover' }}
                    />
                  </AnimatedCard>
                </div>
              </ContentSection>
            </div>
          </AnimatedSection>

          <AnimatedSection id="security-considerations">
            <div className="section-spacing">
              <ContentSection title="Security Considerations">
                <ul>
                  <li><b>Transport Layer Security</b>: 
                    <ul>
                      <li>MQTT: TLS 1.3 encryption with mutual authentication</li>
                      <li>API: HTTPS with HSTS header and TLS 1.3 cipher suites</li>
                      <li>WebSocket: WSS (WebSocket Secure) with TLS 1.3 encryption</li>
                      <li>Database: SSL/TLS encrypted connections</li>
                    </ul>
                  </li>
                  <li><b>Authentication & Authorization</b>: 
                    <ul>
                      <li>JWT tokens with 15-minute expiration and refresh tokens</li>
                      <li>Role-based access control (RBAC) with factory-specific permissions</li>
                      <li>OAuth 2.0 integration for enterprise identity providers</li>
                      <li>WebSocket Authentication: Token-based authentication with origin validation</li>
                    </ul>
                  </li>
                  <li><b>Data Protection</b>: 
                    <ul>
                      <li>Input validation and sanitization for all user inputs</li>
                      <li>Parameterized queries to prevent SQL injection</li>
                      <li>Content Security Policy (CSP) headers for XSS prevention</li>
                      <li>Sensitive data encryption at rest using AES-256</li>
                      <li>WebSocket Message Validation: Schema validation for all WebSocket messages</li>
                    </ul>
                  </li>
                  <li><b>Network Security</b>: 
                    <ul>
                      <li>Firewall rules restricting access to essential ports</li>
                      <li>VPN access for administrative interfaces</li>
                      <li>DDoS protection with rate limiting and request validation</li>
                      <li>WebSocket Rate Limiting: Message frequency limits to prevent abuse</li>
                    </ul>
                  </li>
                  <li><b>Monitoring & Auditing</b>: 
                    <ul>
                      <li>Comprehensive logging of all system activities</li>
                      <li>Real-time security event monitoring with alerts</li>
                      <li>Regular vulnerability scanning and penetration testing</li>
                      <li>WebSocket Connection Monitoring: Tracking of all active connections</li>
                    </ul>
                  </li>
                </ul>
              </ContentSection>
            </div>
          </AnimatedSection>

          <AnimatedSection id="testing-monitoring">
            <div className="section-spacing">
              <ContentSection title="Testing and Monitoring">
                <ul>
                  <li><b>Testing Strategy</b>: 
                    <ul>
                      <li>Unit Tests: Django TestCase with 95% code coverage</li>
                      <li>Integration Tests: MQTT message flow validation</li>
                      <li>WebSocket Tests: Socket.IO client-server communication validation</li>
                      <li>API Tests: Postman collections with automated validation</li>
                      <li>Frontend Tests: React Testing Library with Jest and Next.js specific testing</li>
                      <li>End-to-End Tests: Cypress for critical user journeys</li>
                    </ul>
                  </li>
                  <li><b>Quality Assurance</b>: 
                    <ul>
                      <li>Code Review: Pull request reviews with automated checks</li>
                      <li>Static Analysis: ESLint, Pylint, and Bandit integration</li>
                      <li>Performance Testing: Locust simulation for 1000 concurrent users</li>
                      <li>WebSocket Performance Testing: Load testing with multiple concurrent connections</li>
                      <li>Security Testing: OWASP ZAP and Burp Suite scans</li>
                    </ul>
                  </li>
                  <li><b>Monitoring</b>: 
                    <ul>
                      <li>Application Performance: New Relic APM with custom dashboards</li>
                      <li>Infrastructure: AWS CloudWatch for resource utilization</li>
                      <li>WebSocket Monitoring: Connection metrics, message throughput, and error rates</li>
                      <li>Error Tracking: Sentry with real-time alerts</li>
                      <li>Uptime Monitoring: Pingdom with 1-minute checks</li>
                    </ul>
                  </li>
                  <li><b>Success Metrics</b>: 
                    <ul>
                      <li>System Uptime: 99.9% availability target</li>
                      <li>Data Accuracy: 5% deviation from reference measurements</li>
                      <li>API Performance: 200ms response time for 95% of requests</li>
                      <li>WebSocket Performance: 100ms message latency for 95% of transmissions</li>
                      <li>Security Incidents: Zero critical vulnerabilities in production</li>
                    </ul>
                  </li>
                </ul>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <AnimatedCard
                    style={{
                      borderRadius: 12,
                      overflow: 'hidden',
                      cursor: 'pointer',
                      width: '100%',
                      maxWidth: 600,
                      height: 400,
                      boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                    }}
                  >
                    <Image
                      src="/images/carboncontainer2.png"
                      alt="Testing Dashboard"
                      width={400}
                      height={250}
                      style={{ borderRadius: 12, objectFit: 'cover' }}
                    />
                  </AnimatedCard>
                  <svg width="46" height="56" viewBox="0 0 56 56" fill="none" style={{ alignSelf: 'center' }}>
                    <path d="M8 28h32m0 0l-8-8m8 8l-8 8" stroke="#F79B72" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <AnimatedCard
                    style={{
                      borderRadius: 12,
                      overflow: 'hidden',
                      cursor: 'pointer',
                      width: '100%',
                      maxWidth: 600,
                      height: 400,
                      boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                    }}
                  >
                    <Image
                      src="/images/dashboard.png"
                      alt="Monitoring Dashboard"
                      width={500}
                      height={250}
                      style={{ borderRadius: 12, objectFit: 'cover' }}
                    />
                  </AnimatedCard>
                </div>
              </ContentSection>
            </div>
          </AnimatedSection>

          <AnimatedSection id="maintenance-scaling">
            <div className="section-spacing">
              <ContentSection title="Maintenance and Scaling">
                <ul>
                  <li><b>Version Control</b>: 
                    <ul>
                      <li>Git repository with semantic versioning</li>
                      <li>Branching strategy: GitFlow with main, develop, and feature branches</li>
                      <li>Automated tagging for releases</li>
                    </ul>
                  </li>
                  <li><b>Scaling Strategy</b>: 
                    <ul>
                      <li>Horizontal Scaling: Load balancer with multiple dynos</li>
                      <li>Database: Read replicas for reporting workloads</li>
                      <li>Caching: Redis for session storage and API responses</li>
                      <li>WebSocket Scaling: Horizontal scaling with Redis-based message broker</li>
                      <li>Message Queue: RabbitMQ for background processing</li>
                      <li>Next.js Scaling: Serverless functions for API routes and edge caching for static assets</li>
                    </ul>
                  </li>
                  <li><b>Disaster Recovery</b>: 
                    <ul>
                      <li>Automated daily backups with 30-day retention</li>
                      <li>Multi-region deployment for critical components</li>
                      <li>Failover procedures with documented runbooks</li>
                    </ul>
                  </li>
                  <li><b>Connectivity Mitigation</b>: 
                    <ul>
                      <li>Local buffering for IoT devices during outages</li>
                      <li>Automatic reconnection with exponential backoff</li>
                      <li>Data synchronization on connection restoration</li>
                      <li>WebSocket Reconnection: Automatic reconnection with backoff strategy</li>
                    </ul>
                  </li>
                </ul>
              </ContentSection>
            </div>
          </AnimatedSection>

          <AnimatedSection id="prerequisites">
            <div className="section-spacing">
              <ContentSection title="System Prerequisites">
                <ul>
                  <li><b>Software Requirements</b>: 
                    <ul>
                      <li>Python 3.11.5 or later</li>
                      <li>pip 23.2.1 or uv 0.1.11 package manager</li>
                      <li>PostgreSQL 15.2 with TimescaleDB extension</li>
                      <li>Git 2.42.0 or later</li>
                      <li>Node.js 18.18.0 or later</li>
                      <li>Next.js 13.5.4</li>
                      <li>Arduino IDE 2.2.1 with ESP32 board manager</li>
                    </ul>
                  </li>
                  <li><b>Hardware Requirements</b>: 
                    <ul>
                      <li>IoT Devices: ESP32-WROOM-32 microcontrollers</li>
                      <li>Sensors: MH-Z19B CO₂ sensors, K-type thermocouples, anemometers</li>
                      <li>Server: Minimum 2 vCPUs, 4GB RAM for production backend</li>
                      <li>Database: Minimum 4 vCPUs, 16GB RAM, 100GB SSD storage</li>
                    </ul>
                  </li>
                  <li><b>Network Requirements</b>: 
                    <ul>
                      <li>Stable internet connection with minimum 10 Mbps upload</li>
                      <li>Public IP address for MQTT broker</li>
                      <li>Firewall rules allowing ports 443 (HTTPS), 1883 (MQTT), 8080 (MQTT WebSocket), 8001 (WebSocket)</li>
                    </ul>
                  </li>
                  <li><b>Operational Requirements</b>: 
                    <ul>
                      <li>Technical staff with Python/Django expertise</li>
                      <li>Electrical engineering support for IoT deployment</li>
                      <li>Database administration capabilities</li>
                      <li>DevOps resources for deployment and maintenance</li>
                      <li>Next.js development experience for frontend implementation</li>
                      <li>WebSocket development experience for real-time features</li>
                    </ul>
                  </li>
                </ul>
              </ContentSection>
            </div>
          </AnimatedSection>

          <AnimatedSection id="installation-snippet">
            <div className="section-spacing">
              <ContentSection title="Installation Commands">
                <p>Complete backend installation sequence:</p>
                <div className="code-block">
                  git clone https://github.com/akirachix/carbontrack-backend.git<br/>
                  cd carbontrack-backend<br/>
                  python -m venv venv<br/>
                  source venv/bin/activate  # Or &quot;venv\\Scripts\\activate&quot; on Windows<br/>
                  pip install -r requirements.txt<br/>
                  cp .env.example .env<br/>
                  # Edit .env with your configuration<br/>
                  python manage.py migrate<br/>
                  python manage.py createsuperuser<br/>
                  python manage.py collectstatic<br/>
                  python manage.py runserver<br/>
                  # In a separate terminal for WebSocket server:<br/>
                  daphne -p 8001 carbontrack.asgi:application
                </div>
                <p>Complete frontend installation sequence:</p>
                <div className="code-block">
                  git clone https://github.com/akirachix/carbontrack-frontend.git<br/>
                  cd carbontrack-frontend<br/>
                  npm install<br/>
                  cp .env.example .env.local<br/>
                  # Edit .env.local with your configuration<br/>
                  npm run dev
                </div>
              </ContentSection>
            </div>
          </AnimatedSection>

          <AnimatePresence>
            {zoomedImage && (
              <>
                <motion.div
                  className="zoom-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={closeZoom}
                />
                <motion.div
                  className="zoom-modal"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={closeZoom}
                >
                  <Image
                    src={zoomedImage}
                    alt="Zoomed Image"
                    width={1000}
                    height={800}
                    style={{ borderRadius: 12 }}
                  />
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </main>
      </div>
    </>
  );
}