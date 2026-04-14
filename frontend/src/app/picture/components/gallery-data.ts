export type GalleryImage = {
  src: string;
  alt: string;
};

export type GallerySection = {
  title: string;
  description: string;
  images: GalleryImage[];
};

export const gallerySections: GallerySection[] = [
  {
    title: "Room",
    description: "Comfortable rooms and cozy guest house spaces.",
    images: [
      { src: "/home/Hero1.jpg", alt: "Guest house exterior view 1" },
      { src: "/home/Hero2.jpg", alt: "Guest house exterior view 2" },
      { src: "/home/Hero3.jpg", alt: "Guest house exterior view 3" },
      { src: "/home/Hero4.jpg", alt: "Guest house exterior view 4" },
      { src: "/home/Hero5.jpg", alt: "Guest house exterior view 5" },
      { src: "/home/room1.jpg", alt: "Room 1" },
      { src: "/home/room2.jpg", alt: "Room 2" },
      { src: "/home/room3.jpg", alt: "Room 3" },
      { src: "/home/room4.jpg", alt: "Room 4" },
      { src: "/home/room5.jpg", alt: "Room 5" },
    ],
  },
  {
    title: "Food",
    description: "Swiss and local dishes prepared with care.",
    images: [
      { src: "/food/Baguette.jpeg", alt: "Baguette" },
      { src: "/food/Bratwurst.jpg", alt: "Bratwurst" },
      { src: "/food/Cheese.jpg", alt: "Cheese platter" },
      { src: "/food/Croissant.jpeg", alt: "Croissant" },
      { src: "/food/Fondue.jpeg", alt: "Fondue" },
      { src: "/food/Raclette.jpeg", alt: "Raclette" },
      { src: "/food/redpanda.jpg", alt: "Red Panda beer" },
      { src: "/home/food1.jpg", alt: "Meal photo 1" },
      { src: "/home/food2.jpg", alt: "Meal photo 2" },
      { src: "/home/food3.jpg", alt: "Meal photo 3" },
      { src: "/home/food4.jpg", alt: "Meal photo 4" },
    ],
  },
  {
    title: "Location",
    description: "Beautiful surroundings in Bumthang valley.",
    images: [
      { src: "/home/loca1.jpg", alt: "Location photo 1" },
      { src: "/home/loca2.jpg", alt: "Location photo 2" },
      { src: "/home/loca3.jpg", alt: "Location photo 3" },
      { src: "/home/loca4.jpg", alt: "Location photo 4" },
    ],
  },
];
