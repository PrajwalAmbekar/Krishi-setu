interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  timestamp?: number;
}

interface ApiErrorResponse {
  success: boolean;
  error: string;
  statusCode: number;
  message?: string;
}

interface ApiPaginationResponse<T> extends ApiResponse<T> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

function createApiResponse<T>(data: T, message?: string): ApiResponse<T> {
  return {
    success: true,
    data,
    message,
    timestamp: Date.now(),
  };
}

function createApiErrorResponse(
  error: string,
  statusCode: number,
  message?: string,
): ApiErrorResponse {
  return {
    success: false,
    error,
    statusCode,
    message,
  };
}
