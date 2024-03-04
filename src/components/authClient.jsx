import React, { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    'https://xxaphohtmaresrxqctzi.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4YXBob2h0bWFyZXNyeHFjdHppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkwOTM2NzksImV4cCI6MjAyNDY2OTY3OX0.yeMPTa56LptAxgkf7COWqAR6GN2mYGMFjrONNSiVYpc'
    );
export const checkSession = () => {
    return supabase.auth.session();
};


export const supabaseAuthListener = (callback) => { 
    return supabase.auth.onAuthStateChange((event, session) => {
        callback(event, session);
    });
};