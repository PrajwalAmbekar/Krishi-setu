import type { ApiError } from '../types/api.types.js';

function isApiError(err: unknown): err is ApiError {
  if (typeof err === 'object' && err != null && 'statusCode' in err && 'message' in err) {
    return true;
  }
  return false;
}
