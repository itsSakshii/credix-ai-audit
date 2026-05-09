

"use client";

import { useState } from "react";

export default function AuditForm() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    audit_id: "",
    email: "",
    company_name: "",
    role: "",
    team_size: 0,
  });

  const handleSubmit = async () => {
    try {
      setLoading(true);

      // ✅ basic validation
      if (!form.email || !form.company_name || !form.role) {
        alert("Please fill all required fields");
        return;
      }

      if (form.team_size <= 0) {
        alert("Team size must be greater than 0");
        return;
      }

      console.log("Submitting form:", form);

      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      console.log("API Response:", result);

      if (response.ok) {
        if (result.type === "updated") {
          alert("⚡ Your lead was already submitted — we updated it!");
        } else {
          alert("🎉 Lead submitted successfully!");
        }

        // OPTIONAL: redirect to result page later
        // window.location.href = "/result";
      } else {
        alert(result.error || "Submission failed");
      }
    } catch (error) {
      console.error("❌ Unexpected error:", error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {/* Audit ID */}
      <input
        className="w-full rounded-xl border border-white/10 bg-black/30 p-3 outline-none"
        placeholder="Audit ID"
        value={form.audit_id}
        onChange={(e) =>
          setForm({ ...form, audit_id: e.target.value })
        }
      />

      {/* Email */}
      <input
        className="w-full rounded-xl border border-white/10 bg-black/30 p-3 outline-none"
        placeholder="Email"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      {/* Company Name */}
      <input
        className="w-full rounded-xl border border-white/10 bg-black/30 p-3 outline-none"
        placeholder="Company Name"
        value={form.company_name}
        onChange={(e) =>
          setForm({ ...form, company_name: e.target.value })
        }
      />

      {/* Role */}
      <input
        className="w-full rounded-xl border border-white/10 bg-black/30 p-3 outline-none"
        placeholder="Role"
        value={form.role}
        onChange={(e) =>
          setForm({ ...form, role: e.target.value })
        }
      />

      {/* Team Size */}
      <input
        type="number"
        className="w-full rounded-xl border border-white/10 bg-black/30 p-3 outline-none"
        placeholder="Team Size"
        value={form.team_size}
        onChange={(e) =>
          setForm({
            ...form,
            team_size: Number(e.target.value),
          })
        }
      />

      {/* Submit Button */}
      <button
        disabled={loading}
        className="w-full rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:opacity-90 disabled:opacity-50"
        onClick={handleSubmit}
      >
        {loading ? "Submitting..." : "Submit Audit"}
      </button>
    </div>
  );
}