// src/utils/queryParams.ts
export function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  const status = params.get("status");
  const statusDescription = params.get("status_description");
  const error = params.get("error");
  const errorDescription = params.get("error_description");

  return { status, statusDescription, error, errorDescription };
}
