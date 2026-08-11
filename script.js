fetch("/site/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
});

fetch("/site/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
});

fetch("/site/sitenotice.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("notice").innerHTML = data;
});