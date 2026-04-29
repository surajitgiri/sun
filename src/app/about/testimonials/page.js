"use client";

import { useState } from 'react';

const testimonials = [
    {
        name: "Priya Sharma",
        city: "Mumbai",
        program: "Urja Shivir",
        rating: 5,
        avatar: "🌸",
        photoUrl: "",
        quote: "Before attending the Urja Shivir, I suffered from chronic fatigue and anxiety for years. Within just 5 days at Param Aalay, my energy completely transformed. The Adrishya Breakfast and Navel Hammering practice gave me a clarity I had never experienced before.",
        tag: "Energy & Healing"
    },
    {
        name: "Rajesh Kumar",
        city: "Delhi",
        program: "Naye Drishtikon Wala Shivir",
        rating: 5,
        avatar: "☀️",
        photoUrl: "",
        quote: "I was sceptical when my wife dragged me to the 6-day city camp. By day 3, I understood something profound — this is not spiritual theory, it is a practical science of the body and mind. My blood pressure readings have been normal ever since.",
        tag: "Health Transformation"
    },
    {
        name: "Anjali Mehta",
        city: "Pune",
        program: "Param Navratri",
        rating: 5,
        avatar: "🧘",
        photoUrl: "",
        quote: "The 11-Day Param Navratri Shivir was the most transformative experience of my life. Pujya Param Aalay Ji's guidance is beyond words. I returned home with a completely new understanding of myself and my relationship with food, sleep, and gratitude.",
        tag: "Spiritual Growth"
    },
    {
        name: "Vikram Singh",
        city: "Jaipur",
        program: "Morning Sun Prayog",
        rating: 5,
        avatar: "🌅",
        photoUrl: "",
        quote: "I have been doing the Morning Sun Gratitude practice for 8 months now. My joints no longer ache, my skin has improved, and I wake up before the alarm every day feeling genuinely enthusiastic about life. This is not just a practice — it is a revolution in living.",
        tag: "Daily Practice"
    },
    {
        name: "Sunita Verma",
        city: "Ahmedabad",
        program: "Cosmic Vision Shivir",
        rating: 5,
        avatar: "✨",
        photoUrl: "",
        quote: "After the 18-Day Cosmic Vision Shivir, I feel I have been given a completely new life. Old patterns of depression and negative thinking dissolved naturally. There was no preaching — only lived experience that changed my cells.",
        tag: "Inner Freedom"
    },
    {
        name: "Dr. Arjun Nair",
        city: "Bangalore",
        program: "Urja Shivir",
        rating: 5,
        avatar: "🔬",
        photoUrl: "",
        quote: "As a doctor, I was initially resistant to anything that seemed 'spiritual'. But the Sun To Human system is rooted in physiology, not faith. The oxygen retention science behind Navel Hammering is legitimate. My patients whom I recommended this to have shown measurable improvement.",
        tag: "Scientific Validation"
    },
    
];

const leaders = [
    {
        name: "Narendra Modi",
        role: "Prime Minister of India",
        party: "BJP",
        photoUrl: "/LeaderPhoto/narendramodi.jpg",
        avatar: "🇮🇳",
        since: "Supporter since 2019",
        bg: "#FFF3E0",
        color: "#E65100",
        message: "The ancient wisdom of Surya Namaskar and sun-based living is deeply rooted in our Vedic heritage. The Sun To Human mission revives this timeless knowledge for modern India."
    },
    {
        name: "Yogi Adityanath",
        role: "Chief Minister, Uttar Pradesh",
        party: "BJP",
        photoUrl: "/LeaderPhoto/yogi-adityanath.png",
        avatar: "🕉️",
        since: "Supporter since 2020",
        bg: "#FCE4EC",
        color: "#880E4F",
        message: "Dharma and health are inseparable. The Param Aalay path of solar living aligns with the yogic tradition that Uttar Pradesh proudly carries forward."
    },
    {
        name: "Ashok Gehlot",
        role: "Former CM, Rajasthan",
        party: "INC",
        photoUrl: "",
        avatar: "🌵",
        since: "Supporter since 2021",
        bg: "#E8F5E9",
        color: "#1B5E20",
        message: "Rajasthan is the land of the sun. The Urja Shivir camps in Jaipur have brought real, measurable health transformation to thousands of families in our state."
    },
    {
        name: "Bhupesh Baghel",
        role: "Former CM, Chhattisgarh",
        party: "INC",
        photoUrl: "",
        avatar: "🌿",
        since: "Supporter since 2022",
        bg: "#E0F7FA",
        color: "#006064",
        message: "Our tribal communities have always lived in harmony with the sun. Param Aalay is restoring this ancient wisdom to the modern world in a scientific, accessible way."
    },
    {
        name: "Eknath Shinde",
        role: "Chief Minister, Maharashtra",
        party: "Shiv Sena",
        photoUrl: "",
        avatar: "🐯",
        since: "Supporter since 2022",
        bg: "#FFF8E1",
        color: "#FF6F00",
        message: "Maharashtra has always been a land of saints and warriors. The Sun To Human path carries forward this tradition of self-mastery and inner strength."
    },
    {
        name: "Nitish Kumar",
        role: "Chief Minister, Bihar",
        party: "JDU",
        photoUrl: "",
        avatar: "🌾",
        since: "Supporter since 2021",
        bg: "#F3E5F5",
        color: "#4A148C",
        message: "Chhath Puja has taught Bihar to revere the sun for millennia. The Param Aalay mission is a modern scientific expression of the same deep truth our ancestors lived."
    },
    {
        name: "Arvind Kejriwal",
        role: "Chief Minister, Delhi",
        party: "AAP",
        photoUrl: "",
        avatar: "🏛️",
        since: "Supporter since 2022",
        bg: "#E3F2FD",
        color: "#0D47A1",
        message: "Delhi needs healing — of its air, its stress, and its spirit. The Naye Drishtikon camps have touched thousands of Delhi families with practical, life-changing tools."
    },
    {
        name: "Shivraj Singh Chouhan",
        role: "Former CM, Madhya Pradesh",
        party: "BJP",
        photoUrl: "",
        avatar: "🌻",
        since: "Supporter since 2020",
        bg: "#FFFDE7",
        color: "#F57F17",
        message: "Madhya Pradesh is the heart of India, and the heart must be healthy. The Sun To Human practices have transformed thousands of families across our state."
    },
    {
        name: "Pema Khandu",
        role: "Chief Minister, Arunachal Pradesh",
        party: "BJP",
        photoUrl: "",
        avatar: "🏔️",
        since: "Supporter since 2023",
        bg: "#E8EAF6",
        color: "#1A237E",
        message: "The people of Arunachal rise with the first sun in India every morning. The Param Aalay mission honours this sacred relationship between humans and sunlight."
    },
    {
        name: "Pramod Sawant",
        role: "Chief Minister, Goa",
        party: "BJP",
        photoUrl: "",
        avatar: "🌊",
        since: "Supporter since 2023",
        bg: "#E0F2F1",
        color: "#004D40",
        message: "Goa is blessed with abundant sunlight year-round. The Urja Shivir programs have shown our people how to transform this natural gift into cellular vitality and inner peace."
    },
    {
        name: "Himanta Biswa Sarma",
        role: "Chief Minister, Assam",
        party: "BJP",
        photoUrl: "",
        avatar: "🦏",
        since: "Supporter since 2022",
        bg: "#FBE9E7",
        color: "#BF360C",
        message: "Assam's rich tradition of Sattriya culture and nature-based living resonates deeply with the Sun To Human path. We welcome this mission to the Northeast with open hearts."
    },
    {
        name: "M. K. Stalin",
        role: "Chief Minister, Tamil Nadu",
        party: "DMK",
        photoUrl: "",
        avatar: "🌺",
        since: "Supporter since 2023",
        bg: "#EFEBE9",
        color: "#3E2723",
        message: "Tamil Nadu has a proud scientific temperament. The Sun To Human system's evidence-based approach to solar living resonates strongly with our rationalist tradition of wellness."
    },
];

const wellwishers = [
    {
        name: "ArogyaPlus",
        sector: "Wellness Tech",
        initials: "AP",
        bg: "#E1F5EE",
        color: "#0F6E56",
        logoUrl: "https://images.unsplash.com/photo-1777033356671-59469ab29684?q=80&w=1170&auto=format&fit=crop",
        website: "www.arogyaplus.in",
        since: "Partner since 2022",
        message: "At ArogyaPlus, we have always believed that true wellness begins with the sun. Since aligning with the Param Aalay mission, we have witnessed hundreds of our users reverse chronic fatigue, improve sleep quality, and rediscover vitality — simply by following the Sun To Human practices. This is not alternative medicine. This is foundational human science, and we are proud to stand beside it."
    },
    {
        name: "SunVeda",
        sector: "Ayurveda",
        initials: "SV",
        bg: "#FAEEDA",
        color: "#854F0B",
        logoUrl: "https://plus.unsplash.com/premium_photo-1710787193589-bbf7cbf0563a?q=80&w=1170&auto=format&fit=crop",
        website: "www.sunveda.com",
        since: "Partner since 2021",
        message: "Ayurveda has always revered Surya as the source of all life and healing. The Param Aalay system is the living bridge between ancient Vedic wisdom and modern daily life. SunVeda is honoured to walk alongside this mission — we have seen our own practitioners transformed by the Navel Hammering and Morning Sun Prayog practices in ways that no herb or formulation alone could achieve."
    },
    {
        name: "PranaCore",
        sector: "Health Foods",
        initials: "PC",
        bg: "#EEEDFE",
        color: "#3C3489",
        logoUrl: "",
        website: "www.pranacore.in",
        since: "Partner since 2023",
        message: "Food is prana, and prana begins with sunlight. PranaCore was founded on the belief that what we eat must align with the body's natural intelligence. Discovering the Adrishya Breakfast concept through Param Aalay was a turning point for our entire product philosophy. We are grateful supporters of this movement and encourage every person seeking true nourishment to attend at least one Urja Shivir."
    },
    {
        name: "ZenFlow",
        sector: "Mindfulness App",
        initials: "ZF",
        bg: "#FAECE7",
        color: "#993C1D",
        logoUrl: "",
        website: "www.zenflow.app",
        since: "Partner since 2023",
        message: "ZenFlow has guided over 2 million users through meditation and breathwork. But when our team attended the Param Aalay Cosmic Vision Shivir, we realised that all digital mindfulness tools are merely fingers pointing at the moon — the Param Aalay practices are the moon itself. We proudly recommend the Urja Shivir to every one of our premium subscribers."
    },
    {
        name: "UrjaFoods",
        sector: "Organic Foods",
        initials: "UF",
        bg: "#EAF3DE",
        color: "#3B6D11",
        logoUrl: "",
        website: "www.urjafoods.co.in",
        since: "Partner since 2022",
        message: "When energy meets nourishment, transformation is inevitable. UrjaFoods was built to supply clean, organic food to families across India — and Param Aalay's teaching that food is secondary to sunlight and breath completely reshaped how we communicate our mission. We are aligned at the root level, and we look forward to a long and fruitful partnership."
    },
    {
        name: "SattvikLife",
        sector: "Lifestyle Brand",
        initials: "SL",
        bg: "#FBEAF0",
        color: "#993556",
        logoUrl: "",
        website: "www.sattviklife.in",
        since: "Partner since 2021",
        message: "Sattva is not a diet — it is a way of being. SattvikLife has always championed a lifestyle rooted in purity, simplicity, and consciousness. The Param Aalay teachings on gratitude, sun-gazing, and the invisible breakfast align perfectly with everything we stand for. We are more than wellwishers — we are fellow travellers on the same path."
    },
    {
        name: "BhoomiHerbs",
        sector: "Herbal Remedies",
        initials: "BH",
        bg: "#E6F1FB",
        color: "#185FA5",
        logoUrl: "",
        website: "www.bhoomiherbs.com",
        since: "Partner since 2023",
        message: "The earth provides everything we need — and sunlight is her greatest gift. BhoomiHerbs has studied the synergy between solar energy and herbal medicine for over a decade. The practices taught at Param Aalay camps dramatically enhance the bioavailability of the herbs we prescribe. We wholeheartedly endorse this work and urge every wellness professional to experience it firsthand."
    },
    {
        name: "SuryaFit",
        sector: "Fitness Studio",
        initials: "SF",
        bg: "#FAEEDA",
        color: "#633806",
        logoUrl: "",
        website: "www.suryafit.in",
        since: "Partner since 2022",
        message: "Fitness is not just muscle — it is cellular vitality. SuryaFit has integrated the Morning Sun Prayog into our daily opening ritual across all 14 studios, and the feedback from our members has been extraordinary. Sleep improves, recovery accelerates, and motivation sustains itself naturally. Param Aalay is doing work that no gym programme can replicate, and we are proud to support it."
    },
    {
        name: "AkashMedia",
        sector: "Digital Media",
        initials: "AM",
        bg: "#EEEDFE",
        color: "#26215C",
        logoUrl: "",
        website: "www.akashmedia.in",
        since: "Partner since 2023",
        message: "As a media company, we are responsible for what we amplify. When our editorial team first covered the Param Aalay Urja Shivir, we expected a wellness event. What we found was a genuine awakening. AkashMedia has since dedicated a full content vertical to conscious living, and Param Aalay's teachings are the cornerstone of that editorial vision."
    },
    {
        name: "PavanYoga",
        sector: "Yoga Centers",
        initials: "PY",
        bg: "#E1F5EE",
        color: "#085041",
        logoUrl: "",
        website: "www.pavanyoga.com",
        since: "Partner since 2021",
        message: "Prana and Surya are inseparable in the yogic tradition. PavanYoga has trained over 50,000 students across India, and we consistently find that those who have also attended a Param Aalay camp demonstrate a depth of embodied understanding that takes others years to develop. We send every teacher-trainee to the Urja Shivir as part of their certification journey."
    },
    {
        name: "DharaFarms",
        sector: "Organic Farming",
        initials: "DF",
        bg: "#EAF3DE",
        color: "#27500A",
        logoUrl: "",
        website: "www.dharafarms.in",
        since: "Partner since 2022",
        message: "A farmer understands the sun better than anyone. At DharaFarms, we grow food the way nature intended — with sunlight, patience, and gratitude. The Param Aalay philosophy mirrors our own: that the body, like the soil, needs the sun to be truly alive. We are honoured to provide fresh organic produce for the Adrishya Breakfast at camps across Rajasthan and Gujarat."
    },
    {
        name: "ChaitanyaEdu",
        sector: "Education",
        initials: "CE",
        bg: "#FAECE7",
        color: "#712B13",
        logoUrl: "",
        website: "www.chaitanyaedu.org",
        since: "Partner since 2023",
        message: "Education must nourish the whole child — body, mind, and consciousness. ChaitanyaEdu has introduced the Morning Sun Gratitude practice in 38 schools, and the results in student focus, emotional regulation, and physical health have been remarkable enough to attract national research attention. Param Aalay is not just a wellness programme — it is a civilisational correction, and we are proud to be part of it."
    },
];

const tags = ["All", "Energy & Healing", "Health Transformation", "Spiritual Growth", "Daily Practice", "Inner Freedom", "Scientific Validation", "Leader", "Wellwishers"];

export default function TestimonialsPage() {
    const [activeTag, setActiveTag] = useState("All");
    const [expandedId, setExpandedId] = useState(null);
    const [selectedWellwisher, setSelectedWellwisher] = useState(null);
    const [detailVisible, setDetailVisible] = useState(false);

    const filtered = activeTag === "All"
        ? testimonials
        : testimonials.filter(t => t.tag === activeTag);

    const openDetail = (w) => {
        setSelectedWellwisher(w);
        setTimeout(() => setDetailVisible(true), 10); // tiny delay so CSS transition fires
        document.body.style.overflow = 'hidden';
    };

    const closeDetail = () => {
        setDetailVisible(false);
        document.body.style.overflow = '';
        setTimeout(() => setSelectedWellwisher(null), 380);
    };

    return (
        <main className="min-h-screen bg-white font-sans pb-24">

            {/* ── Wellwisher Detail Panel ── */}
            {selectedWellwisher && (
                <>
                    {/* Backdrop */}
                    <div
                        onClick={closeDetail}
                        style={{
                            position: 'fixed', inset: 0, zIndex: 900,
                            background: 'rgba(0,0,0,0.45)',
                            opacity: detailVisible ? 1 : 0,
                            transition: 'opacity 0.35s ease',
                        }}
                    />

                    {/* Slide-in Panel */}
                    <div
                        style={{
                            position: 'fixed',
                            top: 0, right: 0, bottom: 0,
                            width: '100%',
                            maxWidth: '520px',
                            background: '#fff',
                            zIndex: 1000,
                            overflowY: 'auto',
                            transform: detailVisible ? 'translateX(0)' : 'translateX(100%)',
                            transition: 'transform 0.38s cubic-bezier(0.4,0,0.2,1)',
                            boxShadow: '-8px 0 40px rgba(0,0,0,0.12)',
                        }}
                    >
                        {/* Panel Header */}
                        <div style={{
                            position: 'sticky', top: 0, zIndex: 10,
                            background: '#fff',
                            borderBottom: '1px solid #f0f0f0',
                            padding: '1.25rem 1.5rem',
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        }}>
                            <span style={{
                                fontSize: '0.75rem', fontWeight: 700,
                                letterSpacing: '0.08em', textTransform: 'uppercase',
                                color: '#c45c00',
                            }}>
                                🤝 Wellwisher Profile
                            </span>
                            <button
                                onClick={closeDetail}
                                style={{
                                    border: 'none', background: '#f5f5f5',
                                    borderRadius: '50%', width: '36px', height: '36px',
                                    fontSize: '1rem', cursor: 'pointer',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: '#555',
                                }}
                            >✕</button>
                        </div>

                        {/* Panel Body */}
                        <div style={{ padding: '2rem 1.5rem' }}>

                            {/* Logo + Name Hero */}
                            <div style={{
                                display: 'flex', flexDirection: 'column',
                                alignItems: 'center', gap: '1rem',
                                marginBottom: '2rem',
                                padding: '2rem',
                                background: 'linear-gradient(135deg, #fffbf4, #fff8ee)',
                                borderRadius: '1.25rem',
                                border: '1px solid #FDDC9E',
                            }}>
                                {/* Logo */}
                                {selectedWellwisher.logoUrl ? (
                                    <div style={{
                                        width: '96px', height: '96px', borderRadius: '50%',
                                        border: '3px solid #fff',
                                        boxShadow: '0 4px 20px rgba(255,140,0,0.15)',
                                        overflow: 'hidden', flexShrink: 0,
                                    }}>
                                        <img
                                            src={selectedWellwisher.logoUrl}
                                            alt={selectedWellwisher.name}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            onError={e => {
                                                e.currentTarget.parentElement.style.background = selectedWellwisher.bg;
                                                e.currentTarget.parentElement.style.display = 'flex';
                                                e.currentTarget.parentElement.style.alignItems = 'center';
                                                e.currentTarget.parentElement.style.justifyContent = 'center';
                                                e.currentTarget.parentElement.innerHTML = `<span style="font-size:1.5rem;font-weight:800;color:${selectedWellwisher.color}">${selectedWellwisher.initials}</span>`;
                                            }}
                                        />
                                    </div>
                                ) : (
                                    <div style={{
                                        width: '96px', height: '96px', borderRadius: '50%',
                                        background: selectedWellwisher.bg,
                                        color: selectedWellwisher.color,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '1.5rem', fontWeight: 800,
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                        border: '3px solid #fff',
                                    }}>
                                        {selectedWellwisher.initials}
                                    </div>
                                )}

                                <div style={{ textAlign: 'center' }}>
                                    <h2 style={{
                                        margin: '0 0 0.25rem',
                                        fontSize: '1.4rem', fontWeight: 900,
                                        color: '#1a1a1a',
                                        fontFamily: "'Playfair Display', serif",
                                    }}>
                                        {selectedWellwisher.name}
                                    </h2>
                                    <span style={{
                                        display: 'inline-block',
                                        padding: '3px 12px', borderRadius: '50px',
                                        background: 'rgba(255,140,0,0.1)',
                                        color: '#c45c00',
                                        fontSize: '0.78rem', fontWeight: 700,
                                    }}>
                                        {selectedWellwisher.sector}
                                    </span>
                                </div>

                                {/* Meta row */}
                                <div style={{
                                    display: 'flex', gap: '1.5rem',
                                    fontSize: '0.8rem', color: '#888',
                                    marginTop: '0.25rem',
                                }}>
                                    <a
                                    href={`https://${selectedWellwisher.website}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            color: '#FF8C00',
                                            fontWeight: 600,
                                            textDecoration: 'none',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '4px',
                                        }}
                                        onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                                        onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
                                    >
                                        🌐 {selectedWellwisher.website} ↗
                                    </a>
                                    <span>📅 {selectedWellwisher.since}</span>
                                </div>
                            </div>

                            {/* Message Section */}
                            <div>
                                <div style={{
                                    display: 'flex', alignItems: 'center', gap: '8px',
                                    marginBottom: '1rem',
                                }}>
                                    <div style={{
                                        width: '3px', height: '20px',
                                        background: 'linear-gradient(to bottom, #FF8C00, #FFD700)',
                                        borderRadius: '2px',
                                    }} />
                                    <span style={{
                                        fontSize: '0.75rem', fontWeight: 700,
                                        letterSpacing: '0.08em', textTransform: 'uppercase',
                                        color: '#888',
                                    }}>
                                        Message from {selectedWellwisher.name}
                                    </span>
                                </div>

                                <blockquote style={{
                                    margin: 0,
                                    padding: '1.5rem',
                                    background: '#fafafa',
                                    borderRadius: '1rem',
                                    border: '1px solid #f0f0f0',
                                    borderLeft: '3px solid #FF8C00',
                                    fontSize: '0.95rem',
                                    color: '#444',
                                    lineHeight: 1.85,
                                    fontStyle: 'italic',
                                }}>
                                    &ldquo;{selectedWellwisher.message}&rdquo;
                                </blockquote>

                                {/* Signature */}
                                <div style={{
                                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                                    marginTop: '1.25rem',
                                    padding: '1rem 1.25rem',
                                    background: '#fff',
                                    border: '1px solid #f0f0f0',
                                    borderRadius: '0.875rem',
                                }}>
                                    <div style={{
                                        width: '40px', height: '40px', borderRadius: '50%',
                                        background: selectedWellwisher.bg,
                                        color: selectedWellwisher.color,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '0.85rem', fontWeight: 800, flexShrink: 0,
                                    }}>
                                        {selectedWellwisher.initials}
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#1a1a1a' }}>
                                            {selectedWellwisher.name} Team
                                        </div>
                                        <div style={{ fontSize: '0.78rem', color: '#aaa' }}>
                                            {selectedWellwisher.sector} · {selectedWellwisher.since}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* Hero */}
            <div className="satvic-page-hero">
                <div className="satvic-page-hero-inner">
                    <span className="satvic-page-hero-badge">🙏 Stories of Transformation</span>
                    <h1>Lives That Changed</h1>
                    <p>
                        These are not marketing claims — these are real stories from real seekers who experienced the Sun To Human path firsthand. Every word is lived truth.
                    </p>
                </div>
            </div>

            {/* Stats Bar */}
            <div className="satvic-info-card">
                <div className="satvic-info-card-inner">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                        gap: '1.5rem',
                        textAlign: 'center'
                    }}>
                        {[
                            { icon: '👥', value: '50,000+', label: 'Lives Transformed' },
                            { icon: '🏙️', value: '120+', label: 'Cities Reached' },
                            { icon: '🏕️', value: '500+', label: 'Camps Conducted' },
                            { icon: '⭐', value: '4.98 / 5', label: 'Average Rating' },
                        ].map(stat => (
                            <div key={stat.label} style={{ padding: '1rem' }}>
                                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
                                <div style={{
                                    fontSize: '1.6rem',
                                    fontWeight: 900,
                                    color: '#1a1a1a',
                                    fontFamily: "'Playfair Display', serif",
                                    marginBottom: '0.25rem'
                                }}>{stat.value}</div>
                                <div style={{ fontSize: '0.8rem', color: '#888', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Filter Tags */}
            <div style={{ padding: '3rem 1.5rem 1rem', textAlign: 'center' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
                    {tags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => setActiveTag(tag)}
                            style={{
                                padding: '0.5rem 1.25rem',
                                borderRadius: '50px',
                                border: activeTag === tag ? '1.5px solid #FF8C00' : '1.5px solid #e5e7eb',
                                background: activeTag === tag ? 'rgba(255,140,0,0.1)' : 'transparent',
                                color: activeTag === tag ? '#c45c00' : '#666',
                                fontWeight: 600,
                                fontSize: '0.85rem',
                                cursor: 'pointer',
                                transition: 'all 0.25s',
                            }}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            {/* Cards Area */}
            <div style={{ maxWidth: '72rem', margin: '2rem auto 0', padding: '0 1.5rem' }}>
                {activeTag === 'Wellwishers' ? (
                    <>
                        {/* Header */}
                        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                            <span style={{
                                display: 'inline-block',
                                padding: '4px 14px', borderRadius: '50px',
                                border: '1px solid #FDDC9E',
                                background: 'rgba(255,140,0,0.08)',
                                color: '#c45c00',
                                fontSize: '0.75rem', fontWeight: 700,
                                letterSpacing: '0.08em', textTransform: 'uppercase',
                                marginBottom: '0.75rem',
                            }}>
                                🤝 Our Wellwishers
                            </span>
                            <h2 style={{
                                fontSize: '1.75rem', fontWeight: 900, color: '#1a1a1a',
                                fontFamily: "'Playfair Display', serif",
                                margin: '0 0 0.5rem',
                            }}>
                                Organizations Walking With Us
                            </h2>
                            <p style={{
                                fontSize: '0.95rem', color: '#888',
                                maxWidth: '480px', margin: '0 auto', lineHeight: 1.7,
                            }}>
                                These companies and institutions believe in the Sun To Human path and stand with our mission of holistic transformation.
                            </p>
                        </div>

                        {/* Grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
                            gap: '1.25rem',
                        }}>
                            {wellwishers.map((w, i) => (
                                
                             <div
                                key={i}
                                onClick={() => openDetail(w)}
                                style={{
                                    background: '#fff',
                                    border: '1px solid #f0f0f0',
                                    borderRadius: '1.25rem',
                                    padding: '1.75rem 1rem 1.25rem',
                                    display: 'flex', flexDirection: 'column',
                                    alignItems: 'center', gap: '10px',
                                    cursor: 'pointer',
                                    transition: 'box-shadow 0.3s, border-color 0.3s, transform 0.3s',
                                    boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.boxShadow = '0 16px 40px rgba(255,140,0,0.1)';
                                    e.currentTarget.style.borderColor = '#FFD580';
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)';
                                    e.currentTarget.style.borderColor = '#f0f0f0';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                    {w.logoUrl ? (
                                        <div style={{
                                            width: '80px', height: '80px', borderRadius: '50%',
                                            border: '2px solid #f0f0f0', overflow: 'hidden', flexShrink: 0,
                                        }}>
                                            <img
                                                src={w.logoUrl}
                                                alt={w.name}
                                                onError={e => {
                                                    e.currentTarget.parentElement.style.background = w.bg;
                                                    e.currentTarget.parentElement.style.display = 'flex';
                                                    e.currentTarget.parentElement.style.alignItems = 'center';
                                                    e.currentTarget.parentElement.style.justifyContent = 'center';
                                                    e.currentTarget.parentElement.innerHTML = `<span style="font-size:1rem;font-weight:800;color:${w.color}">${w.initials}</span>`;
                                                }}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                        </div>
                                      
                                    ) : (
                                        <div style={{
                                            width: '80px', height: '80px', borderRadius: '50%',
                                            background: w.bg, color: w.color,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontSize: '1.2rem', fontWeight: 800, flexShrink: 0,
                                        }}>
                                            {w.initials}
                                        </div>
                                    )}
                                    <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#1a1a1a', textAlign: 'center' }}>{w.name}</div>
                                    <div style={{ fontSize: '0.75rem', color: '#888', textAlign: 'center' }}>{w.sector}</div>

                                    {/* View profile hint */}
                                    <div style={{
                                        fontSize: '0.72rem', color: '#FF8C00',
                                        fontWeight: 600, marginTop: '2px',
                                    }}>
                                        View Profile →
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : activeTag === 'Leader' ?(
                    <>
                      {/* Grid */}
<div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '1.5rem',
}}>
    {leaders.map((l, i) => (
        <div
            key={i}
            style={{
                background: '#fff',
                border: '1px solid #f0f0f0',
                borderRadius: '1.25rem',
                overflow: 'hidden',
                transition: 'box-shadow 0.3s, transform 0.3s',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                cursor: 'default',
            }}
            onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 16px 40px ${l.color}22`;
                e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)';
                e.currentTarget.style.transform = 'translateY(0)';
            }}
        >
            {/* Colored top banner */}
            <div style={{
                background: l.bg,
                padding: '1.5rem 1rem 3.5rem',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
            }}>
                {/* Party badge top-right */}
                <span style={{
                    position: 'absolute', top: '12px', right: '12px',
                    padding: '3px 10px', borderRadius: '50px',
                    background: '#fff',
                    color: l.color,
                    fontSize: '0.68rem', fontWeight: 800,
                    letterSpacing: '0.04em',
                    border: `1px solid ${l.color}33`,
                }}>
                    {l.party}
                </span>

                {/* Since badge top-left */}
                <span style={{
                    position: 'absolute', top: '12px', left: '12px',
                    padding: '3px 8px', borderRadius: '50px',
                    background: 'rgba(255,255,255,0.7)',
                    color: '#888',
                    fontSize: '0.62rem', fontWeight: 600,
                }}>
                    {l.since.replace('Supporter ', '')}
                </span>
            </div>

            {/* Avatar — overlaps the banner */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '-40px',
                marginBottom: '0.75rem',
                position: 'relative',
                zIndex: 2,
            }}>
                {l.photoUrl ? (
                    <div style={{
                        width: '80px', height: '80px', borderRadius: '50%',
                        border: '3px solid #fff',
                        boxShadow: `0 4px 16px ${l.color}33`,
                        overflow: 'hidden', flexShrink: 0,
                        background: l.bg,
                    }}>
                        <img
                            src={l.photoUrl}
                            alt={l.name}
                            onError={e => {
                                e.currentTarget.parentElement.style.display = 'flex';
                                e.currentTarget.parentElement.style.alignItems = 'center';
                                e.currentTarget.parentElement.style.justifyContent = 'center';
                                e.currentTarget.parentElement.style.fontSize = '2rem';
                                e.currentTarget.parentElement.innerHTML = l.avatar;
                            }}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                ) : (
                    <div style={{
                        width: '80px', height: '80px', borderRadius: '50%',
                        background: l.bg,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '2rem', flexShrink: 0,
                        border: '3px solid #fff',
                        boxShadow: `0 4px 16px ${l.color}22`,
                    }}>
                        {l.avatar}
                    </div>
                )}
            </div>

            {/* Card body */}
            <div style={{ padding: '0 1.25rem 1.5rem', textAlign: 'center' }}>
                <div style={{
                    fontWeight: 800, fontSize: '0.95rem',
                    color: '#1a1a1a', marginBottom: '0.2rem',
                    fontFamily: "'Playfair Display', serif",
                }}>
                    {l.name}
                </div>
                <div style={{
                    fontSize: '0.75rem', color: l.color,
                    fontWeight: 600, marginBottom: '1rem',
                }}>
                    {l.role}
                </div>

                {/* Divider */}
                <div style={{
                    height: '1px', background: '#f3f4f6',
                    margin: '0 0 1rem',
                }} />

                {/* Message */}
                <p style={{
                    fontSize: '0.8rem', color: '#666',
                    lineHeight: 1.75, fontStyle: 'italic',
                    textAlign: 'left',
                    display: '-webkit-box',
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                }}>
                    &ldquo;{l.message}&rdquo;
                </p>
            </div>
        </div>
    ))}
</div>
                    </>
                ) : (
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                        gap: '1.75rem'
                    }}>
                        {filtered.map((t, i) => {
                            const isExpanded = expandedId === i;
                            const shortQuote = t.quote.length > 160 ? t.quote.slice(0, 160) + '...' : t.quote;
                            return (
                                <div
                                    key={i}
                                    style={{
                                        background: '#fff',
                                        border: '1px solid #f0f0f0',
                                        borderRadius: '1.25rem',
                                        padding: '2rem',
                                        display: 'flex', flexDirection: 'column', gap: '1rem',
                                        transition: 'box-shadow 0.3s, border-color 0.3s, transform 0.3s',
                                        cursor: 'default',
                                        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.boxShadow = '0 12px 40px rgba(255,140,0,0.12)';
                                        e.currentTarget.style.borderColor = 'rgba(255,214,0,0.5)';
                                        e.currentTarget.style.transform = 'translateY(-3px)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)';
                                        e.currentTarget.style.borderColor = '#f0f0f0';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <span style={{
                                        display: 'inline-block', padding: '3px 10px', borderRadius: '50px',
                                        background: 'rgba(255,140,0,0.08)', color: '#c45c00',
                                        fontSize: '0.72rem', fontWeight: 700,
                                        letterSpacing: '0.06em', textTransform: 'uppercase', alignSelf: 'flex-start',
                                    }}>{t.tag}</span>
                                    <div style={{ display: 'flex', gap: '3px' }}>
                                        {Array.from({ length: t.rating }).map((_, s) => (
                                            <span key={s} style={{ color: '#FF8C00', fontSize: '1rem' }}>★</span>
                                        ))}
                                    </div>
                                    <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: 1.75, fontStyle: 'italic', flex: 1 }}>
                                        &ldquo;{isExpanded ? t.quote : shortQuote}&rdquo;
                                    </p>
                                    {t.quote.length > 160 && (
                                        <button
                                            onClick={() => setExpandedId(isExpanded ? null : i)}
                                            style={{ background: 'none', border: 'none', color: '#FF8C00', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', padding: 0, textAlign: 'left' }}
                                        >
                                            {isExpanded ? '− Read less' : '+ Read more'}
                                        </button>
                                    )}
                                    <div style={{ height: '1px', background: '#f3f4f6' }} />
                                      
                                      {/**Author */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>

                                        {/**Photo or Avatar fallback */}
                                        {t.photoUrl ? (
                                            <div style={{
                                                width: '46px', height: '46px', borderRadius: '50%',
                                                overflow: 'hidden' , flexShrink: 0,
                                                border: '2px solid #FFE5A0'
                                            }}
                                            >
                                              <img
                                               src={t.photoUrl}
                                               alt={t.name}
                                               onError={e => {
                                                 e.currentTarget.parentElement.style.background = 'linear-gradient(135deg , #FFF3D0 , #FFE5A0)';
                                                 e.currentTarget.parentElement.style.display = 'flex';
                                                 e.currentTarget.parentElement.style.alignItems = 'center';
                                                 e.currentTarget.parentElement.style.justifyContent = 'center';
                                                 e.currentTarget.parentElement.style.fontSize = '1.4rem';
                                                 e.currentTarget.parentElement.innerHTML = t.avatar
                                               }}
                                               style={{
                                                width: '100%',height:'100%',
                                                objectFit: 'cover'
                                               }}
                                              />
                                             
                                            </div>
                                        ):(
                                            <div style={{
                                                width: '46px', height: '46px', borderRadius: '50%',
                                                background: 'linear-gradient(135deg, #FFF3D0, #FFE5A0)',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                fontSize: '1.4rem', flexShrink: 0,
                                            }}>{t.avatar}</div>
                                        )}
                                        
                                        <div>
                                            <div style={{ fontWeight: 700, color: '#1a1a1a', fontSize: '0.95rem' }}>{t.name}</div>
                                            <div style={{ fontSize: '0.8rem', color: '#888' }}>{t.city} · {t.program}</div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* CTA */}
            <div className="satvic-form-section" style={{ marginTop: '4rem' }}>
                <div className="satvic-form-section-inner">
                    <div className="satvic-cta-band">
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌟</div>
                        <h2>Your Story Could Be Next</h2>
                        <p>Join thousands of seekers who have experienced the Sun To Human path. Attend a camp near you and begin your transformation today.</p>
                        <a href="/programs" className="satvic-cta-btn">View Upcoming Programs</a>
                    </div>
                </div>
            </div>

        </main>
    );
}