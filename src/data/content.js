export const services = [
  {
    id: "interior-design",
    title: "Interior Design",
    description:
      "Concept development, spatial planning, material direction, and design documentation.",
  },
  {
    id: "custom-furniture",
    title: "Custom Furniture",
    description:
      "Furniture designed and manufactured around the dimensions and habits of each space.",
  },
  {
    id: "design-build",
    title: "Design & Build",
    description:
      "A connected workflow from concept through production and installation.",
  },
  {
    id: "commercial-space",
    title: "Commercial Space",
    description:
      "Interior planning for offices, retail, hospitality, and other professional environments.",
  },
];

export const categories = [
  {
    id: "kitchen-set",
    title: "Kitchen Set",
    description: "Desain dapur modern dengan kualitas premium.",
    image: "/images/portfolio/kitchen-set/kitchen-set.jpg",
  },
  {
    id: "interior-rumah",
    title: "Interior Rumah",
    description: "Interior berkualitas untuk rumah estetik dan nyaman.",
    image: "/images/portfolio/interior-rumah/oak-residence.jpg",
  },
  {
    id: "apartemen",
    title: "Apartemen",
    description: "Solusi interior compact untuk hunian vertikal.",
    image: "/images/portfolio/apartemen/apartment.jpg",
  },
  {
    id: "kantor",
    title: "Kantor",
    description: "Ruang kerja profesional yang mendorong produktivitas.",
    image: "/images/portfolio/kantor/lumina-office.jpg",
  },
  {
    id: "retail",
    title: "Retail & Hospitality",
    description: "Interior komersial yang menciptakan pengalaman.",
    image: "/images/portfolio/retail/retail.jpg",
  },
  {
    id: "custom-furniture",
    title: "Custom Furniture",
    description: "Furniture yang dirancang khusus sesuai dimensi ruang.",
    image: "/images/portfolio/custom-furniture/terrace-house.jpg",
  },
];

export const designStyles = [
  {
    id: "modern-kontemporer",
    title: "Modern Kontemporer",
    description: "Garis bersih dan palet netral dengan sentuhan hangat.",
    overview: "Gaya modern kontemporer mengutamakan ruang yang terang, proporsi yang rapi, serta detail material yang terasa hangat dan relevan untuk keseharian.",
    details: ["Palet netral hangat", "Garis furnitur bersih", "Pencahayaan alami sebagai fokus"],
    image: "/images/portfolio/interior-rumah/modern-kontemporer.jpg",
    gallery: ["/images/portfolio/interior-rumah/modern-kontemporer.jpg", "/images/portfolio/interior-rumah/oak-residence.jpg"],
  },
  {
    id: "modern-klasik",
    title: "Modern Klasik",
    description: "Perpaduan kemewahan klasik dan modern yang elegan.",
    overview: "Gaya modern klasik menyeimbangkan siluet elegan dan detail terukur dengan komposisi ruang yang tetap ringan, nyaman, dan tidak berlebihan.",
    details: ["Detail elegan yang terukur", "Komposisi simetris", "Material bernuansa mewah"],
    image: "/images/portfolio/interior-rumah/modern-klasik.jpg",
    gallery: ["/images/portfolio/interior-rumah/modern-klasik.jpg", "/images/portfolio/interior-rumah/oak-residence.jpg"],
  },
  {
    id: "japandi-natural",
    title: "Japandi Natural",
    description: "Ciptakan kemewahan dalam kesederhanaan yang tenang.",
    overview: "Japandi Natural menggabungkan kesederhanaan Jepang dan kehangatan Skandinavia untuk menciptakan ruang yang tenang, fungsional, dan tak lekang waktu.",
    details: ["Material kayu dan tekstur alami", "Ruang lega dengan fungsi jelas", "Nuansa tenang dan membumi"],
    image: "/images/portfolio/interior-rumah/japandi-natural.jpg",
    gallery: ["/images/portfolio/interior-rumah/japandi-natural.jpg", "/images/portfolio/interior-rumah/oak-residence.jpg"],
  },
];
export const processSteps = [
  { id: "01", title: "Konsultasi", description: "Diskusi awal untuk memahami kebutuhan, gaya hidup, dan anggaran Anda. Tersedia secara online maupun kunjungan langsung.", paymentLabel: "Gratis", paymentPercent: 0 },
  { id: "02", title: "Survey Lokasi", description: "Pengukuran detail dan penilaian kondisi ruang secara langsung oleh tim kami.", paymentLabel: "Gratis", paymentPercent: 0 },
  { id: "03", title: "Concept & Design", description: "Pengembangan konsep desain, layout, material board, dan visualisasi 3D.", paymentLabel: "BF", paymentPercent: 15 },
  { id: "04", title: "Produksi", description: "Proses manufaktur furniture custom dan persiapan material dengan teknologi presisi.", paymentLabel: "DP 50%", paymentPercent: 50 },
  { id: "05", title: "Instalasi", description: "Pemasangan dan perakitan di lokasi oleh tim pelaksana berpengalaman.", paymentLabel: "DP 80%", paymentPercent: 80 },
  { id: "06", title: "Serah Terima", description: "Inspeksi akhir bersama klien dan serah terima ruang yang telah selesai.", paymentLabel: "Lunas", paymentPercent: 100 },
];

export const materials = [
  { id: "hpl", title: "HPL" },
  { id: "veneer", title: "Veneer" },
  { id: "solid-surface", title: "Solid surface" },
  { id: "metal", title: "Metal" },
  { id: "glass", title: "Glass" },
  { id: "fabric", title: "Fabric" },
];

export const projects = [
  {
    slug: "kitchen-set-natural",
    title: "Kitchen Set Natural",
    categoryId: "kitchen-set",
    location: "Jakarta Selatan",
    year: "2024",
    description: "Kitchen set bernuansa kayu hangat dengan tata letak yang dirancang untuk aktivitas memasak sehari-hari.",
    image: "/images/portfolio/kitchen-set/kitchen-set.jpg",
    images: ["/images/portfolio/kitchen-set/kitchen-set.jpg"],
  },
  {
    slug: "oak-residence",
    title: "Oak Residence",
    categoryId: "interior-rumah",
    location: "Jakarta Selatan",
    year: "2023",
    description: "Interior hunian yang mengutamakan cahaya alami, material taktil, dan suasana tenang.",
    image: "/images/portfolio/interior-rumah/oak-residence.jpg",
    images: [
      "/images/portfolio/interior-rumah/oak-residence.jpg",
      "/images/portfolio/interior-rumah/modern-kontemporer.jpg",
      "/images/portfolio/interior-rumah/modern-klasik.jpg",
      "/images/portfolio/interior-rumah/japandi-natural.jpg",
    ],
  },
  {
    slug: "apartment-calm-living",
    title: "Apartment Calm Living",
    categoryId: "apartemen",
    location: "Jakarta Pusat",
    year: "2024",
    description: "Ruang apartemen yang ringkas dan terang dengan penyimpanan terintegrasi untuk kebutuhan sehari-hari.",
    image: "/images/portfolio/apartemen/apartment.jpg",
    images: ["/images/portfolio/apartemen/apartment.jpg"],
  },
  {
    slug: "lumina-office",
    title: "Lumina Office",
    categoryId: "kantor",
    location: "Jakarta Pusat",
    year: "2023",
    description: "Ruang kerja modern yang mendukung kolaborasi, fokus, dan kenyamanan tim.",
    image: "/images/portfolio/kantor/lumina-office.jpg",
    images: ["/images/portfolio/kantor/lumina-office.jpg"],
  },
  {
    slug: "retail-gathering-space",
    title: "Retail Gathering Space",
    categoryId: "retail",
    location: "Bandung",
    year: "2024",
    description: "Ruang retail dengan atmosfer hangat untuk menciptakan pengalaman kunjungan yang berkesan.",
    image: "/images/portfolio/retail/retail.jpg",
    images: ["/images/portfolio/retail/retail.jpg"],
  },
  {
    slug: "terrace-custom-furniture",
    title: "Terrace Custom Furniture",
    categoryId: "custom-furniture",
    location: "Bandung",
    year: "2024",
    description: "Furniture custom dan detail interior yang menyatukan area dalam dan luar ruang.",
    image: "/images/portfolio/custom-furniture/terrace-house.jpg",
    images: ["/images/portfolio/custom-furniture/terrace-house.jpg"],
  },
];

export const getCategoryById = (categoryId) =>
  categories.find((category) => category.id === categoryId);

export const getProjectsByCategory = (categoryId) =>
  projects.filter((project) => project.categoryId === categoryId);

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug);

export const getDesignStyleById = (styleId) =>
  designStyles.find((style) => style.id === styleId);

export const faqItems = [
  { id: "faq1", question: "Bagaimana proses konsultasi?", answer: "Proses konsultasi dimulai dengan diskusi awal mengenai kebutuhan, preferensi gaya, dan anggaran Anda. Konsultasi dapat dilakukan secara online atau melalui kunjungan langsung ke lokasi proyek." },
  { id: "faq2", question: "Area proyek mana yang dapat ditangani?", answer: "Saat ini kami melayani proyek di area Jabodetabek, Bandung, Semarang, Surabaya, dan Bali. Untuk lokasi lainnya, silakan hubungi tim kami untuk diskusi lebih lanjut." },
  { id: "faq3", question: "Apakah furniture dapat dibuat custom?", answer: "Ya, kami menyediakan layanan custom furniture yang dirancang dan diproduksi sesuai dimensi, material, dan kebutuhan spesifik ruang Anda." },
  { id: "faq4", question: "Berapa lama proses pengerjaan?", answer: "Durasi pengerjaan bervariasi tergantung skala proyek. Rata-rata, proyek residensial memerlukan waktu 2-4 bulan dari konsep hingga instalasi selesai." },
  { id: "faq5", question: "Apa saja yang termasuk dalam lingkup proyek?", answer: "Lingkup proyek mencakup konsultasi, survey lokasi, desain konsep dan 3D, produksi furniture, pengiriman, instalasi, hingga serah terima. Seluruh proses ditangani oleh satu tim terpadu." },
  { id: "faq6", question: "Bagaimana proses revisi desain?", answer: "Kami menyediakan beberapa kali revisi desain untuk memastikan hasil akhir sesuai dengan visi Anda. Setiap revisi akan didiskusikan bersama designer yang bertanggung jawab atas proyek Anda." },
];
