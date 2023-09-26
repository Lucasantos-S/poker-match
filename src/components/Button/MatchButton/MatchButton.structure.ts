export interface IMatchButtonProps {
  icon: "Match-Icon" | "NotMatch-Icon";
  onClick: () => void;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}
