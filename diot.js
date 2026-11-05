const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const p = await b.newPage({ viewport: { width: 800, height: 450 } }); p.setDefaultTimeout(400000); const errs = [];
  p.on('console', m => { if ((m.type() === 'error' || m.type() === 'warning') && !/Fetch API|_blob/.test(m.text())) errs.push(m.text().slice(0, 400)); });
  p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
  await p.goto('http://127.0.0.1:8766/test.html'); await p.waitForFunction(() => window.__T, null, { timeout: 120000 });
  await p.evaluate(() => { __T.start(); __T.hud(); __T.setMin(16.8 * 60); });
  await p.waitForFunction(() => __T.remy(), null, { timeout: 240000 }); await p.waitForTimeout(8000);
  await p.evaluate(() => { const d = __T.dio.root.position; __T.go(d.x + 2.0, d.z + 1.2, 0); });
  await p.waitForTimeout(5000);
  for (const [n, dist, pitch] of [['dio_game', 0, -0.12], ['dio_close', 1, -0.05]]) {
    await p.evaluate(([dist, pitch]) => { const d = __T.dio.root.position, n = __T.player.pos; if (dist) { __T.go(d.x + 1.2, d.z + 0.7, 0); } const yaw = Math.atan2(d.x - __T.player.pos.x, d.z - __T.player.pos.z); __T.photo(yaw, pitch); }, [dist, pitch]);
    await p.waitForTimeout(5000); await p.screenshot({ path: 'shots/' + n + '.png' });
  }
  console.log(errs.join('\n') || 'no errors'); await b.close();
})();
