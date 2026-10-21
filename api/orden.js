module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Método no permitido.' });
  }

  const gasUrl =
    'https://script.google.com/macros/s/AKfycbx8MetR2OyzDSAQTl8y98q-RZurr7SfU8AzmCmb0e8BtIJYx0dzVet6RyHr84bcT66qfA/exec';

  try {
    const upstream = await fetch(gasUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body || {}),
      redirect: 'follow',
      cache: 'no-store'
    });
    const data = await upstream.json();
    return res.status(upstream.ok && data.ok ? 200 : 400).json(data);
  } catch (error) {
    return res.status(502).json({ ok: false, error: 'No se pudo actualizar el orden: ' + error.message });
  }
};
