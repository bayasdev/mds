import React from "react";
export interface ButtonThemeProps {
  border: string;
  text: string;
  background: string;
  iconColor: string;
}
export interface ButtonThemeStatesProps {
  enabled: ButtonThemeProps;
  disabled: ButtonThemeProps;
  hover: ButtonThemeProps;
  pressed: ButtonThemeProps;
}
export interface LoginPageThemeProps {
  formBG: string;
  bgFilter: string;
  promoBG: string;
  promoHeader: string;
  promoText: string;
  footerElements: string;
  footerDivider: string;
}
export interface PageHeaderThemeProps {
  background: string;
  border: string;
  color: string;
}
export interface TooltipThemeProps {
  background: string;
  color: string;
}
export interface CommonInputThemeProps {
  labelColor: string;
}
export interface CheckBoxThemeProps {
  checkBoxBorder: string;
  checkBoxColor: string;
  disabledBorder: string;
  disabledColor: string;
}
export interface IconButtonThemeProps {
  buttonBG: string;
  activeBG: string;
  hoverBG: string;
  disabledBG: string;
  color: string;
}
export interface DataTableThemeProps {
  border: string;
  disabledBorder: string;
  disabledBG: string;
  selected: string;
  deletedDisabled: string;
  hoverColor: string;
}
export interface BackLinkThemeProps {
  color: string;
  arrow: string;
  hover: string;
}
export interface InputBoxThemeProps {
  border: string;
  hoverBorder: string;
  color: string;
  backgroundColor: string;
  placeholderColor: string;
  error: string;
  disabledBorder: string;
  disabledBackground: string;
  disabledText: string;
  disabledPlaceholder: string;
}
export interface BreadcrumbsBackStyle {
  border: string;
  backgroundColor: string;
}
export interface BreadcrumbsThemeProps {
  border: string;
  backgroundColor: string;
  linksColor: string;
  backButton: BreadcrumbsBackStyle;
  textColor: string;
}
export interface ActionsListThemeProps {
  titleColor: string;
  containerBorderColor: string;
  backgroundColor: string;
  optionsTextColor: string;
  optionsBorder: string;
  optionsHoverTextColor: string;
  disabledOptionsTextColor: string;
}
export interface ScreenTitleThemeProps {
  border: string;
  subtitleColor: string;
  iconColor: string;
}
export interface IconThemeColorProps {
  accept: string;
  delete: string;
  default: string;
}
export interface ModalBoxThemeProps {
  overlayColor: string;
  containerColor: string;
  closeColor: string;
  closeHoverColor: string;
  closeHoverBG: string;
  titleColor: string;
  iconColor: IconThemeColorProps;
}
export interface SwitchThemeProps {
  onLabelColor: string;
  offLabelColor: string;
  switchBackground: string;
  onBackgroundColor: string;
  bulletBorderColor: string;
  bulletBGColor: string;
  disabledBackground: string;
  disabledBulletBorderColor: string;
  disabledBulletBGColor: string;
}
export interface DropdownSelectorThemeProps {
  backgroundColor: string;
  optionTextColor: string;
  selectedTextColor: string;
  selectedBGColor: string;
  hoverText: string;
  hoverBG: string;
}
export interface ReadBoxThemeProps {
  borderColor: string;
  backgroundColor: string;
  textColor: string;
}
export interface ThemeDefinitionProps {
  bgColor: string;
  fontColor: string;
  borderColor: string;
  bulletColor: string;
  logoColor: string;
  logoLabelColor: string;
  logoLabelInverse: string;
  loaderColor: string;
  boxBackground: string;
  buttons?: {
    regular?: ButtonThemeStatesProps;
    callAction?: ButtonThemeStatesProps;
    secondary?: ButtonThemeStatesProps;
    text?: ButtonThemeStatesProps;
    subAction?: ButtonThemeStatesProps;
  };
  login?: LoginPageThemeProps;
  pageHeader?: PageHeaderThemeProps;
  tooltip?: TooltipThemeProps;
  commonInput?: CommonInputThemeProps;
  checkbox?: CheckBoxThemeProps;
  iconButton?: IconButtonThemeProps;
  dataTable?: DataTableThemeProps;
  backLink?: BackLinkThemeProps;
  inputBox?: InputBoxThemeProps;
  breadcrumbs?: BreadcrumbsThemeProps;
  actionsList?: ActionsListThemeProps;
  screenTitle?: ScreenTitleThemeProps;
  modalBox?: ModalBoxThemeProps;
  switchButton?: SwitchThemeProps;
  dropdownSelector?: DropdownSelectorThemeProps;
  readBox?: ReadBoxThemeProps;
}
export interface SelectorType {
  label: string;
  value: string;
  icon?: React.ReactNode;
}