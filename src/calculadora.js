import React, {useState} from 'react';
import './calculadora.css';
import {Jumbotron, Container, Row, Col, Button, Form 
} from 'react-bootstrap';


function Calculadora() {

  /*Desmembramento de retorno. O useState retorna 2 valores para nós
    o valor em sí e um metodo para atualizar o valor desse estado.
    O use state irá passar o valor retornado para txtTela e o metodo 
    será jogado na variavel settxtTela.
    E passando 0 para o useState estou inicializando a variavel 
    txtTela com 0.
    */
  const [txtNumeros, setTxtNumeros] = useState('0');

  function adicionarNumeros(numeros){
    setTxtNumeros(txtNumeros + numeros);
  }

  function limparTela(){
    setTxtNumeros('0');
  }

  function definirOperacao(operacao){
    
  }



  return (
  /*Jumbotron Um componente leve e flexível que pode opcionalmente 
    estender toda a janela de visualização para mostrar o conteúdo 
    principal do seu site.
    Necessário importa-lo: import Jumbotron from 'react-bootstrap/Jumbotron' 
    Name	      Type	          Default	        Description
    as	        elementType     <div>	          Você pode usar um tipo de elemento personalizado para este componente.
    fluid	      boolean         false	          Faça o jumbotron com a largura total e sem cantos arredondados
    bsPrefix	  string          'jumbotron'	    Altere o nome da classe base CSS do componente subjacente e o prefixo dos nomes da classe do modificador. Esta é uma saída de emergência para trabalhar com CSS de bootstrap altamente customizado.
    Foi usada a propriedade style para podermos configurar padding, margin,
    largura. Dentro do Jumbotron, colocamos um container e dentro desse 
    container colocarmos Rows e Cols.
    */
    <Jumbotron style={{
      background: 'transparent !impotant',
      backgroundColor: '#007bff',
      padding: '5px',
      margin: '5px',
      width: '400px',
      
    }}>
      <Container>
        <Row>
          <Col xs='3'>
            <Button variant="danger"
            onClick={()=> limparTela()}>C</Button>
          </Col>
          {/*Foi utilizado Form para colocar o input da tela, somente no CSS 
          será referenciado como input*/}
          <Col xs='9'>
            <Form.Control 
              type="text" 
              name="txtTela"
              className="text-right"
              readOnly="readOnly"
              value={txtNumeros} 
              />
          </Col>
        </Row>

        <Row>
          <Col xs='3'>
            <Button variant="light"
            onClick={()=> adicionarNumeros('7')}>7</Button>
          </Col>
          <Col xs='3'>
            <Button variant="light"
            onClick={()=> adicionarNumeros('8')}>8</Button>
          </Col>
          <Col xs='3'>
            <Button variant="light"
            onClick={()=> adicionarNumeros('9')}>9</Button>
          </Col>
          <Col xs='3'>
            <Button variant="secondary"
            onClick={()=> definirOperacao('/')}>/</Button>
          </Col>  
        </Row>

        <Row>
          <Col xs='3'>
            <Button variant="light"
            onClick={()=> adicionarNumeros('4')}>4</Button>
          </Col>
          <Col xs='3'>
            <Button variant="light"
            onClick={()=> adicionarNumeros('5')}>5</Button>
          </Col>
          <Col xs='3'>
            <Button variant="light"
            onClick={()=> adicionarNumeros('6')}>6</Button>
          </Col>
          <Col xs='3'>
            <Button variant="secondary"
            onClick={()=> definirOperacao('*')}>X</Button>
          </Col>
        </Row>

        <Row>
          <Col xs='3'>
            <Button variant="light"
            onClick={()=> adicionarNumeros('1')}>1</Button>
          </Col>
          <Col xs='3'>
            <Button variant="light"
            onClick={()=> adicionarNumeros('2')}>2</Button>
          </Col>
          <Col xs='3'>
            <Button variant="light"
            onClick={()=> adicionarNumeros('3')}>3</Button>
          </Col>
          <Col xs='3'>
            <Button variant="secondary"
            onClick={()=> definirOperacao('-')}>-</Button>
          </Col>
        </Row>

        <Row>
          <Col xs='3'>
            <Button variant="light"
            onClick={()=> adicionarNumeros('0')}>0</Button>
          </Col>
          <Col xs='3'>
            <Button variant="light"
            onClick={()=> adicionarNumeros('.')}>.</Button>
          </Col>
          <Col xs='3'>
            <Button variant="secondary">=</Button>
          </Col>
          <Col xs='3'>
            <Button variant="secondary" 
            onClick={()=> definirOperacao('-')}>+</Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Calculadora;
