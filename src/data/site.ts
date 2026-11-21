export const site = {
  name: "Babatunde Abeeb Seun",
  shortName: "Seun",
  role: "Full-stack developer",
  email: "seundavid357@gmail.com",
  phoneDisplay: "+234 816 701 4764",
  whatsappUrl:
    "https://wa.me/2348167014764?text=Hi%20Seun%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
  // Add the final Calendly (or equivalent) URL when the booking page is configured.
  bookingUrl: "",
  // Keep these empty until the correct public profile URLs are supplied.
  linkedinUrl: "",
  xUrl: "",
  // Add the approved CV PDF path when the updated document is ready.
  cvUrl: "",
} as const;

export const services = [
  {
    number: "01",
    title: "Website development",
    description:
      "Clear, responsive websites that explain what your business does and help the right people take the next step.",
    detail: "Business websites · Landing pages · Portfolio sites",
  },
  {
    number: "02",
    title: "Web application development",
    description:
      "Custom platforms and tools built around the way your customers and team actually work.",
    detail: "Marketplaces · Dashboards · Booking systems",
  },
  {
    number: "03",
    title: "Backend & API development",
    description:
      "The systems behind the experience: data, business logic, integrations and dependable application workflows.",
    detail: "API design · Databases · Payment integrations",
  },
  {
    number: "04",
    title: "AI integration",
    description:
      "Useful AI features that make a product more capable, automate repetitive work or help people get answers faster.",
    detail: "AI assistants · Workflow automation · AI APIs",
  },
] as const;

export const projects = [
  {
    name: "Ritewheel Autos",
    category: "Automotive · Digital commerce",
    description:
      "A car discovery and commerce experience designed to make browsing vehicles and managing an automotive business feel straightforward.",
    image: "/images/ritewheel-preview.svg",
    imageAlt: "Temporary illustrated preview artwork for the Ritewheel Autos project",
    status: "Temporary preview artwork",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    number: "01",
  },
  {
    name: "FixTrust",
    category: "Property · Service marketplace",
    description:
      "A property-project marketplace concept focused on helping people find artisans and manage work with clearer milestones and accountability.",
    image: "/images/fixtrust-preview.svg",
    imageAlt: "Temporary illustrated preview artwork for the FixTrust project",
    status: "Temporary preview artwork",
    tags: ["React", "Node.js", "PostgreSQL"],
    number: "02",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We talk through your idea, the people it serves and the problem you need to solve.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We agree on what matters, what belongs in the first version and how we will approach it.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "I turn the plan into working software and share progress in clear, reviewable steps.",
  },
  {
    number: "04",
    title: "Refine",
    description:
      "We test real workflows, fix rough edges and improve the experience before launch.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "I help get the product online and hand over the knowledge needed to move forward.",
  },
] as const;
