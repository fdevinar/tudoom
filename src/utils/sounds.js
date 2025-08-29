import useSound from 'use-sound';
import platformSfx from '../assets/sounds/platform-start.wav';
import punchSfx from '../assets/sounds/punch.wav';
import painSfx from '../assets/sounds/generic-demon-pain.wav';
import explodeSfx from '../assets/sounds/calamity-blade-projectile-explode.wav';
import powerUpSfx from '../assets/sounds/get-powerup.wav';
import BFGSfx from '../assets/sounds/BFG-explode.wav';
import breakSfx from '../assets/sounds/break.wav';

export default function sounds ( volume ) {

  // SOUNDS
  const [playPlatform] = useSound(platformSfx, {volume});
  const [playPunch] = useSound(punchSfx, {volume});
  const [playPain] = useSound(painSfx, {volume});
  const [playExplode] = useSound(explodeSfx, {volume});
  const [playPowerUp] = useSound(powerUpSfx, {volume});
  const [playBFG] = useSound(BFGSfx, {volume});
  const [playBreak] = useSound(breakSfx, {volume});

  return {
    playPlatform,
    playPunch,
    playPain,
    playExplode,
    playPowerUp,
    playBFG,
    playBreak
  };

}