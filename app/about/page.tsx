import Hero from '@/components/sections/Hero';
import MissionValues from '@/components/sections/MissionValues';
import TeamMember from '@/components/ui/TeamMember';
import CTA from '@/components/sections/CTA';
import Image from 'next/image';

const team = [
  {
    name: 'John Doe',
    role: 'Founder & CEO',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfRZiznrEOrIpTdGPjDSKE2TM1xSvM-5LDD9p1Q3kqz7GsNDnaD-Ed02goAWFGm-gMzLRWOB6Nq-HxWK-M7feJydeDlF21vgFdBbGnZZOp1DXZBLVUGxtOjvuAOvKZqHJmTZUeUcXwSS6Asrc2y4d0Zf9Vk0OpXAkIRQIbnYqNrbdVitX3uJPa_PaCF3mDkUwU4ta39i0P-Tli7pBdTJKbUqDOmkUD_PPHjJvtUbk8MoS7slqMY0xiHLxY0R6lTRxRJW28uYJ2cYOI',
  },
  {
    name: 'Jane Smith',
    role: 'Lead Developer',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqztjNIdl4-nEcE9QJ7Ndz5U-TRbWTMrmuiw8jOd_vGb87SXYoF1qVWxbH22gyXqCzzqrvwh9TmqJzPFvY0KFVI1vOap4iuU5_N0Tcb3aKmK84jvxvANvDpp3LvnxJNIu94mAJVzokHWmvETRGUfZTeSLwfcJAirVUUJVV6lefJfj1j3upGA4eOlKSZvtPuk6UdaZtPYcLptD0krRQXjmr4UxsTD7RU6b8SXsTlXjTbQlsEO1h_Erv7IY43eTv61UPW0eTWfPxffUn',
  },
  {
    name: 'Emily Johnson',
    role: 'Creative Director',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYAhdN4hvumzEu7ZtdHPCxAVZgHFN3GBmUnU9IqNUG0mOlGrj5AEDYp3lYB2b2Nwb-f6aEDY_-IxgfWoHHLDqcqgdV0wUbG2OcnG_t1cUQEijqJBeUS9J_70xusBzkOIOcsrf8KoULcrYriLL5B9Yy5AYYy2isG5qLg1zQ49KY8ZMQ8foShb2P9jfHdMdsn2XYJd8eUjJKYrG9oJ55AajEONAHgCFDMXZiJ0EGohc-U2M1EFfEAuzhQH1bg8pne9rq3mwJxHZqFDtB',
  },
];

export default function AboutPage() {
  return (
    <main className="flex-1 pt-20">
      <div className="px-4 sm:px-10 md:px-20 lg:px-40 py-5">
        <div className="max-w-[960px] mx-auto">
          {/* Hero Section */}
          <Hero 
            title="Building Digital Experiences That Matter"
            subtitle="We are ProTech, a team dedicated to crafting exceptional websites, engaging videos, and powerful brands that drive success."
            backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCBXFxCyogbwYrLzU1fvuuo6A4WslMdxdP-HTt5874moCk8B86mk5tojYRZ0-GCWml635huc1l7wDl7-Z-c0iL0Lmfxwft1rfkRB0KRJyytkkkfvssEo0Yad8KJ4APg3oAtrQ_46Tr4BaY7VdUGhNEpUO5RPT35NsDu92t_989hqOkdRrTAdEDFy_ApVYLxLosyFd3bk-6iHD4sgvAjJIYT7KFs9OnM3e1DDjfhqflj69kV4lbuu8vvkqh-joOimE8SIT06OdlSfPr2"
            ctaText=""
          />

          {/* Mission & Values */}
          <MissionValues />

          {/* Our Story */}
          <section className="mb-16 p-4">
            <h2 className="text-white text-2xl font-bold mb-6">
              Our Story & History
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-center border border-white/10 bg-white bg-white/5 rounded-lg p-6">
              <div className="w-full md:w-1/3 relative h-64 md:h-full">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuChHqGS5R5bka8fhNEXQD_c5rchpwQx2Jb5XdbZ72MImaivaz4e0WWttfocoXo2eBTieldFc-yCic0kl8QS2zYgCGrkeN6ggcDw7qYYSwKcVAcZGvCwtMmdS8u1Cka1m2QIfsnTY64m7OLoW29DMdMFIHsI5URozYDcCYLKGo_GLmHEIgF1f2y99egH_6E2s_YAbhDRci20vxNqRk9x-qK_Fv0m-THzrOx6cifyyK4detB59_KXFuWfRvrmE87RS-aehIYAP7d5Y5Aj"
                  alt="Founders of ProTech"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-white/60 text-base leading-relaxed">
                  Founded in 2015, ProTech started with a simple idea: to merge creative design with powerful technology. What began as a small team of passionate developers and designers has grown into a full-service digital agency. Over the years, we've helped countless businesses establish their online presence, tell their stories through compelling video, and build unforgettable brands.
                </p>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-white text-2xl font-bold px-4 mb-6">
              Meet the Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
              {team.map((member) => (
                <TeamMember key={member.name} {...member} />
              ))}
            </div>
          </section>

          {/* CTA */}
          <CTA 
            title="Let's Build Together"
            description="Ready to start your next project? We're here to help you turn your vision into reality. Get in touch with our team today."
            buttonText="Contact Us"
          />
        </div>
      </div>
    </main>
  );
}
