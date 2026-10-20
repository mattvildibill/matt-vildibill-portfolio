export type Project = {
  id: string;
  name: string;
  repo: string;
  url: string;
  category: string;
  line: string;
  description: string;
  action: string;
  launchPath: string;
  secondary?: { label: string; path: string };
  tags: string[];
  facts: string[];
  decision: string;
  boundary: string;
  tryThis: string;
  image: string;
  caption: string;
};

export const projects: Project[] = [
  {
    "id": "painted",
    "url": "https://painted.mattvildibill.com",
    "name": "Painted Worlds",
    "repo": "painted-worlds",
    "category": "3D ART EXPLORER",
    "line": "The originals, and nine places to step inside.",
    "description": "I wanted a digital home for my mom’s paintings. I built a gallery for the originals, then experimented with turning nine of them into places you can walk around.",
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
    "tryThis": "Find an original you like, or step into Lily Lake and compare the scene with the painting.",
    "image": "/images/painted-preview.jpg",
    "caption": "Original paintings in the searchable Painted Worlds collection",
    "action": "Browse paintings",
    "launchPath": "/?view=collection",
    "secondary": {
      "label": "Take a painting walk",
      "path": "/#lily-lake"
    },
    "decision": "The originals stay separate from the 3D interpretations, so you can always compare the painted view with the imagined depth and surroundings."
  },
  {
    "id": "fabric",
    "url": "https://fabric.mattvildibill.com",
    "name": "Fabric Reality Lab",
    "repo": "fabric-reality-lab",
    "category": "NETWORK SIMULATION",
    "line": "What happens when a few links slow down?",
    "description": "A browser lab for exploring how distributed computers move data. Run the same workload with and without a slow link, then follow the queues and messages to see what changed.",
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
    "tryThis": "Slow a link, then follow a message to see where the job gets held up.",
    "image": "/images/fabric-preview.jpg",
    "caption": "The seeded packet experiment in Fabric Reality Lab",
    "action": "Explore the lab",
    "launchPath": "/",
    "decision": "Matched baseline and impaired runs use the same seed and workload, so the comparison isolates the modeled intervention rather than a different random experiment."
  },
  {
    "id": "gravity",
    "url": "https://gravity.mattvildibill.com",
    "name": "Gravity, Unscripted",
    "repo": "gravity-unscripted",
    "category": "GRAVITY SIMULATION",
    "line": "A small change. A different orbit.",
    "description": "I’ve always been curious about the n-body problem. I built this to change the starting conditions, watch the motion, and understand how much I could trust the calculation.",
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
    "tryThis": "Try a small change to an orbit, then compare the paths.",
    "caption": "Figure-eight orbit in the Gravity, Unscripted browser laboratory",
    "action": "Try a small change",
    "launchPath": "/#chaos",
    "decision": "The calculation runs in a Web Worker to keep the controls responsive. A second, tighter run exposes numerical disagreement rather than presenting one trajectory as an exact answer.",
    "image": "/images/gravity-preview.jpg"
  },
  {
    "id": "denver",
    "url": "https://denver.mattvildibill.com",
    "name": "Denver Explorer",
    "repo": "denver-spire-explorer",
    "category": "3D CITY EXPLORER",
    "line": "A walk around downtown Denver.",
    "description": "Explore downtown Denver using public building data, streets, and aerial imagery. Walk through the city, fly above it, or follow a tour of six landmarks.",
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
    "tryThis": "Take the guided tour, then drop to street level at a landmark.",
    "image": "/images/denver-preview.jpg",
    "caption": "Downtown Denver in the browser explorer’s 3D view",
    "action": "Explore Denver",
    "launchPath": "/",
    "secondary": {
      "label": "2D overview",
      "path": "/?view=map"
    },
    "decision": "Walking uses mapped building footprints, including courtyards and suspended structures. Separate detail profiles keep the original geometry available while offering a lighter way to load the city."
  },
  {
    "id": "f1",
    "url": "https://f1.mattvildibill.com",
    "name": "F1 Live Tracker",
    "repo": "F1-live-tracker",
    "category": "F1 DATA DASHBOARD",
    "line": "The race data I wanted beside the broadcast.",
    "description": "I started this while watching an F1 race because I wanted more data than the broadcast was showing. It brings together race-weekend information and historical lap replays, with a separate demo for trying the interface.",
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
    "tryThis": "Play the synthetic demo, switch to Track map, then try a recorded race replay.",
    "image": "/images/f1-preview.jpg",
    "caption": "Paused synthetic Australian GP demonstration in F1 Live Tracker",
    "action": "Try the demo",
    "launchPath": "/?mode=demo&panel=tower&time=120",
    "secondary": {
      "label": "Race weekend",
      "path": "/"
    },
    "decision": "Replay state only reveals laps recorded up to the selected point. Live, recorded and synthetic modes remain separate, and missing provider values stay unknown."
  },
  {
    "id": "fort-collins",
    "url": "https://fort-collins.mattvildibill.com",
    "name": "Fort Collins Worlds",
    "repo": "fort-collins-worlds",
    "category": "3D CITY EXPLORER",
    "line": "Try a few different versions of Fort Collins.",
    "description": "I love Fort Collins, so I rebuilt its downtown and added a few ways to change it. Try more trees, different streets, or a different season, then compare the result with the original reconstruction.",
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
    "tryThis": "Apply Green streets, then use Compare to see what changed.",
    "image": "/images/fort-collins-preview.jpg",
    "caption": "Downtown Fort Collins in the browser reconstruction",
    "action": "Try Green streets",
    "launchPath": "/?preset=green",
    "decision": "The historic core keeps its original building identity while scenarios change the surrounding model. A local rule-based interpreter keeps supported changes predictable and available without a service."
  }
];
