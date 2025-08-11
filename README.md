# CSP451-Final-Project-Brief

Overview:
This system supports retail operations by using Docker containers for the frontend and backend services, along with Azure Functions for serverless tasks. It integrates Azure Key Vault for secret management, Application Insights and Azure Monitor for logging and monitoring, and uses a CI/CD pipeline to automate builds and deployments.

Setup Instructions:

Manual Setup: You can build and run the Docker containers locally, or deploy services directly through the Azure Portal.

CI/CD Pipeline: When you push code to GitHub, the pipeline automatically tests, builds Docker images, and deploys them to Azure services, ensuring faster and consistent updates.

Service Roles & Communication:

Frontend: Provides the user interface for customers and staff.

Backend: Handles the business logic, processes orders, and manages data.

Azure Functions: Perform background tasks and event-driven processes.

Communication: Services interact using REST APIs and event messages through queues or HTTP calls.

Queue/Event Message Formats:
Events and messages are sent as JSON objects, containing fields like order ID, status, and timestamps to keep track of data and workflow.

Log Sample with Correlation ID:
Logs are structured with unique correlation IDs that follow each request across services. This helps in troubleshooting and understanding the flow of operations end-to-end.

Security Measures:

Secrets Management: All sensitive data, such as API keys and connection strings, are securely stored in Azure Key Vault.

HTTPS: All web endpoints use HTTPS to encrypt data during transfer.

Authentication: Basic token-based authentication is implemented to verify users and protect access to the APIs.
