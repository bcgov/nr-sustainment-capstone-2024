[![MIT License](https://img.shields.io/github/license/bcgov/quickstart-openshift.svg)](/LICENSE.md)
[![Lifecycle](https://img.shields.io/badge/Lifecycle-Experimental-339999)](https://github.com/bcgov/repomountie/blob/master/doc/lifecycle-badges.md)

[![Merge](https://github.com/bcgov/quickstart-openshift/actions/workflows/merge.yml/badge.svg)](https://github.com/bcgov/quickstart-openshift/actions/workflows/merge.yml)
[![Analysis](https://github.com/bcgov/quickstart-openshift/actions/workflows/analysis.yml/badge.svg)](https://github.com/bcgov/quickstart-openshift/actions/workflows/analysis.yml)
[![Scheduled](https://github.com/bcgov/quickstart-openshift/actions/workflows/scheduled.yml/badge.svg)](https://github.com/bcgov/quickstart-openshift/actions/workflows/scheduled.yml)

##### Frontend (JavaScript/TypeScript)

[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=quickstart-openshift_frontend&metric=bugs)](https://sonarcloud.io/summary/new_code?id=quickstart-openshift_frontend)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=quickstart-openshift_frontend&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=quickstart-openshift_frontend)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=quickstart-openshift_frontend&metric=coverage)](https://sonarcloud.io/summary/new_code?id=quickstart-openshift_frontend)
[![Duplicated Lines](https://sonarcloud.io/api/project_badges/measure?project=quickstart-openshift_frontend&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=quickstart-openshift_frontend)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=quickstart-openshift_frontend&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=quickstart-openshift_frontend)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=quickstart-openshift_frontend&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=quickstart-openshift_frontend)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=quickstart-openshift_frontend&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=quickstart-openshift_frontend)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=quickstart-openshift_frontend&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=quickstart-openshift_frontend)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=quickstart-openshift_frontend&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=quickstart-openshift_frontend)

##### Backend (JavaScript/TypeScript)

[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=quickstart-openshift_backend&metric=bugs)](https://sonarcloud.io/summary/new_code?id=quickstart-openshift_backend)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=quickstart-openshift_backend&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=quickstart-openshift_backend)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=quickstart-openshift_backend&metric=coverage)](https://sonarcloud.io/summary/new_code?id=quickstart-openshift_backend)
[![Duplicated Lines](https://sonarcloud.io/api/project_badges/measure?project=quickstart-openshift_backend&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=quickstart-openshift_backend)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=quickstart-openshift_backend&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=quickstart-openshift_backend)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=quickstart-openshift_backend&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=quickstart-openshift_backend)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=quickstart-openshift_backend&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=quickstart-openshift_backend)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=quickstart-openshift_backend&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=quickstart-openshift_backend)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=quickstart-openshift_backend&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=quickstart-openshift_backend)

# Welcome to the Quackstack Team Capstone Project 🚀

## Our Mission

We're embarking on a journey to develop a mobile-first, intuitive, and modern web application inspired by the BC Government NMP Calculator (https://nmp.apps.nrs.gov.bc.ca/). Our intent is to make a Minimum Viable Product (MVP) based on the current NMP Calculator.

Our goal is to leverage technologies we're comfortable with, such as Postgres, Express, React, and Node (\*\*PERN), while also exploring new tools like OpenShift, Progressive Web Apps, GitHub Actions, Docker and more.

This project is not just about building, it's a learning journey!

## The Quackstack Crew 👥

- [@Shakespeares-spy](https://github.com/Shakespeares-spy)
- [@GDamaso](https://github.com/GDamaso)
- [@kcaparas1630](https://github.com/kcaparas1630)

## Proudly Sponsored By the Sustainment Team

We're honored to receive support from British Columbia's Natural Resources Sustainment Team. A big thank you to them for making this project possible!

## Repository Details

This repository was bootstrapped using the Quickstart for OpenShift (https://github.com/bcgov/quickstart-openshift).

## Environment Variables

Here's a quick rundown of the environment variables we'll be using:

| Key                        | Example              | Description                                          |
| -------------------------- | -------------------- | ---------------------------------------------------- |
| `API_HOST`                 | `'localhost'`        | Determines Express the hosting environment.          |
| `API_PORT`                 | `'3000'`             | Specifies the host API port.                         |
| `POSTGRES_USER`            | `'dbUsr'`            | PostgreSQL username for database connections.        |
| `POSTGRES_PASSWORD`        | `'useASafePasswd'`   | PostgreSQL password for database connections.        |
| `POSTGRES_DATABASE`        | `'dbName'`           | Name of the PostgreSQL database to connect to.       |
| `POSTGRES_HOST`            | `'localhost:1234'`   | Address of the PostgreSQL host.                      |
| `POSTGRES_PORT`            | `'1234'`             | Port where PostgreSQL is exposed.                    |
| `PGADMIN_DEFAULT_EMAIL`    | `'admin@email.ca'`   | Email for logging into the pgAdmin interface.        |
| `PGADMIN_DEFAULT_PASSWORD` | `'useASafePasswd'`   | Password for accessing the pgAdmin interface.        |
| `VITE_HOST`                | `localhost`          | Determines Vite hosting environment.                 |
| `VITE_PORT`                | `5173`               | Specified the host vite port.                        |
| `VITE_BACKEND_URL`         | `localhost:3000/api` | Specifies the backend root endpoint vite should use. |
