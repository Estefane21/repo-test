// esse app.js vai ser chamado no index, e como excluimos tudo, precisamos criar de novo. 
// a primeria coisa que devemos fazesr e importar o react 

import React from 'react';
    import Welcome from './componentes/Welcome/index.js';

function App(){
    return( 
    
        <Welcome/>   
    );
}
export default App;