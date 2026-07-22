# 06. API Specification

## Base path

```text
/api/v1
```

## Response model

```json
{
  "success": true,
  "data": {},
  "error": null,
  "requestId": "..."
}
```

## Initial endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/health` | Service health |
| POST | `/auth/login` | Authenticate |
| GET | `/reports` | Search reports |
| POST | `/reports` | Create report |
| GET | `/reports/{id}` | Read report |
| PATCH | `/reports/{id}` | Update report |
| POST | `/reports/{id}/photos` | Add photograph |
| POST | `/reports/{id}/status` | Change workflow status |
| GET | `/dashboard/summary` | Authorized indicators |
| GET | `/map/layers` | Layer catalog |
| POST | `/sync` | Offline synchronization |
| GET | `/audit` | Authorized audit search |

## API requirements

- HTTPS in production.
- Authentication for non-public endpoints.
- Role and organization checks on every protected resource.
- Rate limiting and request-size limits.
- Server-side validation.
- No secrets or stack traces in client-facing errors.
- OpenAPI specification should be added as endpoints stabilize.
