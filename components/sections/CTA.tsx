import Button from '../ui/Button';

interface CTAProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTA({ 
  title, 
  description, 
  buttonText = 'Get Started',
  buttonHref = '/contact' 
}: CTAProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-6 rounded-xl bg-primary/20 border border-primary/20 p-8 md:p-12 text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
            {title}
          </h2>
          <p className="text-white/80 max-w-2xl text-lg">
            {description}
          </p>
          <Button size="lg" className="mt-4" href={buttonHref}>
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
