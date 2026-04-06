import React, { useState } from "react";
import { useGetComplaints, useCreateComplaint } from "@/hooks/complaint.hooks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";
import api from "@/services/axios";

const Dashboard = () => {
  const { data: complaints, isLoading, refetch } = useGetComplaints();
  const { mutate: createComplaint } = useCreateComplaint();

  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "LOW",
    visibility: "PUBLIC",
    category: "PLUMBING",
  });

  const handleSubmit = () => {
    createComplaint(form, {
      onSuccess: () => {
        toast.success("Complaint created!");
        refetch();
      },
      onError: () => {
        toast.error("Failed to create complaint");
      },
    });
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const role = localStorage.getItem("role");

  const handleAssign = (id) => {
  const staffId = prompt("Enter Staff ID");

  api.patch(`/complaints/${id}/assign`, { staffId })
    .then(() => {
      toast.success("Assigned successfully");
      refetch();
    })
    .catch(() => {
      toast.error("Assignment failed");
    });
};

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button onClick={handleLogout}>Logout</Button>
      </div>

      {/* CREATE FORM */}
      <div className="border p-4 rounded-lg space-y-3">
        <h2 className="font-semibold">Create Complaint</h2>

        <Input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <Input
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        {/* Priority */}
        <select
          className="w-full border p-2 rounded"
          value={form.priority}
          onChange={(e) => setForm({ ...form, priority: e.target.value })}
        >
          <option value="LOW">LOW</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="HIGH">HIGH</option>
        </select>

        {/* Visibility */}
        <select
          className="w-full border p-2 rounded"
          value={form.visibility}
          onChange={(e) => setForm({ ...form, visibility: e.target.value })}
        >
          <option value="PUBLIC">PUBLIC</option>
          <option value="PRIVATE">PRIVATE</option>
        </select>

        {/* Category */}
        <select
          className="w-full border p-2 rounded"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        >
          <option value="PLUMBING">PLUMBING</option>
          <option value="ELECTRICITY">ELECTRICITY</option>
          <option value="LIFT">LIFT</option>
          <option value="PARKING">PARKING</option>
        </select>

        <Button onClick={handleSubmit}>Submit</Button>
      </div>

      {/* LIST */}
      <div>
        <h2 className="font-semibold mb-2">Complaints</h2>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="space-y-3">
            {complaints?.map((c) => (
              <div
                key={c._id}
                className="border p-4 rounded-lg shadow-sm flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{c.title}</p>
                  <p className="text-sm text-gray-500">{c.description}</p>

                  {/* NEW LINE 👇 */}
                  <p className="text-xs text-gray-400 flex gap-2 mt-1">
                    <span className="bg-gray-100 px-2 py-0.5 rounded">
                      {c.category}
                    </span>
                    <span className="bg-gray-100 px-2 py-0.5 rounded">
                      {c.priority}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded ${
                        c.visibility === "PUBLIC"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {c.visibility}
                    </span>
                  </p>
                </div>

                <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                  {c.status}
                </span>
                {role === "ADMIN" && (
                  <button
                    onClick={() => handleAssign(c._id)}
                    className="text-xs bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Assign
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
