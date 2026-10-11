

import React from 'react';
import './VideoModule.css';

const VIDEO_ID = 'KTXBi53LCzM';

const VideoModule = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="video-overlay" onClick={onClose}>
      <div
        className="video-modal"
        role="dialog"
        aria-modal="true"
        aria-label="WebCafe introduction video"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="video-close"
          onClick={onClose}
          aria-label="Close video"
        >
          &times;
        </button>

        <div className="video-frame">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}`}
            title="WebCafe introduction video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModule;
