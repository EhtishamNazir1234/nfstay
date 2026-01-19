import React from "react";


export interface StatItem {
  label: string;
  value: string;
  sub?: string;
  gradient?: boolean;
  icon: React.ReactNode;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Claim {
  id: number;
  source: string;
  date: string;
  time: string;
  amount: string;
  status: "Claimed" | "Pending" | "Rejected" | "Burned";
}

export interface Property {
  image: string;
  type: string;
  location: string;
  rating: number;
  price: number;
}

export interface ChartDataPoint {
  date: string;
  mobile?: number;
  desktop?: number;
  rocks?: number;
  lpTokens?: number;
  stay?: number;
}

export interface Asset {
  id: string;
  name: string;
  stacked: string;
  currentPrice: string;
  totalValue: string;
  amount: string;
  percentage: number;
  logo?: React.ReactNode;
  color?: string;
}

export interface RadialChartAsset {
  name: string;
  percentage: number;
  color: string;
}

export interface RadialChartDataPoint {
  rocks: number;
  lpTokens: number;
  stay: number;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  linkedinUrl?: string;
}


export const printerStats: StatItem[] = [
  {
    label: "Staked ROCKS",
    value: "100",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 3H18L22 9L12 22L2 9L6 3Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 3L8 9L12 22L16 9L13 3"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 9H22"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Locked STAYS",
    value: "0.9906",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 10H5C3.89543 10 3 10.8954 3 12V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V12C21 10.8954 20.1046 10 19 10Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 10V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V10"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Current APR",
    value: "59.36%",
    gradient: true,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 22H14C19 22 21 20 21 15V9C21 4 19 2 14 2H10C5 2 3 4 3 9V15C3 20 5 22 10 22Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.5 7.57999V8.57999C16.5 9.39999 15.83 10.08 15 10.08H9C8.18 10.08 7.5 9.40999 7.5 8.57999V7.57999C7.5 6.75999 8.17 6.07999 9 6.07999H15C15.83 6.07999 16.5 6.74999 16.5 7.57999Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.13612 14H8.14767"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.995 14H12.0066"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.8544 14H15.8659"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.13612 17.5H8.14767"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.995 17.5H12.0066"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.8544 17.5H15.8659"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Claimed Rewards",
    value: "1250",
    sub: "=$1,250",
    icon: (
      <svg
        width="19"
        height="28"
        viewBox="0 0 19 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.4995 22.7686H18.5005C18.4972 22.9853 18.411 23.1877 18.2651 23.333H18.2642L14.1841 27.4014V5.12109C14.1841 5.05519 14.2097 4.99312 14.2515 4.94922L14.2524 4.94824L15.5044 3.62012L15.5034 3.61914L18.4995 0.557617V22.7686Z"
          stroke="white"
        />
        <path
          d="M4.81543 22.7607C4.81532 22.9503 4.74962 23.1328 4.63379 23.2744L4.58105 23.333L0.5 27.3994V5.12109C0.5 5.055 0.525475 4.992 0.567383 4.94727L0.566406 4.94629L1.81934 3.62109L1.81836 3.62012L4.81543 0.556641V22.7607Z"
          stroke="white"
        />
        <path
          d="M10.2896 3.62695V3.62598L11.5347 4.94824L11.5366 4.94922C11.5784 4.99312 11.603 5.05519 11.603 5.12109V27.4004L7.52295 23.333C7.37451 23.1852 7.28772 22.9776 7.2876 22.7607V0.557617L10.2896 3.62695Z"
          stroke="white"
        />
      </svg>
    ),
    gradient: true,
  },
];

// ==================== Dashboard Stats ====================

export const dashboardStats: StatItem[] = [
  {
    label: "Your Liquidity",
    value: "0.9906",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2V19C2 20.66 3.34 22 5 22H22" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 17L9.59 11.64C10.35 10.76 11.7 10.7 12.52 11.53L13.47 12.48C14.29 13.3 15.64 13.25 16.4 12.37L21 7" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Total STAYked",
    value: "1347",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 6L9 3L15 6L21 3V18L15 21L9 18L3 21V6Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 3V18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 6V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "ROCKS Staked",
    value: "1347",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 3H18L22 9L12 22L2 9L6 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 3L8 9L12 22L16 9L13 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 9H22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Total Value Locked",
    value: "$12,812.98",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 6V18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    gradient: true,
  },
];

// ==================== Farm Stats ====================

export const farmStats: StatItem[] = [
  {
    label: "Your Liquidity",
    value: "0.9906",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2V19C2 20.66 3.34 22 5 22H22"
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 17L9.59 11.64C10.35 10.76 11.7 10.7 12.52 11.53L13.47 12.48C14.29 13.3 15.64 13.25 16.4 12.37L21 7"
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "APR",
    value: "59.36%",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 22H14C19 22 21 20 21 15V9C21 4 19 2 14 2H10C5 2 3 4 3 9V15C3 20 5 22 10 22Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.5 7.57999V8.57999C16.5 9.39999 15.83 10.08 15 10.08H9C8.18 10.08 7.5 9.40999 7.5 8.57999V7.57999C7.5 6.75999 8.17 6.07999 9 6.07999H15C15.83 6.07999 16.5 6.74999 16.5 7.57999Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.13612 14H8.14767"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.995 14H12.0066"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.8544 14H15.8659"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.13612 17.5H8.14767"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.995 17.5H12.0066"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.8544 17.5H15.8659"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Unclaimed Rewards",
    value: "1347",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 6V18"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

// ==================== FAQ Data ====================

export const faqData: FAQItem[] = [
  {
    question:
      "What Percentage Of The Year Typically Goes Unused In NFsTay's Rental Properties?",
    answer:
      "Approximately 30% of the year's inventory goes unused in NFsStay's rental properties, presenting a significant opportunity for innovation and optimization.",
  },
  {
    question:
      "Maecenas Volutpat Metus At Felis Suscipit, A Rhoncus Turpis Faucibus.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question:
      "Maecenas Volutpat Metus At Felis Suscipit, A Rhoncus Turpis Faucibus.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question:
      "Maecenas Volutpat Metus At Felis Suscipit, A Rhoncus Turpis Faucibus.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question:
      "Maecenas Volutpat Metus At Felis Suscipit, A Rhoncus Turpis Faucibus.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

// ==================== Claims Data ====================

export const incineratorClaims: Claim[] = [
  {
    id: 1,
    source: "Boardroom",
    date: "11 Dec, 2024",
    time: "9:26 PM",
    amount: "8.75 MyUSD",
    status: "Burned",
  },
  {
    id: 2,
    source: "Boardroom",
    date: "11 Dec, 2024",
    time: "9:26 PM",
    amount: "8.75 MyUSD",
    status: "Burned",
  },
  {
    id: 3,
    source: "Farm",
    date: "11 Dec, 2024",
    time: "9:26 PM",
    amount: "8.75 MyUSD",
    status: "Burned",
  },
  {
    id: 4,
    source: "STAYking",
    date: "11 Dec, 2024",
    time: "9:26 PM",
    amount: "8.75 MyUSD",
    status: "Burned",
  },
  {
    id: 5,
    source: "Boardroom",
    date: "11 Dec, 2024",
    time: "9:26 PM",
    amount: "8.75 MyUSD",
    status: "Burned",
  },
];

export const claimHistoryData: Claim[] = [
  {
    id: 1,
    source: "Boardroom",
    date: "11 Dec, 2024",
    time: "9:26 PM",
    amount: "8.75 MyUSD",
    status: "Claimed",
  },
  {
    id: 2,
    source: "Boardroom",
    date: "11 Dec, 2024",
    time: "9:26 PM",
    amount: "8.75 MyUSD",
    status: "Claimed",
  },
  {
    id: 3,
    source: "Farm",
    date: "11 Dec, 2024",
    time: "9:26 PM",
    amount: "8.75 MyUSD",
    status: "Claimed",
  },
  {
    id: 4,
    source: "STAYking",
    date: "11 Dec, 2024",
    time: "9:26 PM",
    amount: "8.75 MyUSD",
    status: "Claimed",
  },
  {
    id: 5,
    source: "Boardroom",
    date: "11 Dec, 2024",
    time: "9:26 PM",
    amount: "8.75 MyUSD",
    status: "Claimed",
  },
];

// ==================== Properties Data ====================

export const properties: Property[] = [
  {
    image: "/assets/image2.jpg",
    type: "Entire Home/Apt.",
    location: "Location Here",
    rating: 4.9,
    price: 314,
  },
  {
    image: "/assets/house2.jpg",
    type: "Entire Home/Apt.",
    location: "Location Here",
    rating: 4.9,
    price: 314,
  },
  {
    image: "/assets/house3.jpg",
    type: "Entire Home/Apt.",
    location: "Location Here",
    rating: 4.9,
    price: 314,
  },
];

// ==================== Chart Data ====================

export const portfolioValueChartData: ChartDataPoint[] = [
  { date: "2024-04-01", mobile: 150 },
  { date: "2024-04-02", mobile: 180 },
  { date: "2024-04-03", mobile: 120 },
  { date: "2024-04-04", mobile: 260 },
  { date: "2024-04-05", mobile: 290 },
  { date: "2024-04-06", mobile: 340 },
  { date: "2024-04-07", mobile: 180 },
  { date: "2024-04-08", mobile: 320 },
  { date: "2024-04-09", mobile: 110 },
  { date: "2024-04-10", mobile: 190 },
  { date: "2024-04-11", mobile: 350 },
  { date: "2024-04-12", mobile: 210 },
  { date: "2024-04-13", mobile: 380 },
  { date: "2024-04-14", mobile: 220 },
  { date: "2024-04-15", mobile: 170 },
  { date: "2024-04-16", mobile: 190 },
  { date: "2024-04-17", mobile: 360 },
  { date: "2024-04-18", mobile: 410 },
  { date: "2024-04-19", mobile: 180 },
  { date: "2024-04-20", mobile: 150 },
  { date: "2024-04-21", mobile: 200 },
  { date: "2024-04-22", mobile: 170 },
  { date: "2024-04-23", mobile: 230 },
  { date: "2024-04-24", mobile: 290 },
  { date: "2024-04-25", mobile: 250 },
  { date: "2024-04-26", mobile: 130 },
  { date: "2024-04-27", mobile: 420 },
  { date: "2024-04-28", mobile: 180 },
  { date: "2024-04-29", mobile: 240 },
  { date: "2024-04-30", mobile: 380 },
  { date: "2024-05-01", mobile: 220 },
  { date: "2024-05-02", mobile: 310 },
  { date: "2024-05-03", mobile: 190 },
  { date: "2024-05-04", mobile: 420 },
  { date: "2024-05-05", mobile: 390 },
  { date: "2024-05-06", mobile: 520 },
  { date: "2024-05-07", mobile: 300 },
  { date: "2024-05-08", mobile: 210 },
  { date: "2024-05-09", mobile: 180 },
  { date: "2024-05-10", mobile: 330 },
  { date: "2024-05-11", mobile: 270 },
  { date: "2024-05-12", mobile: 240 },
  { date: "2024-05-13", mobile: 160 },
  { date: "2024-05-14", mobile: 490 },
  { date: "2024-05-15", mobile: 380 },
  { date: "2024-05-16", mobile: 400 },
  { date: "2024-05-17", mobile: 420 },
  { date: "2024-05-18", mobile: 350 },
  { date: "2024-05-19", mobile: 180 },
  { date: "2024-05-20", mobile: 230 },
  { date: "2024-05-21", mobile: 140 },
  { date: "2024-05-22", mobile: 120 },
  { date: "2024-05-23", mobile: 290 },
  { date: "2024-05-24", mobile: 220 },
  { date: "2024-05-25", mobile: 250 },
  { date: "2024-05-26", mobile: 170 },
  { date: "2024-05-27", mobile: 460 },
  { date: "2024-05-28", mobile: 190 },
  { date: "2024-05-29", mobile: 130 },
  { date: "2024-05-30", mobile: 280 },
  { date: "2024-05-31", mobile: 230 },
  { date: "2024-06-01", mobile: 200 },
  { date: "2024-06-02", mobile: 410 },
  { date: "2024-06-03", mobile: 160 },
  { date: "2024-06-04", mobile: 380 },
  { date: "2024-06-05", mobile: 140 },
  { date: "2024-06-06", mobile: 250 },
  { date: "2024-06-07", mobile: 370 },
  { date: "2024-06-08", mobile: 320 },
  { date: "2024-06-09", mobile: 480 },
  { date: "2024-06-10", mobile: 200 },
  { date: "2024-06-11", mobile: 150 },
  { date: "2024-06-12", mobile: 420 },
  { date: "2024-06-13", mobile: 130 },
  { date: "2024-06-14", mobile: 380 },
  { date: "2024-06-15", mobile: 350 },
  { date: "2024-06-16", mobile: 310 },
  { date: "2024-06-17", mobile: 520 },
  { date: "2024-06-18", mobile: 170 },
  { date: "2024-06-19", mobile: 290 },
  { date: "2024-06-20", mobile: 450 },
  { date: "2024-06-21", mobile: 210 },
  { date: "2024-06-22", mobile: 270 },
  { date: "2024-06-23", mobile: 530 },
  { date: "2024-06-24", mobile: 180 },
  { date: "2024-06-25", mobile: 190 },
  { date: "2024-06-26", mobile: 380 },
  { date: "2024-06-27", mobile: 490 },
  { date: "2024-06-28", mobile: 200 },
  { date: "2024-06-29", mobile: 160 },
  { date: "2024-06-30", mobile: 400 },
];

export const chartLineData: ChartDataPoint[] = [
  { date: "2024-04-01", desktop: 222, mobile: 150 },
  { date: "2024-04-02", desktop: 97, mobile: 180 },
  { date: "2024-04-03", desktop: 167, mobile: 120 },
  { date: "2024-04-04", desktop: 242, mobile: 260 },
  { date: "2024-04-05", desktop: 373, mobile: 290 },
  { date: "2024-04-06", desktop: 301, mobile: 340 },
  { date: "2024-04-07", desktop: 245, mobile: 180 },
  { date: "2024-04-08", desktop: 409, mobile: 320 },
  { date: "2024-04-09", desktop: 59, mobile: 110 },
  { date: "2024-04-10", desktop: 261, mobile: 190 },
  { date: "2024-04-11", desktop: 327, mobile: 350 },
  { date: "2024-04-12", desktop: 292, mobile: 210 },
  { date: "2024-04-13", desktop: 342, mobile: 380 },
  { date: "2024-04-14", desktop: 137, mobile: 220 },
  { date: "2024-04-15", desktop: 120, mobile: 170 },
  { date: "2024-04-16", desktop: 138, mobile: 190 },
  { date: "2024-04-17", desktop: 446, mobile: 360 },
  { date: "2024-04-18", desktop: 364, mobile: 410 },
  { date: "2024-04-19", desktop: 243, mobile: 180 },
  { date: "2024-04-20", desktop: 89, mobile: 150 },
  { date: "2024-04-21", desktop: 137, mobile: 200 },
  { date: "2024-04-22", desktop: 224, mobile: 170 },
  { date: "2024-04-23", desktop: 138, mobile: 230 },
  { date: "2024-04-24", desktop: 387, mobile: 290 },
  { date: "2024-04-25", desktop: 215, mobile: 250 },
  { date: "2024-04-26", desktop: 75, mobile: 130 },
  { date: "2024-04-27", desktop: 383, mobile: 420 },
  { date: "2024-04-28", desktop: 122, mobile: 180 },
  { date: "2024-04-29", desktop: 315, mobile: 240 },
  { date: "2024-04-30", desktop: 454, mobile: 380 },
  { date: "2024-05-01", desktop: 165, mobile: 220 },
  { date: "2024-05-02", desktop: 293, mobile: 310 },
  { date: "2024-05-03", desktop: 247, mobile: 190 },
  { date: "2024-05-04", desktop: 385, mobile: 420 },
  { date: "2024-05-05", desktop: 481, mobile: 390 },
  { date: "2024-05-06", desktop: 498, mobile: 520 },
  { date: "2024-05-07", desktop: 388, mobile: 300 },
  { date: "2024-05-08", desktop: 149, mobile: 210 },
  { date: "2024-05-09", desktop: 227, mobile: 180 },
  { date: "2024-05-10", desktop: 293, mobile: 330 },
  { date: "2024-05-11", desktop: 335, mobile: 270 },
  { date: "2024-05-12", desktop: 197, mobile: 240 },
  { date: "2024-05-13", desktop: 197, mobile: 160 },
  { date: "2024-05-14", desktop: 448, mobile: 490 },
  { date: "2024-05-15", desktop: 473, mobile: 380 },
  { date: "2024-05-16", desktop: 338, mobile: 400 },
  { date: "2024-05-17", desktop: 499, mobile: 420 },
  { date: "2024-05-18", desktop: 315, mobile: 350 },
  { date: "2024-05-19", desktop: 235, mobile: 180 },
  { date: "2024-05-20", desktop: 177, mobile: 230 },
  { date: "2024-05-21", desktop: 82, mobile: 140 },
  { date: "2024-05-22", desktop: 81, mobile: 120 },
  { date: "2024-05-23", desktop: 252, mobile: 290 },
  { date: "2024-05-24", desktop: 294, mobile: 220 },
  { date: "2024-05-25", desktop: 201, mobile: 250 },
  { date: "2024-05-26", desktop: 213, mobile: 170 },
  { date: "2024-05-27", desktop: 420, mobile: 460 },
  { date: "2024-05-28", desktop: 233, mobile: 190 },
  { date: "2024-05-29", desktop: 78, mobile: 130 },
  { date: "2024-05-30", desktop: 340, mobile: 280 },
  { date: "2024-05-31", desktop: 178, mobile: 230 },
  { date: "2024-06-01", desktop: 178, mobile: 200 },
  { date: "2024-06-02", desktop: 470, mobile: 410 },
  { date: "2024-06-03", desktop: 103, mobile: 160 },
  { date: "2024-06-04", desktop: 439, mobile: 380 },
  { date: "2024-06-05", desktop: 88, mobile: 140 },
  { date: "2024-06-06", desktop: 294, mobile: 250 },
  { date: "2024-06-07", desktop: 323, mobile: 370 },
  { date: "2024-06-08", desktop: 385, mobile: 320 },
  { date: "2024-06-09", desktop: 438, mobile: 480 },
  { date: "2024-06-10", desktop: 155, mobile: 200 },
  { date: "2024-06-11", desktop: 92, mobile: 150 },
  { date: "2024-06-12", desktop: 492, mobile: 420 },
  { date: "2024-06-13", desktop: 81, mobile: 130 },
  { date: "2024-06-14", desktop: 426, mobile: 380 },
  { date: "2024-06-15", desktop: 307, mobile: 350 },
  { date: "2024-06-16", desktop: 371, mobile: 310 },
  { date: "2024-06-17", desktop: 475, mobile: 520 },
  { date: "2024-06-18", desktop: 107, mobile: 170 },
  { date: "2024-06-19", desktop: 341, mobile: 290 },
  { date: "2024-06-20", desktop: 408, mobile: 450 },
  { date: "2024-06-21", desktop: 169, mobile: 210 },
  { date: "2024-06-22", desktop: 317, mobile: 270 },
  { date: "2024-06-23", desktop: 480, mobile: 530 },
  { date: "2024-06-24", desktop: 132, mobile: 180 },
  { date: "2024-06-25", desktop: 141, mobile: 190 },
  { date: "2024-06-26", desktop: 434, mobile: 380 },
  { date: "2024-06-27", desktop: 448, mobile: 490 },
  { date: "2024-06-28", desktop: 149, mobile: 200 },
  { date: "2024-06-29", desktop: 103, mobile: 160 },
  { date: "2024-06-30", desktop: 446, mobile: 400 },
];

export const radialChartData: RadialChartDataPoint[] = [
  { rocks: 53, lpTokens: 25, stay: 22 }
];

export const radialChartAssets: RadialChartAsset[] = [
  { name: "Rocks", percentage: 53, color: "#9945FF" },
  { name: "LP Tokens", percentage: 25, color: "#20E19F" },
  { name: "Stay", percentage: 22, color: "#00A3FF" },
];

// ==================== Assets Overview ====================
// Note: DEFAULT_ASSETS requires React components for logos, so it's kept in the component file
// but we can export a simplified version here if needed

// ==================== Team Members ====================

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "João Souza",
    role: "Founder",
    image: "/assets/VrImg.png",
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: 2,
    name: "Valéria Alves",
    role: "General Manager",
    image: "/assets/VrImg.png",
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: 3,
    name: "Hugo Souza",
    role: "Co-Founder",
    image: "/assets/VrImg.png",
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: 4,
    name: "Valéria Alves",
    role: "General Manager",
    image: "/assets/VrImg.png",
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: 5,
    name: "Hugo Souza",
    role: "Co-Founder",
    image: "/assets/VrImg.png",
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: 6,
    name: "João Souza",
    role: "Founder",
    image: "/assets/VrImg.png",
    linkedinUrl: "https://linkedin.com",
  },
];
