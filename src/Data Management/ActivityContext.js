import createDataContext from './createDataContext';
import * as RootNavigation from '../Navigation/navigationRef';
import ServerAPI from '../API/ServerAPI';

const activityReducer = (state, action) => {
	switch (action.type) {
		case 'addActivity':
			return [...state, action.payload];
		case 'fetchActivities':
			return action.payload;
		case 'deleteActivity':
			const deleteID = state.findIndex(
				(obj) => obj._id === action.payload.activityID
			);
			state.splice(deleteID, 1);
			return state;
		default:
			return state;
	}
};

const createActivity = (dispatch) => {
	return async ({
		title,
		description,
		startDate,
		endDate,
		address,
		navigation,
	}) => {
		try {
			const activity = {
				title,
				description,
				startDate,
				endDate,
				address,
				createdBy: 'Bryson',
			};

			const response = await ServerAPI.post('/activities', activity);
			dispatch({ type: 'addActivity', payload: response.data.data.activity });
			navigation.navigate('Home');
		} catch (err) {
			console.log(err);
		}
	};
};

const deleteActivity = (dispatch) => {
	return async ({ activityID, callback }) => {
		try {
			await ServerAPI.delete(`/activities/${activityID}`);
			dispatch({ type: 'deleteActivity', payload: { activityID } });
			callback();
		} catch (err) {
			console.log(err);
		}
	};
};

const fetchActivities = (dispatch) => async () => {
	const response = await ServerAPI.get('/activities');
	dispatch({ type: 'fetchActivities', payload: response.data.data });
};

export const { Provider, Context } = createDataContext(
	activityReducer,
	{ createActivity, deleteActivity, fetchActivities },
	[]
);
