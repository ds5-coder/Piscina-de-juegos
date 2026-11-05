const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const p = await b.newPage({ viewport: { width: 700, height: 500 } }); p.setDefaultTimeout(400000);
  p.on('pageerror', e => console.log('PAGEERROR ' + e.message));
  await p.goto('http://127.0.0.1:8766/test.html'); await p.waitForFunction(() => window.__T, null, { timeout: 120000 });
  await p.evaluate(() => { __T.start(); __T.hud(); __T.setMin(13 * 60); __T.go(-20, 6, 0); });
  await p.waitForFunction(() => __T.remy() && __T.DIOM.ready, null, { timeout: 300000 });
  const info = await p.evaluate(() => { const o = {}; __T.REMY.model.traverse(b => { if (b.isBone && /Eye|Head/.test(b.name)) o[b.name] = 1; if (b.isMesh) o['mesh:' + b.name] = b.material.type + (b.material.alphaTest ? ' at' : ''); }); __T.DIOM.model.traverse(b => { if (b.isMesh) o['dio:' + b.name] = 1; if (b.isBone && /Head|Eye/.test(b.name)) o['diobone:' + b.name] = 1; }); return o; });
  console.log(JSON.stringify(info));
  // freeze everyone and put a camera right in front of each face
  const shoot = async (name, which) => {
    await p.evaluate(w => {
      const h = w === 'nico' ? __T.REMY.head : __T.DIOM.head; window.__face = h;
      const cam = __T.cam, v = new THREE.Vector3(); h.updateMatrixWorld(true); v.setFromMatrixPosition(h.matrixWorld);
      const root = w === 'nico' ? __T.nico.root : __T.dio.root, yaw = root.rotation.y;
      window.__camFix = () => { h.updateMatrixWorld(true); v.setFromMatrixPosition(h.matrixWorld); cam.position.set(v.x + Math.sin(yaw) * 0.55, v.y + 0.08, v.z + Math.cos(yaw) * 0.55); cam.lookAt(v.x, v.y + 0.08, v.z); };
    }, which);
    for (let i = 0; i < 4; i++) { await p.evaluate(() => { __T.photo(0, 0); __T.nico.root.visible = true; }); await p.waitForTimeout(300); }
    await p.evaluate(() => { const r = __T.renderer, orig = r.render.bind(r); if (!r.__p) { r.__p = 1; const o2 = r.render; r.render = function (s, c) { if (window.__camFix && c === __T.cam) window.__camFix(); return o2.call(this, s, c); }; } });
    await p.evaluate(() => { __T.nico.root.visible = true; }); await p.waitForTimeout(4000); await p.evaluate(() => { __T.nico.root.visible = true; }); await p.screenshot({ path: 'shots/' + name + '.png' });
  };
  await p.evaluate(() => { __T.unphoto(); }); await shoot('face_nico', 'nico');
  await p.evaluate(() => { __T.dio.root.visible = true; }); await shoot('face_dio', 'dio');
  await b.close();
})();
