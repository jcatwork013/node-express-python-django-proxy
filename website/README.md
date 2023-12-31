# Python Proxy Server

This project involves a Python proxy server that forwards data from a Node.js Express server running on port 3001. Follow the instructions below to set up and run the proxy server.

## Prerequisites

Make sure you have the following software installed on your machine:

- [Python](https://www.python.org/) (version 3.x recommended)

## Usage

### Run Node.js Express Server

Ensure that your Node.js Express server is running on port 3001. If not, start the Node.js server before proceeding.

```bash
# Navigate to your Node.js project directory
cd your-node-express-project

# Start the Node.js server on port 3001
npm run server
```

### Run Python Proxy Server
To run the Python proxy server, use the following command:

```bash
python proxy.py
```

- The proxy server will now be running on port 8001.


### Run sample website [PORT=8000]

First, create the virtual environment
```bash
python3 -m venv django-env
```

Then, use this environment
```bash
source django-env/bin/activate
```

Next, install django
```bash
python -m pip install django
```

Next, install requests
```bash
python -m pip install requests
```

Start
```bash
python manage.py runserver
```

Open browser and access the URL:
```bash
http://localhost:8000/sample/user-list/
http://localhost:8000/sample/product-list/
```