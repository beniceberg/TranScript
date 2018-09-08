export const getScript = state => {
  return (
    state.script.segments &&
    state.script.segments
      .map(seg => {
        return `<p> ${seg.words
          .map(
            el =>
              `<span data-start="${el.start}" data-end="${el.end}">${
                el.text
              } </span>`
          )
          .join("")}</p>`;
      })
      .join(" ")
  );
};
