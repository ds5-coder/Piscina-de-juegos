const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const p = await b.newPage({ viewport: { width: 900, height: 500 } }); p.setDefaultTimeout(400000); const errs = [];
  p.on('console', m => { if ((m.type() === 'error' || m.type() === 'warning') && !/Fetch API|_blob/.test(m.text())) errs.push(m.text().slice(0, 300)); });
  p.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
  await p.goto('http://127.0.0.1:8766/test.html'); await p.waitForFunction(() => window.__T, null, { timeout: 120000 });
  await p.evaluate(() => { __T.start(); __T.hud(); __T.setMin(16 * 60); __T.go(124, -42, Math.PI); });
  await p.waitForFunction(() => __T.remy(), null, { timeout: 300000 }); await p.waitForTimeout(15000);
  const look = async (name, idx, back) => {
    await p.evaluate(([idx, back]) => { const h = __T.FAUNA.horses[idx].o.position; const yaw = Math.atan2(back[0], back[1]); __T.go(h.x - back[0], h.z - back[1], yaw); __T.photo(yaw, -0.1); }, [idx, back]);
    await p.waitForTimeout(800);
    await p.evaluate(([idx, back]) => { const h = __T.FAUNA.horses[idx].o.position; const yaw = Math.atan2(back[0], back[1]); __T.go(h.x - back[0], h.z - back[1], yaw); __T.photo(yaw, -0.08); }, [idx, back]);
    await p.waitForTimeout(3000); await p.screenshot({ path: 'shots/' + name + '.png' });
  };
  await look('fauna_harbour', 3, [-6, 2]);
  await look('fauna_herd', 0, [10, -14]);
  console.log(errs.join('\n') || 'no errors'); await b.close();
})();
