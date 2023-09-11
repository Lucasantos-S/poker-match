import React from "react";
import { IIconProps, IIcons } from "./Icons.structure";

import Error404 from "./Error404";
import MoneyIcon from "./MoneyIcon";
import AccountIcon from "./AccountIcon";
import BulletedIcon from "./BulletedIcon";
import GroupIcon from "./GroupIcon";
import ArrowRightIcon from "./ArrowRightIcon";
import MathIcon from "./MathIcon";
import MinusIcon from "./MinusIcon";
import SettingsIcon from "./SettingsIcon";
import CloseIcon from "./CloseIcon";
import SuccessIcon from "./SuccessIcon";
import SearchIcon from "./SearchIcon";
import LogoutIcon from "./LogoutIcon";
import CalendarIcon from "./CalendarIcon";
import VerticalLogo from "./VerticalLogo";
import DarkIcon from "./DarkIcon";
import LightIcon from "./LightIcon";
import UndoIcon from "./UndoIcon";
import BrazilFlag from "./BrazilFlag";
import ListIcon from "./ListIcon";
import UnitedStatesFlag from "./UnitedStatesFlag";
import RefreshIcon from "./RefreshIcon";
import ArrowDownIcon from "./ArrowDownIcon";
import SpainFlag from "./SpainFlag";
import DisplaySettingsIcon from "./DisplaySettingsIcon";
import PaletteIcon from "./PaletteIcon";
import CustomImageLeft from "./CustomImageLeft";
import CustomImageRight from "./CustomImageRight";
import MobileIcon from "./MobileIcon";
import ComputerIcon from "./ComputerIcon";
import LogoColorExampleIcon from "./LogoColorExampleIcon";
import LogoNehativeExampleIcon from "./LogoNegativeExampleIcon";
import AdjustmentIcon from "./AdjustmentIcon";
import PublishIcon from "./PublishIcon";
import DesktopIcon from "./DesktopIcon";
import PhoneIcon from "./PhoneIcon";
import KeyIcon from "./KeyIcon";
import CopyIcon from "./CopyIcon";
import DemographyIcon from "./DemographyIcon";
import VisibilityIcon from "./VisibilityIcon";
import VisibilityOfIcon from "./VisibilityOfIcon";
import MailIcon from "./MailIcon";
import LockIcon from "./LockIcon";

/**
 * @description Component to render all svg icons
 * @example ````tsx
 * <Icons name="arrow-down" size={20} color="#F4F4F4" />
 
 *
 * @param size - size of icon
 * @param color - color of icon
 * @param name - name of icon
 */

export default function Icons({ size, color, name, onClick }: IIconProps) {
  const iconsProps = {
    onClick,
    size,
    color,
  };

  const iconsHashmap: IIcons = {
    "error-404": <Error404 {...iconsProps} />,
    "Money-Icon": <MoneyIcon {...iconsProps} />,
    "Wallet-Icon": <AccountIcon {...iconsProps} />,
    "Bulleted-Icon": <BulletedIcon {...iconsProps} />,
    "Group-Icon": <GroupIcon {...iconsProps} />,
    "ArrowRight-icon": <ArrowRightIcon {...iconsProps} />,
    "Math-icon": <MathIcon {...iconsProps} />,
    "Minus-icon": <MinusIcon {...iconsProps} />,
    "Settings-icon": <SettingsIcon {...iconsProps} />,
    "Close-Icon": <CloseIcon {...iconsProps} />,
    "Success-Icon": <SuccessIcon {...iconsProps} />,
    "Search-Icon": <SearchIcon {...iconsProps} />,
    "Logout-Icon": <LogoutIcon {...iconsProps} />,
    "Calendar-Icon": <CalendarIcon {...iconsProps} />,
    "Vertical-Logo": <VerticalLogo {...iconsProps} />,
    "Dark-Icon": <DarkIcon {...iconsProps} />,
    "Light-Icon": <LightIcon {...iconsProps} />,
    "Undo-Icon": <UndoIcon {...iconsProps} />,
    "Brazil-flag": <BrazilFlag {...iconsProps} />,
    "United-States-Flag": <UnitedStatesFlag {...iconsProps} />,
    "Spain-Flag": <SpainFlag {...iconsProps} />,
    "List-Icon": <ListIcon {...iconsProps} />,
    "Refresh-Icon": <RefreshIcon {...iconsProps} />,
    "ArrowDown-Icon": <ArrowDownIcon {...iconsProps} />,
    "DisplaySettings-Icon": <DisplaySettingsIcon {...iconsProps} />,
    "Pallete-Icon": <PaletteIcon {...iconsProps} />,
    "CustomImageLeft-Icon": <CustomImageLeft {...iconsProps} />,
    "CustomImageRight-Icon": <CustomImageRight {...iconsProps} />,
    "Mobile-Icon": <MobileIcon {...iconsProps} />,
    "Computer-Icon": <ComputerIcon {...iconsProps} />,
    "LogoColorExample-Icon": <LogoColorExampleIcon {...iconsProps} />,
    "LogoNehativeExample-Icon": <LogoNehativeExampleIcon {...iconsProps} />,
    "Adjustment-Icon": <AdjustmentIcon {...iconsProps} />,
    "Publish-Icon": <PublishIcon {...iconsProps} />,
    "Desktop-Icon": <DesktopIcon {...iconsProps} />,
    "Phone-Icon": <PhoneIcon {...iconsProps} />,
    "Key-Icon": <KeyIcon {...iconsProps} />,
    "Copy-Icon": <CopyIcon {...iconsProps} />,
    "Demography-Icon": <DemographyIcon {...iconsProps} />,
    "Visibility-Icon": <VisibilityIcon {...iconsProps} />,
    "Visibility-Of-Icon": <VisibilityOfIcon {...iconsProps} />,
    "Mail-Icon" : <MailIcon {...iconsProps} />,
    "Lock-Icon" : <LockIcon {...iconsProps} />
    
  };

  return iconsHashmap[name as keyof typeof iconsHashmap] || null;
}
