'use client';

import { useEffect, useState } from "react";

const msInSecond = 1000;
const msInMinute = 60 * 1000;
const msInAHour = 60 * msInMinute;
const msInADay = 24 * msInAHour;

const getPartsofTimeDuration = (duration) => {
    const days = Math.floor(duration / msInADay);
    const hours = Math.floor((duration % msInADay) / msInAHour);
    const minutes = Math.floor((duration % msInAHour) / msInMinute);
    const seconds = Math.floor((duration % msInMinute) / msInSecond);

    return { days, hours, minutes, seconds };
}

const Countdown = ({ endDateTime }) => {
    const [timeParts, setTimeParts] = useState(getPartsofTimeDuration(new Date(endDateTime) - Date.now()));

    useEffect(() => {
        const interval = setInterval(() => {
            const now = Date.now();
            const future = new Date(endDateTime).getTime();
            const timeDif = future - now;
            setTimeParts(getPartsofTimeDuration(timeDif));
        }, 1000);

        return () => clearInterval(interval);
    }, [endDateTime]);

    return (
        <>
            <span className="cdown days"> <span className="time-count">{timeParts.days}</span>
                <p>Days</p>
            </span>
            <span className="cdown hour"> <span className="time-count">{timeParts.hours}</span>
                <p>Hour</p>
            </span>
            <span className="cdown minutes"> <span className="time-count">{timeParts.minutes}</span>
                <p>Minute</p>
            </span>
            <span className="cdown second"> <span className="time-count">{timeParts.seconds}</span>
                <p>Second</p>
            </span>
        </>
    );
}

export default Countdown;
