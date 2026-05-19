import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ nama: "", pesan: "" });

  return (
    <section className="section">
      <h2>Kontak</h2>
      <form className="form">
        <input 
          placeholder="Nama" 
          value={form.nama} 
          onChange={(e) => setForm({ ...form, nama: e.target.value })} 
        />
        <textarea 
          placeholder="Pesan" 
          value={form.pesan} 
          onChange={(e) => setForm({ ...form, pesan: e.target.value })} 
        ></textarea>
        <button>Kirim</button>
      </form>
    </section>
  );
}