// src/services/api.js
// File ini memusatkan semua komunikasi dengan backend API

const BASE_URL = 'http://localhost:3000/api';

// — PROJECTS ____________________________________________
export const getAllProjects = async () => {
  const res = await fetch(`${BASE_URL}/projects`);
  return res.json();
};

export const createProject = async (data) => {
  const res = await fetch(`${BASE_URL}/projects`, {
    method : 'POST',
    headers: { 'Content-Type': 'application/json' },
    body   : JSON.stringify(data),
  });
  return res.json();
};

export const updateProject = async (id, data) => {
  const res = await fetch(`${BASE_URL}/projects/${id}`, {
    method : 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body   : JSON.stringify(data),
  });
  return res.json();
};

export const deleteProject = async (id) => {
  const res = await fetch(`${BASE_URL}/projects/${id}`, { method: 'DELETE' });
  return res.json();
};

// — SKILLS ____________________________________________
export const getAllSkills = async () => {
  const res = await fetch(`${BASE_URL}/skills`);
  return res.json();
};
