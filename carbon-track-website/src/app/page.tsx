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
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: '#f8f6f5',
        fontFamily: 'Arial, sans-serif',
        color: '#2A4759',
      }}
    >
      <Sidebar />
      <main
        style={{
          flex: 1,
          marginLeft: 260,
          overflowY: 'auto',
          maxWidth: 1200,
          margin: '0 auto',
          padding: '2rem 3rem 4rem',
        }}>

        <motion.div
          id="landing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            position: 'relative',
            height: '60vh',
            marginBottom: '4rem',
            borderRadius: 12,
            overflow: 'hidden',
            boxShadow: '0 6px 25px rgba(0,0,0,0.15)',
            cursor: 'default',
            userSelect: 'none',
          }}
        >
          <Image
            src="/images/carbonemissions.jpg"
            alt="KTDA Tea Factory"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div
            style={{
              position: 'absolute',
              bottom: 40,
              left: 40,
              color: 'white',
              textShadow: '0 2px 10px rgba(0,0,0,0.8)',
              fontSize: '2.5rem',
              fontWeight: '700',
              maxWidth: 600,
            }}
          >
            Real-Time Carbon Emissions Monitoring for KTDA’s Tea Factories
          </div>
        </motion.div>

        <motion.h1
          style={{ fontWeight: 'bold', marginBottom: '2rem' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05, color: '#F79B72' }}
        >
          Carbon Track
        </motion.h1>

        <AnimatedSection id="overview">
          <ContentSection title="Overview">
            <p>
              Carbon Track enables KTDA tea factories to monitor and manage carbon emissions in real-time, supporting compliance with environmental regulations and improving operational efficiency. The system consists of:
            </p>
            <ul>
              <li><b>IoT Sensors</b>: Measure CO₂, temperature, and gas velocity in factory chimneys.</li>
              <li><b>Backend API</b>: Django REST Framework for data processing and storage.</li>
              <li><b>Web Portals</b>: Factory Portal for data input and trends; HQ Portal for network-wide insights and leaderboards.</li>
            </ul>
            <p>For detailed technical specifications, see the Technical Documentation.</p>
          </ContentSection>
        </AnimatedSection>

        <AnimatedSection id="features">
          <ContentSection title="Features">
            <ul>
              <li><b>Real-Time CO₂ Monitoring</b>: Tracks emissions (ppm) and converts to kg/s using IoT sensors.</li>
              <li><b>Energy Usage Input</b>: User-friendly portal for factory managers to log energy data (e.g., firewood, diesel).</li>
              <li><b>Emissions Leaderboard</b>: Ranks factories by emissions performance.</li>
              <li><b>Historical Visualization</b>: Interactive charts for analyzing trends.</li>
              <li><b>Compliance Reporting</b>: Automated reports for EU CBAM and other regulations.</li>
            </ul>
          </ContentSection>
        </AnimatedSection>

        <AnimatedSection id="stakeholders">
          <ContentSection title="Stakeholders">
            <ul>
              <li><b>KTDA Manager</b>: Oversees emissions reporting and compliance across factories.</li>
              <li><b>Factory Manager</b>: Inputs energy data and monitors factory-level emissions.</li>
            </ul>
          </ContentSection>
        </AnimatedSection>

        <AnimatedSection id="technology-stack">
          <ContentSection title="Technology Stack">
            <ul>
              <li><b>IoT</b>: ESP32 microcontroller, CO₂ sensors, thermocouples, anemometers.</li>
              <li><b>Backend</b>: Django 4.2+, Django REST Framework, PostgreSQL, HiveMQ MQTT broker.</li>
              <li><b>Frontend</b>: React.js (recommended) for web portals.</li>
              <li><b>API Docs</b>: Swagger UI, Redoc, Postman.</li>
            </ul>
          </ContentSection>
        </AnimatedSection>

        <AnimatedSection id="system-architecture">
          <ContentSection title="System Architecture">
            <p>The system follows a modular, IoT-cloud-web architecture:</p>
            <ul>
              <li><b>IoT Layer:</b> Sensors in factory chimneys collect data and transmit via MQTT.</li>
              <li><b>Backend Layer:</b> Django REST API handles data ingestion, processing, storage, and API endpoints.</li>
              <li><b>Frontend Layer:</b> Factory and HQ web portals for data input and visualization.</li>
              <li><b>Data Flow:</b> IoT → MQTT Broker (HiveMQ) → Backend (Django) → PostgreSQL DB → Web Portals.</li>
              <li><b>Deployment:</b> Heroku or cloud providers (AWS/GCP) for scalability.</li>
              <li><b>Security:</b> TLS encryption & token-based authentication.</li>
            </ul>
            <p><b>High-level architecture diagram:</b></p>
            <div
              role="button"
              tabIndex={0}
              onClick={() => openZoom('/architecture-diagram.png')}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openZoom('/architecture-diagram.png')}
              style={{
                cursor: 'pointer',
                borderRadius: 8,
                overflow: 'hidden',
                marginTop: '1rem',
                boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
                width: '100%',
                maxWidth: 1000,
                height: 650,
                position: 'relative',
              }}
              aria-label="Open architecture diagram zoom"
            >
              <Image
                src="/architecture-diagram.png"
                alt="System Architecture Diagram"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </ContentSection>
        </AnimatedSection>

        <AnimatedSection id="components">
          <ContentSection title="Components">
            <h3 style={{ color: '#F79B72' }}>IoT Device (Carbon Track IoT)</h3>
            <ul>
              <li>ESP32 Microcontroller, CO₂ sensor, thermocouple, anemometer hardware.</li>
              <li>Real-time tracking, alerts, data aggregation, and secure MQTT transmission every 5 seconds.</li>
              <li>Firmware in C++ using Arduino IDE or PlatformIO.</li>
            </ul>

            <h3 style={{ color: '#F79B72' }}>Backend (Django REST Framework)</h3>
            <ul>
              <li>Stack: Django 4.2+, DRF, drf-yasg, PostgreSQL, token authentication.</li>
              <li>User management, CRUD endpoints, MQTT ingestion, reporting.</li>
              <li>
                Repo:{' '}
                <a
                  href="https://github.com/akirachix/carbontrack-backend.git"
                  style={{ color: '#F79B72' }}
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/akirachix/carbontrack-backend.git
                </a>
              </li>
            </ul>

            <h3 style={{color: '#F79B72'}}>Database Schema</h3>
            <ul>
              <li>User, Factory, MCUDevice, Emission, EnergyEntry, ComplianceReport models.</li>
              <li>Run Django migrations to apply schema.</li>
            </ul>

            <h3 style={{color: '#F79B72'}}>Frontend Web Portals</h3>
            <ul>
              <li>Factory Portal for data entry and monitoring.</li>
              <li>HQ Portal for network-wide leaderboards and insights.</li>
              <li>Recommended: React.js with Chart.js and Axios.</li>
            </ul>
          </ContentSection>
        </AnimatedSection>

        <AnimatedSection id="api-endpoints">
          <ContentSection title="API Endpoints">
            <ul>
              <li><b>/api/register/</b>: POST to create user</li>
              <li><b>/api/login/</b>: POST for token authentication</li>
              <li><b>/api/energy-entries/</b>: CRUD operations for energy data</li>
              <li><b>/api/emissions/</b>: GET and POST emissions data</li>
              <li><b>/api/factories/</b>: List factories and emissions leaderboard</li>
              <li><b>/api/compliance/</b>: Generate compliance reports</li>
              <li><b>/api/mcu-devices/</b>: Manage IoT MCU devices</li>
            </ul>
          </ContentSection>
        </AnimatedSection>

        <AnimatedSection id="apidocumentation">
          <ContentSection title="API Documentation">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '3rem',
                maxWidth: 560,
                margin: 'auto',
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
                  <h4 style={{ marginBottom: '1rem', cursor: 'pointer' }}>{title}</h4>
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
        </AnimatedSection>

        <AnimatedSection id="installation">
          <ContentSection title="Installation and Deployment">
            <h3 style={{ color: '#F79B72' }}>Prerequisites</h3>
            <ul>
              <li>Python 3.13+</li>
              <li>pip or uv package manager</li>
              <li>PostgreSQL</li>
              <li>Git</li>
            </ul>

            <h3 style={{ color: '#F79B72' }}>Installation Steps (Backend)</h3>
            <ol>
              <li>Clone repo: <code>git clone https://github.com/akirachix/carbontrack-backend.git</code></li>
              <li>Navigate: <code>cd carbontrack-backend</code></li>
              <li>Create/activate virtual environment</li>
              <li>Install dependencies: <code>pip install -r requirements.txt</code></li>
              <li>Set env vars: <code>.env</code> file</li>
              <li>Run migrations: <code>python manage.py migrate</code></li>
              <li>Create superuser</li>
              <li>Collect static files: <code>python manage.py collectstatic</code></li>
              <li>Run server: <code>python manage.py runserver</code></li>
            </ol>

            <h3 style={{ color: '#F79B72' }}>Deployment</h3>
            <p>Host on Heroku or Dockerized AWS/EC2 with add-ons and Procfile.</p>
          </ContentSection>
        </AnimatedSection>

        <AnimatedSection id="iotsetup">
          <ContentSection title="IoT Setup">
            <ul>
              <li>
                <b>Flash ESP32 firmware with sensor libraries</b> — click the image to see a larger view:
              </li>
            </ul>
            <AnimatedCard
              style={{ maxWidth: 700, margin: '1rem auto', cursor: 'pointer' }}
              onClick={() => openZoom('/iot-flashing-firmware.jpg')}
            >
              <Image
                src="/images/carboncontainer2.png"
                alt="ESP32 Firmware Flashing"
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
                alt="ESP32 Firmware Flashing"
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
                alt="ESP32 Firmware Flashing"
                width={700}
                height={450}
                style={{ borderRadius: 12, objectFit: 'cover' }}
              />
            </AnimatedCard>
            <ul>
              <li>Configure MQTT and WiFi credentials.</li>
              <li>Install sensors 1-2 meters up chimneys.</li>
            </ul>
          </ContentSection>
        </AnimatedSection>

        <AnimatedSection id="security-considerations">
          <ContentSection title="Security Considerations">
            <ul>
              <li>TLS encryption for MQTT and HTTPS for API.</li>
              <li>Token-based auth with role permissions.</li>
              <li>Input validation to prevent injection.</li>
              <li>Monitoring and alert logging.</li>
            </ul>
          </ContentSection>
        </AnimatedSection>

        <AnimatedSection id="testing-monitoring">
          <ContentSection title="Testing and Monitoring">
            <ul>
              <li>Unit tests with Django TestCase.</li>
              <li>Integration tests with Postman and MQTT simulation.</li>
              <li>Success metrics: uptime, data compliance, emission impact.</li>
              <li>Monitoring tools: Sentry, Prometheus.</li>
            </ul>
            <div className='flex gap-2' style={{ alignItems: 'center' }}>
              <AnimatedCard
                style={{
                  marginTop: '1rem',
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
                  alt="Testing and Monitoring Dashboard"
                  width={400}
                  height={250}
                  style={{ borderRadius: 12, objectFit: 'cover' }}
                />
              </AnimatedCard>
         
              <div style={{ display: 'flex', alignItems: 'center', height: 400 }}>
                <svg width="46" height="56" viewBox="0 0 56 56" fill="none">
                  <path d="M8 28h32m0 0l-8-8m8 8l-8 8" stroke="#F79B72" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <AnimatedCard
                style={{
                  marginTop: '1rem',
                  borderRadius: 12,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  width: '100%',
                  maxWidth: 600,
                  height: 400,
                  boxShadow: '0 6px 20px rgba(0,0,0,0.15)',}}>
                <Image
                  src="/images/dashboard.png"
                  alt="Testing and Monitoring Dashboard"
                  width={500}
                  height={250}
                  style={{ borderRadius: 12, objectFit: 'cover' }}
                />
              </AnimatedCard>
            </div>
          </ContentSection>
        </AnimatedSection>

        <AnimatedSection id="maintenance-scaling">
          <ContentSection title="Maintenance and Scaling">
            <ul>
              <li>Use Git for version control.</li>
              <li>Redis caching and horizontal scaling.</li>
              <li>Mitigate connectivity risks with offline buffering.</li>
            </ul>
          </ContentSection>
        </AnimatedSection>
 
        <AnimatedSection id="prerequisites">
          <ContentSection title="Prerequisites">
            <ul>
              <li>Python 3.13+</li>
              <li>pip or uv package manager</li>
              <li>PostgreSQL</li>
              <li>Git</li>
              <li>Stable internet for MQTT and API</li>
            </ul>
          </ContentSection>
        </AnimatedSection>

        <AnimatedSection id="installation-snippet">
          <ContentSection title="Installation">
            <p>Clone repository and setup Django backend:</p>
            <pre
              style={{
                backgroundColor: '#2A4759',
                color: '#F79B72',
                padding: '1rem',
                borderRadius: '6px',
                overflowX: 'auto',
              }}
            >
              {`git clone https://github.com/akirachix/carbontrack-backend.git
             cd carbontrack-backend
             python -m venv venv
             source venv/bin/activate  # Or "venv\\Scripts\\activate" on Windows
             pip install -r requirements.txt
             python manage.py migrate
             python manage.py createsuperuser
             python manage.py collectstatic
             python manage.py runserver`}
            </pre>
          </ContentSection>
        </AnimatedSection>

        <AnimatePresence>
          {zoomedImage && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.85 }}
                exit={{ opacity: 0 }}
                onClick={closeZoom}
                style={{
                  position: 'fixed',
                  inset: 0,
                  backgroundColor: 'black',
                  zIndex: 2000,
                  cursor: 'zoom-out',
                }}
              />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: 'fixed',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  maxWidth: '90vw',
                  maxHeight: '90vh',
                  zIndex: 2001,
                  cursor: 'zoom-out',
                  borderRadius: 12,
                  overflow: 'hidden',
                }}
                onClick={closeZoom}
              >
                <Image
                  src={zoomedImage}
                  alt="Zoomed Image"
                  width={1200}
                  height={900}
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}