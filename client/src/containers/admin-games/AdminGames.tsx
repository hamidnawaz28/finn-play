import React from "react";
import {
  AdminItemsLayout,
  AdminItemsContentLayout,
  AdminHeadWrapLayout,
} from "../layouts";
import { ThumbnailImage } from "../../components/thumbnail";
import { Typography } from "../../components/typography";

import DB from "../../assets/data/db.json";
const { providers, games, groups } = DB;

const AdminGames = () => {
  return (
    <AdminItemsLayout>
      <AdminHeadWrapLayout>
        <Typography variant="h2">Games</Typography>
      </AdminHeadWrapLayout>
      <AdminItemsContentLayout>
        {games.map((game) => {
          return <ThumbnailImage name={game.name} images={[game.cover]} />;
        })}
      </AdminItemsContentLayout>
    </AdminItemsLayout>
  );
};

export default AdminGames;
