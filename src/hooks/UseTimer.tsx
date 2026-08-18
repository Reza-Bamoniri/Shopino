import { useEffect, useState } from "react"


const UseTimer = (duration = 120) => {
  
    const [time, setTime] = useState(0)
    const [isPlay, setIsPlay] = useState(false)

    useEffect(() => {
      
        if(!isPlay) return

        if(time <= 0) setIsPlay(false)

        const interval = setInterval(() => {
                setTime((prv) => prv - 1)
            }, 1000);
 
    
      return () => clearInterval(interval)
        
      
    }, [time, isPlay])


    const restart = () => {
        setTime(duration)
        setIsPlay(true)
    }

    const timerUi = () => {
        const min = Math.floor(time/60);
        const sec = time % 60;

        return `${min} : ${sec.toString().padStart(2, "0")}`
    }

    


    return { isExpired: time === 0, restart, timerUi }
    
}

export default UseTimer