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

const OrbitIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.95247 1.28057C6.2522 0.691471 7.69504 0.492544 9.10568 0.707961C9.48785 0.766321 9.75035 1.12344 9.69199 1.50561C9.63363 1.88778 9.27651 2.15028 8.89434 2.09192C7.75178 1.91744 6.58315 2.07856 5.53043 2.55571C4.47771 3.03285 3.58624 3.80547 2.96433 4.7797C2.34242 5.75392 2.01686 6.8878 2.02719 8.04355C2.0356 8.98382 2.26603 9.90564 2.69587 10.7352C2.89638 10.6691 3.11068 10.6333 3.33334 10.6333C4.45632 10.6333 5.36668 11.5436 5.36668 12.6666C5.36668 13.7896 4.45632 14.6999 3.33334 14.6999C2.21036 14.6999 1.30001 13.7896 1.30001 12.6666C1.30001 12.2861 1.40452 11.93 1.5864 11.6255C0.969942 10.539 0.638467 9.31085 0.627248 8.05607C0.614489 6.62913 1.01645 5.2292 1.78428 4.02639C2.55211 2.82358 3.65275 1.86967 4.95247 1.28057ZM2.90712 12.1982C2.77987 12.314 2.70001 12.481 2.70001 12.6666C2.70001 13.0164 2.98356 13.2999 3.33334 13.2999C3.68312 13.2999 3.96668 13.0164 3.96668 12.6666C3.96668 12.3168 3.68312 12.0333 3.33334 12.0333C3.17128 12.0333 3.02343 12.0941 2.91142 12.1943C2.90999 12.1956 2.90856 12.1969 2.90712 12.1982ZM12.6667 2.69994C12.3169 2.69994 12.0333 2.98349 12.0333 3.33327C12.0333 3.68305 12.3169 3.96661 12.6667 3.96661C12.829 3.96661 12.977 3.90555 13.0891 3.80515C13.0904 3.80397 13.0917 3.80278 13.093 3.8016C13.2202 3.68577 13.3 3.51884 13.3 3.33327C13.3 2.98349 13.0165 2.69994 12.6667 2.69994ZM14.4142 4.3734C14.5957 4.06908 14.7 3.71336 14.7 3.33327C14.7 2.21029 13.7897 1.29994 12.6667 1.29994C11.5437 1.29994 10.6333 2.21029 10.6333 3.33327C10.6333 4.45625 11.5437 5.36661 12.6667 5.36661C12.8899 5.36661 13.1047 5.33064 13.3056 5.26419C13.7407 6.09908 13.9734 7.02801 13.9807 7.9755C13.9897 9.13809 13.6588 10.278 13.0287 11.2551C12.3987 12.2322 11.4969 13.0039 10.4341 13.4754C9.37141 13.9469 8.19409 14.0977 7.04684 13.9092C6.66536 13.8465 6.30529 14.105 6.24261 14.4864C6.17992 14.8679 6.43836 15.228 6.81985 15.2907C8.23628 15.5234 9.68985 15.3373 11.0019 14.7551C12.314 14.1729 13.4274 13.2201 14.2053 12.0138C14.9832 10.8074 15.3918 9.40009 15.3807 7.96471C15.371 6.70181 15.0368 5.46563 14.4142 4.3734ZM8.00001 6.69994C7.28204 6.69994 6.70001 7.28197 6.70001 7.99994C6.70001 8.71791 7.28204 9.29994 8.00001 9.29994C8.71798 9.29994 9.30001 8.71791 9.30001 7.99994C9.30001 7.28197 8.71798 6.69994 8.00001 6.69994ZM5.30001 7.99994C5.30001 6.50877 6.50884 5.29994 8.00001 5.29994C9.49118 5.29994 10.7 6.50877 10.7 7.99994C10.7 9.49111 9.49118 10.6999 8.00001 10.6999C6.50884 10.6999 5.30001 9.49111 5.30001 7.99994Z"
      fill="currentColor"
    />
  </svg>
);
export default OrbitIcon;