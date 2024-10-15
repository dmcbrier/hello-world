// login.tsx

import { login, signup } from './actions';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

function LoginPage() {
  return (
    <div>
      <Navbar />
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password"   
 required />
        <button   
 formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
      </form>
      <Footer />
    </div>
  );
}

export default LoginPage;




//old page
// import { login, signup } from './actions'    // import login

// export default function LoginPage() {
//   return (
//     <form>
//       <label htmlFor="email">Email:</label>
//       <input id="email" name="email" type="email" required />
//       <label htmlFor="password">Password:</label>
//       <input id="password" name="password" type="password" required />
//       <button formAction={login}>Log in</button>
//       <button formAction={signup}>Sign up</button>
//     </form>
//   )
// }

