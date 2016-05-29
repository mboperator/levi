import { createModule } from 'redux-modules';
import { Map, fromJS } from 'immutable';
import { v4 } from 'uuid';

export default createModule({
  name: 'locations',
  initialState: Map(),
  transformations: [
    {
      action: 'CREATE',
      reducer: (state, { payload }) => {
        const location = { id: v4(), ... payload };
        return state.setIn(['collection', location.id], fromJS(location));
      },
    },
    {
      action: 'DESTROY',
      reducer: (state, { payload: { id } }) =>
        state.deleteIn(['collection', id]),
    },
    {
      action: 'UPDATE',
      reducer: (state, { payload: { id, updates } }) =>
        state.mergeIn(['collection', id], fromJS(updates)),
    },
    {
      action: 'HYDRATE',
      reducer: state => state.set('_loading', true),
    },
    {
      action: 'HYDRATE_SUCCESS',
      reducer: (state, { payload }) =>
        state.set('collection', fromJS(payload)),
    },
    {
      action: 'HYDRATE_ERROR',
      reducer: (state, { payload }) =>
        state
        .set('_loading', 'false')
        .set('_error', payload),
    },
  ],
});
