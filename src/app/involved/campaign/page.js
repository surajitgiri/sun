import GetInvolvedHero from "@/components/get-involved/GetInvolvedHero";
import InvolvementOptions from "@/components/get-involved/InvolvementOptions";
import DonationSection from "@/components/get-involved/DonationSection";

export default function GetInvolvedPage() {
    return (
        <main className="min-h-screen flex flex-col bg-stone-50">
            {/* 1. Hero Section */}
            <GetInvolvedHero />

            {/* 2. Ways to get involved (Grid) */}
            <InvolvementOptions />

            {/* 3. Donation Section */}
            <DonationSection />
        </main>
    );
}