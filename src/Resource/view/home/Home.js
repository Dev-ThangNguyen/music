
import style from '../home/Home.module.scss'
import videoDay from '../../../Storage/video/video-day.mp4'
import videoDayRain from '../../../Storage/video/video-day-rain.mp4'
import videoNigh from '../../../Storage/video/video-night.mp4'
import videoNightRain from '../../../Storage/video/video-night-rain.mp4'
import music from '../../../Storage/music/bo-em-vao-ba-lo.mp3'
import musicRain from '../../../Storage/music/music-rain.mp3'
import SwitchCase from './Switch';
import clsx from 'clsx'
import { useRef, useState } from 'react';
import ShowerRoundedIcon from '@mui/icons-material/ShowerRounded';
import Music from './handleMusic/Music'

function Home () {
   
    const dayRef = useRef()
    const nightRef = useRef()
    const audioRef = useRef()
    const audioRainRef = useRef()
    const dayRainRef = useRef()
    const nightRainRef = useRef()
    const wrapDayRef = useRef()
    const rainBtnRef = useRef()

    const [toggle, setToggle] = useState(true)
    const handleRain = () => {
        const wrapDay = wrapDayRef.current
        if(toggle) {
            wrapDay.style.opacity = 0
            setToggle(!toggle)
            audioRainRef.current.play()
        }else {
            wrapDay.style.opacity = 1
            setToggle(!toggle)
            audioRainRef.current.load()
        } 
    }

    return (
        <>
            <div className={style.wrap}>
                <div className={clsx(style.wrapRain, style.backgroundVideo)}>
                    <div ref={nightRainRef} className={clsx(style.backgroundVideo, style.night)}>
                        <video src={videoNightRain} className={clsx(style.video)} autoPlay muted loop/>
                    </div>
                    <div ref={dayRainRef} className={clsx(style.backgroundVideo, style.day)}>
                        <video src={videoDayRain} className={clsx(style.videoIn, style.video)} autoPlay muted loop/>
                    </div>
                </div>
                <div ref={wrapDayRef} className={clsx(style.wrapDay, style.backgroundVideo)}>
                    <div ref={nightRef} className={clsx(style.backgroundVideo, style.night)}>
                        <video src={videoNigh} className={clsx(style.video)} autoPlay muted loop/>
                    </div>
                    <div ref={dayRef} className={clsx(style.backgroundVideo, style.day)}>
                        <video src={videoDay} className={clsx(style.videoIn, style.video)} autoPlay muted loop/>
                    </div>
                </div>
                <SwitchCase
                    Style={style}
                    dayRef={dayRef}
                    dayRainRef={dayRainRef}
                    audioRef={audioRef}
                    rainBtnRef={rainBtnRef}
                 />
                 <div className={clsx(style.wrapIcon, style.backgroundVideo)}>
                    <ShowerRoundedIcon onClick={handleRain} className={clsx(style.rainBtn)} ref={rainBtnRef} />
                 </div>
                <Music audioRainRef={audioRainRef}/>
            </div>
            <audio
            ref={audioRef}
            src={music}
            />
            <audio
            ref={audioRainRef}
            src={musicRain}
            loop
            />
        </>
    )
}

export default Home
