
window.renderPMPRadar = function(scores){
  const canvas = document.createElement('canvas');
  canvas.width = 420; canvas.height = 420;
  const ctx = canvas.getContext('2d');
  const labels = Object.keys(scores);
  const values = labels.map(k => scores[k]);
  const centerX = 210, centerY = 210, radius = 145;

  ctx.clearRect(0,0,420,420);
  ctx.font = '13px Arial';
  ctx.strokeStyle = '#cbd5e1';
  ctx.fillStyle = '#334155';
  ctx.lineWidth = 1;

  for(let ring=1; ring<=5; ring++){
    ctx.beginPath();
    labels.forEach((label, i) => {
      const angle = (-Math.PI/2) + (i * 2*Math.PI / labels.length);
      const r = radius * (ring/5);
      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r;
      if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    });
    ctx.closePath();
    ctx.stroke();
  }

  labels.forEach((label, i) => {
    const angle = (-Math.PI/2) + (i * 2*Math.PI / labels.length);
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(x,y);
    ctx.stroke();

    const tx = centerX + Math.cos(angle) * (radius + 26);
    const ty = centerY + Math.sin(angle) * (radius + 26);
    ctx.fillText(window.PMP_DIMENSIONS[label].label, tx - 28, ty);
  });

  ctx.beginPath();
  values.forEach((score, i) => {
    const angle = (-Math.PI/2) + (i * 2*Math.PI / labels.length);
    const r = radius * (score/100);
    const x = centerX + Math.cos(angle) * r;
    const y = centerY + Math.sin(angle) * r;
    if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
  });
  ctx.closePath();
  ctx.fillStyle = 'rgba(11,79,217,.16)';
  ctx.strokeStyle = '#0b4fd9';
  ctx.lineWidth = 2.5;
  ctx.fill();
  ctx.stroke();

  return canvas;
};
