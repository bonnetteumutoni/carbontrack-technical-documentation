 
<h2 style="color: blue" >Carbon Track 🌱</h2>

---

Carbon Track is a real-time carbon emissions monitoring system for KTDA's 67 tea factories in Kenya, built to ensure compliance with global regulations like the EU CBAM. It integrates IoT sensors, a Django REST API, and two web portals (Factory and HQ) to track CO₂ emissions, input energy data, and generate compliance reports.

---

<h2 style="color: blue" >📋 Overview</h2>

Carbon Track enables KTDA tea factories to monitor and manage carbon emissions in real-time, supporting compliance with environmental regulations and improving operational efficiency. The system consists of:





IoT Sensors: Measure CO₂, temperature, and gas velocity in factory chimneys.



Backend API: Django REST Framework for data processing and storage.



Web Portals: Factory Portal for data input and trends; HQ Portal for network-wide insights and leaderboards.

For detailed technical specifications, see the Technical Documentation.

---

<h2 style="color: blue" >✨ Features</h2>



Real-Time CO₂ Monitoring: Tracks emissions (ppm) and converts to kg/s using IoT sensors.



Energy Usage Input: User-friendly portal for factory managers to log energy data (e.g., firewood, diesel).



Emissions Leaderboard: Ranks factories by emissions performance.



Historical Visualization: Interactive charts for analyzing trends.



Compliance Reporting: Automated reports for EU CBAM and other regulations.

---
<h2 style="color: blue" >👥 Stakeholders</h2>




KTDA Manager: Oversees emissions reporting and compliance across factories.



Factory Manager: Inputs energy data and monitors factory-level emissions.

---

<h2 style="color: blue" >🛠️ Technology Stack</h2>



IoT: ESP32 microcontroller, CO₂ sensors, thermocouples, anemometers.



Backend: Django 4.2+, Django REST Framework, PostgreSQL, HiveMQ MQTT broker.



Frontend: React.js (recommended) for web portals.



API Docs: Swagger UI, Redoc, Postman.

---

<h2 style="color: blue" >🚀 Getting Started</h2>
<h3 style="color: orange;"> Key Objectives </h3>

- Real-time CO₂ monitoring with high accuracy.
- User-friendly energy usage input.
- Centralized dashboard with leaderboards.
- Automated compliance reporting.

<h3 style="color: orange;">Assumptions </h3>

- Not all boilers are turned on simultaneously.
- Constant pressure and temperature across chimneys.
- Sensors installed 1-2 meters up chimneys for laminar flow.
- Stable power and connectivity.
- Atmospheric pressure ~101 kPa; average gas velocity 2-5 m/s.

<h3 style="color: orange;">Out of Scope </h3>

- Agentic AI for emission pattern prediction (due to data and resource constraints).

<h2 style="color: blue;">2. System Architecture</h2>

The system follows a modular, IoT-cloud-web architecture:
- **IoT Layer**: Sensors in factory chimneys collect data and transmit via MQTT.
- **Backend Layer**: Django REST API handles data ingestion, processing, storage, and API endpoints.
- **Frontend Layer**: Two React/Vue/Angular-based web portals (factory and HQ) for data input and visualization (not detailed in provided backend info; assume separate repo if needed).
- **Data Flow**: IoT → MQTT Broker (HiveMQ) → Backend (Django) → Database (PostgreSQL) → Web Portals.
- **Deployment**: Heroku (as per provided links) or cloud providers like AWS/GCP for scalability.
- **Security**: TLS encryption for data transmission; token-based authentication for APIs.

High-level diagram (use a tool like Draw.io to create and embed an image here):
- IoT Device (ESP32) → MQTT Publish → Backend Subscribe/Process → Store in DB → Query via API → Render in Portals.

<h2 style="color: blue;">  3. Components</h2>

<h3 style="color: orange;"> 3.1 IoT Device (Carbon Track IoT)</h3>

Installed in factory chimneys for real-time monitoring.
- **Hardware**:
  - ESP32 Microcontroller: Handles data aggregation and transmission.
  - CO₂ Sensor: Measures in ppm; converts to kg/s using formula: CO₂ (kg/s) = ppm × flow rate (m³/s) × density (kg/m³).
  - Thermocouple: Measures temperature (°C) for density adjustment.
  - Anemometer: Measures velocity (m/s) for flow rate.
    
- **Features**:
  - Real-time tracking: CO₂, temperature, velocity.
  - Alerts: For high emissions or abnormal temperatures/flows.
  - Data Aggregation: To kg CO₂/s for dashboards.
  - Transmission: Every 5 seconds via TLS-encrypted MQTT to HiveMQ broker.
- **Implementation Notes**:
  - Firmware: Written in C++ for ESP32 (use Arduino IDE or PlatformIO).
  - Libraries: PubSubClient for MQTT, relevant sensor libs (e.g., MH-Z19 for CO₂).
  - Power: Solar panel.

<h3 style="color: orange;">3.2 Backend (Django REST Framework)</h3>

The core API for data management.
- **Technology Stack** (from provided info):
  - Django 4.2+.
  - Django REST Framework.
  - drf-yasg for Swagger/Redoc docs.
  - PostgreSQL database.
  - Token authentication.
- **Key Modules**:
  - User Management: Registration, login, roles (KTDA Manager, Factory Manager).
  - CRUD Endpoints: For energy entries, emissions, compliance, factories, MCU devices.
- **Data Processing**:
  - Ingest MQTT data: Subscribe to topics, parse, and store.
  - Calculations: Correlate emissions with energy usage; generate reports.
- **Repository**: https://github.com/akirachix/carbontrack-backend.git (clone and set up as per installation guide below).

<h3 style="color: orange;">3.3 Database Schema (PostgreSQL)</h3>

Use Django models to define schema. Key models (inferred from features; create in `models.py` files):
- **User**: Extends Django's AbstractUser; fields: role (KTDA/Factory), factory_id (ForeignKey).
- **Factory**: Fields: name, location, chimney_dimensions (JSON for width/height).
- **MCUDevice**: Fields: factory (ForeignKey), device_id, last_heartbeat (DateTime).
- **Emission**: Fields: factory (ForeignKey), timestamp (DateTime), co2_ppm (Float), co2_kg_per_s (Float), temperature_c (Float), velocity_ms (Float), flow_rate_m3s (Float).
- **EnergyEntry**: Fields: factory (ForeignKey), timestamp (DateTime), energy_type (Char: e.g., 'Firewood', 'Diesel'), amount (Float), unit (Char: e.g., 'kWh', 'liters').
- **ComplianceReport**: Fields: factory (ForeignKey), period_start/end (Date), total_emissions_kg (Float), target_met (Boolean).
- Relationships: One-to-Many (Factory → Emissions/EnergyEntries).

Run `python manage.py makemigrations` and `python manage.py migrate` to apply.

<h3 style="color: orange;">3.4 Frontend Web Portals</h3>

- **Factory Portal**: For managers to input energy data, view real-time emissions/trends.
- **HQ Portal**: For KTDA leadership; includes leaderboards, network-wide views.
- **Tech Stack Suggestion**: React.js with Chart.js for visualizations; Axios for API calls.
- **Features**:
  - Real-time Dashboard: WebSockets or polling for live data.
  - Leaderboard: Ranked table by average emissions.
  - Historical Charts: Line/bar graphs for trends.
- **Integration**: Authenticate via backend tokens; fetch data from API endpoints.

If not implemented, create a separate repo (e.g., carbontrack-frontend) and link via API.

<h2 style="color: blue;">4. API Endpoints</h2>

Documented via Swagger/Redoc (links provided: https://carbon-track-680e7cff8d27.herokuapp.com/api/schema/swagger-ui/).
Key Endpoints (expand in code):
- `/api/register/`: POST for user signup.
- `/api/login/`: POST for token auth.
- `/api/energy-entries/`: CRUD for energy data.
- `/api/emissions/`: GET/POST for emissions data.
- `/api/factories/`: List factories; GET leaderboard.
- `/api/compliance/`: Generate reports.
- `/api/mcu-devices/`: Manage IoT devices.

Use Postman collection: https://documenter.getpostman.com/view/45609889/2sB3HooJrj for testing.

<h2 style="color: blue;"> 5. Installation and Deployment</h2>

### Prerequisites
- Python 3.13+.
- pip/uv for packages.
- PostgreSQL database.
- Git.

<h3 style="color: orange;">Installation Steps (Backend)</h3>

1. Clone repo: `git clone https://github.com/akirachix/carbontrack-backend.git`.
2. `cd carbontrack-backend`.
3. Create venv: `python -m venv venv` (activate accordingly).
4. Install deps: `uv pip install -r requirements.txt`.
5. Set env vars (e.g., in `.env`): DATABASE_URL, SECRET_KEY, MQTT_BROKER_URL.
6. Migrate DB: `python manage.py migrate`.
7. Create superuser: `python manage.py createsuperuser`.
8. Collect static: `python manage.py collectstatic`.
9. Run server: `python manage.py runserver`.

<h3 style="color: orange;"> Deployment</h3>

- Heroku: Push to GitHub and host it on Heroku; configure add-ons for PostgreSQL and MQTT.
- Alternatives: Dockerize for AWS/EC2; use Procfile (as in repo) for gunicorn.

<h3 style="color: orange;">IoT Setup</h3>

- Flash ESP32 firmware.
- Configure WiFi/MQTT credentials.
- Install sensors per chimney specs.

<h2 style="color: blue;">6. Security Considerations</h2>

- Encryption: TLS for MQTT and HTTPS for API.
- Auth: Token-based; role-based permissions (e.g., Factory Managers can't access HQ data).
- Data Validation: Sanitize inputs to prevent injection.
- Monitoring: Log alerts for anomalies.

<h2 style="color: blue;">7. Testing and Monitoring</h2>

- **Unit Tests**: Use Django's TestCase for models/views.
- **Integration Tests**: Postman for API; simulate MQTT publishes.
- **Success Metrics (from PRD)**:
  - Uptime: 50%+ operational time.
  - Data Compliance: 100% factories submitting data.
  - Emission Impact: 20%+ factories meeting targets.
- Tools: Sentry for errors; Prometheus for metrics.

<h2 style="color: blue;"> 8. Maintenance and Scaling</h2>

- Updates: Use Git for version control.
- Scaling: Add Redis for caching; horizontal scaling for high-traffic portals.
- Risks: Connectivity issues in remote factories; mitigate with offline buffering.



<h2 style="color: blue;"> 9. Prerequisites</h2>




Python 3.13+



pip or uv package manager



PostgreSQL database



Git



Stable internet for MQTT and API connectivity

Installation





Clone the repository:

```sh
git clone https://github.com/akirachix/carbontrack-backend.git
cd carbontrack-backend
```


Create and activate a virtual environment:





Linux/macOS:

```sh
python -m venv venv
source venv/bin/activate

```

Windows:

```sh
python -m venv venv
venv\Scripts\activate

```

Install dependencies:

```sh
uv pip install -r requirements.txt

```

Set environment variables in .env:

DATABASE_URL,<br>
SECRET_KEY, <br>
MQTT_BROKER_URL=mqtt://broker.hivemq.com:1883 <br>



Run database migrations:

```sh
python manage.py migrate

```

Create a superuser for admin access:

```sh
python manage.py createsuperuser
```


Collect static files:

```sh
python manage.py collectstatic

```

Start the development server:

```sh
python manage.py runserver
```

IoT Setup





Flash ESP32 firmware with sensor libraries (e.g., MH-Z19 for CO₂).



Configure WiFi and MQTT credentials for HiveMQ.



Install sensors 1-2 meters up factory chimneys for accurate sampling.

<h2 style="color: blue" >🌐 API Documentation</h2>


Explore endpoints via:





Swagger UI: https://carbon-track-680e7cff8d27.herokuapp.com/api/schema/redoc/



Redoc: https://documenter.getpostman.com/view/45609889/2sB3HooJrj


API root: https://carbon-track-680e7cff8d27.herokuapp.com/api/

---


<h2 style="color: blue" >📊 Success Metrics</h2>



System Uptime: 50%+ operational time per factory.



Data Compliance: 100% factories submitting energy data on schedule.



Emission Impact: 20%+ factories meeting emissions targets.

---
<h3 style="color: orange">Click here to see technical documentation</h3>

[Technical Documentation](technicalDocumentation.md)
 
<h2 style="color: blue" >📜 License</h2>


© 2025 GitHub, Inc. Licensed under the MIT License.

