# Assignment II – CI/CD Pipeline Using Jenkins (DSO101)

## Student Details

**Name:** Sangay Kenchap
**Student ID:** 02250366

## Project Overview

This assignment focuses on implementing a Continuous Integration and Continuous Deployment (CI/CD) pipeline for a Node.js To-Do application using Jenkins. The pipeline automates code retrieval, dependency installation, testing, building, and deployment.

## Tools Used

* Jenkins
* GitHub
* Node.js & npm
* Jest
* Render
* PostgreSQL

## Jenkins Setup

1. Installed Jenkins and accessed it via `localhost:8080`.
2. Installed the following plugins:

   * Pipeline
   * GitHub Integration
   * NodeJS Plugin
3. Configured Node.js in **Manage Jenkins → Global Tool Configuration**.

## GitHub Integration

* Hosted the project on GitHub.
* Generated a GitHub Personal Access Token (PAT).
* Added GitHub credentials in Jenkins for repository access.

## Pipeline Configuration

A `Jenkinsfile` was created with the following stages:

### 1. Checkout

Retrieves the latest source code from GitHub.

### 2. Install

Installs project dependencies using:

```bash
npm install
```

### 3. Build

Builds the application using:

```bash
npm run build
```

### 4. Test

Runs unit tests using Jest:

```bash
npm test
```

Test reports are published in Jenkins using `jest-junit`.

### 5. Deploy

After successful testing, the application is deployed to Render.

## Testing Setup

Installed testing dependencies:

```bash
npm install --save-dev jest
npm install --save-dev jest-junit
```

Configured the test script in `package.json` to generate JUnit reports for Jenkins.

## Deployment

### Backend

* Deployed as a Render Web Service.
* Connected to PostgreSQL database.
* Configured environment variables.

### Frontend

* Deployed as a Render Static Site.
* Built using `npm run build`.

## Challenges Faced

1. Jenkins initially failed to detect Node.js.

   * Solved by configuring the NodeJS Plugin.

2. GitHub authentication issues.

   * Solved using a Personal Access Token.

3. Deployment errors on Render.

   * Fixed by correctly setting environment variables and database configuration.

## Conclusion

The Jenkins CI/CD pipeline successfully automated the build, test, and deployment process of the To-Do application. This implementation improved development efficiency, reduced manual deployment effort, and ensured code quality through automated testing.

## Deliverables

* GitHub Repository Link
* Jenkinsfile
* Jenkins Pipeline Screenshot
* Test Results Screenshot
* Render Deployment Screenshots
