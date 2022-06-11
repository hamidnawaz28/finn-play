import React, { useEffect, useState } from "react";
import { MultiValue } from "react-select";
import {
  Modal,
  Typography,
  CheckButton,
  ActionButton,
  MultiSelect,
} from "../../components";
import {
  ActionContainerLayout,
  ModalItemsLayout,
} from "../../containers/layouts";
import { GameGrouped } from "../../ts/interfaces";

interface GroupDeleteInterface {
  setShow: () => void;
  selectedData: GameGrouped;
}

interface OptionsInterface {
  value: string | number;
  label: string;
}

const GroupDelete = ({ setShow, selectedData }: GroupDeleteInterface) => {
  const [checked, setCheck] = useState<boolean>(false);
  const handleSave = () => {};
  const [value, setValue] = useState<MultiValue<OptionsInterface>>([]);

  return (
    <Modal setShow={setShow}>
      <Typography variant="h2">Group Delete</Typography>
      <ModalItemsLayout>
        <div>
          <Typography variant="large">
            Do you want to delete Slots group?
          </Typography>
          <Typography variant="large">
            {`If you want to move ${selectedData.games.length} games, select new group below.`}
          </Typography>
        </div>

        <MultiSelect value={value} setValue={setValue} options={[]} />

        <CheckButton
          checked={checked}
          setCheck={setCheck}
          label="Delete completely"
        />
      </ModalItemsLayout>
      <ActionContainerLayout>
        <ActionButton
          actionHandle={handleSave}
          title="Yes, Delete"
          bgColor="#EC4466"
          lightText={true}
        />
        <ActionButton
          actionHandle={setShow}
          title="No"
          bgColor="#6C6963"
          lightText={true}
        />
      </ActionContainerLayout>
    </Modal>
  );
};

export default GroupDelete;
