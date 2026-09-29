import Image from "next/image";

const consultationUrl =
  "https://wa.me/6282246178989?text=Halo%20Griyacipta%20Kreasi%20Perdana%2C%20saya%20ingin%20berkonsultasi%20mengenai%20proyek%20interior.";

export default function ConsultationCTA() {
  return (
    <section id="consultation" className="cta-block">
      <div className="cta-block__bg">
        <Image
          src="/images/hero/hero_interior.jpg"
          alt="Interior oleh Griyacipta Kreasi Perdana"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="cta-block__overlay"></div>
      </div>

      <div className="container cta-block__inner">
        <p className="section-label" style={{ color: "var(--color-sand)" }}>
          Konsultasi
        </p>
        <h2 className="cta-block__heading">
          Mari bicarakan
          <br />
          ruang Anda.
        </h2>
        <p className="cta-block__sub">
          Jadwalkan sesi konsultasi awal bersama tim desain kami untuk
          mendiskusikan visi, kebutuhan, dan anggaran proyek Anda.
        </p>

        <div className="cta-block__actions">
          <a
            href={consultationUrl}
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mulai Konsultasi
          </a>
          <p className="cta-block__note">
            Gratis, tanpa komitmen. Kami akan menghubungi Anda dalam 1x24 jam.
          </p>
        </div>
      </div>
    </section>
  );
}
