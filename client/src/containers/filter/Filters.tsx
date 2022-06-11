import React from "react";
import DB from "../../assets/data/db.json";
import { FilterButton as FilterOption, Typography } from "../../components";
import {
  FilterCategoryItemsLayout,
  FilterCategoryLayout,
  FilterCategoryTitleLayout,
} from "../layouts";
import { sortData } from "../../assets/config/globals";
const { providers, groups } = DB;

interface FiltersInterface {
  providers: number[];
  groups: number[];
  sortBy: number[];
  providersHandle: (id: number) => void;
  groupsHandle: (id: number) => void;
  sortingHandle: (id: number) => void;
}

const Filters = ({
  providersHandle,
  groupsHandle,
  sortingHandle,
  providers: selectedProviders,
  groups: selectedGroups,
  sortBy: selectedSortBy,
}: FiltersInterface) => {
  const configs = [
    {
      title: "Providers",
      data: providers,
      handler: providersHandle,
      selected: selectedProviders,
    },
    {
      title: "Game Groups",
      data: groups,
      handler: groupsHandle,
      selected: selectedGroups,
    },
    {
      title: "Sorting",
      data: sortData,
      handler: sortingHandle,
      selected: selectedSortBy,
    },
  ];

  return (
    <React.Fragment>
      {configs.map((config) => {
        return (
          <FilterCategoryLayout>
            <FilterCategoryTitleLayout>
              <Typography variant="large" grey={true}>
                <div>{config.title}</div>
              </Typography>
            </FilterCategoryTitleLayout>
            <FilterCategoryItemsLayout>
              {config.data.map((type, index) => {
                return (
                  <FilterOption
                    key={index}
                    title={type.name}
                    selected={config.selected.includes(type.id)}
                    onClick={() => config.handler(type.id)}
                  />
                );
              })}
            </FilterCategoryItemsLayout>
          </FilterCategoryLayout>
        );
      })}
    </React.Fragment>
  );
};

export default Filters;
