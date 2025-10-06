
# 🎭 Playwright Docker CI

## 🚀 Project Overview

**playwright-docker-ci** is a robust **end-to-end (E2E) testing framework** built with **Playwright**, designed for modern web applications. It leverages **Docker** for consistent, containerized test environments and integrates seamlessly with **CI/CD pipelines** (GitHub Actions).  

This setup ensures **reliable, parallelized, and reproducible test execution**, with detailed reporting for QA engineers, SDETs, and developers alike.

Key capabilities include:  

- Automated E2E tests for Angular apps  
- Containerized execution via Docker  
- Parallel test execution for faster feedback  
- CI/CD integration for continuous quality assurance  
- HTML & JUnit reporting for actionable insights  

---

## ✨ Key Features

- **Reusable Page Object Model (POM):** Organize tests using page objects for maintainable and scalable automation.  
- **Containerized Setup:** Docker ensures the same environment across machines, eliminating "it works on my machine" issues.  
- **Parallel Execution:** Run tests concurrently across multiple browsers to reduce test cycle time.  
- **CI/CD Integration:** Automatically run tests on GitHub Actions with Docker and Node.js.  
- **Detailed Reporting:** HTML reports via Playwright’s reporter and JUnit XML for CI integrations.  
- **Trace & Debugging Support:** Capture traces on first retry to analyze flaky or failing tests.  

---

## 🛠 Tech Stack

| Layer               | Tools & Frameworks                                    |
|--------------------|--------------------------------------------------------|
| Test Automation     | Playwright, TypeScript                                |
| Containerization    | Docker, Docker Compose                                |
| CI/CD               | GitHub Actions                                        |
| Frontend            | Angular                                               |
| Reporting           | Playwright HTML Reporter, JUnit (test-results XML)    |
| Utilities           | Node.js, npm, wait-port                               |

---

## 📂 Project Structure

```
playwright-docker-ci/
├─ angular.json                 # Angular workspace configuration
├─ docker-compose.yml           # Defines services (Angular app + test runner)
├─ Dockerfile                   # Builds the Angular app container
├─ package.json                 # npm scripts and dependencies
├─ playwright.config.ts         # Playwright configuration (HTML + JUnit reporters)
├─ tsconfig.json                # TypeScript configuration
├─ page-objects/                # Page Object Models (reusable test logic)
│  ├─ datePicker.js
│  ├─ dialog.js
│  ├─ formLayouts.js
│  └─ homepage.js
├─ resources/                   # Test data and element locators
│  └─ pages/
│     └─ homepage.json
├─ tests/                       # Playwright E2E test suites
│  └─ e2e/
│     ├─ datePicker.spec.js
│     ├─ dialog.spec.js
│     ├─ formLayouts.spec.js
│     ├─ homepage.spec.js
│     └─ navigation.spec.js
├─ utils/                       # Helper functions (e.g., locator utilities)
│  └─ locatorUtils.js
├─ playwright-report/           # Auto-generated Playwright HTML reports
│  └─ index.html
├─ test-results/                # JUnit XML test outputs for CI
└─ README.md                    # (This file)
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/hossainks/playwright-docker-ci.git
cd playwright-docker-ci
```

### 2️⃣ Install Dependencies

```bash
npm install --force
```

### 3️⃣ Install Playwright Browsers

```bash
npx playwright install
```

### 4️⃣ Run Tests Locally

```bash
# Start Angular server
npm start

# Run Playwright tests
npx playwright test
```

### 5️⃣ Run Tests using Docker

```bash
docker compose up -d --build
npx playwright test
docker compose down
```

---

## 🔄 CI/CD Workflow

Tests run automatically on **GitHub Actions** for:

* `push` to `main` branch
* Pull Requests targeting `main`
* Manual workflow dispatch

**Workflow Steps:**

1. Checkout repository
2. Set up Node.js environment
3. Install dependencies and Playwright browsers
4. Launch Angular app in Docker
5. Run Playwright tests
6. Upload test artifacts (`playwright-report` & `JUnit XML`)
7. Tear down Docker containers

---

## 💻 Sample Test Commands

| Environment            | Command                                                                   |
| ---------------------- | ------------------------------------------------------------------------- |
| Local Angular server   | `npx playwright test`                                                     |
| Dockerized             | `docker compose up -d --build && npx playwright test`                     |
| CI/CD (GitHub Actions) | Automatically triggered via workflow (`.github/workflows/playwright.yml`) |

---

## 📊 Reporting & Logs

* **HTML Report:** `playwright-report/index.html` – Interactive view of test results.
* **JUnit XML:** `test-results/test-results.xml` – Compatible with CI dashboards, useful for build pipelines.
* **Trace Debugging:** Automatically captured on first retry to debug flaky tests.

---

## 🚀 Future Enhancements

* **AI-driven Test Case Generation:** Leverage AI to generate and optimize test scenarios.
* **Flaky Test Detection:** Implement automated retries and analytics for unstable tests.
* **Parallel Cloud Execution:** Scale tests across cloud infrastructure for faster CI pipelines.
* **Allure Reporting Integration:** Enhanced visualization and metrics dashboards.

---

## 📌 Conclusion

This project demonstrates **SDET-level expertise** in designing **robust, maintainable, and CI-ready E2E frameworks**. It reflects **modern testing best practices** including containerization, parallel execution, and actionable reporting.

---
