Carbon Track 🌱

---



Carbon Track is a real-time carbon emissions monitoring system for KTDA's 67 tea factories in Kenya, built to ensure compliance with global regulations like the EU CBAM. It integrates IoT sensors, a Django REST API, and two web portals (Factory and HQ) to track CO₂ emissions, input energy data, and generate compliance reports.

---

📋 Overview

Carbon Track enables KTDA tea factories to monitor and manage carbon emissions in real-time, supporting compliance with environmental regulations and improving operational efficiency. The system consists of:





IoT Sensors: Measure CO₂, temperature, and gas velocity in factory chimneys.



Backend API: Django REST Framework for data processing and storage.



Web Portals: Factory Portal for data input and trends; HQ Portal for network-wide insights and leaderboards.

For detailed technical specifications, see the Technical Documentation.

---

✨ Features





Real-Time CO₂ Monitoring: Tracks emissions (ppm) and converts to kg/s using IoT sensors.



Energy Usage Input: User-friendly portal for factory managers to log energy data (e.g., firewood, diesel).



Emissions Leaderboard: Ranks factories by emissions performance.



Historical Visualization: Interactive charts for analyzing trends.



Compliance Reporting: Automated reports for EU CBAM and other regulations.

---

👥 Stakeholders





KTDA Manager: Oversees emissions reporting and compliance across factories.



Factory Manager: Inputs energy data and monitors factory-level emissions.

---

🛠️ Technology Stack





IoT: ESP32 microcontroller, CO₂ sensors, thermocouples, anemometers.



Backend: Django 4.2+, Django REST Framework, PostgreSQL, HiveMQ MQTT broker.



Frontend: React.js (recommended) for web portals.



API Docs: Swagger UI, Redoc, Postman.

---

🚀 Getting Started

Prerequisites





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

DATABASE_URL, 
SECRET_KEY, 
MQTT_BROKER_URL=mqtt://broker.hivemq.com:1883



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

🌐 API Documentation

Explore endpoints via:





Swagger UI



Redoc



Postman Collection

API root: https://carbon-track-680e7cff8d27.herokuapp.com/api/

---

📊 Success Metrics





System Uptime: 50%+ operational time per factory.



Data Compliance: 100% factories submitting energy data on schedule.



Emission Impact: 20%+ factories meeting emissions targets.

---

 [Technical Documentation](technicalDocumentation.md)
 

📜 License

© 2025 GitHub, Inc. Licensed under the MIT License.
