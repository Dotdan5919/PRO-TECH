import Button from '../ui/Button';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function Hero({ 
  title, 
  subtitle, 
  backgroundImage, 
  ctaText = 'Get Started',
  ctaHref = '#'
}: HeroProps) {
  return (
    <section className="mb-16 fade-up stagger">
      <div className="p-4">
        <div 
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 card-lift"
          style={{ 
            backgroundImage: `linear-gradient(rgba(10, 5, 5, 0.5) 0%, rgba(10, 5, 5, 0.8) 100%), url("${backgroundImage}")` 
          }}
        >
          <div className="flex flex-col gap-2 text-center max-w-2xl stagger-1">
            <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
              {title}
            </h1>
            <p className="text-white/80 text-sm md:text-base font-normal leading-normal">
              {subtitle}
            </p>
          </div>
          {ctaText && (
            <Button size="lg" className="mt-4 fade-up">
              {ctaText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
