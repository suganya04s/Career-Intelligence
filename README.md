# Career Intelligence

A responsive career management platform built with React.js to help job seekers understand their job readiness, analyze job requirements, identify skill gaps, and track job applications.

## Overview

Career Intelligence is designed as a single platform for managing the early stages of a job search.

Users can maintain their skills, analyze job descriptions against their current skill set, identify missing skills, and keep track of their job applications and statuses.

## Features

- 📊 Career Dashboard
  - Total applications
  - Interview count
  - Skill match percentage
  - Career readiness overview

- 🔍 Job Analyzer
  - Analyze job descriptions
  - Identify required skills
  - Compare job requirements with user skills
  - Calculate skill match percentage

- 🧠 Skill Gap Analysis
  - Identify missing skills
  - View areas that need improvement
  - Get skill-based recommendations

- 🛠️ My Skills
  - Add and manage technical skills
  - Maintain the user's current skill set

- 📋 Application Tracker
  - Add job applications
  - Track company and role details
  - Update application status
  - Delete applications
  - View application history

- 💾 Persistent Data
  - Stores application and career data using LocalStorage

- 📱 Responsive Design
  - Designed for desktop, tablet, and mobile screens

## Application Flow

```text
My Skills
    ↓
Job Analyzer
    ↓
Skill Match
    ↓
Skill Gap Analysis
    ↓
Apply for Job
    ↓
Track Application
    ↓
Monitor Career Progress

```

## Technologies Used

- React.js
- JavaScript
- HTML5
- CSS3
- React Router
- Context API
- LocalStorage

## Project Structure

```text
src/
├── components/
│   └── Sidebar.jsx
├── context/
│   └── CareerContext.jsx
├── pages/
│   ├── Dashboard.jsx
│   ├── JobAnalyzer.jsx
│   ├── MySkills.jsx
│   ├── SkillGap.jsx
│   └── Applications.jsx
├── App.jsx
└── main.jsx

```

## Installation

git clone https://github.com/suganya04s/Career-Intelligence.git
cd Career-Intelligence
npm install
npm run dev
