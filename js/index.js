const _0x5bda9e = _0x453a;
(function (_0x43fee9, _0x58eef8) {
  const _0x9beb4e = _0x453a,
    _0x2cf9d0 = _0x43fee9();
  while (!![]) {
    try {
      const _0x15078c =
        parseInt(_0x9beb4e(0x159)) / 0x1 +
        (-parseInt(_0x9beb4e(0x17b)) / 0x2) *
          (parseInt(_0x9beb4e(0x173)) / 0x3) +
        (-parseInt(_0x9beb4e(0x197)) / 0x4) *
          (-parseInt(_0x9beb4e(0x148)) / 0x5) +
        (parseInt(_0x9beb4e(0x158)) / 0x6) *
          (-parseInt(_0x9beb4e(0x14e)) / 0x7) +
        parseInt(_0x9beb4e(0x14a)) / 0x8 +
        parseInt(_0x9beb4e(0x182)) / 0x9 +
        -parseInt(_0x9beb4e(0x174)) / 0xa;
      if (_0x15078c === _0x58eef8) break;
      else _0x2cf9d0["push"](_0x2cf9d0["shift"]());
    } catch (_0x2e9a14) {
      _0x2cf9d0["push"](_0x2cf9d0["shift"]());
    }
  }
})(_0xaf21, 0x9dab1);
var content = {},
  recent_activities = [],
  team = [],
  imageLinks = [],
  databaseURL = _0x5bda9e(0x198);
async function loadImages(_0x20da8f) {
  const _0xa3243 = _0x5bda9e,
    _0x478f5a = document[_0xa3243(0x180)](_0xa3243(0x160)),
    _0x5a354b = document[_0xa3243(0x180)]("fullscreen"),
    _0x4c4a6a = await fetchImagesFromFolder();
  console[_0xa3243(0x194)](_0x4c4a6a),
    _0x4c4a6a[_0xa3243(0x193)]((_0x435f02) => {
      const _0x56ed94 = _0xa3243,
        _0x27a85e = document["createElement"]("img");
      (_0x27a85e["src"] = _0x435f02),
        (_0x27a85e[_0x56ed94(0x18b)] = "Arua\x20City\x20Kids\x20Run"),
        (_0x27a85e["className"] = _0x56ed94(0x163));
      const _0x4da462 = document[_0x56ed94(0x164)](_0x56ed94(0x15e));
      (_0x4da462[_0x56ed94(0x16c)] = "gallery-item"),
        (_0x4da462[_0x56ed94(0x169)]["backgroundImage"] =
          _0x56ed94(0x16e) + _0x27a85e[_0x56ed94(0x161)] + ")"),
        _0x4da462[_0x56ed94(0x17e)](_0x56ed94(0x17d), () =>
          _0x5eb3e9(_0x435f02)
        ),
        _0x478f5a[_0x56ed94(0x15a)](_0x4da462);
    });
  function _0x5eb3e9(_0x2c2d53) {
    const _0x175720 = _0xa3243;
    (_0x5a354b[_0x175720(0x18e)] =
      _0x175720(0x176) + _0x2c2d53 + _0x175720(0x142)),
      (_0x5a354b["style"][_0x175720(0x187)] = "flex");
  }
}
function closeFullscreen() {
  const _0xbce71a = _0x5bda9e;
  fullscreen[_0xbce71a(0x169)][_0xbce71a(0x187)] = _0xbce71a(0x145);
}
function _0x453a(_0x5cad88, _0x2941e9) {
  const _0xaf21c0 = _0xaf21();
  return (
    (_0x453a = function (_0x453af2, _0x483c13) {
      _0x453af2 = _0x453af2 - 0x142;
      let _0x281293 = _0xaf21c0[_0x453af2];
      return _0x281293;
    }),
    _0x453a(_0x5cad88, _0x2941e9)
  );
}
async function fetchWebsiteContent() {
  const _0x453b19 = _0x5bda9e;
  try {
    const _0x1f873a = await fetch(databaseURL + _0x453b19(0x172));
    if (!_0x1f873a["ok"]) throw new Error(_0x453b19(0x17a));
    const _0x5d9c17 = await _0x1f873a["json"]();
    _0x5d9c17 && (content = _0x5d9c17);
  } catch (_0x49b798) {
    console[_0x453b19(0x194)](_0x49b798);
  } finally {
  }
}
async function fetchRecents() {
  const _0x3c2a11 = _0x5bda9e;
  try {
    const _0x1de8bd = await fetch(databaseURL + _0x3c2a11(0x175));
    if (!_0x1de8bd["ok"]) throw new Error("Failed\x20to\x20fetch\x20content");
    const _0xa29457 = await _0x1de8bd[_0x3c2a11(0x196)]();
    _0xa29457
      ? (recent_activities = Object["keys"](_0xa29457)[_0x3c2a11(0x18f)](
          (_0x1283dd) => ({ id: _0x1283dd, ..._0xa29457[_0x1283dd] })
        ))
      : (recent_activities = []);
  } catch (_0x499a2c) {
    console[_0x3c2a11(0x194)](_0x499a2c);
  } finally {
  }
}
function _0xaf21() {
  const _0x5669b4 = [
    "appendChild",
    "filter",
    "description",
    "classList",
    "div",
    "recent-activity-2-text",
    "gallery",
    "src",
    "keys",
    "img-fluid",
    "createElement",
    "image",
    "message",
    "role",
    "getElementsByClassName",
    "style",
    "querySelector",
    "remove",
    "className",
    "recent-activity-1-title",
    "url(",
    "recent-activity-3-image",
    "backgroundImage",
    "#team-member-1-image",
    "/content.json",
    "819009rQJTnP",
    "20132590yljMaj",
    "/recents.json",
    "<img\x20src=\x22",
    "#team-member-3-image",
    "website-mission",
    "test",
    "Failed\x20to\x20fetch\x20content",
    "2OfNOsq",
    "List\x20operation\x20failed:\x20",
    "click",
    "addEventListener",
    "title",
    "getElementById",
    ".team-member-1-role",
    "6346539DsFxnc",
    "Unknown\x20error",
    "activityImage",
    "https://firebasestorage.googleapis.com/v0/b/",
    "website-title",
    "display",
    "website-vision",
    ".team-member-3-role",
    ".team-member-2-name",
    "alt",
    "GET",
    "error",
    "innerHTML",
    "map",
    "length",
    "recent-activity-2-title",
    "name",
    "forEach",
    "log",
    "recent-activity-1-image",
    "json",
    "4PvDzqq",
    "https://tendermothers-default-rtdb.firebaseio.com",
    "\x22\x20alt=\x22Fullscreen\x20Image\x22>",
    "/o?prefix=",
    "tendermothers/media",
    "none",
    "Failed\x20to\x20fetch\x20team\x20members",
    "all",
    "5782705ZMvixb",
    ".team-member-1-name",
    "8604296qEZPRH",
    "/team.json",
    "recent-activity-3-text",
    "mission",
    "14VlrySY",
    "?alt=media",
    "items",
    "textContent",
    "text",
    ".team-member-3-name",
    "recent-activity-3-title",
    "/o/",
    "Error\x20fetching\x20images\x20from\x20folder:",
    "d-none",
    "1499844ZvXoLG",
    "494770TuhHGT",
  ];
  _0xaf21 = function () {
    return _0x5669b4;
  };
  return _0xaf21();
}
async function fetchTeam() {
  const _0x42d175 = _0x5bda9e;
  try {
    const _0x41272e = await fetch(databaseURL + _0x42d175(0x14b));
    if (!_0x41272e["ok"]) throw new Error(_0x42d175(0x146));
    const _0x599774 = await _0x41272e[_0x42d175(0x196)]();
    _0x599774
      ? (team = Object[_0x42d175(0x162)](_0x599774)[_0x42d175(0x18f)](
          (_0x2264eb) => ({ id: _0x2264eb, ..._0x599774[_0x2264eb] })
        ))
      : (team = []);
  } catch (_0x42d045) {
    console[_0x42d175(0x194)](_0x42d045);
  } finally {
  }
}
async function fetchImagesFromFolder(
  _0x1095f0 = "ackerman-80ccd.appspot.com",
  _0x5a70fd = _0x5bda9e(0x144)
) {
  const _0x41a433 = _0x5bda9e;
  try {
    if (!_0x1095f0) throw new Error("Missing\x20required\x20parameters");
    const _0x529f66 = encodeURIComponent(_0x5a70fd + "/"),
      _0x30dc58 = _0x41a433(0x185) + _0x1095f0 + _0x41a433(0x143) + _0x529f66,
      _0x5a31dd = await fetch(_0x30dc58, {
        method: _0x41a433(0x18c),
        headers: {},
      });
    if (!_0x5a31dd["ok"]) {
      const _0x79b30f = await _0x5a31dd[_0x41a433(0x196)]();
      throw new Error(
        _0x41a433(0x17c) +
          (_0x79b30f[_0x41a433(0x18d)]?.[_0x41a433(0x166)] || _0x41a433(0x183))
      );
    }
    const _0x527bd6 = await _0x5a31dd[_0x41a433(0x196)]();
    if (
      !_0x527bd6[_0x41a433(0x150)] ||
      _0x527bd6["items"][_0x41a433(0x190)] === 0x0
    )
      return [];
    const _0x552c78 = await Promise[_0x41a433(0x147)](
      _0x527bd6[_0x41a433(0x150)]["map"](async (_0x48fcd9) => {
        const _0x172dd5 = _0x41a433,
          _0x1930bb = /\.(jpe?g|png|gif|bmp|webp|svg)$/i[_0x172dd5(0x179)](
            _0x48fcd9[_0x172dd5(0x192)]
          );
        if (!_0x1930bb) return null;
        const _0x532d52 =
          _0x172dd5(0x185) +
          _0x1095f0 +
          _0x172dd5(0x155) +
          encodeURIComponent(_0x48fcd9[_0x172dd5(0x192)]) +
          _0x172dd5(0x14f);
        return _0x532d52;
      })
    );
    return _0x552c78[_0x41a433(0x15b)]((_0x5e834c) => _0x5e834c !== null);
  } catch (_0x1d1ba0) {
    console[_0x41a433(0x18d)](_0x41a433(0x156), _0x1d1ba0);
    throw _0x1d1ba0;
  }
}
async function loadWebsiteContent() {
  await fetchWebsiteContent(), await fetchRecents(), renderContent();
}
async function loadAbout() {
  const _0x171cd6 = _0x5bda9e;
  let _0xc4504b = document[_0x171cd6(0x168)]("team-member");
  await fetchWebsiteContent(),
    (document[_0x171cd6(0x180)](_0x171cd6(0x178))[_0x171cd6(0x151)] =
      content[_0x171cd6(0x14d)]),
    await fetchTeam(),
    (_0xc4504b[0x0][_0x171cd6(0x16a)](_0x171cd6(0x171))[_0x171cd6(0x161)] =
      team[0x0][_0x171cd6(0x165)]),
    (_0xc4504b[0x0]["querySelector"](_0x171cd6(0x149))[_0x171cd6(0x151)] =
      team[0x0][_0x171cd6(0x192)]),
    (_0xc4504b[0x0][_0x171cd6(0x16a)](_0x171cd6(0x181))["textContent"] =
      team[0x0]["role"]);
  if (team[0x1][_0x171cd6(0x192)])
    _0xc4504b[0x1][_0x171cd6(0x15d)][_0x171cd6(0x16b)](_0x171cd6(0x157)),
      (_0xc4504b[0x1][_0x171cd6(0x16a)]("#team-member-2-image")[
        _0x171cd6(0x161)
      ] = team[0x1][_0x171cd6(0x165)]),
      (_0xc4504b[0x1][_0x171cd6(0x16a)](_0x171cd6(0x18a))[_0x171cd6(0x151)] =
        team[0x1][_0x171cd6(0x192)]),
      (_0xc4504b[0x1][_0x171cd6(0x16a)](".team-member-2-role")[
        _0x171cd6(0x151)
      ] = team[0x1][_0x171cd6(0x167)]);
  else
    team[0x2][_0x171cd6(0x192)] &&
      (_0xc4504b[0x2][_0x171cd6(0x15d)]["remove"](_0x171cd6(0x157)),
      (_0xc4504b[0x2][_0x171cd6(0x16a)](_0x171cd6(0x177))[_0x171cd6(0x161)] =
        team[0x2]["image"]),
      (_0xc4504b[0x2]["querySelector"](_0x171cd6(0x153))[_0x171cd6(0x151)] =
        team[0x2][_0x171cd6(0x192)]),
      (_0xc4504b[0x2][_0x171cd6(0x16a)](_0x171cd6(0x189))["textContent"] =
        team[0x2][_0x171cd6(0x167)]));
}
function renderContent() {
  const _0xc81ed0 = _0x5bda9e;
  (document["getElementById"](_0xc81ed0(0x186))[_0xc81ed0(0x151)] =
    content[_0xc81ed0(0x17f)]),
    (document[_0xc81ed0(0x180)]("website-subtitle")["textContent"] =
      content[_0xc81ed0(0x15c)]),
    (document[_0xc81ed0(0x180)]("website-mission")[_0xc81ed0(0x151)] =
      content[_0xc81ed0(0x14d)]),
    (document[_0xc81ed0(0x180)](_0xc81ed0(0x188))[_0xc81ed0(0x151)] =
      content["vision"]);
  let _0x5876e8 = recent_activities[0x0],
    _0x22744f = recent_activities[0x1],
    _0x3b0079 = recent_activities[0x2];
  (document[_0xc81ed0(0x180)](_0xc81ed0(0x16d))[_0xc81ed0(0x151)] =
    _0x5876e8["title"]),
    (document[_0xc81ed0(0x180)]("recent-activity-1-text")[_0xc81ed0(0x151)] =
      _0x5876e8[_0xc81ed0(0x152)]),
    (document[_0xc81ed0(0x180)](_0xc81ed0(0x195))[_0xc81ed0(0x169)][
      "backgroundImage"
    ] = "url(" + _0x5876e8[_0xc81ed0(0x184)] + ")"),
    _0x22744f["title"] &&
      ((document[_0xc81ed0(0x180)](_0xc81ed0(0x191))["textContent"] =
        _0x22744f[_0xc81ed0(0x17f)]),
      (document["getElementById"](_0xc81ed0(0x15f))[_0xc81ed0(0x151)] =
        _0x22744f[_0xc81ed0(0x152)]),
      (document[_0xc81ed0(0x180)]("recent-activity-2-image")[_0xc81ed0(0x169)][
        _0xc81ed0(0x170)
      ] = _0xc81ed0(0x16e) + _0x22744f[_0xc81ed0(0x184)] + ")")),
    _0x3b0079[_0xc81ed0(0x17f)] &&
      ((document[_0xc81ed0(0x180)](_0xc81ed0(0x154))[_0xc81ed0(0x151)] =
        _0x3b0079[_0xc81ed0(0x17f)]),
      (document[_0xc81ed0(0x180)](_0xc81ed0(0x14c))[_0xc81ed0(0x151)] =
        _0x3b0079["text"]),
      (document[_0xc81ed0(0x180)](_0xc81ed0(0x16f))[_0xc81ed0(0x169)][
        "backgroundImage"
      ] = "url(" + _0x3b0079[_0xc81ed0(0x184)] + ")"));
}
