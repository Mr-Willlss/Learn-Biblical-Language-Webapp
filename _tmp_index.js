
    const firebaseConfig = {
      apiKey: "AIzaSyBAKgu-QCwlfWha3W-c-vve2BoEV-Em5UM",
      authDomain: "learn-basic-greek.firebaseapp.com",
      projectId: "learn-basic-greek",
      storageBucket: "learn-basic-greek.firebasestorage.app",
      messagingSenderId: "628557836662",
      appId: "1:628557836662:web:eb14cc1c26e5c75dda57",
      measurementId: "G-6BYGXRJFT",
      databaseURL: "https://learn-basic-greek-default-rtdb.firebaseio.com"
    };

    let auth = null;
    let db = null;

    function initFirebase() {
      if (!window.firebase) return false;
      if (firebase.apps && firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);
      if (!firebase.apps) firebase.initializeApp(firebaseConfig);
      auth = firebase.auth();
      db = firebase.firestore();
      return true;
    }

    function show(el){ el.classList.remove('hidden'); }
    function setErr(msg){ document.getElementById('err').textContent = msg || ''; }

    document.addEventListener('DOMContentLoaded', async function(){
      const card = document.getElementById('card');
      const googleBtn = document.getElementById('googleBtn');
      const emailForm = document.getElementById('emailForm');
      const emailBtn = document.getElementById('emailBtn');
      const toggleModeBtn = document.getElementById('toggleMode');
      const forgotBtn = document.getElementById('forgotBtn');
      const emailErr = document.getElementById('emailErr');
      const emailInput = document.getElementById('email');
      const passInput = document.getElementById('password');
      let mode = 'signin'; // signin | signup

      if (!initFirebase()) {
        show(card);
        setErr("Firebase failed to load. Please try again.");
      }

      if (auth && auth.setPersistence && firebase.auth.Auth.Persistence.LOCAL) {
        await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).catch(()=>{});
      }

      async function ensureUserDoc(user){
        if (!user || !db) return;
        const ref = db.collection('users').doc(user.uid);
        const snap = await ref.get();
        if (snap.exists) return;

        const display = user.displayName || (user.email  String(user.email).split('@')[0] : 'Learner') || 'Learner';
        const username = '@' + String(display).toLowerCase().replace(/\s/g,'').replace(/[^a-z0-9_]/g,'').slice(0, 18);
        await ref.set({
          displayName: display,
          email: user.email || '',
          photoURL: user.photoURL || '',
          username,
          bio: '',
          joinedDate: firebase.firestore.FieldValue.serverTimestamp(),
          xp: 0,
          streak: 0,
          lastActiveDate: '',
          hearts: 5,
          gems: 0,
          crowns: 0,
          rank: 'Newcomer',
          level: 1,
          lessonsCompleted: 0,
          accuracy: 0,
          currentLesson: 1,
          currentWorld: 1,
          friends: [],
          friendRequests: [],
          achievements: {},
          settings: { notifications: true, dailyGoal: 1 }
        }, { merge:true });
      }

      if (auth) {
        auth.onAuthStateChanged(function(user){
          if (user) {
            window.location.href = 'language-home.html';
          } else {
            show(card);
          }
        });
      } else {
        show(card);
      }

      googleBtn.addEventListener('click', async function(){
        if (!auth || !db) { setErr("Firebase isn't ready. Please try again."); return; }
        setErr('');
        googleBtn.disabled = true;
        try{
          const provider = new firebase.auth.GoogleAuthProvider();
          const res = await auth.signInWithPopup(provider);
          const user = res && res.user;
          if (!user) throw new Error("Sign-in failed. Please try again.");

          await ensureUserDoc(user);
          window.location.href = 'language-home.html';
        }catch(e){
          console.error(e);
          setErr(e && e.message  e.message : "Could not sign in. Please try again.");
        }finally{
          googleBtn.disabled = false;
        }
      });

      function setEmailErr(msg){ emailErr.textContent = msg || ''; }
      function mapAuthError(e){
        const code = (e && e.code)  String(e.code) : '';
        const map = {
          'auth/invalid-email': 'That email address looks invalid.',
          'auth/user-disabled': 'This account has been disabled.',
          'auth/user-not-found': 'No account found for that email.',
          'auth/wrong-password': 'Incorrect password.',
          'auth/too-many-requests': 'Too many attempts. Try again later.',
          'auth/weak-password': 'Password is too weak (use at least 6 characters).',
          'auth/email-already-in-use': 'That email is already in use.',
          'auth/missing-email': 'Enter your email address first.',
          'auth/missing-password': 'Enter your password first.'
        };
        return map[code] || (e && e.message  e.message : 'Could not sign in. Please try again.');
      }

      function updateModeUi(){
        if (mode === 'signup') {
          emailBtn.textContent = 'Create Account';
          toggleModeBtn.textContent = 'Back to Sign In';
          passInput.autocomplete = 'new-password';
        } else {
          emailBtn.textContent = 'Sign In';
          toggleModeBtn.textContent = 'Create Account';
          passInput.autocomplete = 'current-password';
        }
      }
      updateModeUi();

      toggleModeBtn.addEventListener('click', function(){
        mode = (mode === 'signin')  'signup' : 'signin';
        setEmailErr('');
        updateModeUi();
      });

      forgotBtn.addEventListener('click', async function(){
        if (!auth) { setEmailErr("Firebase isn't ready yet."); return; }
        setEmailErr('');
        const email = String(emailInput.value || '').trim();
        if (!email) { setEmailErr('Enter your email first, then click "Forgot Password".'); return; }
        forgotBtn.disabled = true;
        try{
          await auth.sendPasswordResetEmail(email);
          setEmailErr('Password reset email sent. Check your inbox.');
        }catch(e){
          console.error(e);
          setEmailErr(mapAuthError(e));
        }finally{
          forgotBtn.disabled = false;
        }
      });

      emailForm.addEventListener('submit', async function(e){
        e.preventDefault();
        if (!auth || !db) { setEmailErr("Firebase isn't ready. Please try again."); return; }
        setEmailErr('');
        emailBtn.disabled = true;
        const email = String(emailInput.value || '').trim();
        const password = String(passInput.value || '');
        try{
          let cred = null;
          if (mode === 'signup') {
            cred = await auth.createUserWithEmailAndPassword(email, password);
            try{
              const u = cred && cred.user;
              if (u && !u.displayName && u.updateProfile) {
                const display = email.split('@')[0] || 'Learner';
                await u.updateProfile({ displayName: display }).catch(()=>{});
              }
            }catch(_){}
          } else {
            cred = await auth.signInWithEmailAndPassword(email, password);
          }
          const user = cred && cred.user;
          if (!user) throw new Error('Sign-in failed. Please try again.');
          await ensureUserDoc(user);
          window.location.href = 'language-home.html';
        }catch(err){
          console.error(err);
          setEmailErr(mapAuthError(err));
        }finally{
          emailBtn.disabled = false;
        }
      });

    });
  