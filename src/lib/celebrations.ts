import confetti from 'canvas-confetti';

/**
 * Celebration for Game Wins
 * Fires side cannons for a energetic "victory" feel
 */
export const triggerGameWin = () => {
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

  const interval: any = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    
    // side cannons
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      colors: ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee']
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      colors: ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee']
    });
  }, 250);
};

/**
 * Celebration for Quiz Completion
 * A central fountain of "stars" or shimmering particles
 */
export const triggerQuizComplete = () => {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    zIndex: 1000
  };

  function fire(particleRatio: number, opts: any) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio)
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
    colors: ['#EAB308', '#F59E0B', '#FFFBEB'], // Golden/Sparkle colors
  });
  fire(0.2, {
    spread: 60,
    colors: ['#EAB308', '#FBD38D'],
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
    colors: ['#FFFBEB', '#FEF3C7']
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
    colors: ['#EAB308']
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
    colors: ['#FFFFFF']
  });
};
