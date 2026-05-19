import { useState, useEffect } from 'react';
import { getAllProjects } from '../services/api';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProjects()
      .then(res => {
        if (res.success) setProjects(res.data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="section">
      <h2>Proyek Saya</h2>
      {loading ? (
        <p>Memuat data...</p>
      ) : (
        <div className="grid">
          {projects.map(p => (
            <div key={p.id} className="card">
              <h3>{p.judul}</h3>
              <p>{p.deskripsi}</p>
              <p><strong>Teknologi:</strong> {p.teknologi}</p>
              {p.url_github && (
                <a href={p.url_github} target="_blank" rel="noreferrer" className="btn">GitHub</a>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}