<template>
  <div class="main-container flex flex-col px-5 mx-auto gap-y-10">
    <!-- Games -->
    <PortfolioSection name="Games">
      <template #projects>
        <Project :project="PROJECTS.GAMES.LAZY_GALAXY_2">
          <template #description>
            <p>Incremental/clicker game with base-building and light RTS elements, on which I worked as the <b>lead programmer</b> together with a team of talented artists and designers, delivering a successful title with over <b>10,000 copies sold</b>.</p>
          </template>
        </Project>
      </template>
    </PortfolioSection>

    <!-- Divinity Mods -->
    <PortfolioSection name="Divinity Mods">
      <template #projects>
        <p class="section-text">I mostly make mods for the <i>Divinity: Original Sin</i> franchise, specializing in scripting & UI modding,<br/>with my mods serving <b>over 30,000 users</b> and being considered "must-haves" within the community.</p>

        <!-- Epip -->
        <Project :project="PROJECTS.DIVINITY_MODS.EPIP">
          <template #description>
            <p>Extensive UI & quality-of-life mod for <i>Divinity: Original Sin 2</i> with a <b>modular design and high configurability</b>, also acting as a <b>scripting framework</b> to ease creation of client-side mods. Written in Lua using <i>Norbyte's Script Extender.</i></p>
          </template>
        </Project>

        <!-- Ep1p -->
        <Project :project="PROJECTS.DIVINITY_MODS.EP1P">
          <template #description>
            <p>UI & quality-of-life mod for <i>Divinity: Original Sin 1</i> that backports features and bug fixes from the game's sequel through <b>DLL injection and C++ hooks</b>, based on reverse-engineering the compiled code of both games.</p>
          </template>
        </Project>

        <!-- Improved Hotbar -->
        <Project :project="PROJECTS.DIVINITY_MODS.IMPROVED_HOTBAR">
          <template #description>
            <p>Mod for <i>Divinity: Original Sin 2</i> with over <b>30,000</b> subscribers that reworks the hotbar UI to introduce a highly-requested larger layout and more efficient hotbar management, rewriting and extending the original hotbar functionality through Lua scripting.<br/><i>This mod has since then been merged into the "Epip" mod.</i></p>
          </template>
        </Project>
      </template>
    </PortfolioSection>

    <!-- Web apps and resources -->
    <PortfolioSection name="Divinity Web Apps & Resources">
      <template #projects>
        <p class="section-text">I've also made various utilities and resources for <i>Divinity: Original Sin</i> games<br/>and its modded overhauls, mainly for the <i>Epic Encounters 2</i> mod:</p>

        <!-- EE2 build planner -->
        <Project :project="PROJECTS.WEB_APPS.EE2_BUILD_PLANNER"/>

        <!-- Skillviewer -->
        <Project :project="PROJECTS.WEB_APPS.SKILLVIEWER"/>

        <!-- Smaller resources -->
        <div class="small-project-grid">
          <Project v-for="project in PROJECTS.RESOURCES" :key="project.name" :project="project" :is-minor="true" />
        </div>
      </template>
    </PortfolioSection>
    
    <!-- Other projects -->
    <PortfolioSection name="Other Projects">
      <template #projects>
        <p class="section-text">Unsurprisingly, I also have a life & projects outside of Divinity:</p>

        <!-- Bloggy -->
        <Project :project="PROJECTS.OTHER_PROJECTS.BLOGGY">
          <template #description>
            <p><b>Full-stack CMS</b> for managing blog-style websites, with a <b>custom rich text editor</b> for authoring blog posts, built with FastAPI and Nuxt.</p>
            <p>This was my final degree project at <i>University of Barcelona</i>, getting <b>a perfect 10/10 grade and opting for honours.</b></p>
          </template>
        </Project>
        
        <!-- KF3 Tweaks -->
        <Project class="lg:max-w-[50%] mx-auto" :project="PROJECTS.OTHER_MODS.KF3_TWEAKS" :is-minor="true">
          <template #description>
            <p>QoL & graphics improvement mod for <i>Kemono Friends 3 (けもフレ３)</i>, made by <b>reverse-engineering</b> a ridiculously convoluted C# codebase with the extra challenges of a language barrier.</p>
            <p>Its main focus was fixing various newbie Unity mistakes that made the graphics much worse than they should be.</p>
          </template>
        </Project>
      </template>
    </PortfolioSection>
  </div>
</template>

<script setup>
import PortfolioSection from './PortfolioSection.vue'

// I thought about moving this to json,
// but it doesn't make sense for a webpage this simple to require extra requests.
const PROJECTS = {
  DIVINITY_MODS: {
    EPIP: {
      name: "Epip",
      skills: ["Lua"],
      main_link: "/epip/",
      bullet_points: [
        "Greatly improved the UX of the game's UIs and implemented new ones based on player needs",
        "Developed a custom programmatic UI framework to streamline UI creation for both the project & the modding community",
        "Maintained and documented a large, event-driven codebase and APIs for other modders for over 4 years",
      ],
      images: [
        "/portfolio/mods/epip/vanity.png",
        "https://www.pinewood.team/epip/Features/img/quickloot/filters.png",
        "/portfolio/mods/epip/settings.png",
      ],
      links: [
        {name: "Feature showcase", url: "https://pinewood.team/epip"},
        {name: "Source code", url: "https://github.com/pinewoodpip/epipencounters"},
      ]
    },
    EP1P: {
      name: "Ep1p",
      skills: ["C++", "Ghidra"],
      main_link: "/ep1p/",
      bullet_points: [
        "Fixed long-standing bugs in the engine without access to the source code",
        "Reverse-engineered the game's data structures and functions to understand the engine at a lower level",
        "Applied techniques like function detours to extend and patch the game code at runtime"
      ],
      images: [
        "https://pinewood.team/ep1p/img/features/settings_menu.png",
        "https://pinewood.team/ep1p/img/features/target_info.png",
      ],
      links: [
        {name: "Feature showcase", url: "https://pinewood.team/ep1p"},
        {name: "Source code", url: "https://github.com/pinewoodpip/ep1p"},
      ]
    },
    IMPROVED_HOTBAR: {
      name: "Improved Hotbar",
      skills: ["Lua"],
      main_link: "https://steamcommunity.com/sharedfiles/filedetails/?id=2759281297",
      bullet_points: [],
      images: [
        "/portfolio/mods/improved_hotbar/1.png",
        "/portfolio/mods/improved_hotbar/2.jpg",
        "/portfolio/mods/improved_hotbar/3.jpg",
      ],
      links: [
        {name: "Steam Workshop page", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2759281297"},
      ]
    }
  },
  WEB_APPS: {
    EE2_BUILD_PLANNER: {
      name: "Epic Encounters 2 Build Planner",
      description: "Comprehensive CRPG build planner for the Epic Encounters 2 mod, with support for its skill tree, skill & item tooltips extracted from the game, stat calculators, and more.",
      skills: ["React", "Python"],
      main_link: "/ee2buildplanner/",
      bullet_points: [],
      images: ["/portfolio/webapps/buildplanner.png"],
    },
    SKILLVIEWER: {
      name: "Divinity Skill Viewer",
      description: "Skills reference page for various Divinity: Original Sin 2 overhaul mods, with accurate & stylized tooltips extracted from the game & mod files.",
      skills: ["React"],
      main_link: "/skillviewer/",
      bullet_points: [],
      images: ["/portfolio/webapps/skillviewer.png"],
    },
  },
  RESOURCES: [
    {
      name: "Epic Encounters 2 Ascension Helper",
      description: "Utility to brute-force optimal paths through Epic Encounters 2's skill tree, finding builds that minimize necessary skill points and resources.",
      skills: ["React", "Python"],
      main_link: "/ee2calc/",
      bullet_points: [],
      images: [],
    },
    {
      name: "Epic Encounters 2 Gear Modifiers List",
      description: "Filterable list of equipment loot attributes in Epic Encounters 2; a user-friendly summary of equipment data parsed from the mod's files through Python scripts.",
      skills: ["React", "Python"],
      main_link: "/ee2gearmods/",
      bullet_points: [],
      images: [],
    },
  ],
  GAMES: {
    LAZY_GALAXY_2: {
      name: "Lazy Galaxy 2",
      skills: ["C#", "Unity"],
      main_link: "https://store.steampowered.com/app/1477950/Lazy_Galaxy_2/",
      bullet_points: [
        "Followed all phases of game development, from prototyping, through early development, release and post-launch support",
        "Robust codebase that applies MVC architecture to Unity, with data-driven design, event systems and object pooling",
        "Implemented tools to aid designers, modding support and Steam platform integration",
      ],
      images: [
        "/portfolio/games/lg2/base.jpg",
        "/portfolio/games/lg2/combat.jpg",
        "/portfolio/games/lg2/upgrades.jpg",
      ],
      links: [
        {name: "Steam page", url: "https://store.steampowered.com/app/1477950/Lazy_Galaxy_2/"},
      ]
    },
  },
  OTHER_PROJECTS: {
    BLOGGY: {
      name: "Bloggy",
      skills: ["Vue", "Nuxt", "FastAPI", "PostgreSQL"],
      main_link: "https://github.com/pinewoodpip/bloggy",
      bullet_points: [
        "Applied test-driven development to build a robust REST API for managing the CMS’s Postgres database with SQLAlchemy ORM",
        "Implemented a custom, extendable rich text editor for authoring blog content with interactive blocks & media embeds using an MVVM architecture",
        "Developed an efficient frontend and admin interface, taking advantage of server-side rendering and Vue-specific patterns"
      ],
      images: [
        "https://github.com/PinewoodPip/bloggy/blob/main/docs/images/site/category.png?raw=true",
        "https://github.com/PinewoodPip/bloggy/blob/main/docs/images/editor/editor.png?raw=true",
        "https://github.com/PinewoodPip/bloggy/blob/main/docs/images/admin/config.png?raw=true",
      ],
      links: [
        {name: "Source code & showcase", url: "https://github.com/pinewoodpip/bloggy"},
      ]
    }
  },
  OTHER_MODS: {
    KF3_TWEAKS: {
      name: "KF3 Tweaks",
      main_link: "https://github.com/pinewoodpip/kf3tweaks",
      skills: ["C#", "Unity"],
      bullet_points: [],
      images: [],
    },
  }
}

</script>

<style scoped>
.read-the-docs {
  color: #888;
}
h2 {
  color: #8576de;
}
.main-container {
  max-width: 1200px;
}

.small-project-grid {
  @apply grid lg:grid-cols-2 gap-2 items-center content-center
}

.section-text {
  @apply text-center
}

</style>
