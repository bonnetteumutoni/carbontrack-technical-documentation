Carbon Track
Overview
Carbon Track is a carbon emissions monitoring system for KTDA's 67 tea factories in Kenya, designed to ensure compliance with global regulations like the EU CBAM. It leverages IoT sensors, a Django REST API, and two web portals (Factory and HQ) to provide real-time CO₂ tracking, energy usage input, and compliance reporting. The system enables factory managers to input energy data and view emissions trends, while KTDA leadership monitors network-wide performance via leaderboards and reports.
For detailed technical specifications, see Technical Documentation.
Features

Real-Time CO₂ Monitoring: IoT sensors in factory chimneys measure CO₂ (ppm), temperature (°C), and gas velocity (m/s) for accurate emissions calculations.
Energy Usage Input: Factory managers enter energy data (e.g., firewood, diesel) via a user-friendly web portal.
Factory Emissions Leaderboard: Centralized dashboard ranking factories by emissions performance.
Historical Emission Visualization: Interactive charts for analyzing trends and compliance.
Compliance Reporting: Automated reports for regulatory requirements.

Stakeholders

KTDA Manager: Oversees emissions reporting and compliance across factories.
Factory Manager: Inputs energy data and monitors factory-level emissions.

Technology Stack

IoT: ESP32 microcontroller, CO₂ sensors, thermocouples, anemometers.
Backend: Django 4.2+, Django REST Framework, PostgreSQL, HiveMQ MQTT broker.
Frontend: React.js (suggested) for Factory and HQ web portals.
API Docs: Swagger UI and Redoc for endpoint documentation.

Prerequisites

Python 3.13+
pip or uv package manager
PostgreSQL database
Git
Stable internet for MQTT and API connectivity

Installation

Clone the repository:git clone https://github.com/akirachix/carbontrack-backend.git
cd carbontrack-backend


Create and activate a virtual environment:
Linux/macOS:python -m venv venv
source venv/bin/activate


Windows:python -m venv venv
venv\Scripts\activate




Install dependencies:uv pip install -r requirements.txt


Set environment variables (e.g., in .env):
DATABASE_URL: PostgreSQL connection string.
SECRET_KEY: Django secret key.
MQTT_BROKER_URL: HiveMQ broker URL.


Run database migrations:python manage.py migrate


Create a superuser for admin access:python manage.py createsuperuser


Collect static files:python manage.py collectstatic


Start the development server:python manage.py runserver



API Documentation

Swagger UI: https://carbon-track-680e7cff8d27.herokuapp.com/api/schema/swagger-ui/
Redoc: https://carbon-track-680e7cff8d27.herokuapp.com/api/schema/redoc/
Postman: https://documenter.getpostman.com/view/45609889/2sB3HooJrj

Access the API root at https://carbon-track-680e7cff8d27.herokuapp.com/api/ to explore endpoints.
IoT Setup

Flash ESP32 firmware with sensor libraries (e.g., MH-Z19 for CO₂).
Configure WiFi and MQTT credentials for HiveMQ.
Install sensors 1-2 meters up factory chimneys for accurate sampling.

Usage

Factory Managers: Use the Factory Portal to input energy data and view real-time emissions.
KTDA Leadership: Access the HQ Portal for network-wide insights and leaderboards.
Developers: Use API endpoints for user auth, data CRUD, and compliance reports.

Success Metrics

System Uptime: 50%+ operational time per factory.
Data Compliance: 100% factories submitting energy data on schedule.
Emission Impact: 20%+ factories meeting emissions targets.

Contributing
Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request. Follow the Technical Documentation for implementation details.
License
© 2025 GitHub, Inc.