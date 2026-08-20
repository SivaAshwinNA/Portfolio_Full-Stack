CREATE TABLE IF NOT EXISTS projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  description TEXT NOT NULL,
  technologies TEXT NOT NULL,
  github_url TEXT DEFAULT '#',
  live_url TEXT DEFAULT '#'
);

CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO projects (title, description, technologies, github_url, live_url)
SELECT 'IoT Digital Signal Pollution Tracker',
       'An IoT system designed to scan, collect, store and visualize wireless signal-density data using an ESP32-based architecture.',
       'ESP32, IoT, Python, PostgreSQL, Streamlit', '#', '#'
WHERE NOT EXISTS (SELECT 1 FROM projects WHERE title = 'IoT Digital Signal Pollution Tracker');

INSERT INTO projects (title, description, technologies, github_url, live_url)
SELECT 'AI-Powered Cybersecurity Threat Detection',
       'A machine-learning oriented security project for detecting anomalous activity and supporting threat mitigation workflows.',
       'Python, ML, NLP, Hugging Face, FastAPI', '#', '#'
WHERE NOT EXISTS (SELECT 1 FROM projects WHERE title = 'AI-Powered Cybersecurity Threat Detection');

INSERT INTO projects (title, description, technologies, github_url, live_url)
SELECT 'Smart Warranty & Bill Management System',
       'A full-stack application concept for organizing bills, warranties, authentication and notification workflows.',
       'Java, Spring Boot, PostgreSQL, JWT', '#', '#'
WHERE NOT EXISTS (SELECT 1 FROM projects WHERE title = 'Smart Warranty & Bill Management System');

INSERT INTO projects (title, description, technologies, github_url, live_url)
SELECT 'Stress Detection in Academic Forums',
       'An NLP project exploring stress classification from academic forum text using transformer-based language models.',
       'Python, NLP, DistilBERT, Transformers', '#', '#'
WHERE NOT EXISTS (SELECT 1 FROM projects WHERE title = 'Stress Detection in Academic Forums');