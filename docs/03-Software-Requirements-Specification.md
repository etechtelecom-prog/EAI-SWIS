# 03. Software Requirements Specification

## Functional requirements

### FR-01 Incident reporting
The system shall create a waste incident with date/time, coordinates, category, urgency, description, reporter metadata, and optional photographs.

### FR-02 Spatial display
The system shall display authorized incidents and operational layers on an interactive map.

### FR-03 Search and filtering
The system shall filter records by date, area, category, urgency, status, organization, and assigned team.

### FR-04 Workflow
The system shall support configurable states such as reported, verified, assigned, in progress, resolved, and closed.

### FR-05 Dashboard
The system shall summarize operational indicators without presenting demonstration values as verified production facts.

### FR-06 Offline operation
The desktop or field client shall retain authorized records offline and synchronize them when connectivity returns.

### FR-07 Media
The system shall associate photographs and files with reports while preserving metadata and access controls.

### FR-08 Export
Authorized users shall export selected records to supported formats.

### FR-09 Administration
Administrators shall manage users, roles, organizations, categories, boundaries, and system configuration.

### FR-10 Audit
The system shall record significant authentication, data-change, export, and administrative events.

## Non-functional requirements

- Security: least privilege, secure transport, input validation, secret protection.
- Availability: deployment-specific targets must be defined in an SLA.
- Performance: common map and dashboard requests should be responsive under the agreed load profile.
- Scalability: production data shall use PostgreSQL/PostGIS and indexed spatial queries.
- Maintainability: modules, APIs, migrations, and releases shall be documented.
- Usability: responsive layouts shall support desktop, tablet, and mobile use.
- Accessibility: interfaces should progressively align with WCAG practices.
- Privacy: only necessary personal data shall be collected and retained.
