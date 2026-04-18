// globe.js

const world = Globe()
  (document.getElementById('globeViz'))
  .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-dark.jpg')
  .backgroundColor('#080C16')
  .pointOfView({ altitude: 2.5 })
  
  // 1. The Pulse Layer (Rings) - These are flat by default
  .ringsData(orgData)
  .ringColor(() => '#ff3366')
  .ringMaxRadius(3.5)
  .ringPropagationSpeed(1.5)
  .ringRepeatPeriod(800)

  // 2. The Solid Center Layer (Points)
  .pointsData(orgData)
  .pointColor(() => '#ff3366')
  .pointRadius(0.8)
  .pointAltitude(0) // <--- THIS makes them flat with no height
  .pointResolution(32)
  
  // 3. The Hover Box (Middle Centered, White, Percentage only)
  .pointLabel(d => {
    const percent = Math.round((d.raised / d.goal) * 100);
    return `
      <div class="tooltip-title">${d.name}</div>
      <div class="tooltip-location">${d.city}, ${d.country}</div>
      <div class="tooltip-percent" style="margin-top: 10px; font-weight: 800; color: #3b82f6; text-transform: uppercase; font-size: 12px;">
        ${percent}% funded
      </div>
    `;
  })
  
  // Clicking anywhere on the dot/pulse sends you to the org page
  .onPointClick(d => {
    window.location.href = `org.html?id=${d.id}`;
  });

// Smooth Auto-Rotate
world.controls().autoRotate = true;
world.controls().autoRotateSpeed = 0.5;
