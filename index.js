
var SCDiffSyncServer = function (options) {

};

module.exports.SCDiffSyncServer = SCDiffSyncServer;

module.exports.attach = function (worker, options) {
  if (options) {
    options.worker = worker;
  } else {
    options = {worker: worker};
  }
  return new SCDiffSyncServer(options);
};
