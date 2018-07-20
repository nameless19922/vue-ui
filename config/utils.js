const path = require("path");
const { readdirSync } = require('fs');

function findLoaders(rules, loader, cb) {
  const result = rules.find(item => item.loader === loader);

  if (typeof cb === 'function') {
    return cb(typeof result !== 'undefined' ? result : null);
  }

  return result;
}

function modifyLoaders(rules, cbs) {
  for (const item of rules) {
    const cb = cbs[item.loader]

    if (typeof cb === 'function') {
      cb(item);
    }

    delete cbs[item.loader];
  }
}

function getFilesFromDir(dir, ext) {
  return readdirSync(path.resolve(dir)).reduce((filtered, item) => {
    if (item.match(ext)) {
      filtered.push(item.replace(/\.[^/.]+$/, ''));
    }

    return filtered;
  }, []);
}

function markClientPlugins(plugins, clientList) {
  return plugins.map((item) => {
    let isClient = false;

    if (clientList.length) {
      const index = clientList.indexOf(item);

      isClient = index !== -1;

      if (isClient) {
        clientList = clientList.slice(index, 1);
      }
    }

    return { src: `~/plugins/${item}`, ssr: !isClient };
  })
}

module.exports = {
  modifyLoaders,
  findLoaders,
  getFilesFromDir,
  markClientPlugins
};