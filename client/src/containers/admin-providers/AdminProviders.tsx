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

const AdminProviders = () => {
  return (
    <AdminItemsLayout>
      <AdminHeadWrapLayout>
        <Typography variant="h2">Providers</Typography>
      </AdminHeadWrapLayout>
      <AdminItemsContentLayout>
        {providers.map((game) => {
          return (
            <ThumbnailImage
              name={game.name}
              images={[require(`../../assets/images/${game.logo}`)]}
            />
          );
        })}
      </AdminItemsContentLayout>
    </AdminItemsLayout>
  );
};

export default AdminProviders;
