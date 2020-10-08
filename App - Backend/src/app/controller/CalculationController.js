class Calculation {
  async store(req, res) {
    const { from, destination, time, service } = req.body;

    const pricePerMinute = (origin, to) => {
      if (origin === '011' && to === '016') return 1.9;
      if (origin === '016' && to === '011') return 2.9;
      if (origin === '011' && to === '017') return 1.7;
      if (origin === '017' && to === '011') return 2.7;
      if (origin === '011' && to === '018') return 0.9;
      if (origin === '018' && to === '011') return 1.9;
      return 0;
    };

    const woFaleMais = pricePerMinute(from, destination) * time;

    let withFaleMais = () => {
      let fare = 0;
      if (service === 'FaleMais 30') fare = 30;
      else if (service === 'FaleMais 60') fare = 60;
      else if (service === 'FaleMais 120') fare = 120;
      else fare = 0;

      if (time <= fare) withFaleMais = 0;
      else {
        withFaleMais =
          (time - fare) *
          (pricePerMinute(from, destination) +
            0.1 * pricePerMinute(from, destination));
      }
      return withFaleMais;
    };

    const pricewFaleMais = withFaleMais().toFixed(2);
    const pricewoFaleMais = woFaleMais.toFixed(2);

    if (from) return res.status(200).json({ pricewFaleMais, pricewoFaleMais });

    return 1;
  }
}

export default new Calculation();
