import React from 'react';
import Navbar from './components/Navbar';
import Chat from './components/Chat';
import Navbr from '../Navbar/Navbar';

import { auth } from '../firebaseee';
import { useAuthState } from 'react-firebase-hooks/auth';


const style = {
  appContainer: `max-w-[728px] mx-auto text-center `,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
};

export function ChatT() {
  const [user] = useAuthState(auth);
  //  console.log(user)
  return (
    <>
      <Navbr />
      <div className=" bg-center mt-20">
        <div className={style.appContainer}>
          <section className='{style.sectionContainer}'>
            {/* Navbar */}
            <Navbar />
            {user ? <Chat /> : null}
          </section>
        </div>
      </div>
    </>

  );
}
export default ChatT

