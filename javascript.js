function computerPlay() {
    const result = ['Rock', 'Paper', 'Scissors'];
    let index = Math.floor(Math.random() * 3);
    return result[index];
}

console.log(computerPlay());