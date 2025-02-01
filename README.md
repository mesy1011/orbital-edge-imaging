# Orbital Edge Imaging - RESTful API

This project is a RESTful API for a fictional startup called **Orbital Edge Imaging (OEI)**. It allows customers to search for and order satellite images, as well as view their orders. The API is built using **Node.js**, **Express**, **PostgreSQL**, and **Docker**.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
  - [Prerequisites](#prerequisites)
  - [Local Setup](#local-setup)
  - [Running with Docker](#running-with-docker)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Attributions](#attributions)
- [Final Remarks](#final-remarks)

---

## Features

- **Satellite Image Management**:
  - Get all satellite images.
  - Get details of a specific satellite image.
- **Order Management**:
  - Purchase a satellite image (create an order).
  - Get all orders.
- **Validation and Error Handling**:
  - Validate user input and return appropriate error messages.
  - Ensure the application does not crash and returns sensible error messages.
- **Extras**:
  - Filtering and pagination for `Get all satellite images` and `Get all orders` endpoints.
  - Optional GeoJSON filter for finding images within a specific area of interest.

---

## Technologies Used

- **Backend**: Node.js, Express, TypeScript
- **Database**: PostgreSQL (with TypeORM for ORM)
- **Containerization**: Docker
- **Hosting**: Render, Vercel, Fly, or any other preferred platform
- **Geospatial Data Handling**: PostGIS (for PostgreSQL), Turf.js (optional)

---

## Setup and Installation

### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL (v13 or higher)
- Docker (optional, for containerization)
- Git (for cloning the repository)

### Local Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/orbital-edge-imaging.git
   cd orbital-edge-imaging