const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

const sect = document.querySelector("section");

const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride, athough it was short.";

const text = document.createTextNode( " - the premier source for web development knowledge.")

const linkPara = document.querySelector("p");
linkPara.appendChild(text);

sect.appendChild(para);