"use client"

import { useSwiper } from "swiper/react"
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"

const WorkSliderBtns = ({ containerStyles, bynStyles, iconsStyles }) => {
    const swiper = useSwiper()
    return (
        <div className={containerStyles}>
            <button className={bynStyles} onClick={() => { swiper.slidePrev() }}>
                <PiCaretLeftBold className={iconsStyles} />
            </button>
            <button className={bynStyles} onClick={() => { swiper.slideNext() }}>
                <PiCaretRightBold className={iconsStyles} />
            </button>
        </div>
    )
}

export default WorkSliderBtns