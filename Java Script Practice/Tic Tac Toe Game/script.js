let start_btn = document.querySelector('#start')
let for_pass_btn = document.querySelector('#for-pass')
let login_btn = document.querySelector('#login')
let signup_btn = document.getElementById('signup')
let continue_btn = document.getElementById('continue')
let create_btn = document.getElementById('create')
let computer_btn = document.getElementById('computer-btn')
let partner_btn = document.getElementById('partner-btn')
let online_btn = document.getElementById('online-btn')
let friend_btn = document.getElementById('friend-btn')
let score1_btn = document.getElementById('score1')
let score2_btn = document.getElementById('score2')
let exit_btn = document.querySelectorAll('.exit')
let play_again_btn = document.querySelectorAll('.again')
let open_page = "option"
let score1 = 0
let score2 = 0

let dataObj = {}

create_btn.addEventListener('click', () => {
  let detail = document.querySelector('.signup-container')
  let name = detail.children[0].value
  let email = detail.children[1].value
  let number = detail.children[2].value
  let password = detail.children[3].value
  dataObj['data'] = [name, email, number, password]
  localStorage.setItem('data', JSON.stringify(dataObj))
  document.getElementById('signup-container').style.visibility = 'hidden'
  document.getElementById('options').style.visibility = 'visible'
})

continue_btn.addEventListener('click', () => {
  let email = JSON.parse(localStorage.getItem('data')).data[1]
  let currEmail = document.getElementById('forgt-pass').children[0].value
  let newPass = document.getElementById('forgt-pass').children[1].value
  let conformPass = document.getElementById('forgt-pass').children[2].value

  if (email === currEmail && newPass === conformPass) {
    console.log('hii')
    alert("Password changed successfully!")
    document.getElementById('login-container').style.visibility = 'visible'
    document.getElementById('forgt-pass').style.visibility = 'hidden'
  } else {
    alert("Please try again!")
    document.getElementById('forgt-pass').children[0].value = ''
    document.getElementById('forgt-pass').children[1].value = ''
    document.getElementById('forgt-pass').children[2].value = ''
  }
})

start_btn.addEventListener('click', () => {
  document.getElementById('login-container').style.visibility = 'visible'
  document.getElementById('front-page').style.visibility = 'hidden'
})

login_btn.addEventListener('click', () => {
  let currEmail = document.getElementById('login-container').children[0].value
  let currPass = document.getElementById('login-container').children[1].value

  let email = JSON.parse(localStorage.getItem('data')).data[1]
  let password = JSON.parse(localStorage.getItem('data')).data[3]

  if (email === currEmail && password === currPass) {
    document.getElementById('login-container').style.visibility = 'hidden'
    document.getElementById('options').style.visibility = 'visible'
  }
  else {
    alert("Please try again")
    document.getElementById('login-container').children[0].value = ''
    document.getElementById('login-container').children[1].value = ''
  }
})

for_pass_btn.addEventListener('click', () => {
  document.getElementById('login-container').style.visibility = 'hidden'
  document.getElementById('forgt-pass').style.visibility = 'visible'
})

signup_btn.addEventListener('click', () => {
  document.getElementById('login-container').style.visibility = 'hidden'
  document.getElementById('signup-container').style.visibility = 'visible'
})

computer_btn.addEventListener('click', () => {
  document.getElementById('options').style.visibility = 'hidden'
  document.getElementById('computer').style.visibility = 'visible'
  open_page = document.getElementById('computer').id
  game('computer', document.querySelectorAll('.computer-board p'))
})

partner_btn.addEventListener('click', () => {
  document.getElementById('options').style.visibility = 'hidden'
  document.getElementById('partner').style.visibility = 'visible'
  open_page = document.getElementById('partner').id
  // console.log(open_page)
  game("partner", document.querySelectorAll('.partner-board p'))
})

online_btn.addEventListener('click', () => {
  document.getElementById('options').style.visibility = 'hidden'
  document.getElementById('online').style.visibility = 'visible'
  open_page = document.getElementById('online').id
  console.log(open_page)
  game("online", document.querySelectorAll('.online-board p'))
})

friend_btn.addEventListener('click', () => {
  document.getElementById('options').style.visibility = 'hidden'
  document.getElementById('friend').style.visibility = 'visible'
  open_page = document.getElementById('friend').id
  game("friend", document.querySelectorAll('.friend-board p'))
})

// console.log(exit_btn)
exit_btn.forEach(exit => {
  // console.log(exit)
  exit.addEventListener('click', () => {
    if (open_page === 'computer') {
      document.getElementById('computer').style.visibility = 'hidden'
      document.getElementById('options').style.visibility = 'visible'
    } else if (open_page === 'partner') {
      document.getElementById('partner').style.visibility = 'hidden'
      document.getElementById('options').style.visibility = 'visible'
    } else if (open_page === 'online') {
      document.getElementById('online').style.visibility = 'hidden'
      document.getElementById('options').style.visibility = 'visible'
    } else {
      document.getElementById('friend').style.visibility = 'hidden'
      document.getElementById('options').style.visibility = 'visible'
    }
  })
})

// console.log(play_again_btn)
play_again_btn.forEach(ele => {
  // console.log(ele)
  ele.addEventListener('click', () => {
    for (let i = 0; i < board.length; i++) {
     board[i] = ''
    }
    currPlayer = 'X'
    score1 = 0
    score2 = 0
    setScore()
    if (ele.parentNode.parentNode.children[1].classList[0] === 'computer-board') {
      open_page = 'computer'
      document.querySelectorAll('.computer-board p').forEach(ele => {
        ele.textContent = ''
      })
    } else if (ele.parentNode.parentNode.children[1].classList[0] === 'partner-board') {
      open_page = 'partner'
      document.querySelectorAll('.partner-board p').forEach(ele => {
        ele.textContent = ''
      })
    } else if (ele.parentNode.parentNode.children[1].classList[0] === 'online-board') {
      open_page = 'online'
      document.querySelectorAll('.online-board p').forEach(ele => {
        ele.textContent = ''
      })
    } else if (ele.parentNode.parentNode.children[1].classList[0] === 'friend-board') {
      open_page = 'friend'
      document.querySelectorAll('.friend-board p').forEach(ele => {
        ele.textContent = ''
      })
    }
  })
})

let board = ['', '', '', '', '', '', '', '', '']
let currPlayer = 'X'
let gameOver = false

function game(option, gameboard) {
  gameboard.forEach((ele, index) => {
    ele.addEventListener('click', () => {
      if (gameOver) return;
      if (board[index] !== '') return
      board[index] = currPlayer
      ele.textContent = currPlayer
      checkForWinner(option)
      switchPlayer()
      setScore()
    })
  })
}

function checkForWinner(option) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  let h1 = document.createElement("h1")
  for (let i = 0; i < winningCombinations.length; i++) {
    const combination = winningCombinations[i]
    if (board[combination[0]] !== '' && board[combination[0]] === board[combination[1]] && board[combination[1]] === board[combination[2]]) {
      gameOver = true
      let winner = board[combination[0]]
      if (option === 'computer') {
        if (winner === 'X') {
          h1.textContent = document.getElementById('computer').children[0].children[1].children[0].textContent + ' Wins'
        } else {
          h1.textContent = document.getElementById('computer').children[0].children[0].children[0].textContent + ' Wins'
        }
        document.getElementById('computer').style.visibility = 'hidden'
      } else if (option === 'partner') {
        if (winner === 'X') {
          h1.textContent = document.getElementById('partner').children[0].children[1].children[0].textContent + ' Wins'
        } else {
          h1.textContent = document.getElementById('partner').children[0].children[0].children[0].textContent + ' Wins'
        }
        document.getElementById('partner').style.visibility = 'hidden'
      } else if (option === 'online') {
        if (winner === 'X') {
          h1.textContent = document.getElementById('online').children[0].children[1].children[0].textContent + ' Wins'
        } else {
          h1.textContent = document.getElementById('online').children[0].children[0].children[0].textContent + ' Wins'
        }
        document.getElementById('online').style.visibility = 'hidden'
      } else {
        if (winner === 'X') {
          h1.textContent = document.getElementById('friend').children[0].children[1].children[0].textContent + ' Wins'
        } else {
          h1.textContent = document.getElementById('friend').children[0].children[0].children[0].textContent + ' Wins'
        }
        document.getElementById('friend').style.visibility = 'hidden'
      }
      document.getElementById('win').append(h1)
      document.getElementById('win').style.visibility = 'visible'
      setInterval(() => {
        if (option === 'computer') {
          document.getElementById('computer').style.visibility = 'visible'
          document.getElementById('win').style.visibility = 'hidden'
        } else if (option === 'partner') {
          document.getElementById('partner').style.visibility = 'visible'
          document.getElementById('win').style.visibility = 'hidden'
        } else if (option === 'online') {
          document.getElementById('online').style.visibility = 'visible'
          document.getElementById('win').style.visibility = 'hidden'
        } else {
          document.getElementById('friend').style.visibility = 'visible'
          document.getElementById('win').style.visibility = 'hidden'
        }
      }, 1000)
      return
    }
  }
  if (!board.includes('') && !gameOver) {
    gameOver = true
    h1.textContent = `It's a drow`
    document.getElementById('win').append(h1)
    document.getElementById('win').style.visibility = 'visible'
    document.getElementById('computer').style.visibility = 'hidden'
    setInterval(() => {
      document.getElementById('win').style.visibility = 'hidden'
      document.getElementById('computer').style.visibility = 'visible'
    }, 1000)
  }
}

function switchPlayer() {
  if (currPlayer == '0') {
    score1 += 1
    currPlayer = 'X'
  } else {
    score2 += 1
    currPlayer = '0'
  }
  // currPlayer = currPlayer === 'X' ? '0' : 'X'
}
function setScore() {
  document.querySelectorAll('.score1').forEach(ele => {
    ele.innerHTML = score1
  })
  document.querySelectorAll('.score2').forEach(ele => {
    ele.innerHTML = score2
  })
}










// console.log(document.querySelector('.computer-board').children[7])

// document.querySelectorAll('.computer-board').forEach(ele => {
//           while (!present){
//             let num = Math.floor(Math.random() * 9)
//             if (board[num] !== '0' && board[num] !== 'X') {
//               switch (num) {
//                 case 0: board[num] = currPlayer
//                   ele.children[num].textContent = currPlayer
//                   break
//                 case 1: board[num] = currPlayer
//                   ele.children[num].textContent = currPlayer
//                   break
//                 case 2: board[num] = currPlayer
//                   ele.children[num].textContent = currPlayer
//                   break
//                 case 3: board[num] = currPlayer
//                   ele.children[num].textContent = currPlayer
//                   break
//                 case 4: board[num] = currPlayer
//                   ele.children[num].textContent = currPlayer
//                   break
//                 case 5: board[num] = currPlayer
//                   ele.children[num].textContent = currPlayer
//                   break
//                 case 6: board[num] = currPlayer
//                   ele.children[num].textContent = currPlayer
//                   break
//                 case 7: board[num] = currPlayer
//                   ele.children[num].textContent = currPlayer
//                   break
//                 case 8: board[num] = currPlayer
//                   ele.children[num].textContent = currPlayer
//                   break
//               }
//               present = true
//             }
//             break
//           }
//         })