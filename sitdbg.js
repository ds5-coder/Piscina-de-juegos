const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const p = await b.newPage({ viewport: { width: 800, height: 450 } }); p.setDefaultTimeout(300000);
  await p.goto('http://127.0.0.1:8766/test.html'); await p.waitForFunction(() => window.__T, null, { timeout: 120000 });
  await p.evaluate(() => { __T.start(); __T.setMin(17.6 * 60); __T.go(-18, -4.4, Math.PI); });
  await p.waitForFunction(() => __T.remy(), null, { timeout: 240000 });
  await p.evaluate(() => { __T.player.idleT = 9; __T.hud(); });
  for (let i = 0; i < 3; i++) { await p.waitForTimeout(6000); console.log(JSON.stringify(await p.evaluate(() => { __T.player.idleT = 9; return __T.dbg(); }))); }
  await p.evaluate(() => __T.camset(3.0, 0.12, 0.6)); await p.waitForTimeout(4000); await p.screenshot({ path: 'shots/remy_sit.png' });
  await b.close();
})();
