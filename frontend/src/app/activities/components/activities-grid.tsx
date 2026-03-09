import ActivityCard from "@/app/activities/components/activity-card";

const activities = [
  {
    title: "Bonfire" as const,
    image: "/home/loca1.jpg",
    imageAlt: "Bonfire activity at Swiss Guest House",
    description:
      "Gather around a warm bonfire in the evening, enjoy mountain air, and share stories under the stars.",
    bestTime: "Evening",
  },
  {
    title: "Bushman Trail" as const,
    image: "/home/loca2.jpg",
    imageAlt: "Bushman Trail walk in Bumthang",
    description:
      "Take a scenic walk through peaceful forest paths and discover the natural beauty of Bumthang.",
    bestTime: "Morning",
  },
  {
    title: "Visit Kharchu Dratshang" as const,
    image: "/home/loca3.jpg",
    imageAlt: "Kharchu Dratshang monastery visit",
    description:
      "Visit one of Bumthang's important monastic centers to experience Bhutanese culture and spiritual heritage.",
    bestTime: "Daytime",
  },
  {
    title: "Visit Red Panda Brewery" as const,
    image: "/home/loca4.jpg",
    imageAlt: "Visit to Red Panda Brewery in Bumthang",
    description:
      "Tour the Red Panda Brewery and learn about Bhutan's popular local craft beer, from brewing process to tasting.",
    bestTime: "Afternoon",
  },
];

export default function ActivitiesGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 md:gap-6 w-full">
      {activities.map((activity, index) => (
        <ActivityCard
          key={activity.title}
          title={activity.title}
          image={activity.image}
          imageAlt={activity.imageAlt}
          description={activity.description}
          bestTime={activity.bestTime}
          reverse={index % 2 === 0}
        />
      ))}
    </div>
  );
}
