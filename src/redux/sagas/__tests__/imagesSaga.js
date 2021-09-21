import { getPage } from '../imagesSaga';

test('selector should return the desired page', () => {
    const nextPage = 1;
    const state = { nextPage };
    const res = getPage(state);
    expect(res).toBe(nextPage);
});
