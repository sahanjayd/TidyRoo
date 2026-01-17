CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY,
  name text NOT NULL,
  suburb text,
  text text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  created_at timestamptz NOT NULL DEFAULT now(),
  approved boolean NOT NULL DEFAULT false,
  approved_at timestamptz
);

CREATE INDEX IF NOT EXISTS reviews_approved_created_at_idx
  ON reviews (approved, created_at DESC);
