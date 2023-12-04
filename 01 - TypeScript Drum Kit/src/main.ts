function playSound(e: KeyboardEvent) {
  let audio: HTMLAudioElement | null = document.querySelector(
    `audio[data-key="${e.keyCode}"]`
  );
  let key: HTMLElement | null = document.querySelector(
    `div[data-key="${e.keyCode}"]`
  );

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key?.classList.add("playing");
}

function removeTransformStyling(e: TransitionEvent) {
  if (e.propertyName !== "transform") return;
  const targetElement = e.target as HTMLElement;
  targetElement?.classList.remove("playing");
}
let keys: NodeListOf<HTMLDivElement> = document.querySelectorAll(`.key`);
keys.forEach((key) =>
  key.addEventListener("transitionend", removeTransformStyling)
);
window.addEventListener("keydown", playSound);
