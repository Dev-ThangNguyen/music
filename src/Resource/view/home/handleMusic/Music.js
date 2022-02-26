
import { listMusic } from './ListMusic'
import { useEffect, useRef, useState } from 'react'
import style from './Music.module.scss'
import style_1 from '../Home.module.scss'
import clsx from 'clsx'

function Music ( {audioRainRef} ) {
    const [svg, setSvg] = useState('https://lofi.co/static/media/play.18d46dd9.svg')
    let [index, setIndex] = useState(0)
    const audioRef = useRef()
    const urlSvg = 'https://lofi.co/static/media/play.18d46dd9.svg'
    const handleChangeSvg = () => {
        if(svg === urlSvg) {
            setSvg('https://lofi.co/static/media/pause.4ac70926.svg')
            audioRef.current.play()
            audioRainRef.current.volume = 0.2
            audioRainRef.current.style.transition = '0.4s'
        }else{
            setSvg(urlSvg)
            audioRef.current.pause()
            audioRainRef.current.volume = 0.8
        }
    }
    const handleCickPrev = () => {
        if(svg === urlSvg) {
            setSvg('https://lofi.co/static/media/pause.4ac70926.svg')
        }
        index --
        if(index < 0) {
            index = listMusic.length - 1
            setIndex(index)
        }else {
            setIndex(index)
        }
    }
    const handleClickNext = () => {
        if(svg === urlSvg) {
            setSvg('https://lofi.co/static/media/pause.4ac70926.svg')
        }
        index ++
        if(index >= listMusic.length) {
            index = 0
            setIndex(index)
        }else {
            setIndex(index)
        }
    }
    const handleEnded = () => {
        handleClickNext()
    }
    const handlePlay = () => {
        if(svg === urlSvg) {
            setSvg('https://lofi.co/static/media/pause.4ac70926.svg')
            audioRainRef.current.style.transition = '0.4s'
            audioRainRef.current.volume = 0.2
        }
    }
    // useEffect(() => {
    //     audioRef.current.play()
    // }, [index])
    
    return(
        <div className={clsx(style_1.music, style_1.backgroundVideo)}>
            <div className={clsx(style_1.text)}>
                <h2>Song Name:</h2>
                <h3>{listMusic[index].name}</h3>
            </div>
            <div className={clsx(style_1.controls)}>
                <img className={style.prev} src='https://lofi.co/static/media/previous.3b347466.svg' onClick={handleCickPrev} />
                <img className={style.play} src={svg} onClick={handleChangeSvg}/>
                <img className={style.next} src='https://lofi.co/static/media/next.9551d6f2.svg' onClick={handleClickNext} />
            </div>
            <audio
            src={listMusic[index].path}
            ref={audioRef}
            onEnded={handleEnded} 
            onPlay={handlePlay}
            />
        </div>
    )
    }
export default Music