if (typeof listOfLinks === 'undefined') {
const listOfLinks = [
	"Homepage",
	"Projects",
	"Articles",
	"Contact"
];};

const menuEle = document.querySelector("menu");
if (menuEle && typeof listOfLinks !== 'undefined') {
	listOfLinks.forEach((i) => {
		const linkEle = document.createElement("a");
		linkEle.href = "./" + i + ".html";
		if(i === "Homepage") { linkEle.href = "/";}
		const listEle = document.createElement("li");
		listEle.innerHTML = i;
		menuEle.appendChild(linkEle);
	});
}
