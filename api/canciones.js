module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ ok: false, error: 'Método no permitido.' });
  }

  const gasUrl =
    'https://script.google.com/macros/s/AKfycbx8MetR2OyzDSAQTl8y98q-RZurr7SfU8AzmCmb0e8BtIJYx0dzVet6RyHr84bcT66qfA/exec';

  try {
    const url = new URL(gasUrl);
    url.searchParams.set('api', '1');
    const upstream = await fetch(url, { redirect: 'follow', cache: 'no-store' });
    const data = await upstream.json();
    return res.status(upstream.ok ? 200 : upstream.status).json(data);
  } catch (error) {
    return res.status(502).json({ ok: false, error: 'No se pudo consultar Apps Script: ' + error.message });
  }
};
