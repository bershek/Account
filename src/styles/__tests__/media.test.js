var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { media, sizes } from '../media';
import { css } from 'styled-components/macro';
describe('media', function () {
    it('should return media query in css', function () {
        var mediaQuery = media.small(templateObject_1 || (templateObject_1 = __makeTemplateObject(["color:red;"], ["color:red;"]))).join('');
        var cssVersion = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      @media (min-width: ", "px) {\n        color: red;\n      }\n    "], ["\n      @media (min-width: ", "px) {\n        color: red;\n      }\n    "])), sizes.small).join('');
        expect(mediaQuery).toEqual(cssVersion);
    });
});
var templateObject_1, templateObject_2;
