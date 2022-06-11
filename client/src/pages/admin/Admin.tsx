import React, { useState } from "react";
import {
  AdminGamesContainer,
  AdminGroupsContainer,
  AdminProvidersContainer,
  GroupDeletePopup,
  GroupEditPopup,
  HeaderContainer,
} from "../../containers";

import {
  AdminContentLayout,
  BodyLayout,
  ContentLayout,
} from "../../containers/layouts";

import { GameGrouped } from "../../ts/interfaces";

const selectedInitialData = {
  groupId: 0,
  groupName: "",
  games: [
    {
      id: 0,
      name: "",
      provider: 0,
      cover: "",
      coverLarge: "",
      date: "",
    },
  ],
};

const Admin = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [selectedData, setSelectedData] =
    useState<GameGrouped>(selectedInitialData);

  return (
    <div className="player-route">
      <HeaderContainer />
      <BodyLayout>
        <ContentLayout>
          <AdminContentLayout>
            <AdminGroupsContainer
              setSelectedData={setSelectedData}
              setShowEdit={setShowEdit}
              setShowDelete={setShowDelete}
            />
            <AdminGamesContainer />
            <AdminProvidersContainer />
          </AdminContentLayout>
        </ContentLayout>
      </BodyLayout>
      <React.Fragment>
        {showEdit && (
          <GroupEditPopup
            selectedData={selectedData}
            setShow={() => setShowEdit((prevValue) => !prevValue)}
          />
        )}
        {showDelete && (
          <GroupDeletePopup
            selectedData={selectedData}
            setShow={() => setShowDelete((prevValue) => !prevValue)}
          />
        )}
      </React.Fragment>
    </div>
  );
};

export default Admin;
