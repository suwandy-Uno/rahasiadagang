interface SectionBackgroundProps {
  image: string;
  gradient?: string;
  overlay?: string;
  position?: string;
  children: React.ReactNode;
}

export default function SectionBackground({
  image,
  gradient,
  overlay = "bg-[#020817]/80",
  position = "center",
  children,
}: SectionBackgroundProps) {
  return (
    <>
      <div
        className="absolute inset-0 bg-cover"
        style={{ backgroundImage: `url('${image}')`, backgroundPosition: position }}
      />
      {gradient ? (
        <div className="absolute inset-0" style={{ background: gradient }} />
      ) : (
        <div className={`absolute inset-0 ${overlay}`} />
      )}
      {children}
    </>
  );
}
