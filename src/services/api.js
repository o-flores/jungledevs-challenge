async function signNewsletter(name, email) {
  const myHeaders = new Headers();
  myHeaders.append('accept', 'application/json');
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    email,
    name,
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
  };

  try {
    const response = await fetch('https://api.jungledevs.com/api/v1/challenge-newsletter/', requestOptions);
    const data = await response.json();
    console.log(data);
    return 'ok';
  } catch (error) {
    console.log(error);
    return error;
  }
}

export default signNewsletter;
