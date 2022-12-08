// document.addEventListener("mouseover", (event) => {
//     if (
//       event.ctrlKey &&
//       event.target.ownerDocument.URL.indexOf("popup.html") === -1
//     ) {
     

//       const element = event.target;
//       element.style.boxShadow = "0 0 0 2px #00a0d2";
//     }
//   });

//   document.addEventListener("mouseout", (event) => {
//     const element = event.target;

//     element.style.boxShadow = "";
//   });

//   function xpath(el) {
//     if (typeof el == "string")
//       return document.evaluate(el, document, null, 0, null);
//     if (!el || el.nodeType != 1) return "";
//     //if (el.id) return "//*[@id='" + el.id + "']"
//     if (el.parentNode == null) return "/${el.tagName}/";
//     let sames = [].filter.call(el.parentNode.children, function (x) {
//       return x.tagName == el.tagName;
//     });
//     return (
//       xpath(el.parentNode) +
//       "/" +
//       el.tagName.toLowerCase() +
//       (sames.length > 1 ? "[" + ([].indexOf.call(sames, el) + 1) + "]" : "")
//     );
//   }