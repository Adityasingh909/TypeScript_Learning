"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getChai(kind) {
    if (typeof kind == 'string') {
        return `making ${kind} chaii...`;
    }
    return `chai order.. ${kind}`;
}
console.log(getChai('masala'));
console.log(getChai(23));
//# sourceMappingURL=typeNarrowing.js.map