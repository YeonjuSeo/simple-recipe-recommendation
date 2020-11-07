fetch("https://www.data.go.kr/data/15057205/openapi.do")
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Fetch Error", err);
  });
