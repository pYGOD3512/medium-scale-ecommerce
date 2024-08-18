'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "../../node_modules/react-modal-video/css/modal-video.css"

export default function VideoPopup({ style }) {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            {style === 1 &&
                <a onClick={() => setOpen(true)} className="play-btn popup-video"><i className="fas fa-play" /></a>
            }
            {style === 2 &&
                <div className="video-icon">
                    <a className="popup-video" onClick={() => setOpen(true)}>
                        <i className="fas fa-play" />
                    </a>
                </div>
            }
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="OMqWRlxo1oQ" onClose={() => setOpen(false)} />
        </>
    )
}