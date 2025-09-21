import React, { useState } from 'react'
import { BADGES, BadgeIcon } from './badges.js'

const App = () => {
  const [kills, setKills] = useState(0)

  // find highest badge unlocked
  const getBadgeForKills = (kills) => {
    let unlocked = null
    for (const key in BADGES) {
      if (kills >= BADGES[key].threshold) {
        unlocked = BADGES[key]
      }
    }
    return unlocked
  }

  const badge = getBadgeForKills(kills)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6">Lanternfly Bug Smasher</h1>

      <div id="badge-container" className="mb-6">
        {badge ? (
          <div className="flex flex-col items-center">
            <BadgeIcon color={badge.color} icon={badge.icon} />
            <p className="mt-2 font-semibold">{badge.label}</p>
          </div>
        ) : (
          <p>No badge yet! Smash more bugs!</p>
        )}
      </div>

      <input
        id="kills-input"
        type="number"
        placeholder="Enter kills"
        value={kills}
        onChange={(e) => setKills(parseInt(e.target.value || 0))}
        className="border p-2 rounded mb-4 w-40 text-center text-gray-800"
      />

      <p className="text-sm">You’ve smashed {kills} bugs.</p>
    </div>
  )
}

export default App
