export default function HorizontalCarousel({ children, className }) {
  return <div className={`horizontal-carousel__rail ${className}`}>{children}</div>;
}