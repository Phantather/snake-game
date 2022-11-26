//
// const canvas = document.getElementById('game')
// const ctx = canvas.getContext('2d')
//
//
// const ground = new Image()
// ground.src = 'img/ground.jpg'
//
// const foodImage = new Image()
// foodImage.src = 'img/food.png'
//
// let box = 32
//
// document.addEventListener('keydown',direction)
//
//
// let dir = ''
//
// function direction(e){
//     if(e.key === 'ArrowLeft' && dir !== 'right'){
//         dir = 'left'
//     }
//     if(e.key === 'ArrowRight' && dir !== 'left'){
//         dir = 'right'
//     }
//     if(e.key === 'ArrowUp' && dir !== 'down'){
//         dir = 'up'
//     }
//     if(e.key === 'ArrowDown' && dir !== 'up'){
//         dir = 'down'
//     }
// }
//
// let food = {
//     x: Math.floor((Math.random() * 17 + 1)) * box,
//     y: Math.floor((Math.random() * 15 + 1)) * box
// }
//
//
// let snake = []
// snake[0] = {
//     y: 4 * box,
//     x: 5 * box
// }
// let score = 0
//
// function drawGame (){
//     ctx.drawImage(ground, 0,0)
//     ctx.drawImage(foodImage,food.x,food.y)
//     for(let i =0; i < snake.length; i++){
//         ctx.fillStyle = i === 0 ? 'red' : 'green'
//         ctx.fillRect(snake[i].x,snake[i].y,box,box)
//     }
//     ctx.fillStyle= 'white'
//     ctx.font = '50px Arial'
//     ctx.fillText(score, box * 2,box * 1.8)
//
//     let snakeX = snake[0].x
//     let snakeY =snake[0].y
//
//
//     if (snakeX === food.x && snakeY === food.y){
//         score++
//         food = {
//             x: Math.floor((Math.random() * 17 + 1)) * box,
//             y: Math.floor((Math.random() * 15 + 1)) * box
//         }
//
//
//     }else {
//         snake.pop()
//     }
//     function stopGame(head,arr){
//         for(let i = 0; i< arr.length; i++){
//             if(head.x === arr[i].x && head.y === arr[i].y){
//                 clearInterval(game)
//             }
//         }
//     }
//
//     if(snakeX < box || snakeX > box * 17 || snakeY < 3 * box || snakeY > box * 17)
//         clearInterval(game)
//
//     if(dir === 'left') snakeX -=box
//     if(dir === 'right') snakeX +=box
//     if(dir === 'up') snakeY -=box
//     if(dir === 'down') snakeY +=box
//
//
//     let newHead = {
//         x: snakeX,
//         y: snakeY
//     }
//     stopGame(newHead,snake)
//     snake.unshift(newHead)
// }
// let game = setInterval(drawGame,100)
// console.log(game)
//
//
//
//
//
//
//
//
//
//
//
// const canvas = document.getElementById('game')
// const ctx = canvas.getContext('2d')
//
// const ground = new Image()
// ground.src = 'img/ground.jpg'
//
// const  foodImage = new Image()
// foodImage.src = 'img/food.png'
//
// let box = 32
//
// document.addEventListener('keydown', direction)
//
// let dir = ''
//
// function direction (e){
//     if (e.key === 'ArrowLeft' && dir !== 'right'){
//         dir = 'left'
//     }
//     if (e.key === 'ArrowRight' && dir !== 'left'){
//         dir = 'right'
//     }
//     if (e.key === 'ArrowUp' && dir !== 'down'){
//         dir = 'up'
//     }
//     if (e.key === 'ArrowDown' && dir !== 'up'){
//         dir = 'down'
//     }
// }
//
// let food = {
//     x: Math.floor((Math.random() * 17 + 1)) * box,
//     y: Math.floor((Math.random() * 15 + 1)) * box
// }
//
// let snake = []
// snake[0] = {
//     y: 4 * box,
//     x: 5 * box
// }
//
// let score = 0
//
// function drawGame(){
//     ctx.drawImage(ground, 0,0)
//     ctx.drawImage(foodImage, food.x,food.y)
//     for(let i = 0; i < snake.length; i++){
//         ctx.fillStyle = i === 0 ? 'red':'green'
//         ctx.fillRect(snake[i].x, snake[i].y, box, box)
//     }
//     ctx.fillStyle = 'with'
//     ctx.font = '50px Arial'
//     ctx.fillText(score, box * 2, box * 1.8)
//
//     let snakeX = snake[0].x
//     let snakeY = snake[0].y
//
//     if (snakeX === food.x && snakeY === food.y){
//         food = {
//             x: Math.floor((Math.random() * 17 + 1)) * box,
//             y: Math.floor((Math.random() * 15 + 1)) * box
//         }
//
//
//     }else {
//         snake.pop()
//     }
//     function stopGame(head, arr){
//         for (let i = 0; i < arr.length; i++){
//             if (head.x === arr[i].x && head.y === arr[i].y){
//                 clearInterval(game)
//             }
//         }
//     }
//
//     if (snakeX < box || snakeX > box * 17 || snakeY < 3 * box || snakeY || snakeY > box * 17)
//         clearInterval(game)
//
//     if (dir === 'left') snakeX -=box
//     if (dir === 'right') snakeX +=box
//     if (dir === 'up') snakeY -=box
//     if (dir === 'down') snakeY +=box
//
//     let newHead = {
//         x: snakeX,
//         y: snakeY
//     }
//     stopGame(newHead, snake)
//     snake.unshift(newHead)
// }
//
// let  game = setInterval(drawGame, 100)
// console.log(game)




// const canvas = document.getElementById('game')
// const ctx = canvas.getContext('2d')
//
// const ground = new Image()
// ground.src = 'img/ground.jpg'
//
// const  foodImage = new Image()
// foodImage.src = 'img/food.png'
//
// let box = 32
//
// document.addEventListener('keydown', direction)
//
// let dir = ''
//
// function direction (e){
//     if (e.key === 'ArrowLeft' && dir !== 'right'){
//         dir = 'left'
//     }
//     if (e.key === 'ArrowRight' && dir !== 'left'){
//         dir = 'right'
//     }
//     if (e.key === 'ArrowUp' && dir !== 'down'){
//         dir = 'up'
//     }
//     if (e.key === 'ArrowDown' && dir !== 'up'){
//         dir = 'down'
//     }
// }
//
// let food = {
//     x: Math.floor((Math.random() * 17 + 1)) * box,
//     y: Math.floor((Math.random() * 15 + 3)) * box
// }
//
// let snake = []
// snake[0] = {
//     y: 4 * box,
//     x: 5 * box
// }
//
// let score = 0
//
// function drawGame(){
//     ctx.drawImage(ground, 0,0)
//     ctx.drawImage(foodImage, food.x,food.y)
//     for(let i = 0; i < snake.length; i++){
//         ctx.fillStyle = i === 0 ? 'red':'green'
//         ctx.fillRect(snake[i].x, snake[i].y, box, box)
//     }
//     ctx.fillStyle = 'with'
//     ctx.font = '50px Arial'
//     ctx.fillText(score, box * 2, box * 1.8)
//
//     let snakeX = snake[0].x
//     let snakeY = snake[0].y
//
//     if (snakeX === food.x && snakeY === food.y){
//         food = {
//             x: Math.floor((Math.random() * 17 + 1)) * box,
//             y: Math.floor((Math.random() * 15 + 1)) * box
//         }
//
//
//     }else {
//         snake.pop()
//     }
//     function stopGame(head, arr){
//         for (let i = 0; i < arr.length; i++){
//             if (head.x === arr[i].x && head.y === arr[i].y){
//                 clearInterval(game)
//             }
//         }
//     }
//
//     if (snakeX < box || snakeX > box * 17 || snakeY < 3 * box || snakeY || snakeY > box * 17)
//         clearInterval(game)
//
//     if (dir === 'left') snakeX -=box
//     if (dir === 'right') snakeX +=box
//     if (dir === 'up') snakeY -=box
//     if (dir === 'down') snakeY +=box
//
//     let newHead = {
//         x: snakeX,
//         y: snakeY
//     }
//     stopGame(newHead, snake)
//     snake.unshift(newHead)
// }
//
// let  game = setInterval(drawGame, 100)
// console.log(game)

