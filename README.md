# 🛒 SauceDemo E2E Automation Framework

This repository contains an End-to-End (E2E) test automation framework for the SauceDemo e-commerce platform. 
It is designed following industry standards to ensure scalability, easy maintenance, and Continuous Integration (CI) readiness.

## 🛠️ Tech Stack

* **Test Framework:** Cypress
* **Language:** JavaScript
* **Data Generation:** Faker.js (Dynamic data insertion)
* **Reporting:** Cypress Mochawesome Reporter (HTML reports)
* **CI/CD:** GitHub Actions

## 🏗️ Architecture & Design Patterns

The project implements the best practices in QA Automation:
* **Page Object Model (POM):** Complete separation between page logic and test scripts.
* **Data-Driven Testing:** Iterative test execution using `Fixtures` (.json files).
* **Custom Commands:** Reusable Cypress commands (e.g., `cy.loginSauceDemo()`) to optimize repetitive code.
* **Responsive Testing:** UI validation across different viewports (Mobile and Desktop).
* **Environment Variables:** Secure credential management via `cypress.env.json`.
