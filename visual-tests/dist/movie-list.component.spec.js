"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('example', async ({ page }, testInfo) => {
    await page.goto('components-movielistcomponent--movie-list&viewMode=story');
    await (0, test_1.expect)(page)
        .toHaveScreenshot({ maxDiffPixels: 100 });
});
//# sourceMappingURL=movie-list.component.spec.js.map