"use client";
import React, { useState, useEffect } from "react";
import { format } from "date-fns-tz";

function SurabayaClock() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {}, []);
  useEffect(() => {
    const intervalId = setInterval(() => setCurrentTime(new Date()), 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (!currentTime) {
    return <p className="text-white/80 text-sm">Loading...</p>;
  }

  return (
    <div className="text-white/80 flex justify-around text-sm font-normal lg:text-lg">
      <p className="lg:inline hidden">Myanmar/Yangon</p>
      <p>
        Myanmar (Burma) (UTC+6:30) <br className="inline lg:hidden" />
        {format(currentTime, "hh:mm:ss a", { timeZone: "Asia/Myanmar" })}
      </p>
      <p>
        {format(currentTime, "EEEE, MMMM d, yyyy", {
          timeZone: "Asia/Myanmar",
        })}
      </p>
    </div>
  );
}

export default SurabayaClock;
