"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

type NewsItem = {
  dateLabel: string;
  title: string;
  postedBy: string;
  description: string;
  image: string;
  video?: string;
};

type NewsGroup = {
  label: string;
  items: NewsItem[];
};

/** Prepended to the news grid so the newest story appears first. */
const latestNews: NewsItem = {
  dateLabel: "Jun 15, 2026",
  title: "Best CEO Award — Brand of the Year Awards 2026",
  postedBy: "Crescent HR Team",
  description:
    "CEO Nasir Khan receives the Best CEO trophy at the 17th Edition Brand of the Year Awards 2026 distribution ceremony in Karachi — a proud recognition of leadership behind Crescent Tracking's growth and excellence.",
  image: "/new/673.jpeg",
};

// Data adapted from legacy news.html timeline
const newsGroups: NewsGroup[] = [
  {
    label: "2026 Event Updates",
    items: [
      {
        dateLabel: "Jun 16, 2026",
        title: "CEO of the Year 2025 — Official Announcement Creative",
        postedBy: "Crescent HR Team",
        description:
          "Official creative highlighting Mr. Nasir Khan’s CEO of the Year 2025 recognition and Crescent Tracking’s continued commitment to innovation, quality, and customer trust.",
        image: "/new/675.jpeg",
      },
      {
        dateLabel: "Jun 16, 2026",
        title: "Brand of the Year 2025 — Announcement Creative",
        postedBy: "Crescent HR Team",
        description:
          "Official announcement creative celebrating Crescent Tracking’s Fastest Growing Brand of the Year 2025 recognition in the vehicle tracking category.",
        image: "/new/676.jpeg",
      },
      {
        dateLabel: "Jun 15, 2026",
        title: "CEO of the Year & Fastest Growing Brand Recognition",
        postedBy: "Crescent HR Team",
        description:
          "At the 17th Edition Brand of the Year Awards 2026 in Karachi, CEO Nasir Khan and the Crescent team receive recognition for CEO of the Year 2025 and Fastest Growing Brand of the Year 2025.",
        image: "/new/674.jpeg",
      },
      {
        dateLabel: "Jun 15, 2026",
        title: "Best CEO Award Ceremony — Video Highlights",
        postedBy: "Crescent HR Team",
        description:
          "Watch highlights from the Brand of the Year Awards 2026 distribution ceremony in Karachi, where CEO Nasir Khan received the Best CEO trophy.",
        image: "/new/673.jpeg",
        video: "/event_video.mp4",
      },
      {
        dateLabel: "Jan 07, 2026",
        title: "Fastest Growing Brand of the Year 2025 — Official Winning Confirmation",
        postedBy: "Crescent HR Team",
        description:
          "Brands Foundation issues the official Winning Confirmation to Crescent Tracking (Pvt) Ltd for the Vehicle Tracking category at the Fastest Growing Brand of the Year Awards 2025 — Southern Edition.",
        image: "/new/671.jpeg",
      },
      {
        dateLabel: "Jan 07, 2026",
        title: "Brand of the Year — Fastest Growing Brand Awards 2025",
        postedBy: "Crescent HR Team",
        description:
          "Crescent Tracking (Pvt) Ltd is officially confirmed as Brand of the Year in the Vehicle Tracking category at the Fastest Growing Brand of the Year Awards 2025 — Southern Edition, granted by the Brands Foundation.",
        image: "/new/651.jpeg",
      },
      {
        dateLabel: "May 22, 2026",
        title: "Agreement with Higher Education Commission (HEC)",
        postedBy: "Crescent HR Team",
        description:
          "Crescent Tracking Pvt Ltd and the Higher Education Commission (HEC) signed an agreement for the continuation of fleet management services. Director General (Services) HEC appreciated the services and efforts of the Crescent Tracking team.",
        image: "/new/652.jpeg",
      },
      {
        dateLabel: "May 22, 2026",
        title: "15th Anniversary Celebration — Islamabad Office",
        postedBy: "Crescent HR Team",
        description:
          "Crescent Tracking proudly continues its 15th anniversary celebrations at our Islamabad office. After successful celebrations across Head Office and branches nationwide, the Islamabad team commemorated this milestone with enthusiasm, unity, and appreciation.",
        image: "/new/653.jpeg",
      },
      {
        dateLabel: "May 22, 2026",
        title: "Appreciation Certificate — Worker Welfare Board, Balochistan",
        postedBy: "Crescent HR Team",
        description:
          "Mr. Abdul Sattar Bugti (Secretary, Worker Welfare Board, Balochistan) presented an appreciation certificate to Mr. Yasir Khan (CEO Sales) for his outstanding services to the department.",
        image: "/new/654.jpeg",
      },
      {
        dateLabel: "Apr 17, 2026",
        title: "Message from our CEO and Founder on Our 15th Anniversary",
        postedBy: "Crescent HR Team",
        description:
          "Crescent Tracking marks its 15th anniversary — from a bold vision to a trusted name in tracking solutions. A message of gratitude and optimism from CEO Nasir Khan.",
        image: "/images/15th.jpeg",
      },
    ],
  },
  // 2025 Event Updates
  {
    label: "2025 Event Updates",
    items: [
      {
        dateLabel: "Sep 23–25, 2025",
        title: "26th ITCN ASIA 2025 — Crescent Tracking at Karachi Expo Center",
        postedBy: "Crescent HR Team",
        description:
          "Crescent Tracking (Pvt) Ltd exhibited at the 26th ITCN ASIA — Pakistan: The Global ICT Hub — at Karachi Expo Center, Hall #4, Booth D-70 & D-73, showcasing fleet management, fuel sensors, cold chain monitoring, dashcams, and Pakistan's leading vehicle tracking application.",
        image: "/new/658.jpeg",
      },
      {
        dateLabel: "Sep 25, 2025",
        title: "ITCN ASIA 2025 — Exhibition Team",
        postedBy: "Crescent HR Team",
        description:
          "The Crescent Tracking team at ITCN ASIA 2025, representing our full range of GPS tracking and fleet management solutions.",
        image: "/new/656.jpeg",
      },
      {
        dateLabel: "Sep 25, 2025",
        title: "ITCN ASIA 2025 — Booth Welcome",
        postedBy: "Crescent HR Team",
        description:
          "Welcoming visitors to the Crescent Tracking booth at ITCN ASIA 2025, Karachi Expo Center.",
        image: "/new/657.jpeg",
      },
      {
        dateLabel: "Sep 24, 2025",
        title: "ITCN ASIA 2025 — Business Partnerships",
        postedBy: "Crescent HR Team",
        description:
          "Building new partnerships and strengthening relationships with industry leaders at ITCN ASIA 2025.",
        image: "/new/659.jpeg",
      },
      {
        dateLabel: "Sep 24, 2025",
        title: "ITCN ASIA 2025 — Fleet Management Showcase",
        postedBy: "Crescent HR Team",
        description:
          "Demonstrating full-stack fleet management, fuel level sensors, and Pakistan's No. 1 vehicle tracking application at ITCN ASIA 2025.",
        image: "/new/660.jpeg",
      },
      {
        dateLabel: "Sep 24, 2025",
        title: "ITCN ASIA 2025 — Team at Hall #4",
        postedBy: "Crescent HR Team",
        description:
          "Crescent Tracking representatives at our ITCN ASIA booth in Hall #4, Karachi Expo Center.",
        image: "/new/661.jpeg",
      },
      {
        dateLabel: "Sep 24, 2025",
        title: "ITCN ASIA 2025 — Networking with Industry Leaders",
        postedBy: "Crescent HR Team",
        description:
          "Engaging with visitors and partners at the Crescent Tracking booth during ITCN ASIA 2025.",
        image: "/new/662.jpeg",
      },
      {
        dateLabel: "Sep 23, 2025",
        title: "ITCN ASIA 2025 — Product Demonstrations",
        postedBy: "Crescent HR Team",
        description:
          "Live demos of fleet management, bike tracking, cold chain monitoring, and dashcam solutions at ITCN ASIA 2025.",
        image: "/new/663.jpeg",
      },
      {
        dateLabel: "Sep 23, 2025",
        title: "ITCN ASIA 2025 — Visitor Engagement at Booth",
        postedBy: "Crescent HR Team",
        description:
          "Our team engaging trade visitors and showcasing Crescent Tracking's trusted customer portfolio at ITCN ASIA 2025.",
        image: "/new/664.jpeg",
      },
      {
        dateLabel: "Sep 25, 2025",
        title: "ITCN ASIA 2025 — Crescent Team Highlights",
        postedBy: "Crescent HR Team",
        description:
          "Team Crescent at ITCN ASIA 2025, united in presenting Pakistan's leading vehicle tracking and fleet management solutions.",
        image: "/new/665.jpeg",
      },
      {
        dateLabel: "Sep 23, 2025",
        title: "ITCN ASIA 2025 — Hardware & Dashcam Display",
        postedBy: "Crescent HR Team",
        description:
          "On display at ITCN ASIA 2025: GPS trackers, dashcams, fuel sensors, and fleet management hardware from Crescent Tracking.",
        image: "/new/666.jpeg",
      },
      {
        dateLabel: "Sep 24, 2025",
        title: "ITCN ASIA 2025 — Fuel Sensor & Tracking Solutions",
        postedBy: "Crescent HR Team",
        description:
          "Highlighting fuel level monitoring, fleet management, and real-time GPS tracking at the Crescent booth, ITCN ASIA 2025.",
        image: "/new/667.jpeg",
      },
      {
        dateLabel: "Sep 24, 2025",
        title: "ITCN ASIA 2025 — Pakistan's No. 1 Tracking App Demo",
        postedBy: "Crescent HR Team",
        description:
          "Demonstrating the Crescent vehicle tracking and fleet management mobile application to guests at ITCN ASIA 2025.",
        image: "/new/668.jpeg",
      },
      {
        dateLabel: "Sep 23, 2025",
        title: "ITCN ASIA 2025 — Client Consultations",
        postedBy: "Crescent HR Team",
        description:
          "One-on-one consultations with businesses exploring fleet tracking, fuel monitoring, and cold chain solutions at ITCN ASIA 2025.",
        image: "/new/669.jpeg",
      },
      {
        dateLabel: "Sep 25, 2025",
        title: "ITCN ASIA 2025 — Meeting with Guests & Partners",
        postedBy: "Crescent HR Team",
        description:
          "Hosting guests and partners at the Crescent Tracking booth on the final day of ITCN ASIA 2025.",
        image: "/new/670.jpeg",
      },
      {
        dateLabel: "Apr 19, 2025",
        title: "Crescent Tracking Pvt Ltd",
        postedBy: "Crescent HR Team",
        description:
          "A proud moment shared across all Crescent Tracking branches – united in achievement.",
        image: "/new/650.jpeg",
      },
      {
        dateLabel: "Apr 17, 2025",
        title: "Message from our CEO and Founder on Our 14th Anniversary",
        postedBy: "Crescent HR Team",
        description:
          "Crescent Tracking marks its 14th anniversary — from a bold vision to a trusted name in tracking solutions. A message of gratitude and optimism from CEO Nasir Khan.",
        image: "/new/649.jpeg",
      },
      {
        dateLabel: "Feb 25, 2025",
        title: "MOU Signing Ceremony: Crescent Tracking Pvt Ltd & SIEHS",
        postedBy: "Crescent HR Team",
        description:
          "Crescent Tracking CEO Nasir Khan and Lt. Col. Ali Akbar Jhandeer TI (M) (R), GM-Administration & Security at SIEHS, sign an MoU to enhance fleet management and emergency response.",
        image: "/new/648.jpeg",
      },
      {
        dateLabel: "Feb 20, 2025",
        title: "Appreciation Certificate – Karachi Office",
        postedBy: "Crescent HR Team",
        description:
          "The Sales Team at Karachi office receives shields and certificates for successfully achieving all their 2024 targets.",
        image: "/new/647.jpeg",
      },
      {
        dateLabel: "Feb 18, 2025",
        title: "Partnership with District Police Office, Jhelum",
        postedBy: "Crescent HR Team",
        description:
          "Crescent Tracking partners with the District Police Office Jhelum to deliver advanced fleet management services, improving operational efficiency and security.",
        image: "/new/646.jpeg",
      },
    ],
  },
  // 2024 Event Updates
  {
    label: "2024 Event Updates",
    items: [
      {
        dateLabel: "Dec 06, 2024",
        title: "Crescent Tracking Office Visit by Provincial Ombudsman and Directors",
        postedBy: "Crescent HR Team",
        description:
          "Provincial Ombudsman Balochistan Nazar Baloch, along with senior directors, visits Crescent Tracking Head Office.",
        image: "/new/645.jpeg",
      },
      {
        dateLabel: "Dec 05, 2024",
        title: "Appreciation Certificates for Outstanding Staff",
        postedBy: "Crescent HR Team",
        description:
          "Certificates presented by CEO Nasir Khan to outstanding team members from Accounts, NR, Call Center, and Support departments.",
        image: "/new/639.jpg",
      },
      {
        dateLabel: "Nov 27, 2024",
        title: "Job Fair 2024 – Governor and Chief Minister Visit Booth",
        postedBy: "Crescent HR Team",
        description:
          "Governor Jaffar Mandokhail and Chief Minister Sarfraz Bugti visit Crescent Tracking’s booth at the job fair.",
        image: "/new/638.jpg",
      },
      {
        dateLabel: "Nov 19, 2024",
        title: "ISO 9001:2015 Quality Management System Certification",
        postedBy: "Crescent HR Team",
        description:
          "Crescent Tracking (Private) Limited is certified by Quality International for ISO 9001:2015 (Quality Management System) for GPS/GSM-GPRS Security and Tracking Services — Certificate No. QMS/PK/270817.",
        image: "/new/672.jpeg",
      },
      {
        dateLabel: "Oct 01, 2024",
        title: "Congratulations to Interim Karate Combat World Champion Shahzaib Rindh",
        postedBy: "Crescent HR Team",
        description:
          "Quetta’s own Shahzaib Rindh, the first Pakistani interim Karate Combat world champion, visits Crescent Tracking Head Office to celebrate his achievement.",
        image: "/new/637.jpg",
      },
      {
        dateLabel: "Sep 29, 2024",
        title: "Successful Recovery of Theft Vehicle from Karachi",
        postedBy: "Crescent HR Team",
        description:
          "A stolen vehicle from Karachi is safely recovered by Crescent Tracking’s recovery team.",
        image: "/new/636.jpg",
      },
      {
        dateLabel: "Sep 04, 2024",
        title: "Forttuna Global Excellence Awards 2024 Nomination",
        postedBy: "Crescent HR Team",
        description:
          "CEO Nasir Khan is nominated in Dubai for Forttuna Global Excellence Awards 2024 – Young Business Leader of the Year and Young Entrepreneur of the Year.",
        image: "/new/635.jpg",
      },
      {
        dateLabel: "Sep 02, 2024",
        title: "DIG Special Branch Visits Crescent Tracking Head Office",
        postedBy: "Crescent HR Team",
        description:
          "DIG Special Branch, Mr. Nazeer Ahmed Kurd, visits Crescent Tracking Head Office.",
        image: "/new/634.jpg",
      },
      {
        dateLabel: "Aug 29, 2024",
        title: "Minister Transport Balochistan Visits Head Office",
        postedBy: "Crescent HR Team",
        description:
          "Transport Minister Abdul Majeed Badini visits Crescent Tracking Head Office to discuss projects and tracking services support.",
        image: "/new/633.jpeg",
      },
      {
        dateLabel: "Aug 08, 2024",
        title: "Caretaker Minister for Irrigation Department Visits Crescent Tracking HO",
        postedBy: "Crescent HR Team",
        description:
          "Caretaker Minister for Irrigation Department, Mir Danish Langove, visits Crescent Tracking Head Office to review tracking support for government projects.",
        image: "/new/632.jpg",
      },
      {
        dateLabel: "Aug 08, 2024",
        title: "Secretary Transport Balochistan Visits Crescent Tracking Head Office",
        postedBy: "Crescent HR Team",
        description:
          "Secretary Transport Hayat Khan Kakar, Secretary PTA, Secretary RTA, DG Mass Transit Authority and Additional Secretary Transport visit Head Office to discuss tracking projects.",
        image: "/new/630.jpg",
      },
      {
        dateLabel: "Apr 14, 2024",
        title: "Celebrated 13 Years of Success",
        postedBy: "Crescent HR Team",
        description:
          "Crescent Tracking celebrates 13 years of success, recognizing the dedication and support of its professional team and commitment to best-in-class technology.",
        image: "/new/631.jpg",
      },
    ],
  },
  // 2023 Event Updates
  {
    label: "2023 Event Updates",
    items: [
      {
        dateLabel: "Nov 20, 2023",
        title: "Appreciation from BHCIP Balochistan",
        postedBy: "Crescent HR Team",
        description:
          "CEO BHCIP, Mr. Saqib Kakar, presents an appreciation certificate to CEO Sales, Mr. Yasir Khan, for outstanding services and theft vehicle recovery.",
        image: "/new/622.jpeg",
      },
      {
        dateLabel: "Nov 19, 2023",
        title: "Appreciation from NHMP West Zone Balochistan",
        postedBy: "Crescent HR Team",
        description:
          "DIG National Highways & Motorway Police West Zone, Agha Tahir Allauddin Kasi, presents a shield for outstanding service to patrolling vehicles.",
        image: "/new/623.jpeg",
      },
      {
        dateLabel: "Oct 03, 2023",
        title: "Caretaker Information Minister Visits Head Office",
        postedBy: "Crescent HR Team",
        description:
          "Caretaker Information Minister Balochistan, Mr. Jan Achakzai, visits Crescent Tracking Head Office and appreciates the company’s growth from Quetta.",
        image: "/new/621.jpeg",
      },
      {
        dateLabel: "Oct 01, 2023",
        title: "Appreciation from Levies Balochistan",
        postedBy: "Crescent HR Team",
        description:
          "Director General Levies Balochistan, Mr. Naseeb Ullah Kakar, presents a shield to CEO Sales, Mr. Yasir Khan, for providing the best tracking services to Levies fleet.",
        image: "/new/624.jpeg",
      },
      {
        dateLabel: "May 26, 2023",
        title: "Mr. Pakistan Olympic 2023 Visits Head Office",
        postedBy: "Crescent HR Team",
        description:
          "Mr. Pakistan Olympic 2023 winners, Yaseen Khan and Talha Khan, visit Crescent Tracking Head Office along with CEO Nasir Khan.",
        image: "/new/608.jpeg",
      },
      {
        dateLabel: "May 24, 2023",
        title: "Special Guests from National Games 2023",
        postedBy: "Crescent HR Team",
        description:
          "Leaders from Pakistan Bodybuilding Federation and media visit Crescent Tracking Head Office following National Games 2023.",
        image: "/new/609.jpeg",
      },
      {
        dateLabel: "May 24, 2023",
        title: "Dinner Hosted by DIG Quetta",
        postedBy: "Crescent HR Team",
        description:
          "DIG Quetta, Mr. Azfar Mehesar, hosts a dinner attended by CEO Nasir Khan and special guests from Pakistan Bodybuilding Federation and media.",
        image: "/new/610.jpeg",
      },
      {
        dateLabel: "Apr 14, 2023",
        title: "Crescent Tracking’s 12th Anniversary",
        postedBy: "Crescent HR Team",
        description:
          "Crescent Tracking hosts an Iftaar dinner for staff and celebrates its 12th anniversary at Head Office.",
        image: "/new/611.jpg",
      },
    ],
  },
  // 2022 Event Updates
  {
    label: "2022 Event Updates",
    items: [
      {
        dateLabel: "Aug 18, 2022",
        title: "Inauguration of New Head Office",
        postedBy: "Crescent HR Team",
        description:
          "Commissioner Quetta Division and Additional Commissioner Quetta Division inaugurate the new Crescent Tracking Head Office.",
        image: "/new/601.jpg",
      },
      {
        dateLabel: "Aug 18, 2022",
        title: "Inauguration Ceremony of Head Office (Guests from IT & Business Community)",
        postedBy: "Crescent HR Team",
        description:
          "Secretary IT Balochistan, Mr. Tayyab Lehri, and President Business Community Balochistan, Mr. Rahim Kakar, inaugurate the new Head Office.",
        image: "/new/602.jpeg",
      },
      {
        dateLabel: "Oct 20, 2022",
        title: "Training Session for NHMP Officers",
        postedBy: "Crescent HR Team",
        description:
          "Training and awareness session at Head Office for NHMP West Zone officers on tracking PSVs on the Chaman–Quetta–Karachi route.",
        image: "/new/606.jpg",
      },
      {
        dateLabel: "Oct 20, 2022",
        title: "Commissioner Quetta Division Visits Head Office",
        postedBy: "Crescent HR Team",
        description:
          "CEO Nasir Khan and Crescent directors present a souvenir to Commissioner Quetta, Mr. Sohail-ur-Rehman, during his visit to Head Office.",
        image: "/new/607.jpg",
      },
      {
        dateLabel: "Oct 02, 2022",
        title: "Wedding of Mr. Ahtisham Khan",
        postedBy: "Crescent HR Team",
        description:
          "Crescent Tracking congratulates Mr. Ahtisham Khan on his wedding, attended by ex-Chief Minister and ex-Governor of Balochistan and many special guests.",
        image: "/new/604.jpg",
      },
      {
        dateLabel: "Sep 29, 2022",
        title: "Famous Pashto Singer Visits Head Office",
        postedBy: "Crescent HR Team",
        description:
          "CEO Nasir Khan presents a shield to renowned Pashto singer Shah Farooq during his special visit to Head Office.",
        image: "/new/603.jpg",
      },
      {
        dateLabel: "Aug 02, 2022",
        title: "Crescent Tracking Now Available in Mardan",
        postedBy: "Crescent HR Team",
        description:
          "Crescent Tracking announces availability in Mardan, with contact details provided in the Contacts Info section.",
        image: "/new/603.png",
      },
      {
        dateLabel: "Feb 20, 2022",
        title: "Meeting with Governor Balochistan",
        postedBy: "Crescent HR Team",
        description:
          "CEO Nasir Khan, Director Sales Yasir Khan, and Director Ahtisham Khan meet with Governor Balochistan, Mr. Zahoor Agha.",
        image: "/new/604.png",
      },
    ],
  },
  // 2021 Event Updates
  {
    label: "2021 Event Updates",
    items: [
      {
        dateLabel: "Apr 12, 2021",
        title: "A Decade of Success",
        postedBy: "Crescent HR Team",
        description:
          "Crescent Tracking celebrates its 10th anniversary across Pakistan in different branches.",
        image: "/new/524.jpg",
      },
      {
        dateLabel: "Mar 29, 2021",
        title: "Appreciation Letter from PDMA Balochistan",
        postedBy: "Crescent HR Team",
        description:
          "PDMA Balochistan leadership presents an appreciation letter to GM Yasir Khan for outstanding vehicle tracking services.",
        image: "/new/522.jpg",
      },
      {
        dateLabel: "Mar 29, 2021",
        title: "MOU Signed with Sindh Insurance",
        postedBy: "Crescent HR Team",
        description:
          "Crescent Tracking signs an MoU with Sindh Insurance Company for provision of vehicle tracking services.",
        image: "/new/523.jpg",
      },
      {
        dateLabel: "Feb 26, 2021",
        title: "Project with Transport Department Balochistan",
        postedBy: "Crescent HR Team",
        description:
          "Crescent Tracking briefs Transport Department Balochistan and NH&MP leadership on tracking & surveillance system deployed on Karachi–Quetta route buses.",
        image: "/new/520.jpg",
      },
      {
        dateLabel: "Feb 26, 2021",
        title: "Inaugural Ceremony – Karachi New Regional Office",
        postedBy: "Crescent HR Team",
        description:
          "Karachi’s new regional office is unveiled with Team Crescent and special guests in attendance.",
        image: "/new/521.jpg",
      },
      {
        dateLabel: "Aug 22, 2020",
        title: "New Multan Office Address",
        postedBy: "Crescent HR Team",
        description:
          "Office No. 10, 1st Floor, Khilji Arcade, near Cantt Railway Station, Akbar Road, Multan announced as the new Multan office.",
        image: "/new/519.jpg",
      },
    ],
  },
  // 2020 Event Updates
  {
    label: "2020 Event Updates",
    items: [
      {
        dateLabel: "Mar 20, 2020",
        title: "Won the Tender of Allama Iqbal Open University, Islamabad",
        postedBy: "Crescent HR Team",
        description:
          "Crescent Tracking wins the vehicle tracking tender procured by Allama Iqbal Open University, Islamabad.",
        image: "/new/509.png",
      },
      {
        dateLabel: "Mar 20, 2020",
        title: "Reward for Dealership Campaign 2020",
        postedBy: "Crescent HR Team",
        description:
          "CEO Nasir Khan presents a cheque to a dealer representative for successfully achieving the dealership campaign target.",
        image: "/new/515.jpg",
      },
      {
        dateLabel: "Feb 20, 2020",
        title: "CEO Summit 2020",
        postedBy: "Crescent HR Team",
        description:
          "CEO Nasir Khan attends the CEO Summit 2020 conference in Karachi.",
        image: "/new/516.jpg",
      },
      {
        dateLabel: "Feb 20, 2020",
        title: "Appreciation from PDMA Balochistan",
        postedBy: "Crescent HR Team",
        description:
          "DG PDMA Balochistan, Mr. Imran Zarkoon, presents a shield to GM Yasir Khan for six years of outstanding tracking services.",
        image: "/new/517.jpg",
      },
      {
        dateLabel: "Feb 20, 2020",
        title: "Visit to HANDS DWA ILC",
        postedBy: "Crescent HR Team",
        description:
          "CEO Nasir Khan visits HANDS DWA ILC, donates tracking systems for their fleet and shares a meal with differently-abled individuals.",
        image: "/new/518.jpg",
      },
      {
        dateLabel: "Feb 20, 2020",
        title: "More Than 10 Theft Vehicles Recovered",
        postedBy: "Crescent HR Team",
        description:
          "Sialkot police capture an inter-district gang and recover 11 cars worth over Rs. 2 crore with assistance from Crescent Tracking.",
        image: "/new/511.jpg",
      },
      {
        dateLabel: "Jan 22, 2020",
        title: "Won the Tender of Punjab Food Authority",
        postedBy: "Crescent HR Team",
        description:
          "Crescent Tracking wins the vehicle tracking and fleet management tender for Punjab Food Authority, Lahore.",
        image: "/new/512.jpg",
      },
      {
        dateLabel: "Jan 09, 2020",
        title: "Appreciation from S & GAD, Balochistan",
        postedBy: "Crescent HR Team",
        description:
          "Secretary and Deputy Secretary S&GAD Balochistan present a shield to GM Yasir Khan for seven years of exceptional services.",
        image: "/new/513.jpg",
      },
      {
        dateLabel: "Jan 08, 2020",
        title: "Celebrating 3rd Anniversary of HANDS DWA ILC",
        postedBy: "Crescent HR Team",
        description:
          "CEO Nasir Khan joins government and HANDS leadership at the 3rd anniversary of HANDS DWA ILC.",
        image: "/new/514.jpg",
      },
      {
        dateLabel: "Jul 20, 2020",
        title: "Now Get Tracker from Silk Bank Credit Card",
        postedBy: "Crescent HR Team",
        description:
          "Launch of 0% markup installment plan up to 12 months for vehicle tracking via Silk Bank credit card.",
        image: "/new/525.jpg",
      },
    ],
  },
  // 2019–2018 Highlights
  {
    label: "2019–2018 Highlights",
    items: [
      {
        dateLabel: "Apr 27, 2019",
        title: "Crescent Tracking’s 8th Anniversary",
        postedBy: "Crescent HR Team",
        description:
          "8th anniversary celebration at the Karachi office, coinciding with the 3rd anniversary of the Karachi branch.",
        image: "/new/508.jpg",
      },
      {
        dateLabel: "Dec 26, 2018",
        title: "Reward for Dealership Campaign 2018",
        postedBy: "Crescent HR Team",
        description:
          "CEO Nasir Khan presents Umrah packages to successful dealers who achieved dealership campaign targets.",
        image: "/new/507.jpg",
      },
      {
        dateLabel: "Nov 13, 2018",
        title: "Office Launched in Peshawar",
        postedBy: "Crescent HR Team",
        description:
          "Launch of Sales, Services & Support Office in Peshawar to serve KPK customers with installations and support.",
        image: "/new/505.jpg",
      },
      {
        dateLabel: "Nov 11, 2018",
        title: "Isuzu Dealership Opening Ceremony in Quetta",
        postedBy: "Crescent HR Team",
        description:
          "GM Yasir Khan attends the opening of an Isuzu dealership in Quetta and presents vehicle tracking operating systems.",
        image: "/new/506.jpg",
      },
      {
        dateLabel: "Apr 28, 2018",
        title: "Tour of Turkey and Baku for Distributors",
        postedBy: "Crescent HR Team",
        description:
          "CEO Nasir Khan presents tour packages to distributors achieving campaign goals, encouraging others to reach their targets.",
        image: "/new/501.jpg",
      },
      {
        dateLabel: "Apr 15, 2018",
        title: "7th Anniversary Celebration",
        postedBy: "Crescent HR Team",
        description:
          "Director Sardar Khan and CEO Nasir Khan lead the 7th anniversary celebration, featured in local newspapers.",
        image: "/new/502.jpg",
      },
      {
        dateLabel: "Mar 11, 2018",
        title: "General Manager Ties the Knot",
        postedBy: "Crescent HR Team",
        description:
          "GM Yasir Khan’s wedding and valima are celebrated with Crescent staff from across Pakistan.",
        image: "/new/503.jpg",
      },
      {
        dateLabel: "Feb 17, 2018",
        title: "Chief Operating Officer Ties the Knot",
        postedBy: "Crescent HR Team",
        description:
          "COO Babar Ali and his brother Salman Ali (Senior Technician) marry in Multan, joined by staff and officials.",
        image: "/new/504.jpg",
      },
    ],
  },
  // 2017 & Earlier Highlights
  {
    label: "2017 & Earlier Highlights",
    items: [
      {
        dateLabel: "Jan 09, 2018",
        title: "Gosafe System’s Management Visits Karachi Office",
        postedBy: "Crescent HR Team",
        description:
          "Gosafe Systems CEO and senior leadership visit Crescent’s Karachi office to discuss business terms and collaboration.",
        image: "/new/1.jpg",
      },
      {
        dateLabel: "Dec 26, 2017",
        title: "Concox Team Visits Karachi Office",
        postedBy: "Crescent HR Team",
        description:
          "Concox sales representatives visit Karachi as Crescent Tracking officially launches Concox products for customers.",
        image: "/new/2.jpg",
      },
      {
        dateLabel: "Aug 18, 2017",
        title: "Appreciation Letter from Shaheen Insurance",
        postedBy: "Crescent HR Team",
        description:
          "Shaheen Insurance leadership presents an appreciation letter to CEO Nasir Khan for excellent services to JS Bank, Soneri Bank and First Punjab Modaraba.",
        image: "/new/3.jpg",
      },
      {
        dateLabel: "Apr 14, 2017",
        title: "Celebrating 6th Anniversary",
        postedBy: "Crescent HR Team",
        description:
          "Director Sardar Khan cuts the cake for Crescent Tracking’s 6th anniversary, joined by CEO Nasir Khan and the team.",
        image: "/new/4.jpg",
      },
    ],
  },
];

function dedupeNewsItems(items: NewsItem[]): NewsItem[] {
  const seen = new Set<string>();

  return items.filter((item) => {
    const key = item.video
      ? `video:${item.video}`
      : `story:${item.image}:${item.description}`;

    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export default function NewsMediaClient() {
  const [activeItem, setActiveItem] = useState<NewsItem | null>(null);

  const allItems: NewsItem[] = dedupeNewsItems([
    latestNews,
    ...newsGroups.flatMap((g) => g.items),
  ]);

  return (
    <div className="pt-24">
      {/* Hero / Intro */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-light dark:bg-grid opacity-30 pointer-events-none" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-green-brand/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            badge="News & Media"
            title="Timeline of our journey"
            description="Awards, partnerships, government collaborations and milestones that shaped Crescent Tracking into one of Pakistan’s leading tracking companies."
          />
        </div>
      </section>

      {/* All stories — static two columns; images use object-contain so nothing is cropped */}
      <section className="pb-28 lg:pb-36 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {allItems.map((item, index) => (
              <button
                key={`${item.title}-${item.dateLabel}-${index}`}
                type="button"
                onClick={() => setActiveItem(item)}
                className="group text-left overflow-hidden rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm shadow-sm hover:shadow-lg hover:border-green-500/25 transition-all duration-300"
              >
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-muted/50 overflow-hidden rounded-t-2xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                    className="object-contain object-center p-2 sm:p-3 w-full h-full"
                  />
                  {item.video && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600/90 text-white shadow-lg">
                        <Play className="h-5 w-5 fill-current ml-0.5" />
                      </span>
                    </div>
                  )}
                  {index === 0 && (
                    <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-green-600/90 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                      Latest
                    </span>
                  )}
                  <span className="absolute bottom-3 left-3 inline-flex items-center rounded-full bg-black/70 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.16em] text-white/90">
                    {item.dateLabel}
                  </span>
                </div>
                <div className="p-4 sm:p-5 space-y-1.5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
                    {item.postedBy}
                  </p>
                  <h3 className="font-display text-sm sm:text-base font-semibold text-foreground leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-5">
                    {item.description}
                  </p>
                  <p className="text-[11px] font-medium text-green-600/90 dark:text-green-400/90 pt-0.5">
                    {item.video ? "Tap to play" : "Tap to enlarge"}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-5xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              className="absolute -top-10 right-0 text-white/80 hover:text-white text-sm uppercase tracking-[0.2em]"
            >
              Close
            </button>
            <div className="relative w-full h-[70vh] min-h-[360px] overflow-hidden rounded-3xl border border-white/15 bg-black">
              {activeItem.video ? (
                <video
                  src={activeItem.video}
                  poster={activeItem.image}
                  controls
                  autoPlay
                  playsInline
                  className="h-full w-full object-contain"
                />
              ) : (
                <Image
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              )}
            </div>
            <div className="mt-4 text-center space-y-1">
              <p className="text-sm font-semibold text-white">{activeItem.title}</p>
              <p className="text-xs text-white/70">{activeItem.dateLabel}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

