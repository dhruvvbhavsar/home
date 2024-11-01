"use client";

import { useEffect, useState } from "react";

export default function LocalTime() {
    const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }));

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return <span className="font-mono text-xs md:text-sm">{time}</span>;
}
