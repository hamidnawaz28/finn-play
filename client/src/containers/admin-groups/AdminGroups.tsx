import React, { useEffect, useState } from "react";
import DB from "../../assets/data/db.json";
import AddIcon from "../../assets/images/add-icon.svg";
import DeleteIcon from "../../assets/images/delete-icon.svg";
import EditIcon from "../../assets/images/edit-icon.svg";
import { IconButton } from "../../components";
import { ThumbnailImage } from "../../components/thumbnail";
import { Typography } from "../../components/typography";
import {
  ActionWrapLayout,
  AdminHeadWrapLayout,
  AdminItemsContentLayout,
  AdminItemsLayout,
} from "../layouts";
import "./admin-group.css";
import { GroupedGames, GamesGrouped, GameGrouped } from "../../ts/interfaces";
import { getGroupedGames } from "../../api/groups";
import { group } from "console";

interface AdminGroupsInterface {
  setShowEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setShowDelete: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedData: React.Dispatch<React.SetStateAction<GameGrouped>>;
}
const AdminGroups = ({
  setShowEdit,
  setShowDelete,
  setSelectedData,
}: AdminGroupsInterface) => {
  const [groupedGames, setGroupedGames] = useState<GroupedGames>([]);

  const getGames = () => {
    getGroupedGames().then((res: any) => {
      setGroupedGames(res.data);
    });
  };
  const groups: GamesGrouped = [];

  groupedGames.forEach((item) => {
    const { groupId, groupName, ...game } = item;
    const groupIndex = groups.findIndex((group) => group.groupId === groupId);
    if (groupIndex === -1) {
      groups.push({
        groupId: item.groupId,
        groupName: item.groupName,
        games: [{ ...game }],
      });
    } else {
      groups[groupIndex].games.push(game);
    }
  });

  useEffect(() => {
    getGames();
  }, []);

  return (
    <AdminItemsLayout>
      <AdminHeadWrapLayout>
        <Typography variant="h2">Groups</Typography>
        <img src={AddIcon} alt="add-icon" className="add-button" />
      </AdminHeadWrapLayout>
      <AdminItemsContentLayout>
        {groups.map((group) => {
          return (
            <ThumbnailImage
              name={group.groupName}
              images={group.games.map((game) => game.cover)}
            >
              <ActionWrapLayout>
                <IconButton
                  label="Edit"
                  icon={EditIcon}
                  clickHandle={() => {
                    setSelectedData(group);
                    setShowEdit((prevValue) => !prevValue);
                  }}
                />
                <IconButton
                  label="Delete"
                  icon={DeleteIcon}
                  clickHandle={() => {
                    setSelectedData(group);
                    setShowDelete((prevValue) => !prevValue);
                  }}
                />
              </ActionWrapLayout>
            </ThumbnailImage>
          );
        })}
      </AdminItemsContentLayout>
    </AdminItemsLayout>
  );
};

export default AdminGroups;
