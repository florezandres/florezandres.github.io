import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart
} from "./chunk-EJU4JMTO.js";

// src/app/layout/loading-screen/loading-screen.ts
var LoadingScreen = class _LoadingScreen {
  ngOnInit() {
    try {
      const audio = new Audio("/assets/mp3/windows-vista-startup.mp3");
      audio.play().catch(() => {
      });
    } catch (e) {
    }
    setTimeout(() => {
      window.location.href = "/";
    }, 4e3);
  }
  static \u0275fac = function LoadingScreen_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoadingScreen)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoadingScreen, selectors: [["app-loading-screen"]], decls: 2, vars: 0, consts: [[1, "bootup"], ["src", "/assets/gifs/windows-vista-vista-boot.gif", "alt", ""]], template: function LoadingScreen_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275domElement(1, "img", 1);
      \u0275\u0275domElementEnd();
    }
  }, styles: ["\n\n.bootup[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n  background-color: #000;\n  z-index: 10000;\n  left: 0;\n  top: 0;\n}\n/*# sourceMappingURL=loading-screen.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingScreen, [{
    type: Component,
    args: [{ selector: "app-loading-screen", imports: [], template: '<div class="bootup">\n    <img src="/assets/gifs/windows-vista-vista-boot.gif" alt="">\n</div>', styles: ["/* src/app/layout/loading-screen/loading-screen.css */\n.bootup {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n  background-color: #000;\n  z-index: 10000;\n  left: 0;\n  top: 0;\n}\n/*# sourceMappingURL=loading-screen.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoadingScreen, { className: "LoadingScreen", filePath: "src/app/layout/loading-screen/loading-screen.ts", lineNumber: 9 });
})();
export {
  LoadingScreen
};
//# sourceMappingURL=chunk-I6XIOVVJ.js.map
