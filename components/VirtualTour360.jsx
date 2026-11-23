'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faPause,
  faVolumeHigh,
  faVolumeXmark,
  faExpand,
  faCompress,
  faHandPointer,
} from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './VirtualTour360.css';

config.autoAddCss = false;

const MIN_FOV = 30;
const MAX_FOV = 90;

export default function VirtualTour360({
  src, // e.g. "/videos/campus-360.mp4" (equirectangular 2:1 video)
  poster, // optional poster image shown before play
  title = 'Campus Virtual Tour',
  autoRotate = true,
}) {
  const wrapRef = useRef(null);
  const canvasHostRef = useRef(null);
  const videoRef = useRef(null);
  const interactedRef = useRef(false);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [ready, setReady] = useState(false);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const host = canvasHostRef.current;
    const video = videoRef.current;
    if (!host || !video) return;

    // ---------- Scene ----------
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      host.clientWidth / host.clientHeight,
      0.1,
      1100
    );
    camera.position.set(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(host.clientWidth, host.clientHeight);
    host.appendChild(renderer.domElement);

    // Inside-out sphere with the video as texture
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1);

    const texture = new THREE.VideoTexture(video);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;

    const material = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // ---------- Look controls ----------
    let lon = 0;
    let lat = 0;
    let isDown = false;
    let startX = 0;
    let startY = 0;
    let startLon = 0;
    let startLat = 0;

    const markInteracted = () => {
      interactedRef.current = true;
      setShowHint(false);
    };

    const onPointerDown = (e) => {
      isDown = true;
      startX = e.clientX;
      startY = e.clientY;
      startLon = lon;
      startLat = lat;
      markInteracted();
      host.setPointerCapture?.(e.pointerId);
    };

    const onPointerMove = (e) => {
      if (!isDown) return;
      lon = (startX - e.clientX) * 0.15 + startLon;
      lat = (e.clientY - startY) * 0.15 + startLat;
    };

    const onPointerUp = (e) => {
      isDown = false;
      host.releasePointerCapture?.(e.pointerId);
    };

    const onWheel = (e) => {
      e.preventDefault();
      markInteracted();
      camera.fov = THREE.MathUtils.clamp(camera.fov + e.deltaY * 0.05, MIN_FOV, MAX_FOV);
      camera.updateProjectionMatrix();
    };

    host.addEventListener('pointerdown', onPointerDown);
    host.addEventListener('pointermove', onPointerMove);
    host.addEventListener('pointerup', onPointerUp);
    host.addEventListener('pointercancel', onPointerUp);
    host.addEventListener('wheel', onWheel, { passive: false });

    // ---------- Render loop ----------
    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      if (autoRotate && !interactedRef.current && !video.paused) {
        lon += 0.05;
      }

      lat = Math.max(-85, Math.min(85, lat));
      const phi = THREE.MathUtils.degToRad(90 - lat);
      const theta = THREE.MathUtils.degToRad(lon);

      camera.lookAt(
        500 * Math.sin(phi) * Math.cos(theta),
        500 * Math.cos(phi),
        500 * Math.sin(phi) * Math.sin(theta)
      );
      renderer.render(scene, camera);
    };
    animate();

    // ---------- Resize ----------
    const onResize = () => {
      const w = host.clientWidth;
      const h = host.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(host);

    // ---------- Video events ----------
    const onCanPlay = () => setReady(true);
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    video.addEventListener('canplay', onCanPlay);
    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);

    // ---------- Cleanup ----------
    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      host.removeEventListener('pointerdown', onPointerDown);
      host.removeEventListener('pointermove', onPointerMove);
      host.removeEventListener('pointerup', onPointerUp);
      host.removeEventListener('pointercancel', onPointerUp);
      host.removeEventListener('wheel', onWheel);
      video.removeEventListener('canplay', onCanPlay);
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
      texture.dispose();
      material.dispose();
      geometry.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === host) {
        host.removeChild(renderer.domElement);
      }
    };
  }, [src, autoRotate]);

  // Track fullscreen state (also covers the Esc key)
  useEffect(() => {
    const onChange = () => setFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  const toggleFullscreen = () => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    if (document.fullscreenElement) document.exitFullscreen();
    else wrap.requestFullscreen?.();
  };

  return (
    <section className="vt-section">
      <div ref={wrapRef} className="vt-wrap" aria-label={title}>
        {/* Hidden video element: used only as the texture source */}
        <video
          ref={videoRef}
          className="vt-video"
          src={src}
          poster={poster}
          crossOrigin="anonymous"
          loop
          muted
          playsInline
          preload="auto"
        />

        {/* WebGL canvas mounts here */}
        <div ref={canvasHostRef} className="vt-canvas" />

        {/* Big play button before first play */}
        {!playing && (
          <button
            type="button"
            className="vt-bigplay"
            onClick={togglePlay}
            aria-label="Play virtual tour"
            disabled={!ready}
          >
            <FontAwesomeIcon icon={faPlay} />
          </button>
        )}

        {/* Drag hint */}
        {playing && showHint && (
          <div className="vt-hint">
            <FontAwesomeIcon icon={faHandPointer} /> Drag to look around
          </div>
        )}

        {/* Control bar */}
        <div className="vt-controls">
          <span className="vt-title">{title}</span>
          <div className="vt-buttons">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={playing ? 'Pause' : 'Play'}
            >
              <FontAwesomeIcon icon={playing ? faPause : faPlay} />
            </button>
            <button
              type="button"
              onClick={toggleMute}
              aria-label={muted ? 'Unmute' : 'Mute'}
            >
              <FontAwesomeIcon icon={muted ? faVolumeXmark : faVolumeHigh} />
            </button>
            <button
              type="button"
              onClick={toggleFullscreen}
              aria-label={fullscreen ? 'Exit fullscreen' : 'Fullscreen'}
            >
              <FontAwesomeIcon icon={fullscreen ? faCompress : faExpand} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}