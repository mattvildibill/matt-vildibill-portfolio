export type Project = {id:string;name:string;repo:string;url:string;category:string;line:string;description:string;tags:string[];facts:string[];boundary:string;tryThis:string;image?:string;caption:string};
export const projects: Project[] = [
  {
    "id": "fabric",
    "url": "https://fabric.mattvildibill.com",
    "name": "Fabric Reality Lab",
    "repo": "fabric-reality-lab",
    "category": "NETWORK SIMULATION",
    "line": "A closer look at how networks move data.",
    "description": "I built this lab to explore the networks used in high-performance computing and AI. Change a workload, slow down a link, and follow the packets to see what happens.",
    "tags": [
      "TypeScript",
      "React",
      "Next.js",
      "Three.js"
    ],
    "facts": [
      "The simulation tracks 128 ranks and 32 access switches, with packet queues and link timing.",
      "You can replay the same workload with and without a network problem to compare the results.",
      "Packet views, traffic maps, and timing charts help show where data gets held up."
    ],
    "boundary": "This is a simplified model for exploring network behavior. Its assumptions are explained in the app, and its results shouldn’t be used to rank vendors or predict production performance.",
    "tryThis": "Slow down a link, then inspect its queue and compare the run with the baseline.",
    "image": "/images/fabric-preview.webp",
    "caption": "Interactive fabric simulator"
  },
  {
    "id": "denver",
    "url": "https://denver.mattvildibill.com",
    "name": "Denver Spire Explorer",
    "repo": "denver-spire-explorer",
    "category": "3D CITY EXPLORER",
    "line": "A walk around downtown Denver.",
    "description": "A 3D version of downtown Denver centered on the Spire. I brought together public building data, streets, and aerial imagery so you can walk around, fly above the city, or take a guided tour.",
    "tags": [
      "JavaScript",
      "Three.js",
      "Blender",
      "Python"
    ],
    "facts": [
      "The scene covers about 2.6 km², with 530 building groups and 1,916 roof sections.",
      "Building data comes from Denver’s public datasets, with OpenStreetMap streets and USDA NAIP aerial imagery.",
      "You can inspect buildings, navigate with the minimap, or follow a six-stop tour."
    ],
    "boundary": "Building shapes are based on geographic data, with estimated facades and details. The ground is flat, and the older roof data and aerial photos won’t reflect every change in the city.",
    "tryThis": "Take the guided tour, then switch to Walk and explore a building that catches your eye.",
    "image": "/images/denver-preview.webp",
    "caption": "Footprint map from the Denver explorer"
  },
  {
    "id": "fort-collins",
    "url": "https://fort-collins.mattvildibill.com",
    "name": "Fort Collins Worlds",
    "repo": "fort-collins-worlds",
    "category": "3D CITY EXPLORER",
    "line": "Try a few different versions of Fort Collins.",
    "description": "An experiment in changing a city on screen. Add trees, rethink parking, or change the weather, then compare the result with the original downtown model.",
    "tags": [
      "JavaScript",
      "Three.js",
      "Python",
      "Vite"
    ],
    "facts": [
      "The base model uses 1,712 building footprints, with terrain and roof estimates derived from LiDAR.",
      "A local, rule-based interpreter turns supported prompts into changes to streets, trees, buildings, and weather.",
      "Compare mode shows the changes side by side. The 96 protected Old Town buildings keep their heights and materials."
    ],
    "boundary": "The changes follow a set of predefined rules. They’re visual experiments rather than forecasts or planning assessments. The terrain and roof estimates also use older source data.",
    "tryThis": "Choose Green streets, then use Compare to see what changed.",
    "image": "/images/fort-collins-preview.webp",
    "caption": "Render from the project’s city geometry"
  },
  {
    "id": "painted",
    "url": "https://painted.mattvildibill.com",
    "name": "Painted Worlds",
    "repo": "painted-worlds",
    "category": "3D ART EXPLORER",
    "line": "Paintings you can walk into.",
    "description": "I turned scenes from paintings into small 3D places to explore. There are nine worlds connected by a garden gallery, along with all 61 original paintings to browse.",
    "tags": [
      "JavaScript",
      "Three.js",
      "WebGL",
      "Vite"
    ],
    "facts": [
      "Textures from the paintings are mapped onto 3D objects, terrain, and surrounding scenery.",
      "You can walk freely within each world, take a guided route, or use touch controls.",
      "The comparison view shows the original painting, and you can return to the canvas viewpoint at any time."
    ],
    "boundary": "These are 3D interpretations of the paintings. Depth and the areas outside the original view are imagined, and close-up details are simplified.",
    "tryThis": "Enter Lily Lake, walk around, then compare it with the original painting.",
    "image": "/images/painted-preview.webp",
    "caption": "Shader render from the Lily Lake world"
  },
  {
    "id": "gravity",
    "url": "https://gravity.mattvildibill.com",
    "name": "Gravity, Unscripted.",
    "repo": "gravity-unscripted",
    "category": "GRAVITY SIMULATION",
    "line": "Change an orbit and see where it goes.",
    "description": "A little lab for playing with gravity in the browser. Adjust the starting conditions, watch the orbits change, and check how much the numerical calculation affects the result.",
    "tags": [
      "JavaScript",
      "Three.js",
      "Web Workers",
      "SciPy (preset data)"
    ],
    "facts": [
      "A Web Worker runs the calculations separately from the scene and controls.",
      "The solver uses adaptive Dormand–Prince 5(4) integration and reruns each experiment at a tighter tolerance.",
      "Energy-drift charts, different orbit views, and a guided watch mode help you explore the results."
    ],
    "boundary": "The model uses Newtonian point masses without force softening. A tighter rerun is a useful consistency check, but it doesn’t guarantee an exact answer.",
    "tryThis": "Start with an orbit preset, change one starting value, and compare the paths.",
    "caption": "Illustration of three-body orbit paths"
  },
  {
    "id": "f1",
    "url": "https://f1.mattvildibill.com",
    "name": "F1 Live Tracker",
    "repo": "F1-live-tracker",
    "category": "F1 DATA DASHBOARD",
    "line": "Follow a race weekend or replay an old one.",
    "description": "An F1 dashboard that brings together the race schedule, qualifying, weather, and standings. You can also replay past races and compare how drivers moved through the field, lap by lap.",
    "tags": [
      "TypeScript",
      "React",
      "Vite",
      "Chart.js",
      "REST APIs"
    ],
    "facts": [
      "The calendar picks the current or upcoming race weekend, and each feed shows whether its data is available or stale.",
      "Historical replays use recorded Jolpica lap data, with race selection, playback controls, and a lap slider.",
      "OpenF1, Jolpica, and Open-Meteo supply the data. Missing telemetry and tyre information stay marked as unknown."
    ],
    "boundary": "Live timing may be unavailable because OpenF1 requires authentication during live sessions. Replays show recorded lap-end positions, not GPS tracks. Weather is a regional estimate, and the separate offline demo uses synthetic data.",
    "tryThis": "Check the current weekend, then open Simulator / Replay and scrub through a past race.",
    "image": "/images/f1-preview.webp",
    "caption": "Race-weekend dashboard with qualifying and standings"
  }
];
