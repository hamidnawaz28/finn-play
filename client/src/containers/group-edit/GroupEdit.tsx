import React, { useEffect, useState } from "react";
import { MultiValue } from "react-select";
import {
  ActionButton,
  Input,
  Modal,
  MultiSelect,
  Typography,
} from "../../components";
import { ModalItemsLayout } from "../../containers/layouts";
import { GameGrouped } from "../../ts/interfaces";
import DB from "../../assets/data/db.json";
import { updateGroups } from "../../api/groups";

interface GroupEditInterface {
  setShow: () => void;
  selectedData: GameGrouped;
}

interface OptionsInterface {
  value: string | number;
  label: string;
}

const GroupEdit = ({ setShow, selectedData }: GroupEditInterface) => {
  const [games, setGames] = useState<MultiValue<OptionsInterface>>([]);
  const [groupName, setGroupName] = useState<string>("");

  const allGames = DB.games.map((game) => {
    return {
      value: game.id,
      label: game.name,
    };
  });

  const handleSave = () => {
    updateGroups(selectedData.groupId, {
      name: groupName,
      games: games.map((game) => game.value),
    });
  };

  useEffect(() => {
    setGroupName(selectedData.groupName);
  }, [selectedData.groupName]);

  useEffect(() => {
    const selectedGames = selectedData.games.map((game) => {
      return {
        value: game.id,
        label: game.name,
      };
    });
    setGames(selectedGames);
  }, [selectedData.games]);

  const disabled = games.length > 0 ? false : true;

  return (
    <Modal setShow={setShow}>
      <Typography variant="h2">Group editing</Typography>
      <ModalItemsLayout>
        <Input
          label="Group Name"
          value={groupName}
          setValue={setGroupName}
          name={"group-name"}
          variant={"small"}
          placeholder="i.e microgaming"
        />
        <MultiSelect value={games} setValue={setGames} options={allGames} />
      </ModalItemsLayout>
      <ActionButton
        disabled={disabled}
        actionHandle={handleSave}
        title="Save"
        bgColor={disabled ? "#F2F2F2" : "#EC4466"}
        lightText={!disabled ? true : false}
      />
    </Modal>
  );
};

export default GroupEdit;
