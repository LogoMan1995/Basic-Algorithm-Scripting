// 11. Верните предоставленную строку, в которой первая буква каждого слова будет заглавной. Убедитесь, что остальная часть слова написана строчными буквами. Для целей этого упражнения вам также следует писать с заглавной буквы соединительные слова, такие как the и of.



function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for (let st in newTitle) {
      updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
  }