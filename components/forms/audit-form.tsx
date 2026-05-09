"use client";

import { useState } from "react";

export default function AuditForm() {
  const [form, setForm] = useState({
    audit_id: "",
    email: "",
    company_name: "",
    role: "",
    team_size: "",
  });

  return (
    <div className="space-y-4">
      <input
        className="w-full rounded-xl border border-white/10 bg-black/30 p-3 outline-none"
        placeholder="Audit ID"
        onChange={(e) =>
          setForm({
            ...form,
            audit_id: e.target.value,
          })
        }
      />

      <input
        className="w-full rounded-xl border border-white/10 bg-black/30 p-3 outline-none"
        placeholder="Email"
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value,
          })
        }
      />

      <input
        className="w-full rounded-xl border border-white/10 bg-black/30 p-3 outline-none"
        placeholder="Company Name"
        onChange={(e) =>
          setForm({
            ...form,
            company_name: e.target.value,
          })
        }
      />

      <input
        className="w-full rounded-xl border border-white/10 bg-black/30 p-3 outline-none"
        placeholder="Role"
        onChange={(e) =>
          setForm({
            ...form,
            role: e.target.value,
          })
        }
      />

      <input
        type="number"
        className="w-full rounded-xl border border-white/10 bg-black/30 p-3 outline-none"
        placeholder="Team Size"
        onChange={(e) =>
          setForm({
            ...form,
            team_size: e.target.value,
          })
        }
      />

      <button
        className="w-full rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:opacity-90"
        onClick={async () => {
  try {
    console.log("Submitting form:", form);

    const response = await fetch("/api/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        team_size: Number(form.team_size),
      }),
    });

    const result = await response.json();

    console.log("API Response:", result);

    if (result.success) {
      console.log("✅ Lead submitted successfully");
      alert("Lead submitted successfully");
    } else {
      console.error("❌ Submission failed:", result.error);
      alert("Submission failed");
    }
  } catch (error) {
    console.error("❌ Unexpected error:", error);
    alert("Something went wrong");
  }
}}
      >
        Submit Audit
      </button>
    </div>
  );
}