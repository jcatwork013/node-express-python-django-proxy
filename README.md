# node-express-python-django-proxy

## Overview

Briefly describe your project, including its purpose, key features, and any other relevant information.

## Prerequisites

Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [python]
- [django]

## Installation

Use the following command to install the required packages:

```bash
npm install
```
# Database Setup

## Create Tables
To set up the required database tables, run the following command:

```bash
npm run create-tables
```

## Seed Data
If you want to populate the tables with sample data, use the following command:

```bash
npm run seed-data
```


## Usage
To start the server and run the project, use the following command:

```bash
npm run server
```

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

* Note: Make sure that your Node.js Express server is running on port 3001 as the proxy server forwards data from this port.

