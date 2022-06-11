import "./action.css";
import { Typography } from "../../components";

interface ActionButtonInterface {
  title: string;
  actionHandle: () => void;
  bgColor?: string;
  lightText?: boolean;
  disabled?: boolean;
}
const Reset = ({
  actionHandle,
  title,
  bgColor,
  lightText,
  disabled = false,
}: ActionButtonInterface) => {
  return (
    <div
      className={`action ${disabled && "action-disabled"}`}
      onClick={!disabled ? actionHandle : () => {}}
      style={{ backgroundColor: bgColor, color: lightText ? "#FFFFFF" : "" }}
    >
      <Typography variant="small">{title}</Typography>
    </div>
  );
};

export default Reset;
