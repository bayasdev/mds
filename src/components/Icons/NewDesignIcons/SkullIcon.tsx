// This file is part of MinIO Design System
// Copyright (c) 2024 MinIO, Inc.
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

import * as React from "react";
import { SVGProps } from "react";

const SkullIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.62669 2.32966C5.62327 1.65762 6.79788 1.29858 7.99989 1.29858C9.20189 1.29858 10.3765 1.65762 11.3731 2.32966C12.3697 3.00169 13.1428 3.95609 13.5934 5.07046C14.0439 6.18484 14.1513 7.40839 13.9018 8.58422C13.69 9.58257 13.2291 10.5079 12.5657 11.2758C12.6259 11.4338 12.6665 11.5994 12.6859 11.7691C12.7294 12.1496 12.6645 12.5346 12.4988 12.8799C12.3331 13.2251 12.0732 13.5166 11.7492 13.7206C11.628 13.7969 11.4997 13.8598 11.3666 13.9087V14.6666C11.3666 15.0532 11.0532 15.3666 10.6666 15.3666H5.33322C4.94662 15.3666 4.63322 15.0532 4.63322 14.6666V13.9087C4.50006 13.8598 4.37177 13.7969 4.25062 13.7206C3.92654 13.5166 3.66668 13.2251 3.50096 12.8799C3.33523 12.5346 3.27038 12.1496 3.31387 11.7691C3.33326 11.5994 3.37383 11.4338 3.43405 11.2758C2.77072 10.5079 2.30979 9.58257 2.09795 8.58422C1.84846 7.40839 1.95587 6.18484 2.40642 5.07046C2.85696 3.95609 3.6301 3.00169 4.62669 2.32966ZM7.99989 2.69858C7.0768 2.69858 6.17475 2.97431 5.40942 3.4904C4.64408 4.0065 4.05035 4.73943 3.70435 5.59522C3.35835 6.45101 3.27586 7.39064 3.46746 8.29363C3.65906 9.19661 4.11601 10.0218 4.77972 10.6633C5.03953 10.9145 5.06549 11.3221 4.83966 11.6041C4.7651 11.6973 4.71836 11.8095 4.70482 11.928C4.69127 12.0466 4.71147 12.1665 4.76309 12.274C4.81471 12.3816 4.89565 12.4723 4.99659 12.5359C5.09753 12.5995 5.21437 12.6332 5.33366 12.6333C5.72009 12.6335 6.03322 12.9469 6.03322 13.3333V13.9666H9.96655V13.3333C9.96655 12.9469 10.2797 12.6335 10.6661 12.6333C10.7854 12.6332 10.9022 12.5995 11.0032 12.5359C11.1041 12.4723 11.1851 12.3816 11.2367 12.274C11.2883 12.1665 11.3085 12.0466 11.295 11.928C11.2814 11.8095 11.2347 11.6973 11.1601 11.6041C10.9343 11.3221 10.9602 10.9145 11.2201 10.6633C11.8838 10.0218 12.3407 9.19661 12.5323 8.29363C12.7239 7.39064 12.6414 6.45101 12.2954 5.59522C11.9494 4.73943 11.3557 4.0065 10.5904 3.4904C9.82502 2.97431 8.92298 2.69858 7.99989 2.69858ZM5.99989 8.0333C6.0183 8.0333 6.03322 8.01838 6.03322 7.99997C6.03322 7.98156 6.0183 7.96664 5.99989 7.96664C5.98148 7.96664 5.96656 7.98156 5.96656 7.99997C5.96656 8.01838 5.98148 8.0333 5.99989 8.0333ZM4.63322 7.99997C4.63322 7.24518 5.2451 6.6333 5.99989 6.6333C6.75468 6.6333 7.36656 7.24518 7.36656 7.99997C7.36656 8.75476 6.75468 9.36664 5.99989 9.36664C5.2451 9.36664 4.63322 8.75476 4.63322 7.99997ZM9.99989 8.0333C10.0183 8.0333 10.0332 8.01838 10.0332 7.99997C10.0332 7.98156 10.0183 7.96664 9.99989 7.96664C9.98148 7.96664 9.96655 7.98156 9.96655 7.99997C9.96655 8.01838 9.98148 8.0333 9.99989 8.0333ZM8.63322 7.99997C8.63322 7.24518 9.2451 6.6333 9.99989 6.6333C10.7547 6.6333 11.3666 7.24518 11.3666 7.99997C11.3666 8.75476 10.7547 9.36664 9.99989 9.36664C9.2451 9.36664 8.63322 8.75476 8.63322 7.99997ZM7.99989 9.96664C8.26503 9.96664 8.50741 10.1164 8.62599 10.3536L8.95932 11.0203C9.06782 11.2372 9.05622 11.4949 8.92868 11.7013C8.80113 11.9077 8.57583 12.0333 8.33322 12.0333H7.66656C7.42395 12.0333 7.19864 11.9077 7.0711 11.7013C6.94356 11.4949 6.93196 11.2372 7.04046 11.0203L7.37379 10.3536C7.49236 10.1164 7.73475 9.96664 7.99989 9.96664Z"
      fill="currentColor"
    />
  </svg>
);
export default SkullIcon;