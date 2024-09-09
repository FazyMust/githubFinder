class UI {
  constructor() {
    this.profile = document.getElementById('profile')
  }

  showProfile(user) {
    console.log(user)
    this.profile.innerHTML = `
    <div class="card card-body">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}" alt="User Avatar">
          <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
        </div>
        <div class="col-md-9">
         <span class="badge bg-primary mb-2">Public Repos: ${user.public_repos}</span>
         <span class="badge bg-secondary mb-2">Public Gists: ${user.public_gists}</span>
         <span class="badge bg-success mb-2">Followers: ${user.followers}</span>
         <span class="badge bg-info mb-2">Following: ${user.following}</span>
         <br><br>
         <ul class="list-group">
          <li class="list-group-item">Company: ${user.company}</li>
          <li class="list-group-item">Website: <a href="${user.blog}" target="_blank">${user.blog}</a></li>
          <li class="list-group-item">Location: ${user.location}</li>
          <li class="list-group-item">Member Since: ${new Date(user.created_at).toLocaleString('default', { month: 'long', year: 'numeric' })}</li>
        </div>
      </div>
    </div>
    <h3 class='page-heading my-3'>Latest Repos</h3>
    <div id="repos"></div>
    `
  }

  // Show Repositories
  showRepos(repos) {
    let output = ''

    repos.forEach((repo) => {
      output += `
      <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name} </a>
          </div>
          <div class="col-md-6">
            <span class="badge bg-primary mb-2">Stars: ${repo.stargazers_count}</span>
            <span class="badge bg-secondary mb-2">Watchers: ${repo.watchers}</span>
            <span class="badge bg-success mb-2">Forks: ${repo.forks_count}</span>
          </div>
        </div>
      </div>
      `
    })

    // Output  the Repositiry
    document.getElementById('repos').innerHTML = output;
  }

  showAlert(message, className) {
    // Clear any remaining alerts
    this.clearAlert()
    // create a div
    const div = document.createElement('div')
    // Add Classes
    div.className = className
    // Add text node of message
    div.appendChild(document.createTextNode(message))
    // Get a parent
    const container = document.querySelector('.searchContainer')
    // Get search bar
    const search = document.querySelector('#searchUser')
    // Insert alert element
    container.insertBefore(div, search)

    // Timeout after 3 secounds
    setTimeout(() => this.clearAlert(), 3000)
  }

  // Clear alert msg
  clearAlert() {
    const currentAlert = document.querySelector('alert')
    if (currentAlert) {
      currentAlert.remove()
    }
  }

  // Clear Profile
  clearProfile() {
    this.profile.innerHTML = ''
  }
}
