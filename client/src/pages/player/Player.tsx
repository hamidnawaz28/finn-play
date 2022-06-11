import { useState, useMemo } from "react";
import { useFilter } from "../../hooks";
import {
  BodyLayout,
  ContentLayout,
  FilterLayout,
  PlayerContenLayout,
  PlayerGamesLayout,
  FilterFooterLayout,
} from "../../containers/layouts";
import { addUnavailableItem } from "../../utils/utility";

import {
  FiltersContainer,
  HeaderContainer,
  ThumbnailContainer,
  GamesAmountContainer,
  ColumnSelectorContainer,
} from "../../containers";

import { InputWithIcon, ActionButton } from "../../components";

const Player = () => {
  const [query, setQuery] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  const [providers, setProviders] = useState<number[]>([]);
  const [groups, setGroups] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState<number>(0);
  const [numOfGames, setNumOfGames] = useState<number>(4);

  const groupedGames = useFilter(search, providers, groups, sortBy);

  const searchHandle = () => {
    setSearch(query);
  };

  const providersHandle = (id: number) => {
    setProviders(addUnavailableItem(providers, id));
  };

  const groupsHandle = (id: number) => {
    setGroups(addUnavailableItem(groups, id));
  };

  const sortingHandle = (id: number) => {
    id === sortBy ? setSortBy(0) : setSortBy(id);
  };

  const onResetHandle = () => {
    setQuery("");
    setSearch("");
    setProviders([]);
    setGroups([]);
    setSortBy(0);
    setNumOfGames(4);
  };

  return (
    <div className="player-route">
      <HeaderContainer />
      <BodyLayout>
        <ContentLayout>
          <PlayerContenLayout>
            <PlayerGamesLayout>
              <ThumbnailContainer data={groupedGames} numOfGames={numOfGames} />
            </PlayerGamesLayout>
            <FilterLayout>
              <InputWithIcon
                value={query}
                setValue={setQuery}
                name={"query-field"}
                placeholder={"Search"}
                searchHandle={searchHandle}
              />
              <FiltersContainer
                providers={providers}
                groups={groups}
                sortBy={[sortBy]}
                providersHandle={providersHandle}
                groupsHandle={groupsHandle}
                sortingHandle={sortingHandle}
              />
              <ColumnSelectorContainer
                selected={numOfGames}
                setSelected={setNumOfGames}
              />
              <FilterFooterLayout>
                <GamesAmountContainer amount={groupedGames.length} />
                <ActionButton actionHandle={onResetHandle} title="Reset" />
              </FilterFooterLayout>
            </FilterLayout>
          </PlayerContenLayout>
        </ContentLayout>
      </BodyLayout>
    </div>
  );
};

export default Player;
