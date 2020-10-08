import request from 'supertest';
import app from '../src/app';

test('it should return pricewFaleMais equals to 0.00 and pricewoFaleMais equals to 38.00 ', async () => {
  let response = await request(app)
    .post('/')
    .send({
      from: '011',
      destination: '016',
      time: 20,
      service: 'FaleMais 30',
    });
  expect(response.body).toMatchObject({
    pricewFaleMais: '0.00',
    pricewoFaleMais: '38.00',
  });
});

test('it should return pricewFaleMais equals to 37.40 and pricewoFaleMais equals to 136.00', async () => {
  let response = await request(app)
    .post('/')
    .send({
      from: '011',
      destination: '017',
      time: 80,
      service: 'FaleMais 60',
    });
  expect(response.body).toMatchObject({
    pricewFaleMais: '37.40',
    pricewoFaleMais: '136.00',
  });
});

test('it should return pricewFaleMais equals to 19.80 and pricewoFaleMais equals to 72.00', async () => {
  let response = await request(app)
    .post('/')
    .send({
      from: '011',
      destination: '018',
      time: 80,
      service: 'FaleMais 60',
    });
  expect(response.body).toMatchObject({
    pricewFaleMais: '19.80',
    pricewoFaleMais: '72.00',
  });
});
test('it should return pricewFaleMais equals to 167.20 and pricewoFaleMais equals to 380.00', async () => {
  let response = await request(app)
    .post('/')
    .send({
      from: '018',
      destination: '011',
      time: 200,
      service: 'FaleMais 120',
    });
  expect(response.body).toMatchObject({
    pricewFaleMais: '167.20',
    pricewoFaleMais: '380.00',
  });
});
test('it should return pricewFaleMais equals to 89.10 and pricewoFaleMais equals to 405.00', async () => {
  let response = await request(app)
    .post('/')
    .send({
      from: '017',
      destination: '011',
      time: 150,
      service: 'FaleMais 120',
    });
  expect(response.body).toMatchObject({
    pricewFaleMais: '89.10',
    pricewoFaleMais: '405.00',
  });
});

test('it should return pricewFaleMais equals to 63.80 and pricewoFaleMais equals to 145.00', async () => {
  let response = await request(app)
    .post('/')
    .send({
      from: '016',
      destination: '011',
      time: 50,
      service: 'FaleMais 30',
    });
  expect(response.body).toMatchObject({
    pricewFaleMais: '63.80',
    pricewoFaleMais: '145.00',
  });
});

test('it should return pricewFaleMais equals to 0.00 and pricewoFaleMais equals to 0.00', async () => {
  let response = await request(app)
    .post('/')
    .send({
      from: '018',
      destination: '017',
      time: 100,
      service: 'FaleMais 120',
    });
  expect(response.body).toMatchObject({
    pricewFaleMais: '0.00',
    pricewoFaleMais: '0.00',
  });
});

test('it should return pricewFaleMais equals to 0.00 and pricewoFaleMais equals to 0.00', async () => {
  let response = await request(app)
    .post('/')
    .send({
      from: '018',
      destination: '016',
      time: 100,
      service: 'FaleMais 120',
    });
  expect(response.body).toMatchObject({
    pricewFaleMais: '0.00',
    pricewoFaleMais: '0.00',
  });
});
