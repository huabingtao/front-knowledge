function MyPromise(fn) {
  this.value = null;
  this.eason = null;
  this.status = 'peeding';
  self = this;
  function resolve(value) {
    if (self.status === 'peeding') {
      self.status = 'fulfilled';
      self.value = value;
    }
  }
  function reject(reason) {
    if (self.status === 'peeding') {
      self.status = 'rejected';
      self.reason = reason;
    }
  }
  try {
    fn(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  let self = this;
  switch (self.status) {
    case 'fulfilled':
      onFulfilled(self.value);
      break;
    case 'rejected':
      onRejected(self.reason);
      break;
  }
};
