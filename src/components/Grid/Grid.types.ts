// This file is part of MinIO Design System
// Copyright (c) 2022 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import { HTMLAttributes, ReactNode } from "react";

import { OverrideTheme } from "../../global/global.types";

interface GridCommonProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  sx?: OverrideTheme;
}

export type ConditionalProps =
  | {
      container?: boolean;
      item?: never;
      wrap?: "nowrap" | "wrap-reverse" | "wrap";
      direction?: "column-reverse" | "column" | "row-reverse" | "row";
      columnSpacing?: number;
      rowSpacing?: number;
      xs?: never;
      sm?: never;
      md?: never;
      lg?: never;
      xl?: never;
    }
  | {
      container?: never;
      item?: boolean;
      wrap?: never;
      direction?: never;
      columnSpacing?: never;
      rowSpacing?: never;
      xs?: "auto" | "hidden" | number | boolean;
      sm?: "auto" | "hidden" | number | boolean;
      md?: "auto" | "hidden" | number | boolean;
      lg?: "auto" | "hidden" | number | boolean;
      xl?: "auto" | "hidden" | number | boolean;
    };

export type GridProps = GridCommonProps & ConditionalProps;
