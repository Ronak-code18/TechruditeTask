const Strings = Object.freeze({
  plie: 'Plie',
  email: 'Email',
  password: 'Password',
  forgotPassword: 'Forgot Password?',
  signIn: 'Sign In',
  notMember: 'Not a member?',
  signupFree: 'Sign Up Free',
  orSignInWith: 'Or Sign In With',
  guest: 'Enter as guest',
  search: 'Search',
  events: 'Events',
  favorites: 'Favorites',
  profile: 'Profile',
  helloRenzo: 'Hello Renzo!',
  areYouReady: 'Are you ready to dance?',
  logout: 'Logout',
});

const Routes = Object.freeze({
  login: 'Login',
  events: 'Events',
  favorites: 'Favorites',
  profile: 'Profile',
  search: 'Search',
  authNavigation: 'AuthNavigation',
  tabNavigation: 'TabNavigation',
});

const Validation = Object.freeze({
  emailRequire: 'Email is required',
  emailInvalid: 'Invalid email address',
  passwordRequire: 'Password is required',
  passwordInvalid: 'Invalid password',
});

const Placeholders = Object.freeze({
  email: 'email@gmail.com',
  password: 'password',
});

const FormikNames = Object.freeze({
  email: 'email',
  password: 'password',
});

const EndPoints = Object.freeze({
  loginUser: 'login',
  eventsListing: 'events-listing',
});

const BaseURL = 'http://3.7.81.243/projects/plie-api/public/api/';

export {
  BaseURL,
  EndPoints,
  FormikNames,
  Placeholders,
  Routes,
  Strings,
  Validation,
};
