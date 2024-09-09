const github = new Github
const ui = new UI

// Search input
const searchUser = document.getElementById('searchUser')

// Search input event Listener
searchUser.addEventListener('keyup', (e) => {
  // Get input Text
  const userText = e.target.value

  if(userText !== '') {
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show Alert
          ui.showAlert('User not found', 'alert alert-danger')
          
        } else {
          // Show profile
          ui.showProfile(data.profile)
          ui.showRepos(data.repos)
        }
      })
  } else {
    // clear Profile
    ui.clearProfile()
  } 
})