// Side-effect import: no values are imported; analytics.js runs on import
// and changes external state by setting window.analyticsEnabled.
import "./analytics.js";

console.log(window.analyticsEnabled); // true
