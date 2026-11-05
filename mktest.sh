#!/bin/bash
# build a local test copy: local three.js + a test hook exposing a few internals
cd /home/user/kosmopolis
sed -e 's#https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js#vendor/three.min.js#' \
    -e 's#https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/shaders/#vendor/sh/#' \
    -e 's#https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/postprocessing/#vendor/pp/#' \
    -e "s#https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/#vendor/ld/#" \
    -e "s#https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/utils/#vendor/ut/#" \
    -e 's#^frame();$#window.__T = { setMin: v => { gameMin = v; }, setQ: q => setQuality(q), cam: camera, player, nico, dio, go: (x,z,yaw) => { player.pos.set(x, floorAt(x,z), z); player.yaw = yaw; cam.yaw = yaw; }, start: () => { resetGame(); Game.flags.prologueDone = true; Game.flags.ch1Done = true; applyWorldState(); placeAtHome(); beginPlay(); }, camset: (d,p,y) => { cam.dist = d; cam.cur = d; cam.pitch = p; if (y !== undefined) cam.yaw = y; }, S: () => S, renderer, photo: (y, p) => { Photo.on = true; nico.root.visible = false; Photo.yaw = y; Photo.pitch = p; }, unphoto: () => { Photo.on = false; nico.root.visible = true; }, hud: () => toggleHud(), remy: () => REMY.ready, REMY, DIOM, FAUNA, chat: () => ({ buf: !!Chatter.buf, dur: Chatter.buf ? Chatter.buf.duration : 0, srcs: Chatter.srcs.length, level: Chatter.level, ctx: actx ? actx.state : null }), dbg: () => ({ idle: player.idleT, conv: sub.conv, gr: player.grounded, sw: player.swimming, fa: !!Fight.active, ch: Law.chasing, br: Law.brawl, hid: Game.hidden, seat: findSeat(), sitK: REMY.sitK, sp: REMY.special, pos: player.pos.toArray() }) };\nframe();#' "$1" > "${2:-test.html}"
