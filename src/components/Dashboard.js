"use client";
import { useEffect, useState } from "react";
// import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [profile, setProfile] = useState(null);
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock Dashboard Fetch
    setTimeout(() => {
      setProfile({ full_name: 'Demo User', email: 'demo@example.com', city: 'Mumbai' });
      setRegistrations([
        {
          id: '1',
          registration_status: 'Confirmed',
          payment_status: 'Paid',
          events: {
            event_name: 'Naye Drishtikon Wala Shivir',
            start_date: '2025-10-15T06:00:00Z',
            city: 'Mumbai',
            programs: { title: 'Beginner Workshop', category: 'Beginner' }
          }
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>Loading your dashboard...</div>;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#FAFAFA", padding: "120px 5% 50px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

        {/* Profile Header */}
        <div style={{ background: "#FFF", padding: "30px", borderRadius: "20px", boxShadow: "0 4px 20px rgba(0,0,0,0.03)", marginBottom: "40px", borderLeft: "5px solid #F4A300" }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", color: "#0A0A0A", marginBottom: "10px" }}>Welcome, {profile?.full_name}</h1>
          <p style={{ color: "#555" }}>Email: {profile?.email} | City: {profile?.city || "Not Provided"}</p>
        </div>

        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", marginBottom: "20px", color: "#C40000" }}>My Registered Programs</h2>

        {/* Registrations Grid */}
        {registrations.length === 0 ? (
          <div style={{ textAlign: "center", padding: "50px", background: "#FFF", borderRadius: "20px" }}>
            <p style={{ color: "#888", fontSize: "1.1rem" }}>You haven't registered for any events yet.</p>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
            {registrations.map((reg) => (
              <div key={reg.id} style={{ background: "#FFF", padding: "25px", borderRadius: "16px", boxShadow: "0 4px 15px rgba(0,0,0,0.04)", border: "1px solid #eee" }}>
                <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px", color: "#F4A300", fontWeight: "bold" }}>
                  {reg.events?.programs?.category || "Program"}
                </span>
                <h3 style={{ fontSize: "1.3rem", margin: "10px 0", color: "#0A0A0A" }}>{reg.events?.event_name || reg.events?.programs?.title}</h3>
                <p style={{ color: "#555", fontSize: "0.9rem", marginBottom: "5px" }}>📍 Location: {reg.events?.city}</p>
                <p style={{ color: "#555", fontSize: "0.9rem", marginBottom: "20px" }}>📅 Date: {new Date(reg.events?.start_date).toLocaleDateString()}</p>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #f0f0f0", paddingTop: "15px" }}>
                  <span style={{ background: reg.registration_status === 'Confirmed' ? '#e8f5e9' : '#fff3e0', color: reg.registration_status === 'Confirmed' ? '#2e7d32' : '#e65100', padding: "5px 12px", borderRadius: "50px", fontSize: "0.8rem", fontWeight: "bold" }}>
                    {reg.registration_status}
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "#555", fontWeight: "600" }}>
                    Payment: {reg.payment_status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}