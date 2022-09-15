let data = {
  name: "project1",
  isFolder: true,
  items: [
    {
      name: "node_modules",
      isFolder: true,
      items: [
        {
          name: "bootstrap",
          isFolder: true,
          items: [{ name: "bootstrap.min.css", isFolder: false }],
        },
      ],
    },
    {
      name: "public",
      isFolder: true,
      items: [
        { name: "index.html", isFolder: false },
        { name: "manifest.json", isFolder: false },
        { name: "favicon.ico", isFolder: false },
      ],
    },
    {
      name: "src",
      isFolder: true,
      items: [
        { name: "App.js", isFolder: false },
        { name: "App.css", isFolder: false },
        { name: "index.js", isFolder: false },
        { name: "index.css", isFolder: false },
      ],
    },
    {
      name: "package.json",
      isFolder: false,
    },
    {
      name: "package-lock.json",
      isFolder: false,
    },
  ],
};
let showFile = function (data) {
  document.write(data.name);
};
let showFolder = function (data) {
  if (data.isFolder) {
    let items = data.items;
    for (const item of items) {
      showFolder(item);
    }
  } else {
    showFile(data);
  }
};
showFolder(data);
