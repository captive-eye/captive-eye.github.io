import React from 'react'

// --- BadgeIcon (reusable wrapper) ---
export const BadgeIcon = ({ color, icon: Icon }) => (
  <div
    className={`w-24 h-24 rounded-full flex items-center justify-center shadow-md ${color}`}
  >
    <Icon />
  </div>
)

// --- SVG Icons (simplified for 24x24) ---
const BronzeIcon = () => (
  <svg width="24" height="24" fill="currentColor" className="text-yellow-700">
    <circle cx="12" cy="12" r="10" />
  </svg>
)
const SilverIcon = () => (
  <svg width="24" height="24" fill="currentColor" className="text-gray-400">
    <rect x="4" y="4" width="16" height="16" rx="3" />
  </svg>
)
const GoldIcon = () => (
  <svg width="24" height="24" fill="currentColor" className="text-yellow-500">
    <polygon points="12,2 15,10 23,10 17,14 19,22 12,17 5,22 7,14 1,10 9,10" />
  </svg>
)
const EpicIcon = () => (
  <svg width="24" height="24" fill="currentColor" className="text-purple-500">
    <path d="M12 2L15 10L23 12L15 14L12 22L9 14L1 12L9 10Z" />
  </svg>
)
const MythicIcon = () => (
  <svg width="24" height="24" fill="currentColor" className="text-blue-500">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" fill="white" />
  </svg>
)

// --- Badge Definitions (25 total) ---
export const BADGES = {
  BUG_BOPPER: { threshold: 30, label: 'Bug Bopper', color: 'bg-yellow-600', icon: BronzeIcon },
  CREEPER_CRUSHER: { threshold: 40, label: 'Creeper Crusher', color: 'bg-yellow-600', icon: BronzeIcon },
  LANTERNFLY_SWATTER: { threshold: 50, label: 'Lanternfly Swatter', color: 'bg-yellow-600', icon: BronzeIcon },
  PEST_PATROLLER: { threshold: 60, label: 'Pest Patroller', color: 'bg-yellow-600', icon: BronzeIcon },
  BUG_BASHER: { threshold: 70, label: 'Bug Basher', color: 'bg-yellow-600', icon: BronzeIcon },
  SWARM_SMASHER: { threshold: 80, label: 'Swarm Smasher', color: 'bg-yellow-600', icon: BronzeIcon },
  INVADER_STOMPER: { threshold: 90, label: 'Insect Invader Stopper', color: 'bg-yellow-600', icon: BronzeIcon },
  TREE_PROTECTOR: { threshold: 100, label: 'Tree Protector', color: 'bg-yellow-600', icon: BronzeIcon },
  BUG_HUNTER: { threshold: 120, label: 'Bug Hunter', color: 'bg-yellow-600', icon: BronzeIcon },
  INFESTATION_FIGHTER: { threshold: 150, label: 'Infestation Fighter', color: 'bg-yellow-600', icon: BronzeIcon },

  EXTERMINATOR_ELITE: { threshold: 200, label: 'Exterminator Elite', color: 'bg-gray-400', icon: SilverIcon },
  PEST_PUNISHER: { threshold: 250, label: 'Pest Punisher', color: 'bg-gray-400', icon: SilverIcon },
  WING_BREAKER: { threshold: 300, label: 'Wing Breaker', color: 'bg-gray-400', icon: SilverIcon },
  INSECT_NEMESIS: { threshold: 350, label: 'Insect Nemesis', color: 'bg-gray-400', icon: SilverIcon },

  ECO_DEFENDER: { threshold: 400, label: 'Eco Defender', color: 'bg-yellow-400', icon: GoldIcon },
  LANTERNFLY_SLAYER: { threshold: 450, label: 'Lanternfly Slayer', color: 'bg-yellow-400', icon: GoldIcon },
  NATURES_GUARDIAN: { threshold: 500, label: "Nature's Guardian", color: 'bg-yellow-400', icon: GoldIcon },
  PEST_ANNIHILATOR: { threshold: 600, label: 'Pest Annihilator', color: 'bg-yellow-400', icon: GoldIcon },

  BUGSTORM_BREAKER: { threshold: 700, label: 'Bugstorm Breaker', color: 'bg-purple-500', icon: EpicIcon },
  ECO_AVENGER: { threshold: 800, label: 'Eco Avenger', color: 'bg-purple-500', icon: EpicIcon },
  PLANET_PROTECTOR: { threshold: 850, label: 'Planet Protector', color: 'bg-purple-500', icon: EpicIcon },
  GALACTIC_HERO: { threshold: 900, label: 'Galactic Hero', color: 'bg-purple-500', icon: EpicIcon },

  UNIVERSE_UNBUGGER: { threshold: 950, label: 'Universe Unbugger', color: 'bg-blue-500', icon: MythicIcon },
  LEGENDARY_EXTERMINATOR: { threshold: 975, label: 'Legendary Exterminator', color: 'bg-blue-500', icon: MythicIcon },
  MYTHIC_PEST_SLAYER: { threshold: 1000, label: 'Mythic Pest Slayer', color: 'bg-blue-500', icon: MythicIcon },
}
