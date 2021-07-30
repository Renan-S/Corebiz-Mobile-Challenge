const typedGlobal = global as any;

const LoadingUtil = {
  timerLoading: 0,
  showLoading(timeOut = 10000) {
    typedGlobal.mLoadingComponentRef &&
      typedGlobal.mLoadingComponentRef.showLoading();
    this.timerLoading = +setTimeout(() => {
      this.dismissLoading();
    }, timeOut);
  },
  dismissLoading() {
    typedGlobal.mLoadingComponentRef &&
      typedGlobal.mLoadingComponentRef.dismissLoading();
    this.timerLoading && clearTimeout(this.timerLoading);
  },
};

export default LoadingUtil;
