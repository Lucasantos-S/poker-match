export interface IProps {
  onClick?: () => void;
  color?: string;
  size: number;
}

export interface IHelperProps extends IProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export interface IIconProps extends IProps {
  name: keyof IIcons;
}

export interface ICloseIcon extends IProps {
  isAbsolute?: boolean;
}

export interface IIcons {
  "error-404": JSX.Element;
  "Money-Icon": JSX.Element;
  "Wallet-Icon": JSX.Element;
  "Bulleted-Icon": JSX.Element;
  "Group-Icon": JSX.Element;
  "ArrowRight-icon": JSX.Element;
  "Math-icon": JSX.Element;
  "Minus-icon": JSX.Element;
  "Settings-icon": JSX.Element;
  "Close-Icon": JSX.Element;
  "Success-Icon": JSX.Element;
  "Search-Icon": JSX.Element;
  "Logout-Icon": JSX.Element;
  "Calendar-Icon": JSX.Element;
  "Vertical-Logo": JSX.Element;
  "Dark-Icon": JSX.Element;
  "Light-Icon": JSX.Element;
  "Undo-Icon": JSX.Element;
  "Brazil-flag": JSX.Element;
  "Spain-Flag": JSX.Element;
  "United-States-Flag": JSX.Element;
  "List-Icon": JSX.Element;
  "Refresh-Icon": JSX.Element;
  "ArrowDown-Icon": JSX.Element;
  "DisplaySettings-Icon": JSX.Element;
  "Pallete-Icon": JSX.Element;
  "CustomImageLeft-Icon": JSX.Element;
  "CustomImageRight-Icon": JSX.Element;
  "Mobile-Icon": JSX.Element;
  "Computer-Icon": JSX.Element;
  "LogoColorExample-Icon": JSX.Element;
  "LogoNehativeExample-Icon": JSX.Element;
  "Adjustment-Icon": JSX.Element;
  "Publish-Icon": JSX.Element;
  "Desktop-Icon": JSX.Element;
  "Phone-Icon": JSX.Element;
  "Key-Icon": JSX.Element;
  "Copy-Icon": JSX.Element;
  "Demography-Icon": JSX.Element;
  "Visibility-Icon": JSX.Element;
  "Visibility-Of-Icon": JSX.Element;
  "Mail-Icon": JSX.Element;
  "Lock-Icon": JSX.Element;
}
