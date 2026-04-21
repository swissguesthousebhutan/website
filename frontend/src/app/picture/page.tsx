import GalleryHeader from "./components/gallery-header";
import GallerySection from "./components/gallery-section";
import { gallerySections } from "./components/gallery-data";

export default function PicturePage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 md:px-6 space-y-8">
      <GalleryHeader
        title="Gallery"
        subtitle="A visual tour of our rooms, food, and the beauty around us."
      />

      <div className="space-y-8">
        {gallerySections.map((section) => (
          <GallerySection key={section.title} section={section} />
        ))}
      </div>
    </section>
  );
}
