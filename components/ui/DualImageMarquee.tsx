"use client";

interface MarqueeImage {
  url: string;
  alt: string;
  aspectRatio: "landscape" | "portrait" | "square";
}

const ROW_1: MarqueeImage[] = [
  {
    url: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    alt: "Equipe em reunião de trabalho",
    aspectRatio: "landscape",
  },
  {
    url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
    alt: "Dashboard digital em tela",
    aspectRatio: "portrait",
  },
  {
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    alt: "Análise de dados e gráficos",
    aspectRatio: "landscape",
  },
  {
    url: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
    alt: "Celular com aplicativo",
    aspectRatio: "portrait",
  },
  {
    url: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80",
    alt: "Laptop com código e interface",
    aspectRatio: "landscape",
  },
  {
    url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    alt: "Time trabalhando com tecnologia",
    aspectRatio: "landscape",
  },
];

const ROW_2: MarqueeImage[] = [
  {
    url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    alt: "Workspace moderno e organizado",
    aspectRatio: "landscape",
  },
  {
    url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    alt: "Checkout e pagamento online",
    aspectRatio: "portrait",
  },
  {
    url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    alt: "Reunião estratégica de negócios",
    aspectRatio: "landscape",
  },
  {
    url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
    alt: "Marketing digital e redes sociais",
    aspectRatio: "portrait",
  },
  {
    url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    alt: "Videochamada e atendimento remoto",
    aspectRatio: "landscape",
  },
  {
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    alt: "Escritório moderno e iluminado",
    aspectRatio: "landscape",
  },
];

const WIDTHS = { landscape: "280px", portrait: "200px", square: "240px" } as const;

function ImageCard({ image }: { image: MarqueeImage }) {
  return (
    <div
      style={{
        width: WIDTHS[image.aspectRatio],
        height: "200px",
        flexShrink: 0,
        borderRadius: "14px",
        overflow: "hidden",
        position: "relative",
        border: "0.5px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image.url}
        alt={image.alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)",
          display: "block",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        loading="lazy"
      />
    </div>
  );
}

export function DualImageMarquee() {
  const doubled1 = [...ROW_1, ...ROW_1];
  const doubled2 = [...ROW_2, ...ROW_2];

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "8px 0",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
      }}
    >
      {/* Track 1 — left */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          width: "max-content",
          animation: "marqueeLeft 28s linear infinite",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.animationPlayState = "paused")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.animationPlayState = "running")
        }
      >
        {doubled1.map((img, i) => (
          <ImageCard key={i} image={img} />
        ))}
      </div>

      {/* Track 2 — right */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          width: "max-content",
          animation: "marqueeRight 32s linear infinite",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.animationPlayState = "paused")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.animationPlayState = "running")
        }
      >
        {doubled2.map((img, i) => (
          <ImageCard key={i} image={img} />
        ))}
      </div>
    </div>
  );
}
