// globe.js
const colorScale = d => '#ff3366'; // Glowing Red

// Initialize the globe
const world = Globe()
  (document.getElementById('globeViz'))
  .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-dark.jpg')
  .backgroundColor('#080C16') // Matches our CSS dark background
  .pointOfView({ altitude: 2.5 })
  
  // Add the dots (rings for a pulsing look)
  .ringsData(orgData)
  .ringColor(() => colorScale())
  .ringMaxRadius(3)
  .ringPropagationSpeed(3)
  .ringRepeatPeriod(700)

  // Add invisible clickable points exactly where the rings are
  .pointsData(orgData)
  .pointColor(() => 'transparent') // Hide the static point, let ring shine
  .pointRadius(1.5)
  .pointResolution(32)
  
  // Custom White Tooltip above the dot
  .pointLabel(d => `
    <div class="tooltip-title">${d.name}</div>
    <div class="tooltip-location">${d.city}, ${d.country}</div>
  `)
  
  // On Click: Send user to organization page
  .onPointClick(d => {
    window.location.href = `org.html?id=${d.id}`;
  });

// Auto-spin the globe slowly
world.controls().autoRotate = true;
world.controls().autoRotateSpeed = 0.5;
