import {CardProps} from "@/components/ui/apple-cards-carousel";
import * as links from '@/constants/important_links'
import {WideCardProps} from "@/components/ui/wide-carousel";
import DummyContent from "@/components/dummy-content";

export const destinations: CardProps[] = [
  {
    title: "Stupa Sumberawan",
    src: "/destinations/stupa_sumberawan.png",
    // content: <DummyContent />,
    bookingLink: links.whatsapp
  },

  {
    title: "Bukit Kuneer",
    src: "/destinations/bukit_kuneer.png",
    // content: <DummyContent />,
    bookingLink: links.whatsapp
  },
  {
    title: "Griya Anggrek",
    src: "/destinations/anggrek.png",
    // content: <DummyContent />,
    bookingLink: links.whatsapp
  },
  {
    title: "Budug Asu",
    src: "/destinations/budug_asu.png",
    // content: <DummyContent />,
    bookingLink: links.whatsapp
  },
];

export const natural_tourism: CardProps[] = [
  {
    title: "Kebun Teh",
    src: "/destinations/stupa_sumberawan.png",
    // content: <DummyContent />,
    bookingLink: links.whatsapp
  },

  {
    title: "Bukit Kuneer",
    src: "/destinations/bukit_kuneer.png",
    // content: <DummyContent />,
    bookingLink: links.whatsapp
  },
  {
    title: "Camp Ground",
    src: "/destinations/anggrek.png",
    // content: <DummyContent />,
    bookingLink: links.whatsapp
  },
  {
    title: "Budug Asu",
    src: "/destinations/budug_asu.png",
    // content: <DummyContent />,
    bookingLink: links.whatsapp
  },
];

export const tourists_attraction: CardProps[] = [
  {
    title: "Arjuna Geopark",
    src: "/destinations/stupa_sumberawan.png",
    // content: <DummyContent />,
    bookingLink: links.whatsapp
  },

  {
    title: "Candi Singosari",
    src: "/destinations/bukit_kuneer.png",
    // content: <DummyContent />,
    bookingLink: links.whatsapp
  },
  {
    title: "Griya Anggrek",
    src: "/destinations/anggrek.png",
    // content: <DummyContent />,
    bookingLink: links.whatsapp
  },
  {
    title: "Candi Sumberawan",
    src: "/destinations/budug_asu.png",
    // content: <DummyContent />,
    bookingLink: links.whatsapp
  },
];

export const packages: WideCardProps[] = [
  {
    title: "Jelajah Singosari 1",
    src: "/destinations/explore1.png",
    content: <DummyContent />,
  },

  {
    title: "Jelajah Singosari 2",
    src: "/destinations/explore2.png",
    content: <DummyContent />,

  },
  {
    title: "Jelajah Singosari 3",
    src: "/destinations/explore3.png",
    content: <DummyContent />,

  },
];
