import { useState, useEffect, useCallback } from "react";
import { getGroupedGames } from "../api/groups";
import { Games, SortInterface, GroupedGames } from "../ts/interfaces";
import { sortData } from "../assets/config/globals";
import { compare } from "../utils/utility";

const sort: SortInterface = {
  0: (data: GroupedGames) => data,
  1: (data: GroupedGames) => data.sort(compare()),
  2: (data: GroupedGames) => data.sort(compare(true)),
  3: (data: GroupedGames) =>
    data.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    ),
};

const useFilter = (
  query: string,
  providers: number[],
  groups: number[],
  sortBy: number
) => {
  let [groupData, setGroupData] = useState<GroupedGames>([]);
  let [groupOrData, setOrGroupData] = useState<GroupedGames>([]);

  const getGroups = async () => {
    await getGroupedGames().then((res: any) => {
      setGroupData(res.data);
      setOrGroupData(res.data);
    });
  };

  useEffect(() => {
    getGroups();
  }, []);

  useEffect(() => {
    const queryFilterData = groupOrData.filter((group) => {
      const name = group.name.toLocaleLowerCase().trim();
      const queryLcTm = query.toLocaleLowerCase().trim();
      return name.includes(queryLcTm);
    });

    const sortFilterData = sort[sortBy](queryFilterData);

    const groupFilterData = groups.length
      ? sortFilterData.filter((data) => groups.includes(data.groupId))
      : sortFilterData;

    const providerFilterData = providers.length
      ? groupFilterData.filter((data) => providers.includes(data.provider))
      : groupFilterData;

    setGroupData(providerFilterData);
  }, [groupOrData, groups, providers, query, sortBy]);

  return groupData;
};

export default useFilter;
