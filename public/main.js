let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  if (n !== 3) {
    request.open("GET", `/page${n + 1}`);
    request.onreadystatechange = () => {
      if (
        request.readyState === 4 &&
        request.status >= 200 &&
        request.status < 300
      ) {
        const array = JSON.parse(request.response);
        array.forEach((element) => {
          const li = document.createElement("li");
          li.textContent = element.id;
          xxx.appendChild(li);
        });
        n += 1;
      }
    };
    request.send();
  } else {
    const li = document.createElement("li");
    li.textContent = "没有更多内容了";
    xxx.appendChild(li);
  }
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "./5.json");
  request.onreadystatechange = () => {
    if (
      request.readyState === 4 &&
      request.status >= 200 &&
      request.status < 300
    ) {
      console.log(request.response);
      const obj = JSON.parse(request.response);
      console.log(obj);
      userName.textContent = obj.name;
    }
  };
  request.send();
};

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "./4.xml");
  request.onreadystatechange = () => {
    if (
      request.readyState === 4 &&
      request.status >= 200 &&
      request.status < 300
    ) {
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text.trim());
    }
  };
  request.send();
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "./3.html");
  request.onload = () => {
    const div = document.createElement("div");
    div.innerHTML = request.response;
    document.body.appendChild(div);
  };
  request.onerror = () => {
    console.log("请求html失败");
  };
  request.send();
};

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "./2.js");
  request.onload = () => {
    // 创建 script 标签
    const script = document.createElement("script");
    // 填写 script 内容
    script.innerHTML = request.response;
    // 把 script 插到 body 里
    document.body.appendChild(script);
  };
  request.onerror = () => {
    console.log("请求js失败");
  };
  request.send();
};

getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "./style.css");
  request.onreadystatechange = () => {
    //下载完成，但不知道是下载成功还是下载失败
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        // 创建 style 标签
        const style = document.createElement("style");
        // 填写 style 内容
        style.innerHTML = request.response;
        // 把 style 插到 head 里
        document.head.appendChild(style);
      } else {
        console.log("请求css失败");
      }
    }
  };
  request.send();
};
