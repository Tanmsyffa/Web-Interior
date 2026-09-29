import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ConsultationCTA from "@/components/home/ConsultationCTA";

export const metadata = {
  title: "Konsultasi | Griyacipta Kreasi Perdana",
  description:
    "Jadwalkan konsultasi desain interior dan custom furniture bersama Griyacipta Kreasi Perdana.",
};

export default function KonsultasiPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "80px" }}>
        <ConsultationCTA />
      </main>
      <Footer />
    </>
  );
}
