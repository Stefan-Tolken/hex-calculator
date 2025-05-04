# Hexadecimal Calculator - IMY 772 Project

## Introduction
Welcome to the **Hexadecimal Calculator** project! This is an **intermediate-level** web development project designed to demonstrate **Test-Driven Development (TDD)** principles while integrating modern web technologies. The calculator performs basic arithmetic operations (**addition, subtraction, multiplication, and division**) on **hexadecimal numbers** while enforcing specific constraints.

## Video Tutorials
[Section 1](https://drive.google.com/drive/folders/1C32EcgPppFXToJOTzdpxaVXCD6bJBE0_?usp=sharing)

[Section 2](https://drive.google.com/drive/folders/15fADwAkGbfougGiglFRqlO8YAdM0nDjV?usp=sharing)

[Section 3](https://drive.google.com/drive/folders/1bVkqqTwbaWvfZ1x4ily8YyWeNmjxudxK?usp=sharing)

[Section 4](https://drive.google.com/drive/folders/1HxRRUJGUc2rKH8AVsolzMyuE53dBG6Nx?usp=sharing)

## Tech Stack & Purpose
This project uses the following technologies:

### **Frontend** - [Next.js](https://nextjs.org/)
- Used for building a fast, server-rendered React-based UI.
- Provides efficient client-side and server-side rendering for the calculator.

### **Backend** - [Node.js](https://nodejs.org/)
- Handles the core business logic and arithmetic operations.
- Processes API requests from the frontend.

### **Version Control & CI/CD** - [Git & GitHub](https://github.com/)
- Manages source code and tracks changes using Git.
- GitHub Actions automates testing and deployment.

### **Containerization** - [Docker](https://www.docker.com/)
- Used to package the application into a portable container.
- Ensures consistency across different environments (local, staging, production).

### **Cloud Hosting** - [AWS](https://aws.amazon.com/)
- Used for deploying the final application in a scalable cloud environment.
- AWS Lambda may be used for a serverless backend.

## Prerequisites
Since this is an **intermediate-level** project, it assumes prior knowledge of:
- **Basic JavaScript & React** – Understanding of ES6+ syntax and React components.
- **Node.js & Express** – Ability to create simple API endpoints.
- **Git & GitHub** – Familiarity with repositories, branching, and pull requests.
- **Docker Basics** – Running and managing Docker containers.
- **Basic AWS Knowledge** – Deploying applications using AWS services.

## Project Features
- **Hexadecimal Arithmetic**: Supports addition, subtraction, multiplication, and division.
- **Input Validation**: Accepts only valid hex numbers (0-9, A-F), enforces digit constraints.
- **No Decimals or Negatives**: Results are always non-negative and rounded.
- **GitHub Actions**: Automated testing workflow for continuous integration.
- **Dockerized Deployment**: Packaged for easy deployment using containers.
- **AWS Cloud Hosting**: Deployed on AWS for scalability and reliability.
