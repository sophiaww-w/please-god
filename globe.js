// globe.js

// 1. The Pulse Layer (Rings)
const world = Globe()
  (document.getElementById('globeViz'))
  .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-dark.jpg')
  .backgroundColor('#080C16')
  .pointOfView({ altitude: 2.5 })
  
  // This creates the pulsing outer ring
  .ringsData(orgData)
  .ringColor(() => '#ff3366')
  .ringMaxRadius(3.5)
  .ringPropagationSpeed(2.5)
  .ringRepeatPeriod(800)

  // 2. The Solid Center Layer (Points)
  .pointsData(orgData)
  .pointColor(() => '#ff3366') // Solid red center
  .pointRadius(0.8) // Small and sharp
  .pointResolution(32)
  
  // 3. The Hover Box (Updated with raised/goal info)
  .pointLabel(d => {
    const percent = Math.round((d.raised / d.goal) * 100);
    return `
      <div class="tooltip-title">${d.name}</div>
      <div class="tooltip-location">${d.city}, ${d.country}</div>
      <div class="tooltip-stats">
        <strong>$${d.raised.toLocaleString()}</strong> raised of $${d.goal.toLocaleString()}
        <div class="tooltip-percent">${percent}% funded</div>
      </div>
    `;
  })
  
  .onPointClick(d => {
    window.location.href = `org.html?id=${d.id}`;
  });

world.controls().autoRotate = true;
world.controls().autoRotateSpeed = 0.5;
