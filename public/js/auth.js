$(document).ready(() => {
  $('#btn-create-user').click(() => {
    event.preventDefault();
    const signupEmail = $('#signup-email').val();
    const signupPassword = $('#signup-password').val();

    firebase
      .auth()
      .createUserWithEmailAndPassword(signupEmail, signupPassword)
      .then(() => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
          photoURL: '',
        })
          .then(() => window.location.href = '../html/map.html');
      })
      .catch(error => $('#error-msg').text(error.message));
  });

  $('#btn-login').click(() => {
    event.preventDefault();
    const email = $('#input-email').val();
    const password = $('#input-password').val();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => window.location.href = '../html/map.html')
      .catch(error => $('#error-msg').text(error.message));
  });

  $('#google-btn').click(() => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(() => window.location.href = '../html/map.html')
      .catch(error => $('#error-msg').text(error.message));
  });

  $('#logout-btn').click(() => {
    firebase
      .auth()
      .signOut()
      .then(() => window.location.href = 'index.html');
  });
});
