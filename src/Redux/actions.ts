import { UpdateCurrentUser } from './interfaces';
import { UPDATE_CURRENT_USER } from './consts';

export const updateEventID = (value: boolean): UpdateCurrentUser => ({
  type: UPDATE_CURRENT_USER,
  payload: value
});
