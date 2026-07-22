# 05. Database Design Document

## Core entities

| Entity | Purpose |
|---|---|
| organizations | Participating agencies or local authorities |
| users | Authenticated identities |
| roles | Named authorization roles |
| permissions | Allowed actions |
| user_roles | User-role mapping |
| waste_reports | Main incident records |
| report_photos | Photo metadata and storage references |
| report_status_history | Workflow history |
| assignments | Operational responsibility |
| gps_tracks | Time-ordered tracking points |
| collection_routes | Planned or recorded routes |
| vehicles | Operational vehicles |
| map_layers | GIS layer catalog |
| boundaries | Administrative or project areas |
| notifications | User and operational alerts |
| audit_logs | Security and data-change events |

## Spatial fields

Production spatial records should use PostGIS geometry with an explicit SRID. WGS 84 (`EPSG:4326`) is suitable for exchange; projected systems should be used for accurate local distance and area calculations.

## Indexing

Recommended indexes include:
- report date/time;
- status and urgency;
- organization;
- spatial GiST index on report geometry;
- track identifier and timestamp;
- foreign-key indexes;
- audit event time and actor.

## Data integrity

Use primary keys, foreign keys, NOT NULL constraints, controlled enumerations/reference tables, timestamps, and migration scripts. Personal and operational data retention must be formally defined.
