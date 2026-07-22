# 12. Developer Guide

## Development principles

- Keep UI, domain logic, API routes, and persistence separated.
- Use ES modules consistently where configured.
- Avoid global mutable state.
- Validate input on the server.
- Use migration scripts for schema changes.
- Keep secrets out of source control.
- Write small, reviewable commits.
- Update documentation with behavior changes.

## Branching

```text
main
feature/<name>
fix/<name>
docs/<name>
release/<version>
```

## Local quality checks

At minimum:
- install succeeds;
- configured application scripts start;
- health endpoint responds;
- browser console is checked;
- changed workflows are manually exercised;
- no credential or generated binary is committed.

Automated linting and tests should be added to `package.json` as the codebase matures.
