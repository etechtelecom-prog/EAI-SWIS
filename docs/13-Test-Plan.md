# 13. Test Plan

## Test levels

- Unit tests for validation and domain rules.
- API integration tests.
- Database migration tests.
- WebGIS interaction tests.
- Offline synchronization tests.
- File upload security tests.
- Role and organization authorization tests.
- Performance and concurrency tests.
- Backup and restoration tests.
- User acceptance testing.

## Critical acceptance scenarios

1. Create a georeferenced report with a photograph.
2. Reject invalid coordinates and unsupported files.
3. Prevent unauthorized cross-organization access.
4. Preserve status history.
5. Synchronize offline records without duplicates.
6. Restore a database and associated files.
7. Display a controlled failure when the API is unavailable.
8. Export only authorized data.

## Exit criteria

A production release requires documented test evidence, no unresolved critical vulnerabilities, approved migrations, tested rollback, and stakeholder acceptance.
