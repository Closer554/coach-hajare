import { useEffect, useRef } from "react";

type AutoScrollCarouselOptions = {
  cycleDurationMs?: number;
  resumeDelay?: number;
};

type DragState = {
  active: boolean;
  pointerId: number | null;
  startX: number;
  startScrollLeft: number;
};

export function useAutoScrollCarousel(options?: AutoScrollCarouselOptions) {
  const { cycleDurationMs = 36000, resumeDelay = 10000 } = options ?? {};

  const containerRef = useRef<HTMLDivElement | null>(null);
  const dragStateRef = useRef<DragState>({
    active: false,
    pointerId: null,
    startX: 0,
    startScrollLeft: 0,
  });
  const pausedRef = useRef(false);
  const frameRef = useRef<number | null>(null);
  const resumeTimerRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number | null>(null);
  const ignoreScrollUntilRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const getLoopWidth = () => container.scrollWidth / 2;

    const clearResumeTimer = () => {
      if (resumeTimerRef.current !== null) {
        window.clearTimeout(resumeTimerRef.current);
        resumeTimerRef.current = null;
      }
    };

    const scheduleResume = () => {
      clearResumeTimer();
      resumeTimerRef.current = window.setTimeout(() => {
        pausedRef.current = false;
      }, resumeDelay);
    };

    const pauseAutoScroll = () => {
      pausedRef.current = true;
      scheduleResume();
    };

    const syncLoopBounds = () => {
      const loopWidth = getLoopWidth();

      if (!loopWidth) {
        return;
      }

      if (container.scrollLeft >= loopWidth) {
        ignoreScrollUntilRef.current = performance.now() + 80;
        container.scrollLeft -= loopWidth;
      } else if (container.scrollLeft < 0) {
        ignoreScrollUntilRef.current = performance.now() + 80;
        container.scrollLeft += loopWidth;
      }
    };

    const animate = (timestamp: number) => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }

      const delta = timestamp - lastTimestampRef.current;
      lastTimestampRef.current = timestamp;

      if (!pausedRef.current && !dragStateRef.current.active) {
        const loopWidth = getLoopWidth();
        const pixelsPerMs = loopWidth > 0 ? loopWidth / cycleDurationMs : 0;

        ignoreScrollUntilRef.current = performance.now() + 80;
        container.scrollLeft += pixelsPerMs * delta;
        syncLoopBounds();
      }

      frameRef.current = window.requestAnimationFrame(animate);
    };

    const handlePointerDown = (event: PointerEvent) => {
      dragStateRef.current = {
        active: true,
        pointerId: event.pointerId,
        startX: event.clientX,
        startScrollLeft: container.scrollLeft,
      };

      pausedRef.current = true;
      clearResumeTimer();
      container.setPointerCapture(event.pointerId);
      container.classList.add("is-dragging");
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!dragStateRef.current.active) {
        return;
      }

      const deltaX = event.clientX - dragStateRef.current.startX;
      container.scrollLeft = dragStateRef.current.startScrollLeft - deltaX;
      syncLoopBounds();
    };

    const stopDragging = () => {
      if (!dragStateRef.current.active) {
        return;
      }

      dragStateRef.current = {
        active: false,
        pointerId: null,
        startX: 0,
        startScrollLeft: 0,
      };

      container.classList.remove("is-dragging");
      scheduleResume();
    };

    const handlePointerUp = (event: PointerEvent) => {
      if (dragStateRef.current.pointerId !== event.pointerId) {
        return;
      }

      if (container.hasPointerCapture(event.pointerId)) {
        container.releasePointerCapture(event.pointerId);
      }

      stopDragging();
    };

    const handlePointerCancel = (event: PointerEvent) => {
      if (dragStateRef.current.pointerId !== event.pointerId) {
        return;
      }

      if (container.hasPointerCapture(event.pointerId)) {
        container.releasePointerCapture(event.pointerId);
      }

      stopDragging();
    };

    const handleWheel = () => {
      pauseAutoScroll();
    };

    const handleScroll = () => {
      if (performance.now() < ignoreScrollUntilRef.current) {
        return;
      }

      syncLoopBounds();

      if (!dragStateRef.current.active) {
        pauseAutoScroll();
      }
    };

    frameRef.current = window.requestAnimationFrame(animate);

    container.addEventListener("pointerdown", handlePointerDown);
    container.addEventListener("pointermove", handlePointerMove);
    container.addEventListener("pointerup", handlePointerUp);
    container.addEventListener("pointercancel", handlePointerCancel);
    container.addEventListener("wheel", handleWheel, { passive: true });
    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      container.removeEventListener("pointerdown", handlePointerDown);
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerup", handlePointerUp);
      container.removeEventListener("pointercancel", handlePointerCancel);
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("scroll", handleScroll);

      clearResumeTimer();

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [cycleDurationMs, resumeDelay]);

  return containerRef;
}
