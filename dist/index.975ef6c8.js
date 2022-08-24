// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ShInH":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _indexScss = require("./index.scss");
var _indexScssDefault = parcelHelpers.interopDefault(_indexScss);
var _auth = require("./pages/auth");
var _registration = require("./pages/registration");
var _profile = require("./pages/profile");
var _errors = require("./pages/errors");
var _modal = require("./modules/modal");
var _chats = require("./pages/chats");
const body = document.querySelector("body");
const main = document.createElement("main");
const nav = document.querySelectorAll("a");
body.classList.add("scroll", "scroll-bold");
body.append(main);
window.addEventListener("load", function() {
    nav.forEach(function(item) {
        item.onclick = function(e) {
            e.preventDefault();
            loadPage(item.getAttribute("href"));
        };
    });
});
function loadPage(url) {
    url = url.replace("/", "");
    main.innerHTML = "";
    switch(url){
        case "auth":
            main.insertAdjacentHTML("beforeend", (0, _auth.getAuth)());
            break;
        case "registration":
            main.insertAdjacentHTML("beforeend", (0, _registration.getRegistration)());
            break;
        case "profile":
            main.insertAdjacentHTML("beforeend", (0, _profile.getProfile)());
            break;
        case "chats":
            main.insertAdjacentHTML("beforeend", (0, _chats.getChats)());
            break;
        case "404":
            main.insertAdjacentHTML("beforeend", (0, _errors.getErrors)({
                typeError: "404",
                textError: "Уп-с, такой страницы нет!"
            }));
            break;
        case "500":
            main.insertAdjacentHTML("beforeend", (0, _errors.getErrors)({
                typeError: "500",
                textError: "Мы уже фиксим"
            }));
            break;
        case "modal":
            main.insertAdjacentHTML("beforeend", (0, _modal.getModal)());
            break;
        default:
            main.insertAdjacentHTML("beforeend", (0, _errors.getErrors)({
                typeError: "404",
                textError: "Уп-с, такой страницы нет!"
            }));
            break;
    }
}

},{"./index.scss":"lJZlQ","./pages/auth":"g8NmV","./pages/registration":"fSkHX","./pages/profile":"14hhl","./pages/errors":"b3ydn","./modules/modal":"ewqAa","./pages/chats":"7duCf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lJZlQ":[function() {},{}],"g8NmV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAuth", ()=>getAuth);
var _authTmpl = require("./auth.tmpl");
function getAuth() {
    return (0, _authTmpl.templateAuth)();
}

},{"./auth.tmpl":"5ImxP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5ImxP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "templateAuth", ()=>templateAuth);
var _input = require("../../components/input");
var _templator = require("../../utils/Templator");
var _button = require("../../components/button");
function templateAuth() {
    let templator = new (0, _templator.Templator)();
    return "<form class='block-auth' method='post' action=''><h1>Вход</h1>" + templator.template((0, _input.getInput)()).compile({
        inputId: "input_login",
        inputLabel: "Логин",
        inputName: "login",
        inputType: "text"
    }) + templator.template((0, _input.getInput)()).compile({
        inputId: "input_password",
        inputLabel: "Пароль",
        inputName: "password",
        inputType: "password"
    }) + templator.template((0, _button.getButton)()).compile({
        buttonType: "submit",
        buttonClass: "btn-primary",
        buttonId: "button-auth",
        buttonText: "Войти"
    }) + "<a href='registartion'>Нет аккаунта?</a> " + "</form>";
}

},{"../../components/input":"8Cm93","../../utils/Templator":"beJ1N","../../components/button":"f08eE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Cm93":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getInput", ()=>getInput);
var _inputTmpl = require("./input.tmpl");
function getInput() {
    return (0, _inputTmpl.templateInput)();
}

},{"./input.tmpl":"867JV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"867JV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "templateInput", ()=>templateInput);
function templateInput() {
    return "<div class='block-input'><label for='{{ inputId }}'>{{ inputLabel }}</label><input id='{{ inputId }}' name='{{ inputName }}' type='{{ inputType }}' placeholder='{{ inputPlaceholder }}' value='{{ inputValue }}' {{ inputAttribute }}></div>";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"beJ1N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Templator", ()=>Templator);
var _getContext = require("./getContext");
var _createTemplate = require("./createTemplate");
class Templator {
    TEMPLATE_REGEXP = /\{\{(.*?)}}/gi;
    template(template) {
        this._template = template;
        return this;
    }
    compile(ctx) {
        return this._compileTemplate(ctx);
    }
    _compileTemplate(ctx) {
        let template = this._template;
        let brace = null;
        const regExp = this.TEMPLATE_REGEXP;
        let match = Array.from(template.matchAll(regExp));
        match.map((brace)=>{
            if (brace[1]) {
                const braceValue = brace[1].trim();
                const data = (0, _getContext.getContext)(ctx, braceValue, "");
                template = template.replaceAll(new RegExp(brace[0], "gi"), data);
            }
        });
        return template;
    //return new createTemplate().create(template); // Тут реализация парсинга строки и создание через createElement
    }
}

},{"./getContext":"cl2y2","./createTemplate":"enWGv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cl2y2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getContext", ()=>getContext);
function getContext(obj, context, defaultValue = "") {
    const keys = context.split(".");
    let result = "";
    if (!obj) return defaultValue;
    for (let key of keys){
        result = obj[key];
        if (result === undefined) return defaultValue;
    }
    return result ?? defaultValue;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"enWGv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createTemplate", ()=>createTemplate);
class createTemplate {
    TAG = /<(.*?)>/gi;
    ATTRIBUTES = /(.*?)=['"](.*?)["']/gi;
    create(template) {
        return this._createTree(template);
    }
    _createTree(template) {
        const regTag = new RegExp(this.TAG, "gi");
        let attr, element = [], textTag = template.toString(), text = "";
        attr = Array.from(template.matchAll(regTag));
        attr.forEach((item)=>{
            textTag = textTag.replace(item[0], "");
            if (Array.from(textTag)[0] !== "<") {
                text = textTag.substring(0, textTag.indexOf("<"));
                textTag = textTag.replace(text, "");
            }
            element.push(this._getContent(item[1], text));
        });
        //console.log(template)
        console.log(element);
    }
    _getContent(string, text) {
        const regAttr = new RegExp(this.ATTRIBUTES, "gi");
        let attr, tagName, attributes;
        let structureElement = {}, attrs, usedAttributes = [], searchAttribute = false;
        if (string.indexOf(" ") !== -1) {
            tagName = string.substring(0, string.indexOf(" "));
            searchAttribute = true;
        } else tagName = string.trim();
        structureElement.tag = tagName;
        if (searchAttribute) {
            attributes = string.replace(tagName, "");
            structureElement.attributes = [];
            while(attr = regAttr.exec(attributes)){
                usedAttributes.push(attr[0]);
                attrs = {
                    attribute: attr[1].trim(),
                    value: attr[2].trim()
                };
                structureElement.attributes.push(attrs);
            }
            usedAttributes.map((item)=>attributes = attributes.replace(item, ""));
            attributes.split(" ").reduce(function(result, item) {
                if (item) structureElement.attributes.push({
                    attribute: item
                });
            });
        }
        if (text) structureElement.text = text.trim();
        return structureElement;
    }
    _createElement(element) {
        const result = document.createElement(element.tag);
        if (element.attributes) {
            let val = "";
            element.attributes.forEach(function(item) {
                result.setAttribute(item.attribute, item.value);
            });
        }
        if (element.text) result.innerText = element.text;
        //console.log(result);
        return result;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f08eE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getButton", ()=>getButton);
var _buttonTmpl = require("./button.tmpl");
function getButton() {
    return (0, _buttonTmpl.templateButton)();
}

},{"./button.tmpl":"lPo9h","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lPo9h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "templateButton", ()=>templateButton);
function templateButton() {
    return "<button type='{{ buttonType }}' class='{{ buttonClass }}' id='{{ buttonId }}'>{{ buttonText }}</button>";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fSkHX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getRegistration", ()=>getRegistration);
var _registrationTmpl = require("./registration.tmpl");
function getRegistration() {
    return (0, _registrationTmpl.templateRegistration)();
}

},{"./registration.tmpl":"gVx4s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gVx4s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "templateRegistration", ()=>templateRegistration);
var _templator = require("../../utils/Templator");
var _input = require("../../components/input");
var _button = require("../../components/button");
function templateRegistration() {
    let templator = new (0, _templator.Templator)();
    return "<form class='block-registration' method='post' action=''><h1>Регистрация</h1>" + templator.template((0, _input.getInput)()).compile({
        inputId: "input_first_name",
        inputLabel: "Имя",
        inputName: "first_name",
        inputType: "text"
    }) + templator.template((0, _input.getInput)()).compile({
        inputId: "input_second_name",
        inputLabel: "Фамилия",
        inputName: "second_name",
        inputType: "text"
    }) + templator.template((0, _input.getInput)()).compile({
        inputId: "input_login",
        inputLabel: "Логин",
        inputName: "login",
        inputType: "text"
    }) + templator.template((0, _input.getInput)()).compile({
        inputId: "input_email",
        inputLabel: "E-mail",
        inputName: "email",
        inputType: "email"
    }) + templator.template((0, _input.getInput)()).compile({
        inputId: "input_password",
        inputLabel: "Пароль",
        inputName: "password",
        inputType: "password"
    }) + templator.template((0, _input.getInput)()).compile({
        inputId: "input_phone",
        inputLabel: "Телефон",
        inputName: "phone",
        inputType: "tel"
    }) + templator.template((0, _button.getButton)()).compile({
        buttonType: "submit",
        buttonClass: "btn-danger",
        buttonId: "button-auth",
        buttonText: "Регистрация"
    }) + "</form>";
}

},{"../../utils/Templator":"beJ1N","../../components/input":"8Cm93","../../components/button":"f08eE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"14hhl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getProfile", ()=>getProfile);
var _profileTmpl = require("./profile.tmpl");
function getProfile() {
    return (0, _profileTmpl.templateProfile)();
}

},{"./profile.tmpl":"5NXVP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5NXVP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "templateProfile", ()=>templateProfile);
var _templator = require("../../utils/Templator");
var _avatar = require("./components/avatar");
var _buttons = require("./components/buttons");
var _information = require("./components/information");
function templateProfile() {
    let templator = new (0, _templator.Templator)();
    return "<section class='block-profile'>" + templator.template((0, _avatar.getAvatar)()).compile({
        avatarPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvTnQ10XsARegWrtgIwH8LiUMMNeggR5CDtHdVDUPFZwdTA-En",
        avatarAlt: "avatar_alt"
    }) + templator.template((0, _information.getInformation)()).compile() + templator.template((0, _buttons.getButtonsProfile)()).compile() + "</section>";
}

},{"../../utils/Templator":"beJ1N","./components/avatar":"e0942","./components/buttons":"58j4f","./components/information":"eX79j","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e0942":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAvatar", ()=>getAvatar);
var _avatarTmpl = require("./avatar.tmpl");
function getAvatar() {
    return (0, _avatarTmpl.templateAvatar)();
}

},{"./avatar.tmpl":"5Qhcu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Qhcu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "templateAvatar", ()=>templateAvatar);
function templateAvatar() {
    return "<article class='block-avatar'><div><img src='{{ avatarPath }}' alt='{{ avatarAlt }}'></div><a>Сменить фото</a></article>";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"58j4f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getButtonsProfile", ()=>getButtonsProfile);
var _buttonsProfileTmpl = require("./buttonsProfile.tmpl");
function getButtonsProfile() {
    return (0, _buttonsProfileTmpl.templateProfileButtons)();
}

},{"./buttonsProfile.tmpl":"1tuj1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1tuj1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "templateProfileButtons", ()=>templateProfileButtons);
var _templator = require("../../../../utils/Templator");
var _button = require("../../../../components/button");
function templateProfileButtons() {
    let templator = new (0, _templator.Templator)();
    return "<article class='block-buttons-profile'>" + templator.template((0, _button.getButton)()).compile({
        buttonType: "button",
        buttonClass: "btn-primary",
        buttonId: "button-edit",
        buttonText: "Редактировать профиль"
    }) + templator.template((0, _button.getButton)()).compile({
        buttonType: "button",
        buttonClass: "btn-primary",
        buttonId: "button-pass",
        buttonText: "Изменить пароль"
    }) + templator.template((0, _button.getButton)()).compile({
        buttonType: "button",
        buttonClass: "btn-danger",
        buttonId: "button-exit",
        buttonText: "Выход"
    }) + "</article>";
}

},{"../../../../utils/Templator":"beJ1N","../../../../components/button":"f08eE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eX79j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getInformation", ()=>getInformation);
var _informationTmpl = require("./information.tmpl");
function getInformation() {
    return (0, _informationTmpl.templateInformation)();
}

},{"./information.tmpl":"4Ye8a","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Ye8a":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "templateInformation", ()=>templateInformation);
var _templator = require("../../../../utils/Templator");
var _input = require("../../../../components/input");
function templateInformation() {
    let templator = new (0, _templator.Templator)();
    return "<article class='block-information'>" + templator.template((0, _input.getInput)()).compile({
        inputId: "input_first_name",
        inputLabel: "Имя",
        inputName: "first_name",
        inputType: "text",
        inputValue: "Ярослав",
        inputAttribute: "disabled"
    }) + templator.template((0, _input.getInput)()).compile({
        inputId: "input_second_name",
        inputLabel: "Фамилия",
        inputName: "second_name",
        inputType: "text",
        inputValue: "Куляскин",
        inputAttribute: "disabled"
    }) + templator.template((0, _input.getInput)()).compile({
        inputId: "input_login",
        inputLabel: "Логин",
        inputName: "login",
        inputType: "text",
        inputValue: "YarStorm",
        inputAttribute: "disabled"
    }) + templator.template((0, _input.getInput)()).compile({
        inputId: "input_email",
        inputLabel: "E-mail",
        inputName: "email",
        inputType: "email",
        inputValue: "yaroslav3787@yandex.ru",
        inputAttribute: "disabled"
    }) + templator.template((0, _input.getInput)()).compile({
        inputId: "input_password",
        inputLabel: "Пароль",
        inputName: "password",
        inputType: "password",
        inputValue: "123456789",
        inputAttribute: "disabled"
    }) + templator.template((0, _input.getInput)()).compile({
        inputId: "input_phone",
        inputLabel: "Телефон",
        inputName: "phone",
        inputType: "tel",
        inputValue: "89998707877",
        inputAttribute: "disabled"
    }) + "</article>";
}

},{"../../../../utils/Templator":"beJ1N","../../../../components/input":"8Cm93","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b3ydn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getErrors", ()=>getErrors);
var _errorsTmpl = require("./errors.tmpl");
var _templator = require("../../utils/Templator");
function getErrors(ctx) {
    let templator = new (0, _templator.Templator)();
    return templator.template((0, _errorsTmpl.templateErrors)()).compile(ctx);
}

},{"./errors.tmpl":"erbfw","../../utils/Templator":"beJ1N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"erbfw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "templateErrors", ()=>templateErrors);
function templateErrors() {
    return "<section class='block-errors'><h1>{{ typeError }}</h1><p>{{ textError }}</p><a href=''>Назад к выбору чата</a></section>";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ewqAa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getModal", ()=>getModal);
var _modalTmpl = require("./modal.tmpl");
var _templator = require("../../utils/Templator");
function getModal() {
    let templator = new (0, _templator.Templator)();
    return templator.template((0, _modalTmpl.templateModal)()).compile({
        headerModal: "Загрузите файл",
        bodyModal: "Lorem Ipsum Dolor, или фото успешно загружено",
        linkModalText: "Выбрать файл на компьютере?"
    });
}

},{"./modal.tmpl":"iCLP4","../../utils/Templator":"beJ1N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iCLP4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "templateModal", ()=>templateModal);
var _templator = require("../../utils/Templator");
var _button = require("../../components/button");
function templateModal() {
    let templator = new (0, _templator.Templator)();
    return "<div class='block-modal'><div><span>{{ headerModal }}</span><a href='{{ linkModalHref }}'>{{ linkModalText }}</a>" + templator.template((0, _button.getButton)()).compile({
        buttonType: "button",
        buttonClass: "btn-primary",
        buttonId: "button-profile",
        buttonText: "Применить"
    }) + "</div></div>";
}

},{"../../utils/Templator":"beJ1N","../../components/button":"f08eE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7duCf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getChats", ()=>getChats);
var _chatsTmpl = require("./chats.tmpl");
function getChats() {
    return (0, _chatsTmpl.templateChats)();
}

},{"./chats.tmpl":"32AZS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"32AZS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "templateChats", ()=>templateChats);
var _templator = require("../../utils/Templator");
var _aside = require("./components/aside");
var _enter = require("./components/enter");
function templateChats() {
    let templator = new (0, _templator.Templator)();
    return "<div class='block-chat'><div><section class='block-chat__correspondence'>Выберите чат для общения</section>" + templator.template((0, _enter.getEnter)()).compile() + "</div>" + templator.template((0, _aside.getAsideChats)()).compile();
}

},{"../../utils/Templator":"beJ1N","./components/aside":"ay7SG","./components/enter":"6Nqqc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ay7SG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAsideChats", ()=>getAsideChats);
var _asideChatsTmpl = require("./asideChats.tmpl");
function getAsideChats() {
    return (0, _asideChatsTmpl.templateAsideChats)();
}

},{"./asideChats.tmpl":"l28uD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l28uD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "templateAsideChats", ()=>templateAsideChats);
var _templator = require("../../../../utils/Templator");
var _button = require("../../../../components/button");
var _input = require("../../../../components/input");
var _card = require("../card");
function templateAsideChats() {
    let templator = new (0, _templator.Templator)();
    return "<aside class='block-aside-chats'><div class='block-aside-chats__header'>" + templator.template((0, _button.getButton)()).compile({
        buttonType: "button",
        buttonClass: "btn-primary",
        buttonId: "button-profile",
        buttonText: "Профиль"
    }) + templator.template((0, _input.getInput)()).compile({
        inputId: "search-input",
        inputName: "search",
        inputType: "text",
        inputPlaceholder: "Поиск",
        inputValue: ""
    }) + "</div>" + "<div class='block-aside-chats__list scroll scroll-thin'>" + templator.template((0, _card.getCard)()).compile({
        cardClass: "",
        cardUserName: "Вася",
        cardTime: "09:15",
        cardTextPreview: "Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так..."
    }) + templator.template((0, _card.getCard)()).compile({
        cardClass: "is_new",
        cardUserName: "Петя",
        cardTime: "13:55",
        cardTextPreview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."
    }) + templator.template((0, _card.getCard)()).compile({
        cardClass: "",
        cardUserName: "Серёжа",
        cardTime: "12:36",
        cardTextPreview: "But I must explain to you how all this mistaken idea of denouncing pleasure..."
    }) + templator.template((0, _card.getCard)()).compile({
        cardClass: "",
        cardUserName: "Вася",
        cardTime: "09:15",
        cardTextPreview: "Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так..."
    }) + templator.template((0, _card.getCard)()).compile({
        cardClass: "is_new",
        cardUserName: "Петя",
        cardTime: "13:55",
        cardTextPreview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."
    }) + templator.template((0, _card.getCard)()).compile({
        cardClass: "",
        cardUserName: "Серёжа",
        cardTime: "12:36",
        cardTextPreview: "But I must explain to you how all this mistaken idea of denouncing pleasure..."
    }) + "</div>" + "</aside>";
}

},{"../../../../utils/Templator":"beJ1N","../../../../components/button":"f08eE","../../../../components/input":"8Cm93","../card":"5ugvX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5ugvX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getCard", ()=>getCard);
var _cardTmpl = require("./card.tmpl");
function getCard() {
    return (0, _cardTmpl.templateCard)();
}

},{"./card.tmpl":"eV0Ht","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eV0Ht":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "templateCard", ()=>templateCard);
function templateCard() {
    return "<div class='block-card {{ cardClass }}'><div><span>{{ cardUserName }}</span><small>{{ cardTime }}</small></div><p>{{ cardTextPreview }}</p></div>";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Nqqc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getEnter", ()=>getEnter);
var _enterTmpl = require("./enter.tmpl");
function getEnter() {
    return (0, _enterTmpl.templateEnter)();
}

},{"./enter.tmpl":"6DUyM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6DUyM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "templateEnter", ()=>templateEnter);
var _templator = require("../../../../utils/Templator");
var _button = require("../../../../components/button");
var _textarea = require("../../../../components/textarea");
function templateEnter() {
    let templator = new (0, _templator.Templator)();
    return "<section class='block-enter'>" + templator.template((0, _button.getButton)()).compile({
        buttonClass: "btn-primary",
        buttonId: "button-send",
        buttonText: "Отправить",
        buttonType: "button"
    }) + templator.template((0, _textarea.getTextarea)()).compile({
        textareaPlaceholder: "Введите сообщение",
        textareaId: "send_message",
        textareaName: "send_message"
    }) + "</section>";
}

},{"../../../../utils/Templator":"beJ1N","../../../../components/button":"f08eE","../../../../components/textarea":"lfYVw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lfYVw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getTextarea", ()=>getTextarea);
var _textareaTmpl = require("./textarea.tmpl");
function getTextarea() {
    return (0, _textareaTmpl.templateTextarea)();
}

},{"./textarea.tmpl":"5tAGE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5tAGE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "templateTextarea", ()=>templateTextarea);
function templateTextarea() {
    return "<div class='block-textarea'><label for='{{ textareaId }}'>{{ textareaLabel }}</label><textarea name='{{ textareaName }}' id='{{ textareaId }}' placeholder='{{ textareaPlaceholder }}'></textarea></div>";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ShInH","8lqZg"], "8lqZg", "parcelRequirefc40")

//# sourceMappingURL=index.975ef6c8.js.map
