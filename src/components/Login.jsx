import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    'https://xxaphohtmaresrxqctzi.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4YXBob2h0bWFyZXNyeHFjdHppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkwOTM2NzksImV4cCI6MjAyNDY2OTY3OX0.yeMPTa56LptAxgkf7COWqAR6GN2mYGMFjrONNSiVYpc'
    );

     
const Login = () => (
    <>
    <h2>Welcome to AdVitals</h2>
    <p>Log in to to your account or sign in with Google</p>
    <Auth
    supabaseClient={supabase}
    theme="default" // can also be "dark" or "evenDarker"
    providers={['google']}
    appearance={{ 
        theme: ThemeSupa,
        extend: true, // This will override the default theme
        classNames: {
            button: 'login-form-button',
            input: 'login-form-input'
        },
    
    }}
  />
    </>
)

export default Login;