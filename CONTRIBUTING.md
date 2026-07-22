# Contributing to EAI-SWIS

Thank you for contributing to EAI-SWIS.

## Workflow

1. Create an issue for significant changes.
2. Create a branch from `main`.
3. Use a descriptive branch name such as `feature/gps-tracking`.
4. Keep commits focused and use clear messages.
5. Add or update tests and documentation.
6. Open a pull request.
7. Address review comments before merge.

## Commit examples

```text
feat: add waste report map filter
fix: prevent duplicate GPS records
docs: update deployment guide
test: add API health endpoint test
```

## Quality requirements

- Do not commit credentials, generated installers, `node_modules`, or local databases.
- Use relative paths in browser-facing files.
- Validate external input.
- Preserve mobile and desktop responsiveness.
- Document API and schema changes.
- Include migration instructions for breaking database changes.

## Definition of done

A change is complete when the implementation, tests, documentation, security impact, and backward compatibility have been reviewed.
