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

const HospitalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.89558 1.22891C4.2769 0.847587 4.79409 0.633362 5.33336 0.633362H10.6667C11.206 0.633362 11.7232 0.847587 12.1045 1.22891C12.4858 1.61023 12.7 2.12742 12.7 2.6667V7.30003H13.3334C13.8726 7.30003 14.3898 7.51425 14.7711 7.89558C15.1525 8.2769 15.3667 8.79409 15.3667 9.33336V13.3334C15.3667 13.8726 15.1525 14.3898 14.7711 14.7711C14.3898 15.1525 13.8726 15.3667 13.3334 15.3667H2.6667C2.12742 15.3667 1.61023 15.1525 1.22891 14.7711C0.847587 14.3898 0.633362 13.8726 0.633362 13.3334V7.33336C0.633362 6.79409 0.847587 6.2769 1.22891 5.89558C1.61023 5.51425 2.12742 5.30003 2.6667 5.30003H3.30003V2.6667C3.30003 2.12742 3.51425 1.61024 3.89558 1.22891ZM3.30003 6.70003H2.6667C2.49872 6.70003 2.33763 6.76675 2.21886 6.88553C2.10009 7.0043 2.03336 7.16539 2.03336 7.33336V13.3334C2.03336 13.5013 2.10009 13.6624 2.21886 13.7812C2.33763 13.9 2.49872 13.9667 2.6667 13.9667H3.30003V6.70003ZM4.70003 13.9667V2.6667C4.70003 2.49872 4.76675 2.33763 4.88553 2.21886C5.0043 2.10009 5.16539 2.03336 5.33336 2.03336H10.6667C10.8347 2.03336 10.9958 2.10009 11.1145 2.21886C11.2333 2.33763 11.3 2.49872 11.3 2.6667V13.9667H4.70003ZM12.7 13.9667H13.3334C13.5013 13.9667 13.6624 13.9 13.7812 13.7812C13.9 13.6624 13.9667 13.5013 13.9667 13.3334V9.33336C13.9667 9.16539 13.9 9.0043 13.7812 8.88553C13.6624 8.76675 13.5013 8.70003 13.3334 8.70003H12.7V13.9667ZM8.00003 3.30003C8.38663 3.30003 8.70003 3.61343 8.70003 4.00003V4.63336H9.33336C9.71996 4.63336 10.0334 4.94676 10.0334 5.33336C10.0334 5.71996 9.71996 6.03336 9.33336 6.03336H8.70003V6.66669C8.70003 7.05329 8.38663 7.36669 8.00003 7.36669C7.61343 7.36669 7.30003 7.05329 7.30003 6.66669V6.03336H6.66669C6.2801 6.03336 5.96669 5.71996 5.96669 5.33336C5.96669 4.94676 6.2801 4.63336 6.66669 4.63336H7.30003V4.00003C7.30003 3.61343 7.61343 3.30003 8.00003 3.30003ZM5.96669 9.33336C5.96669 8.94676 6.2801 8.63336 6.66669 8.63336H9.33336C9.71996 8.63336 10.0334 8.94676 10.0334 9.33336C10.0334 9.71996 9.71996 10.0334 9.33336 10.0334H6.66669C6.2801 10.0334 5.96669 9.71996 5.96669 9.33336ZM5.96669 12C5.96669 11.6134 6.2801 11.3 6.66669 11.3H9.33336C9.71996 11.3 10.0334 11.6134 10.0334 12C10.0334 12.3866 9.71996 12.7 9.33336 12.7H6.66669C6.2801 12.7 5.96669 12.3866 5.96669 12Z"
      fill="currentColor"
    />
  </svg>
);
export default HospitalIcon;