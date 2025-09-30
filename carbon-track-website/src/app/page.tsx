'use client'
import { useState } from 'react'
import Sidebar from './components/Sidebar'
import ContentSection from './components/ContentSection'
import Image from 'next/image'

export default function Home() {
  const [zoomed, setZoomed] = useState(false)

  const toggleZoom = () => {
    setZoomed(!zoomed)
  }

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: '#f8f6f5',
        color: '#2A4759',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <Sidebar />
      <main style={{ flex: 1, padding: '2rem 3rem', overflowY: 'auto', marginLeft: 260 }}>
        <h1 style={{ color: '#2A4759', fontWeight: 'bold', marginBottom: '1rem' }}>Carbon Track</h1>

        <section style={{ marginBottom: '1.5rem', borderBottom: '1px #2A4759', paddingBottom: '1rem' }}>
          <p>
            Carbon Track is a real-time carbon emissions monitoring system for KTDA&apos;s 67 tea factories in Kenya, built to ensure compliance with global regulations like the EU CBAM. It integrates IoT sensors, a Django REST API, and two web portals (Factory and HQ) to track CO₂ emissions, input energy data, and generate compliance reports.
          </p>
        </section>

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

        <ContentSection title="Features">
          <ul>
            <li><b>Real-Time CO₂ Monitoring</b>: Tracks emissions (ppm) and converts to kg/s using IoT sensors.</li>
            <li><b>Energy Usage Input</b>: User-friendly portal for factory managers to log energy data (e.g., firewood, diesel).</li>
            <li><b>Emissions Leaderboard</b>: Ranks factories by emissions performance.</li>
            <li><b>Historical Visualization</b>: Interactive charts for analyzing trends.</li>
            <li><b>Compliance Reporting</b>: Automated reports for EU CBAM and other regulations.</li>
          </ul>
        </ContentSection>

        <ContentSection title="Stakeholders">
          <ul>
            <li><b>KTDA Manager</b>: Oversees emissions reporting and compliance across factories.</li>
            <li><b>Factory Manager</b>: Inputs energy data and monitors factory-level emissions.</li>
          </ul>
        </ContentSection>

        <ContentSection title="Technology Stack">
          <ul>
            <li><b>IoT</b>: ESP32 microcontroller, CO₂ sensors, thermocouples, anemometers.</li>
            <li><b>Backend</b>: Django 4.2+, Django REST Framework, PostgreSQL, HiveMQ MQTT broker.</li>
            <li><b>Frontend</b>: React.js (recommended) for web portals.</li>
            <li><b>API Docs</b>: Swagger UI, Redoc, Postman.</li>
          </ul>
        </ContentSection>

        <ContentSection title="Getting Started">
          <h3 style={{ color: '#F79B72' }}>Key Objectives</h3>
          <ul>
            <li>Real-time CO₂ monitoring with high accuracy.</li>
            <li>User-friendly energy usage input.</li>
            <li>Centralized dashboard with leaderboards.</li>
            <li>Automated compliance reporting.</li>
          </ul>

          <h3 style={{ color: '#F79B72' }}>Assumptions</h3>
          <ul>
            <li>Not all boilers are turned on simultaneously.</li>
            <li>Constant pressure and temperature across chimneys.</li>
            <li>Sensors installed 1-2 meters up chimneys for laminar flow.</li>
            <li>Stable power and connectivity.</li>
            <li>Atmospheric pressure ~101 kPa; average gas velocity 2-5 m/s.</li>
          </ul>

          <h3 style={{ color: '#F79B72' }}>Out of Scope</h3>
          <p>Agentic AI for emission pattern prediction (due to data and resource constraints).</p>
        </ContentSection>

        <ContentSection title="System Architecture">
          <p>The system follows a modular, IoT-cloud-web architecture:</p>
          <ul>
            <li><b>IoT Layer:</b> Sensors in factory chimneys collect data and transmit via MQTT.</li>
            <li><b>Backend Layer:</b> Django REST API handles data ingestion, processing, storage, and API endpoints.</li>
            <li><b>Frontend Layer:</b> Two React/Vue/Angular-based web portals (factory and HQ) for data input and visualization.</li>
            <li><b>Data Flow:</b> IoT → MQTT Broker (HiveMQ) → Backend (Django) → Database (PostgreSQL) → Web Portals.</li>
            <li><b>Deployment:</b> Heroku or cloud providers like AWS/GCP for scalability.</li>
            <li><b>Security:</b> TLS encryption for data transmission; token-based authentication for APIs.</li>
          </ul>
          <p><b>High-level diagram:</b></p>

          <div
            onClick={toggleZoom}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if(e.key === 'Enter' || e.key === ' ') toggleZoom() }}
            style={{
              position: zoomed ? 'fixed' : 'relative',
              top: zoomed ? 0 : 'auto',
              left: zoomed ? 0 : 'auto',
              width: zoomed ? '100vw' : '1000px',
              height: zoomed ? '100vh' : '650px',
              backgroundColor: zoomed ? 'rgba(0,0,0,0.8)' : 'transparent',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              borderRadius: 8,
              marginBottom: 16,
              zIndex: zoomed ? 1000 : 'auto',
            }}
            aria-label="Toggle zoom on system architecture diagram"
          >
            <Image
              src="/architecture-diagram.png"
              alt="System Architecture Diagram"
              width={zoomed ? 1200 : 1000}
              height={zoomed ? 900 : 650}
              style={{
                borderRadius: 8,
                objectFit: 'contain',
                boxShadow: zoomed ? '0 0 20px rgba(0,0,0,0.5)' : 'none',
                maxWidth: '100%',
                maxHeight: '100%',
              }}
              priority
            />
          </div>

          {zoomed && (
            <p
              style={{
                color: 'white',
                textAlign: 'center',
                marginTop: 8,
                cursor: 'pointer',
                userSelect: 'none',
              }}
              onClick={toggleZoom}
            >
              Click image or outside to close zoom
            </p>
          )}
        </ContentSection>

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
            <li>Repo: <a href="https://github.com/akirachix/carbontrack-backend.git" style={{ color: '#F79B72' }} target="_blank" rel="noreferrer">github.com/akirachix/carbontrack-backend.git</a></li>
          </ul>

          <h3 style={{ color: '#F79B72' }}>Database Schema</h3>
          <ul>
            <li>User, Factory, MCUDevice, Emission, EnergyEntry, ComplianceReport models.</li>
            <li>Run Django migrations to apply schema.</li>
          </ul>

          <h3 style={{ color: '#F79B72' }}>Frontend Web Portals</h3>
          <ul>
            <li>Factory Portal for data entry and monitoring.</li>
            <li>HQ Portal for network-wide leaderboards and insights.</li>
            <li>Recommended: React.js with Chart.js and Axios.</li>
          </ul>
        </ContentSection>

        <ContentSection title="API Endpoints">
          <p>Documented via Swagger and Redoc:</p>
          <ul>
            <li>/api/register/: POST for user signup</li>
            <li>/api/login/: POST for token auth</li>
            <li>/api/energy-entries/: CRUD energy data</li>
            <li>/api/emissions/: GET/POST emissions data</li>
            <li>/api/factories/: List factories, get leaderboard</li>
            <li>/api/compliance/: Generate reports</li>
            <li>/api/mcu-devices/: Manage IoT devices</li>
          </ul>
          <p>
            Postman collection: <a href="https://documenter.getpostman.com/view/45609889/2sB3HooJrj" style={{ color: '#F79B72' }} target="_blank" rel="noreferrer">Link</a>
          </p>
        </ContentSection>

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

          <h3 style={{ color: '#F79B72' }}>IoT Setup</h3>
          <ul>
            <li>Flash ESP32 firmware with sensor libraries.</li>
            <li>Configure WiFi and MQTT credentials.</li>
            <li>Install sensors 1-2 meters up chimneys.</li>
          </ul>
        </ContentSection>

        <ContentSection title="Security Considerations">
          <ul>
            <li>TLS encryption for MQTT and HTTPS for API.</li>
            <li>Token-based auth with role permissions.</li>
            <li>Input validation to prevent injection.</li>
            <li>Monitoring and alert logging.</li>
          </ul>
        </ContentSection>

        <ContentSection title="Testing and Monitoring">
          <ul>
            <li>Unit tests with Django TestCase.</li>
            <li>Integration tests with Postman and MQTT simulation.</li>
            <li>Success metrics: uptime, data compliance, emission impact.</li>
            <li>Monitoring tools: Sentry, Prometheus.</li>
          </ul>
        </ContentSection>

        <ContentSection title="Maintenance and Scaling">
          <ul>
            <li>Use Git for version control.</li>
            <li>Redis caching and horizontal scaling.</li>
            <li>Mitigate connectivity risks with offline buffering.</li>
          </ul>
        </ContentSection>

        <ContentSection title="Prerequisites">
          <ul>
            <li>Python 3.13+</li>
            <li>pip or uv package manager</li>
            <li>PostgreSQL</li>
            <li>Git</li>
            <li>Stable internet for MQTT and API</li>
          </ul>
        </ContentSection>

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

        <ContentSection title="IoT Setup">
          <ul>
            <li>Flash ESP32 firmware with sensor libs (e.g., MH-Z19).</li>
            <li>Configure MQTT and WiFi.</li>
            <li>Install sensors at standard chimney heights.</li>
          </ul>
        </ContentSection>

        <ContentSection title="API Documentation">
          <p>Explore detailed API docs:</p>
          <a
            href="https://carbon-track-680e7cff8d27.herokuapp.com/api/schema/swagger-ui/"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#F79B72', fontWeight: 'bold', textDecoration: 'underline' }}
          >
            Swagger UI
          </a>
          <br />
          <a
            href="https://carbon-track-680e7cff8d27.herokuapp.com/api/schema/redoc/"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#F79B72', fontWeight: 'bold', textDecoration: 'underline' }}
          >
            Redoc
          </a>
          <br />
                    <a
            href="https://documenter.getpostman.com/view/45609889/2sB3HooJrj"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#F79B72', fontWeight: 'bold', textDecoration: 'underline' }}
          >
            Postman Collection
          </a>
          <br />
        </ContentSection>
      </main>
    </div>
  )
}
