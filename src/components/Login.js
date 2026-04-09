"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isChecking, setIsChecking] = useState(true);

  // useEffect(() => {
  //   const checkUser = async () => {
  //     const { data: { session } } = await supabase.auth.getSession();
  //     if (session?.user) {
  //       router.replace("/dashboard"); // Auto redirect to dashboard if logged in
  //     } else {
  //       setIsChecking(false);
  //     }
  //   };
  //   checkUser();
  // }, [router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    // Mock Login Implementation (No Supabase)
    setTimeout(() => {
      setLoading(false);
      router.push("/account/dashboard"); // Updated to match actual route
    }, 1000);
  };

  if (isChecking) return <div style={{ minHeight: "100vh", background: "#FFF" }} />;

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#FAFAFA", paddingTop: "80px" }}>
      <div style={{ background: "#FFF", padding: "40px", borderRadius: "24px", boxShadow: "0 10px 40px rgba(0,0,0,0.05)", width: "100%", maxWidth: "400px" }}>
        <h2 style={{ textAlign: "center", color: "#F4A300", fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", marginBottom: "8px" }}>Welcome Back</h2>
        <p style={{ textAlign: "center", color: "#555", marginBottom: "25px", fontSize: "0.95rem" }}>Sign in to continue your journey.</p>

        {errorMsg && <div style={{ padding: "12px", marginBottom: "20px", borderRadius: "8px", background: "#ffebee", color: "#c62828", textAlign: "center", fontSize: "0.9rem" }}>{errorMsg}</div>}

        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required style={inputStyle} />
          <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required style={inputStyle} />
          <button type="submit" disabled={loading} style={btnStyle(loading)}>
            {loading ? "Authenticating..." : "Login"}
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "25px", fontSize: "0.9rem", color: "#555" }}>
          New to Param Aalay? <Link href="/signup" style={{ color: "#C40000", fontWeight: "600", textDecoration: "none" }}>Join here</Link>
        </p>
      </div>
    </div>
  );
}

const inputStyle = { padding: "14px", borderRadius: "10px", border: "1px solid #E5E5E5", width: "100%", outline: "none", fontSize: "0.95rem" };
const btnStyle = (isLoading) => ({ padding: "14px", borderRadius: "50px", border: "none", background: isLoading ? "#E5E5E5" : "#FFD400", color: isLoading ? "#888" : "#0A0A0A", fontWeight: "600", fontSize: "1rem", cursor: isLoading ? "not-allowed" : "pointer", marginTop: "10px" });