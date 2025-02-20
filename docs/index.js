const navList = [
	"Homepage",
	"Projects",
	"Articles",
	"Contact"
]

const menuEle = document.querySelector("menu");
if (menuEle) {
	navList.forEach((i) => {
		const linkEle = document.createElement("a");
		linkEle.href = "./" + i + ".html";
		if(i === "Homepage") { linkEle.href = "/";}
		const listEle = document.createElement("li");
		listEle.innerHTML = i;
		menuEle.appendChild(linkEle);
	});
}