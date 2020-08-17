
const main = async () => {
  //callback("callback")
  const a = 10;
  const b = await testQuery() // b = 100500
  testResult(a + b); // 100510 -> console
}

main()
