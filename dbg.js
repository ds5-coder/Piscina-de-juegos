const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const p = await b.newPage({ viewport: { width: 400, height: 240 } });
  await p.addInitScript(() => { const iv = setInterval(() => { if (window.THREE) { clearInterval(iv); const o = THREE.BufferGeometry.prototype.computeBoundingSphere; THREE.BufferGeometry.prototype.computeBoundingSphere = function () { o.call(this); if (isNaN(this.boundingSphere.radius)) { const a = this.attributes.position.array; let bad = -1; for (let i = 0; i < a.length; i++) if (isNaN(a[i])) { bad = i; break; } console.log('NAN geo verts', a.length / 3, 'first bad', bad, Object.keys(this.attributes).join(','), new Error().stack.split('\n').slice(2, 6).join(' | ')); } }; } }, 1); });
  p.on('console', m => { if (m.text().includes('NAN')) console.log(m.text()); });
  await p.goto('file://' + require('path').resolve('test.html'));
  await p.waitForFunction(() => window.__T, null, { timeout: 120000 });
  await b.close();
})();
