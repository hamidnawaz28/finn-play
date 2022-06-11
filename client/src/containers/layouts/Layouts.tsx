import { Children } from "../../ts/interfaces";
import "./layouts.css";

interface LayoutInterface {
  children: Children;
}

const Body = ({ children }: LayoutInterface) => {
  return <div className="body-layout">{children}</div>;
};

const Header = ({ children }: LayoutInterface) => {
  return <div className="header-layout">{children}</div>;
};

const Content = ({ children }: LayoutInterface) => {
  return <div className="content-layout">{children}</div>;
};

const PlayerContent = ({ children }: LayoutInterface) => {
  return <div className="player-content-layout">{children}</div>;
};

const PlayerGames = ({ children }: LayoutInterface) => {
  return <div className="player-games-layout">{children}</div>;
};

const Filter = ({ children }: LayoutInterface) => {
  return <div className="filter-layout">{children}</div>;
};

const FilterCategory = ({ children }: LayoutInterface) => {
  return <div className="filter-category-layout">{children}</div>;
};

const FilterCategoryItems = ({ children }: LayoutInterface) => {
  return <div className="filter-category-items-layout">{children}</div>;
};

const FilterCategoryTitle = ({ children }: LayoutInterface) => {
  return <div className="filter-category-title-layout">{children}</div>;
};

const Authentication = ({ children }: LayoutInterface) => {
  return <div className="authentication-layout">{children}</div>;
};
const FilterFooter = ({ children }: LayoutInterface) => {
  return <div className="filter-footer-layout">{children}</div>;
};

const AdminContent = ({ children }: LayoutInterface) => {
  return <div className="admin-content-layout">{children}</div>;
};

const AdminItems = ({ children }: LayoutInterface) => {
  return <div className="admin-items-layout">{children}</div>;
};

const AdminItemsContent = ({ children }: LayoutInterface) => {
  return <div className="admin-items-content-layout">{children}</div>;
};
const AdminHeadWrap = ({ children }: LayoutInterface) => {
  return <div className="admin-head-wrap-layout">{children}</div>;
};
const ActionWrap = ({ children }: LayoutInterface) => {
  return <div className="actions-wrap-layout">{children}</div>;
};

const ModalItems = ({ children }: LayoutInterface) => {
  return <div className="modal-items-layout">{children}</div>;
};

const ActionContainer = ({ children }: LayoutInterface) => {
  return <div className="actiion-container-layout">{children}</div>;
};

export {
  Body,
  Header,
  Filter,
  Content,
  PlayerContent,
  PlayerGames,
  FilterCategoryTitle,
  FilterCategoryItems,
  Authentication,
  FilterCategory,
  FilterFooter,
  AdminContent,
  AdminItems,
  AdminItemsContent,
  AdminHeadWrap,
  ActionWrap,
  ModalItems,
  ActionContainer,
};
