// apps/frontend/src/hooks/use-auth.ts (CREATE THIS FILE)

import { useContext } from 'react';
import { AuthContextType } from '../contexts/AuthContext'; // Assuming AuthContextType is exported

// Re-export the custom hook from the context file
// NOTE: We assume AuthContext.tsx exports the type and a function 
//       that provides the context value, or we import and use it here.

// Since the useAuth function is defined in AuthContext.tsx, we must re-export it.
// If your AuthContext.tsx *doesn't* export useAuth, let me know. 
// Assuming for now it's defined and exported there, or you can copy the function:

import { AuthContext } from '../contexts/AuthContext'; 

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context as AuthContextType;
};