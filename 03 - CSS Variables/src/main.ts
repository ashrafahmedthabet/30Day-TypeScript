let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".controls input");

const updateInputValue:EventListener = (e:Event): void => {
  let element = e.target as HTMLInputElement;
  let suffix: string = element.dataset.sizing || "";

  document.documentElement.style.setProperty(
    `--${element.name}`,
    `${element.value}${suffix}`
  );
};

inputs.forEach((input:HTMLInputElement) => input.addEventListener("input", updateInputValue));
