import * as utils from '../utils';
describe('theme utils', function () {
    it('should get storage item', function () {
        utils.saveTheme('system');
        expect(utils.getThemeFromStorage()).toBe('system');
    });
});
