import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import logo from '../../assets/logo-expanded-dourado.svg';
import Footer from '../Footer'

import { formatPrice } from '../../util/format';

import {
  Container,
  SubmitButton,
  Content,
  FirstContent,
  SecondContent,
  Header,
  Form,
  Results,
} from './styles';

export default class Main extends Component {
  state = {
    from: '',
    destination: '',
    time: '',
    service: '',
    pricewFaleMais: '',
    pricewoFaleMais: '',
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await api.post('/', {
      from: this.state.from,
      destination: this.state.destination,
      time: this.state.time,
      service: this.state.service,
    });

    const { pricewFaleMais, pricewoFaleMais } = response.data;

    this.setState({
      pricewFaleMais,
      pricewoFaleMais,
    });
  };

  render() {
    const data = {
      place: ['', '011', '016', '017', '018'],
      service: ['', 'FaleMais 30', 'FaleMais 60', 'FaleMais 120'],
    };

    return (
      <>
        <Header>
          <Link to="/">
            <img src={logo} alt="FaleMais" width={350} />
          </Link>
        </Header>

        <Container>
          <Content>
            <FirstContent>
              <h2> Conheça o FaleMais da VxTel</h2>
              <p>Compare o custo de suas ligações</p>
            </FirstContent>
            <SecondContent>
              <Form onSubmit={this.handleSubmit}>
                <label>Origem: </label>
                <select
                  onChange={e => {
                    this.setState({ from: e.target.value });
                  }}
                >
                  {data.place.map((from, id) => {
                    return <option key={id}>{from}</option>;
                  })}
                </select>

                <label>Destino: </label>
                <select
                  onChange={e => {
                    this.setState({ destination: e.target.value });
                  }}
                >
                  {data.place.map((to, id) => {
                    return <option key={id}>{to}</option>;
                  })}
                </select>

                <label>Plano: </label>
                <select
                  onChange={e => {
                    this.setState({ service: e.target.value });
                  }}
                >
                  {data.service.map((service, id) => {
                    return <option key={id}>{service}</option>;
                  })}
                </select>

                <label>Tempo: </label>
                <input
                  type="text"
                  placeholder=" Quantos minutos?"
                  value={this.state.time}
                  onChange={e => {
                    this.setState({ time: e.target.value });
                  }}
                />
              </Form>
              <SubmitButton onClick={this.handleSubmit}>Calcular</SubmitButton>
            </SecondContent>
          </Content>
        </Container>
        <Results>
          <h2>
            <span>
              FaleMaiS
            </span>
            : {formatPrice(this.state.pricewFaleMais)}
          </h2>
          <h2>Concorrência: {formatPrice(this.state.pricewoFaleMais)}</h2>
        </Results>
        <Footer />
      </>
    );
  }
}
