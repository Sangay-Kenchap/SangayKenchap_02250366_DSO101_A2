# Assignment II – CI/CD Pipeline Using Jenkins (DSO101)

## Student Details

**Name:** Sangay Kenchap
**Student ID:** 02250366

## Project Overview

This assignment demonstrates the implementation of a CI/CD pipeline for a Node.js To-Do application using Jenkins. The pipeline automates code checkout, dependency installation, testing, building, and deployment.

## Technologies Used

* Jenkins
* GitHub
* Node.js & npm
* Jest
* PostgreSQL
* Render

## Repository & Deployment

**GitHub Repository:** https://github.com/Sangay-Kenchap/SangayKenchap_02250366_DSO101_A2.git


## Jenkins Pipeline

The Jenkins pipeline consists of the following stages:

1. **Checkout** – Retrieve source code from GitHub.
2. **Install** – Install project dependencies using `npm install`.
3. **Build** – Build the application using `npm run build`.
4. **Test** – Execute unit tests using Jest.
5. **Deploy** – Deploy the application to Render after successful testing.

## Testing

Jest was used for automated testing.

Commands used:

```bash
npm install --save-dev jest
npm install --save-dev jest-junit
npm test
```

JUnit reports were generated and published in Jenkins.

## Deployment

### Backend

* Deployed as a Render Web Service.
* Connected to PostgreSQL database.
* Environment variables configured.

### Frontend

* Deployed as a Render Static Site.
* Built using `npm run build`.

## Challenges Faced

* Jenkins could not detect Node.js initially.
* GitHub authentication issues occurred during repository access.
* Render deployment failed due to configuration errors.

These issues were resolved through proper Jenkins configuration, GitHub PAT setup, and environment variable management.

## Learning Outcomes

Through this assignment, I learned:

* Jenkins pipeline creation
* Continuous Integration concepts
* Automated testing with Jest
* GitHub and Jenkins integration
* Automated deployment workflows
* CI/CD best practices

## Deliverables

* GitHub Repository
* Jenkinsfile
* Jenkins Pipeline Screenshot
* Test Results Screenshot
* Render Deployment Screenshot

## Conclusion

The CI/CD pipeline successfully automated the build, test, and deployment process of the application. This reduced manual effort, improved reliability, and ensured consistent software delivery.
