import Image from 'next/image';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "ProTech transformed our online presence. Their team is incredibly talented, responsive, and dedicated to delivering a top-quality product.",
    author: "Jane Doe",
    role: "CEO, Innovate Inc.",
    image: "/images/testimonial-1.jpg",
  },
  {
    quote: "The web application they developed is intuitive, powerful, and has significantly improved our workflow. A truly professional team.",
    author: "John Smith",
    role: "Marketing Director, Fintech Solutions",
    image: "/images/testimonial-2.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-2xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="fade-up flex flex-col gap-4 bg-black/20 p-6 rounded-xl border border-white/10 card-lift"
            >
              {testimonial.image && (
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-white/60">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              )}
              <p className="text-white/80 italic">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
