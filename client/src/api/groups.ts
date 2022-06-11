import { GROUP, GROUPED_GAMES } from "./urls";
import { get, update, del } from "../utils/http-methods";

export const getGroupedGames = async () => {
  return get(`${GROUPED_GAMES}/`);
};

export const updateGroups = async (groupId: number, fieldsToUpdate = {}) => {
  return update(GROUP, groupId, fieldsToUpdate);
};

export const deleteAGroup = async (groupId: number) => {
  return del(GROUP, groupId);
};
