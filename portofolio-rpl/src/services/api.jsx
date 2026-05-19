// services/api.jsx
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

// Helper function untuk mengambil token
const getToken = () => localStorage.getItem('token');

// Helper function untuk headers
const getHeaders = () => {
  const token = getToken();
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` })
  };
};

// Auth APIs
export const login = async (email, password) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  return response.json();
};

export const register = async (nama, email, password) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nama, email, password })
  });
  return response.json();
};

export const getMe = async () => {
  const response = await fetch(`${API_URL}/auth/me`, {
    method: 'GET',
    headers: getHeaders()
  });
  return response.json();
};

// Project APIs
export const getAllProjects = async () => {
  const response = await fetch(`${API_URL}/projects`);
  return response.json();
};

export const getProjectById = async (id) => {
  const response = await fetch(`${API_URL}/projects/${id}`);
  return response.json();
};

export const createProject = async (data) => {
  const response = await fetch(`${API_URL}/projects`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(data)
  });
  return response.json();
};

export const updateProject = async (id, data) => {
  const response = await fetch(`${API_URL}/projects/${id}`, {
    method: 'PUT',
    headers: getHeaders(),
    body: JSON.stringify(data)
  });
  return response.json();
};

export const deleteProject = async (id) => {
  const response = await fetch(`${API_URL}/projects/${id}`, {
    method: 'DELETE',
    headers: getHeaders()
  });
  return response.json();
};

// Skill APIs
export const getAllSkills = async () => {
  const response = await fetch(`${API_URL}/skills`);
  return response.json();
};

export const createSkill = async (data) => {
  const response = await fetch(`${API_URL}/skills`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(data)
  });
  return response.json();
};

export const updateSkill = async (id, data) => {
  const response = await fetch(`${API_URL}/skills/${id}`, {
    method: 'PUT',
    headers: getHeaders(),
    body: JSON.stringify(data)
  });
  return response.json();
};

export const deleteSkill = async (id) => {
  const response = await fetch(`${API_URL}/skills/${id}`, {
    method: 'DELETE',
    headers: getHeaders()
  });
  return response.json();
};

// Dashboard APIs
export const getDashboardStats = async () => {
  const response = await fetch(`${API_URL}/dashboard/stats`, {
    method: 'GET',
    headers: getHeaders()
  });
  return response.json();
};

export const getAdminDashboard = async () => {
  const response = await fetch(`${API_URL}/dashboard/admin`, {
    method: 'GET',
    headers: getHeaders()
  });
  return response.json();
};