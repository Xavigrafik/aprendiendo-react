    https://es.react.dev/reference/react

# COMPONENTES:


### IMPORTAR COMO UN MÓDULO PREDETERMINADO (DEFAULT):

components/NombreComponente.jsx :
```javascript
export default function NombreComponente() {
    return ( ... )
}
```

projects/00-xavi-react/src/App.jsx:
```javascript
import NombreComponente from './components/NombreComponente.jsx';
```

<br>
<br>

### IMPORTAR COMO UNA FUNCIÓN NOMBRADA:

components/NombreComponente.jsx :
```javascript
export default function NombreComponente() {
    return ( ... )
}
```

projects/00-xavi-react/src/App.jsx :
```javascript 
import { NombreComponente } from './components/NombreComponente.jsx';
```
