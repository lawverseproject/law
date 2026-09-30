import Reveal from './Reveal';

export default function Philosophy() {
  const words = ['KNOWLEDGE', 'JUSTICE', 'PROGRESS'];

  return (
    <section className="relative py-14 sm:py-16">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl px-8 py-8 sm:px-12 sm:py-9"
            style={{
              background: 'linear-gradient(145deg, rgba(22, 34, 52, 0.5) 0%, rgba(12, 19, 32, 0.6) 100%)',
              backdropFilter: 'blur(14px)',
              border: '1px solid rgba(212, 164, 78, 0.12)',
              boxShadow: '0 8px 32px -12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(212,164,78,0.06)',
            }}
          >
            {/* Marble sheen */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: 'radial-gradient(ellipse at 30% 20%, rgba(212,164,78,0.3) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(212,164,78,0.2) 0%, transparent 50%)',
              }}
            />

            {/* Corner accents */}
            <div className="absolute left-0 top-0 h-6 w-6 border-l border-t border-gold-300/30" />
            <div className="absolute right-0 top-0 h-6 w-6 border-r border-t border-gold-300/30" />
            <div className="absolute bottom-0 left-0 h-6 w-6 border-b border-l border-gold-300/30" />
            <div className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-gold-300/30" />

            <div className="relative flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-0">
              {words.map((word, i) => (
                <div key={word} className="flex items-center">
                  <span className="font-serif text-base font-medium tracking-[0.3em] text-gold-200 sm:text-lg">
                    {word}
                  </span>
                  {i < words.length - 1 && (
                    <span className="mx-5 text-gold-300/30 sm:mx-7">•</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
