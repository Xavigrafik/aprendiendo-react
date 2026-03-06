import './styles/main.css'
import  './components/atoms/a-button'
document.querySelector('#app').innerHTML = `
  <div>
  <h3>primary</h3>
    <a-button variant="primary" size="sm">Btn primary sm</a-button>    
    <a-button variant="primary">Btn primary</a-button>    
    <a-button variant="primary" size="lg">Btn primary lg</a-button>
    <h3>primary ondark</h3>
    <a-button ondark variant="primary" size="sm">Btn primary sm</a-button>    
    <a-button ondark variant="primary">Btn primary</a-button>    
    <a-button ondark variant="primary" size="lg">Btn primary lg</a-button>
    <hr/>
    <h3>secondary</h3>
    <a-button variant="secondary" size="sm">Btn secondary sm</a-button>    
    <a-button variant="secondary">Btn secondary</a-button>    
    <a-button variant="secondary" size="lg">Btn secondary lg</a-button>
    <hr/>
    <a-button disabled>Btn disabled</a-button>    

  
  </div>
`

setupCounter(document.querySelector('#counter'))
