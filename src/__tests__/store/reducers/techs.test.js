import reducer, { INITAL_STATE } from '~/store/modules/tech/reducer';
import * as Techs from '~/store/modules/tech/actions';

describe('Techs reducer', () => {
    it('DEFAULT', () => {
        const state = reducer(undefined, {});

        expect(state).toStrictEqual(INITAL_STATE);
    });

    it('ADD_TECH', () => {
        const state = reducer(INITAL_STATE, Techs.addTech('Node.js'));

        expect(state).toStrictEqual(['Node.js']);
    });
});
