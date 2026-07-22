# 11. Security Architecture

## Security objectives

- Confidentiality of protected and personal information.
- Integrity of reports, status history, and audit records.
- Availability appropriate to the operational context.
- Accountability for significant actions.

## Required controls

- Strong authentication and secure session/token handling.
- Role-based and organization-scoped authorization.
- HTTPS for all production traffic.
- Input validation and parameterized database access.
- Secure file upload validation.
- Rate limits and request-size controls.
- Centralized audit logging.
- Encrypted backups and protected secrets.
- Dependency and vulnerability scanning.
- Incident-response and recovery procedures.

## Privacy and PDPA

A deploying organization must identify lawful purpose, data controller/processor roles, retention periods, data-subject procedures, and cross-system disclosures. Collect only data necessary for the defined operational purpose.

## Threat examples

- unauthorized report access;
- insecure direct object reference;
- malicious file upload;
- credential leakage;
- GPS and personal-data exposure;
- database injection;
- tampering with operational status;
- denial of service;
- loss of offline device data.
