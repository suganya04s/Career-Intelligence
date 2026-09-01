import { useState } from "react";
import { useCareer } from "../context/CareerContext";

function Applications() {
  const { applications, addApplication, deleteApplication, updateApplicationStatus, } = useCareer();

  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    company: "",
    role: "",
    status: "Applied",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.company || !form.role) {
      return;
    }

    addApplication({
      company: form.company,
      role: form.role,
      status: form.status,
    });

    setForm({
      company: "",
      role: "",
      status: "Applied",
    });

    setShowForm(false);
  };

  return (
    <main className="applications-page">

      <div className="page-header">
        <div>
          <p>Career Intelligence</p>
          <h1>Applications</h1>
          <span>
            Track and manage your job applications.
          </span>
        </div>

        <button
          className="add-btn"
          onClick={() => setShowForm(!showForm)}
        >
          + Add Application
        </button>
      </div>

      {showForm && (
        <form
          className="application-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="company"
            placeholder="Company name"
            value={form.company}
            onChange={handleChange}
          />

          <input
            type="text"
            name="role"
            placeholder="Job role"
            value={form.role}
            onChange={handleChange}
          />

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
          >
            <option value="Applied">Applied</option>
            <option value="Screening">Screening</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>

          <button type="submit">
            Save Application
          </button>
        </form>
      )}

      <section className="application-list">

        <div className="list-header">
          <h2>Recent Applications</h2>

          <span>
            {applications.length} applications
          </span>
        </div>

        {applications.map((application) => (
          <div
            className="application-card"
            key={application.id}
          >

            <div className="company-logo">
              {application.company.charAt(0)}
            </div>

            <div className="application-info">
              <h3>{application.role}</h3>
              <p>{application.company}</p>
            </div>

            <select
              className={`status ${application.status
                .toLowerCase()
                .replace(" ", "-")}`}
              value={application.status}
              onChange={(e) =>
                updateApplicationStatus(
                  application.id,
                  e.target.value
                )
              }
            >
              <option value="Applied">Applied</option>
              <option value="Screening">Screening</option>
              <option value="Interview">Interview</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
            </select>

            <span className="application-date">
              {application.date}
            </span>

            <button className="delete-btn" onClick={() => deleteApplication(application.id)}> Delete </button>

          </div>
        ))}

      </section>

    </main>
  );
}

export default Applications;