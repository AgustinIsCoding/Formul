try {
  console.log('Hola mundo!');

  console.log(hola);

  setInterval(() => {
    console.log('Soy un intervalo de tiempo')
  }, 5000)

  console.log('Soy un programador feliz aprendiendo node')
} catch (e) {
  console.log(`hubo un error y el error es: ${e.message}`);
}
