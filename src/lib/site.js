export const BUSINESS_NAME = "MRJ Riders Up56";
export const BUSINESS_ALT = "MRJ Riders Custom";
export const TAGLINE = "Your Bike, Our Passion!";
export const PHONE_DISPLAY = "096966 37676";
export const PHONE_TEL = "+919696637676";
export const WHATSAPP_NUMBER = "919696637676";

export const ADDRESS_LINE =
  "Jai Prakash Nagar Ward 7, Near 3P Mall, Gorakhpur Road, Padri, Maharajganj, Uttar Pradesh 273303";

export const RATING = "4.3";
export const REVIEW_COUNT = "23";
export const HOURS = "Open daily · closes 9 pm";

export const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Mrj+riders+up56+Jai+Prakash+Nagar+Ward+7+Padri+Maharajganj+Uttar+Pradesh+273303";

export const whatsapp = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const CALL_LINK = `tel:${PHONE_TEL}`;

export const DEFAULT_WA_MESSAGE =
  "Hi MRJ Riders Up56, I want to talk about a build for my bike.";

const MEDIA = "https://media.base44.com/images/public/user_6aede51527ad4c83d43f5252";

export const PHOTOS = {
  demon: `${MEDIA}/6ce8e03a0_Screenshot_20261107-141022Maps2.jpg`,
  white: `${MEDIA}/096ea95e1_Screenshot_20261107-141024Maps2.jpg`,
  silver: `${MEDIA}/320193dfe_Screenshot_20261107-141029Maps2.jpg`,
  olive: `${MEDIA}/b6f9e6a52_Screenshot_20261107-141020Maps2.jpg`,
};

export const SERVICES = [
  {
    title: "Full Bike Modification",
    tag: "Signature",
    body:
      "Frame, tank, tail and stance reworked end to end — a one-off build drawn around how you ride.",
    point: "Full modification",
  },
  {
    title: "Graphics & Monograms",
    tag: "Styling",
    body:
      "Custom sticker sets, tank graphics, name monograms and livery layouts cut and applied in-house.",
    point: "graphics and monograms",
  },
  {
    title: "Vinyl Wrapping",
    tag: "Styling",
    body:
      "Matte, gloss and satin wraps laid panel by panel so edges stay tight and lines stay clean.",
    point: "vinyl wrapping",
  },
  {
    title: "PPF & Smoke Lamination",
    tag: "Protection",
    body:
      "Paint protection film and smoke lamination for bikes and cars — stone chips and sun fade kept off the finish.",
    point: "PPF and smoke lamination",
  },
  {
    title: "Custom Exhaust & Silencers",
    tag: "Performance",
    body:
      "Upswept pipes, wrapped headers and bullet silencers matched for tone, clearance and flow.",
    point: "a custom exhaust or silencer",
  },
  {
    title: "Fiber Parts & Alloys",
    tag: "Hardware",
    body:
      "Fiber panels, fenders and alloy wheel setups that change the bike's silhouette without cutting corners.",
    point: "fiber parts or alloy wheels",
  },
  {
    title: "Engine Work & Accessories",
    tag: "Mechanical",
    body:
      "Complete engine work, tune-ups and premium accessories fitted and tested at the workshop.",
    point: "engine work",
  },
  {
    title: "Denting, Painting & Servicing",
    tag: "Mechanical",
    body:
      "Dent removal, repainting and general servicing that keeps a daily ride feeling new.",
    point: "denting, painting or general servicing",
  },
];

export const BUILDS = [
  {
    id: "MRJ-01",
    name: "Matte Black Demon",
    src: PHOTOS.demon,
    alt:
      "Matte black custom motorcycle with red tank lettering, wrapped exhaust header and knobby tyres by MRJ Riders Up56",
    specs: ["Satin black repaint", "Wrapped header + upswept can", "Knobby dual-sport rubber"],
  },
  {
    id: "MRJ-02",
    name: "White Cafe Racer",
    src: PHOTOS.white,
    alt:
      "Matte white cafe racer motorcycle with star-pattern black alloy wheels and aftermarket exhaust by MRJ Riders Up56",
    specs: ["Matte white tank graphic", "Star-pattern alloys", "Slip-on performance can"],
  },
  {
    id: "MRJ-03",
    name: "Silver Scrambler",
    src: PHOTOS.silver,
    alt:
      "Silver scrambler motorcycle with black racing stripe, orange accents and heat-tinted exhaust by MRJ Riders Up56",
    specs: ["Striped tank livery", "Heat-tinted exhaust", "Flat bench seat"],
  },
  {
    id: "MRJ-04",
    name: "Olive Scout",
    src: PHOTOS.olive,
    alt:
      "Olive green scrambler motorcycle with yellow headlight lens and knobby tyres by MRJ Riders Up56",
    specs: ["Olive matte panels", "Amber lens headlamp", "Quilted low seat"],
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Talk it through",
    body: "Send a photo of your bike on WhatsApp and tell us the look you have in mind.",
  },
  {
    step: "02",
    title: "Blueprint",
    body: "We map the parts, paint, graphics and budget before a single panel comes off.",
  },
  {
    step: "03",
    title: "Build",
    body: "Fabrication, paint, wiring and assembly handled in the workshop, updated as we go.",
  },
  {
    step: "04",
    title: "Ride out",
    body: "Final check, walkthrough of the work, and the keys back in your hand.",
  },
];