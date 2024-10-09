"use client";

import { useEffect, useState } from "react";

export default function LocalTime() {
    const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }));

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return <span className="font-mono text-sm">{time}</span>;
}
