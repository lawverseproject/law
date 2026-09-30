import Reveal from './Reveal';

const STEPS = [
  { num: '01', title: 'Upload', desc: 'Upload legal documents.' },
  { num: '02', title: 'Understand', desc: 'OCR, extraction and AI analysis.' },
  { num: '03', title: 'Research', desc: 'Retrieve relevant legal information.' },
  { num: '04', title: 'Act', desc: 'Turn insights into useful legal work.' },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-grid-fine opacity-30" />
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <span className="text-[11px] font-semibold tracking-[0.3em] text-gold-300/80">
              THE PROCESS
            </span>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-champagne-100 sm:text-5xl">
              From Document to Decision.
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-16 sm:mt-24">
          {/* Vertical line */}
          <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-gold-300/40 via-gold-300/20 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="flex flex-col gap-12 sm:gap-20">
            {STEPS.map((step, i) => (
              <Reveal key={step.num} delay={i * 100}>
                <div
                  className={`relative flex items-start gap-6 sm:gap-0 ${
                    i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Number node */}
                  <div
                    className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold-300/30 bg-ink-850 sm:absolute sm:left-1/2 sm:-translate-x-1/2 ${
                      i % 2 === 0 ? 'sm:left-1/2' : 'sm:left-1/2'
                    }`}
                  >
                    <span className="font-serif text-lg font-semibold text-gold-200">
                      {step.num}
                    </span>
                    <div className="absolute inset-0 rounded-full bg-gold-400/10 blur-md -z-10" />
                  </div>

                  {/* Content card */}
                  <div
                    className={`flex-1 sm:w-[calc(50%-4rem)] sm:flex-1 ${
                      i % 2 === 0 ? 'sm:pr-16 sm:text-right' : 'sm:pl-16'
                    }`}
                  >
                    <div className="glass rounded-2xl p-6 sm:p-7">
                      <h3 className="font-serif text-2xl font-semibold text-champagne-100">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-[14px] leading-relaxed text-champagne-100/55">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for the other half on desktop */}
                  <div className="hidden sm:block sm:w-[calc(50%-4rem)]" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
