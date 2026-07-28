export default function TravelPolicyPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 md:px-6 py-10 space-y-8">
      <div className="rounded-2xl border bg-white p-6 shadow-sm md:p-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Guest information
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Bhutan Travel Policy
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Please review the current entry, visa, and travel rules before you
          plan your trip to Bhutan.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Mandatory fees",
            text: "As of 2026, visitors may need to account for the Sustainable Development Fee, visa fee, and a 5% GST on tourism services.",
          },
          {
            title: "Visa requirements",
            text: "Most foreign nationals must obtain an advance visa before arrival, while Indian nationals need a valid passport or Voter ID.",
          },
          {
            title: "Travel regulations",
            text: "Licensed guides and route permits may still be required depending on your destination and activity.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border bg-white p-5 shadow-sm"
          >
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-2xl border bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold">1. Mandatory fees</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-muted-foreground">
            <li>
              <strong>Sustainable Development Fee (SDF):</strong> A daily levy
              used to fund national healthcare, education, and conservation.
              International adults pay USD 100 per person, per night through
              August 31, 2027.
            </li>
            <li>
              <strong>Children 6 to 12 years:</strong> USD 50 per night.
            </li>
            <li>
              <strong>Children under 6:</strong> Exempt from the SDF.
            </li>
            <li>
              <strong>Indian nationals:</strong> INR 1,200 per person, per night.
            </li>
            <li>
              <strong>Visa fee:</strong> A non-refundable, one-off fee of USD 40
              applies for all nationalities except Indian, Bangladeshi, and
              Maldivian citizens.
            </li>
            <li>
              <strong>New 5% GST:</strong> Starting January 1, 2026, a 5%
              Goods and Services Tax applies to tourism services such as
              hotels, transport, and guides, while the SDF itself is exempt.
            </li>
          </ul>

          <h2 className="mt-8 text-xl font-semibold">2. Visa and entry requirements</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-muted-foreground">
            <li>
              <strong>Advance visa:</strong> All foreign nationals except those
              from India, Bangladesh, and the Maldives must obtain a visa
              before arrival.
            </li>
            <li>
              <strong>Application process:</strong> You can apply online via
              the Department of Immigration or through a licensed Bhutanese
              tour operator.
            </li>
            <li>
              <strong>Passport validity:</strong> Your passport must be valid
              for at least 6 months beyond your intended departure date.
            </li>
            <li>
              <strong>Indian nationals:</strong> Require either a valid Indian
              passport or a Voter ID card to obtain an entry permit.
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold">3. Travel regulations</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-muted-foreground">
            <li>
              <strong>Guided travel:</strong> Visitors can now customize
              itineraries, but a licensed guide is still mandatory for travel
              beyond Paro and Thimphu and for visiting certain cultural sites.
            </li>
            <li>
              <strong>Permits:</strong> Specific route permits are required for
              travel outside Thimphu and Paro, and trekking permits are
              mandatory for mountaineering.
            </li>
            <li>
              <strong>24-hour waiver:</strong> The SDF is waived for casual
              visitors staying less than 24 hours in designated border towns
              such as Phuentsholing and Gelephu.
            </li>
          </ul>

          <div className="mt-8 rounded-2xl bg-muted/40 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Need help planning?
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              If you want help with transport, arrival timing, or booking
              arrangements, contact us through the booking page.
            </p>
            <a
              href="/Booking"
              className="mt-5 inline-flex rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/90"
            >
              Go to booking
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
