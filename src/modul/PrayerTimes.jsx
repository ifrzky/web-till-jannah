import React from "react";

import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaCloudSun } from "react-icons/fa";
import { FaCloudMoon } from "react-icons/fa";

const PrayerTimes = () => {
  const Data = [
    {
      code: "2024",
      data: [
        {
          date: { readable: "Friday, 31 Mei 2024" },
          timings: {
            Fajr: { time: "04:34 AM", icon: <FaRegMoon /> },
            Sunrise: { time: "05:57 AM", icon: <FaRegSun /> },
            Dhuhr: { time: "11:50 AM", icon: <FaSun /> },
            Asr: { time: "03:13 PM", icon: <FaCloudSun /> },
            Maghrib: { time: "05:44 PM", icon: <FaCloudMoon /> },
            Isha: { time: "06:58 PM", icon: <FaRegMoon /> }
          }
        },
        {
          date: { readable: "Saturday, 1 Juni 2024" },
          timings: {
            Fajr: { time: "04:34 AM", icon: <FaRegMoon /> },
            Sunrise: { time: "05:57 AM", icon: <FaRegSun /> },
            Dhuhr: { time: "11:50 AM", icon: <FaSun /> },
            Asr: { time: "03:13 PM", icon: <FaCloudSun /> },
            Maghrib: { time: "05:44 PM", icon: <FaCloudMoon /> },
            Isha: { time: "06:58 PM", icon: <FaRegMoon /> }
          }
        },
      ]
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Prayer Times</h1>
      {Data.map((data, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-bold mb-2 flex"></h2>
          {data.data.map((monthData, monthIndex) => (
            <div key={monthIndex} className="mb-4 px-5 py-5 h-fit bg-green-500 text-white rounded-lg">
              <p className="font-bold text-xl px-5 pb-3">{monthData.date.readable}</p>
              <div className="flex flex-col flex-wrap">
              <ul className="list-disc mx-5 my-5 flex flex-wrap gap-5 justify-center items-center">
                {Object.entries(monthData.timings).map(([prayer, { time, icon }], index) => (
                <div className="flex">
                  <li key={index} className="mb-1 flex flex-col bg-green-600 rounded-md px-5 py-5 justify-center items-center">
                    <div className="mr-2 flex">{icon}</div>
                    <div>
                      <h1 className="font-bold text-center">{prayer}</h1> 
                      <div>{time}
                      </div>
                    </div>
                  </li>
                  </div>
                ))}
              </ul>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PrayerTimes;