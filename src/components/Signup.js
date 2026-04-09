"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function Signup() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // useEffect(() => {
  //   const checkUser = async () => {
  //     const { data: { session } } = await supabase.auth.getSession();
  //     if (session?.user) router.replace("/dashboard");
  //   };
  //   checkUser();
  // }, [router]);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    // Mock Signup Implementation (No Supabase)
    setTimeout(() => {
      setLoading(false);
      setSuccessMsg("Registration Successful! Redirecting to login...");
      setTimeout(() => router.push("/login"), 1500);
    }, 1000);
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#FAFAFA", paddingTop: "80px" }}>
      <div style={{ background: "#FFF", padding: "40px", borderRadius: "24px", boxShadow: "0 10px 40px rgba(0,0,0,0.05)", width: "100%", maxWidth: "400px" }}>
        <h2 style={{ textAlign: "center", color: "#C40000", fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", marginBottom: "8px" }}>Join Us</h2>
        <p style={{ textAlign: "center", color: "#555", marginBottom: "25px", fontSize: "0.95rem" }}>Begin your journey to transformation.</p>

        {errorMsg && <div style={{ padding: "12px", marginBottom: "20px", borderRadius: "8px", background: "#ffebee", color: "#c62828", textAlign: "center", fontSize: "0.9rem" }}>{errorMsg}</div>}
        {successMsg && <div style={{ padding: "12px", marginBottom: "20px", borderRadius: "8px", background: "#e8f5e9", color: "#2e7d32", textAlign: "center", fontSize: "0.9rem" }}>{successMsg}</div>}

        <form onSubmit={handleSignup} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required style={inputStyle} />
          <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required style={inputStyle} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={inputStyle} />

          <button type="submit" disabled={loading} style={btnStyle(loading)}>
            {loading ? "Creating Profile..." : "Sign Up"}
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "25px", fontSize: "0.9rem", color: "#555" }}>
          Already have an account? <Link href="/login" style={{ color: "#F4A300", fontWeight: "600", textDecoration: "none" }}>Login here</Link>
        </p>
      </div>
    </div>
  );
}
const inputStyle = { padding: "14px", borderRadius: "10px", border: "1px solid #E5E5E5", width: "100%", outline: "none", fontSize: "0.95rem" };
const btnStyle = (isLoading) => ({ padding: "14px", borderRadius: "50px", border: "none", background: isLoading ? "#E5E5E5" : "#C40000", color: isLoading ? "#888" : "#FFF", fontWeight: "600", fontSize: "1rem", cursor: isLoading ? "not-allowed" : "pointer", marginTop: "10px" });