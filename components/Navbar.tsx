import React from 'react'
import { Box } from 'lucide-react'
import Button from './ui/Button';
import { useOutletContext } from 'react-router';

const Navbar = () => {
    const{ isSignedIn, userName, signIn , signOut  } = useOutletContext<AuthContext>();
    const handleAuthClick = async () => {
      if(isSignedIn){
        try{
          await signOut();
        }
        catch(error){

        }
        return;
      }
    
      try{
        await signIn();
      }
      catch(error){
     console.error("Error during sign in:", error);
      }

    };

  return (
   <header className='navbar'>
    <nav className='inner'>
        <div className='left'>
            <div className='brand'>
             <Box className='logo' />
                <span className='name'>Roomify</span>
            </div>
            <ul className='links'>
               <a href='#'>products</a>
               <a href='#'>pricing</a>
               <a href='#'>community</a>
               <a href='#'>Enterprise</a>
            </ul>
        </div>
        <div className='actions'>
           { isSignedIn ?(
              <>
              <span className='greeting'>
                {userName ? `hi , ${userName}` : 'signed in' }

              </span>
              <Button size="sm" onClick={handleAuthClick} className='btn'>
                Log out
              </Button>
              </>
                     ) : (
            <> 
             <Button onClick={handleAuthClick} size="sm" variant="ghost">
             Log In
             </Button>
             <a href='#upload' className='cta'>
          get started
         </a>
            </>
           ) } 
        
         
        </div>
    </nav>
  </header>
  )
}

export default Navbar
