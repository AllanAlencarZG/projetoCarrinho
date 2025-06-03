import React from 'react';
import Rotas from './routes';
import { AuthProvider } from './contexts/Auth';
import { DataProvider } from './contexts/Data';

export default function App() {
    return (
        <AuthProvider>
            <DataProvider>
                <Rotas/>
            </DataProvider>
        </AuthProvider>
            
    );
}