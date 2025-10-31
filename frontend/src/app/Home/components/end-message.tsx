export default function EndMessage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 md:px-6 mt-12">
      <div className="rounded-xl bg-secondary/30 p-6 md:p-8 shadow-sm">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-primary">
            Thank you for visiting Swiss Guest House.
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-primary/80 mx-auto" />
          <p className="mt-4 text-foreground/80 text-base md:text-lg leading-relaxed">
            Experience the warmth of Bhutanese hospitality and the charm of
            Swiss comfort in the heart of Bumthang.
          </p>
          <div className="text-3xl mt-4">🇨🇭🇧🇹</div>
          <div className="mt-2 text-base font-medium text-foreground/70">
            Your home away from home awaits.
          </div>
        </div>
      </div>
    </section>
  );
}
