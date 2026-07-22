CREATE EXTENSION IF NOT EXISTS postgis;

CREATE TABLE province (
  province_code VARCHAR(2) PRIMARY KEY,
  province_name_th TEXT NOT NULL,
  province_name_en TEXT,
  geom geometry(MultiPolygon, 4326)
);

CREATE TABLE amphoe (
  amphoe_code VARCHAR(4) PRIMARY KEY,
  province_code VARCHAR(2) REFERENCES province(province_code),
  amphoe_name_th TEXT NOT NULL,
  amphoe_name_en TEXT,
  geom geometry(MultiPolygon, 4326)
);

CREATE TABLE tambon (
  tambon_code VARCHAR(6) PRIMARY KEY,
  amphoe_code VARCHAR(4) REFERENCES amphoe(amphoe_code),
  tambon_name_th TEXT NOT NULL,
  tambon_name_en TEXT,
  geom geometry(MultiPolygon, 4326)
);

CREATE TABLE waste_cluster (
  cluster_id BIGSERIAL PRIMARY KEY,
  cluster_code VARCHAR(30) UNIQUE NOT NULL,
  cluster_name_th TEXT NOT NULL,
  cluster_name_en TEXT,
  province_code VARCHAR(2) REFERENCES province(province_code),
  status VARCHAR(20) DEFAULT 'active',
  geom geometry(MultiPolygon, 4326)
);

CREATE TABLE waste_vehicle (
  vehicle_id BIGSERIAL PRIMARY KEY,
  vehicle_code VARCHAR(30) UNIQUE NOT NULL,
  cluster_id BIGINT REFERENCES waste_cluster(cluster_id),
  status VARCHAR(20),
  latitude DOUBLE PRECISION,
  longitude DOUBLE PRECISION,
  speed_kmh NUMERIC(8,2),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_province_geom ON province USING GIST(geom);
CREATE INDEX idx_amphoe_geom ON amphoe USING GIST(geom);
CREATE INDEX idx_tambon_geom ON tambon USING GIST(geom);
CREATE INDEX idx_cluster_geom ON waste_cluster USING GIST(geom);
