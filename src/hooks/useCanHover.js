import { useEffect, useState } from 'react';

/**
 * True only on devices with a real hovering pointer (mouse/trackpad).
 *
 * Touch screens synthesise `mouseenter` immediately before `click`, so a panel
 * wired to both would open on the synthetic hover and close again on the tap.
 * Gate the hover handlers on this and leave the click handler to do the work.
 */
const query = '(hover: hover) and (pointer: fine)';

const useCanHover = () => {
  const [canHover, setCanHover] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = (e) => setCanHover(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return canHover;
};

export default useCanHover;
