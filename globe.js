// globe.js

const world = Globe()
  (document.getElementById('globeViz'))
  .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-dark.jpg')
  .backgroundColor('#080C16')
  .pointOfView({ altitude: 2.5 })
  
  // 1. The Pulse Layer (Rings)
  .ringsData(orgData)
  .ringColor(() => '#ff3366')
  .ringMaxRadius(3.5)
  .ringPropagationSpeed(2.5)
  .ringRepeatPeriod(800)

  // 2. The Solid Center Layer (Flat Dots)
  .pointsData(orgData)
  .pointColor(() => '#ff3366')
  .pointRadius(1.2) // Slightly larger trigger radius for better "edge" hovering
  .pointAltitude(0) 
  .pointResolution(64) // Smoother circles
  
  // 3. The Hover Box (White box, Black text, Blue percentage)
  .pointLabel(d => {
    const percent = Math.round((d.raised / d.goal) * 100);
    return `
      <div class="tooltip-title">${d.name}</div>
      <div class="tooltip-location">${d.city}, ${d.country}</div>
      <div class="tooltip-percent">${percent}% FUNDED</div>
    `;
  })
  
  .onPointClick(d => {
    window.location.href = `org.html?id=${d.id}`;
  });

// Smooth Auto-Rotate
world.controls().autoRotate = true;
world.controls().autoRotateSpeed = 0.5;
// This ensures the camera doesn't "clip" the tooltips when they are near the edge
world.controls().minDistance = 150;
