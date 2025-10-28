export default function Welcome() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 md:px-6 -mt-9">
      <div className="rounded-xl bg-secondary/30 p-6 md:p-8 shadow-sm">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-primary">
            Welcome to Swiss Guest House
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-primary/80" />
          <p className="mt-4 text-foreground/80 text-base md:text-lg leading-relaxed">
            At Swiss Guest House, we take pride in offering an experience that
            unites the best of two worlds — Swiss precision and Bhutanese
            hospitality. Whether you’re here to explore, relax, or reconnect,
            our serene setting and personalized service ensure a stay you’ll
            never forget.
          </p>
        </div>
      </div>
    </section>
  );
}
