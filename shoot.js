// usage: node shoot.js test.html outprefix [quality]
const { chromium } = require('playwright');
(async () => {
  const [file, out, q] = process.argv.slice(2);
  const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await browser.newPage({ viewport: { width: 960, height: 540 } });
  const errs = [];
  page.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') errs.push(m.type() + ': ' + m.text().slice(0, 400)); });
  page.on('pageerror', e => errs.push('PAGEERROR: ' + e.message));
  await page.goto('file://' + require('path').resolve(file));
  await page.waitForFunction(() => window.__T, null, { timeout: 120000 });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: out + '_intro.png', timeout: 240000 });
  await page.evaluate(q => { __T.start(); __T.hud(); if (q) __T.setQ(q); }, q || null);
  const shots = [
    ['golden', 18.9, -44, -6, 2.4, [4.8, 0.2, 2.4]],
    ['noon', 13.0, -30, 3, 1.2, [5.5, 0.25, 1.2]],
    ['night', 23.4, -30, 3, 1.2, [5.5, 0.35, 1.2]],
    ['sky', 23.6, -30, 3, 1.2, [5.0, 1.1, 1.2], [2.2, 0.55]],
    ['face', 17.5, -40, -2, 0.6, [1.25, 0.02, 0.6 + Math.PI]],
    ['sunset', 20.15, -20, 4, 2.0, [4.2, 0.0, 1.95 + 3.14159]],
    ['harbour', 18.6, 132, -22, 1.0, [8, 0.3, 1.0]],
  ];
  for (const [name, hr, x, z, yaw, c, ph] of shots) {
    await page.evaluate(([hr, x, z, yaw, c]) => { const d = Math.floor(0); __T.setMin(d * 1440 + hr * 60); __T.go(x, z, yaw); __T.camset(c[0], c[1], c[2]); }, [hr, x, z, yaw, c]);
    await page.waitForTimeout(name === 'golden' ? 6000 : 3500);
    await page.evaluate(([c, ph]) => { __T.camset(c[0], c[1], c[2]); if (ph) __T.photo(ph[0], ph[1]); else __T.unphoto(); }, [c, ph || null]);
    await page.waitForTimeout(800);
    await page.screenshot({ path: `${out}_${name}.png`, timeout: 240000 });
  }
  console.log(errs.slice(0, 30).join('\n') || 'no console errors');
  await browser.close();
})();
