document.addEventListener("DOMContentLoaded", function () {
    const parent = document.querySelector(".parent");
    const emojis = parent.querySelectorAll(".emoji");
    const showResultsButton = document.getElementById("showResultsButton");
    const winnerEmoji = document.getElementById("winnerEmoji");

    const emojiCounts = {}; // Объект для хранения количества голосов для каждого смайлика

    emojis.forEach((emoji) => {
        emoji.addEventListener("click", (event) => {
            const emojiCount = emoji.querySelector(".emoji__count");
            emojiCounts[emojiCount.textContent] = emojiCount;

            // Увеличиваем количество голосов при нажатии
            emojiCount.textContent = Number(emojiCount.textContent) + 1;
        });
    });

    showResultsButton.addEventListener("click", () => {
        let maxVotes = 0;
        let winningEmoji = "";

        // Находим смайлик с максимальным количеством голосов
        for (const count in emojiCounts) {
            if (emojiCounts.hasOwnProperty(count)) {
                const votes = Number(count);
                if (votes > maxVotes) {
                    maxVotes = votes;
                    winningEmoji = emojiCounts[count].parentNode.querySelector(".emoji__picture").innerHTML;
                }
            }
        }

        // Отображаем победителя
        winnerEmoji.innerHTML = winningEmoji;
    });
});
