// Backend API Base URL (for internal API calls)
const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:8000';

// Frontend URL (for CORS configuration)
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

// Export all configuration
module.exports = {
    API_BASE_URL,
    FRONTEND_URL,
    
    // Helper function to build API URLs
    buildApiUrl: (endpoint) => `${API_BASE_URL}${endpoint}`,
    
    // Common API endpoints
    ENDPOINTS: {
        FACULTY_ADVISOR: `${API_BASE_URL}/facultyadvisor`,
        GET_USER: `${API_BASE_URL}/get-user`,
        VIEW_USER: (id) => `${API_BASE_URL}/view-user/${id}`,
        // Add more endpoints as needed
    }
};
